//--------------基础信息定义--------------
const pluginName = 'WirelessFunnel';
const pluginDescribe = '无线漏斗';
const pluginVersion = [0, 0, 3];
const pluginOther = { "开源地址": "https://github.com/FBQingYi/LLSE/blob/main/WirelessFunnel.js" };
const path = './plugins/WirelessFunnel/';

if (!File.exists(path)) {
    File.writeTo(path + 'config.json', JSON.stringify({ "hold": "minecraft:stick", "distance": 8 }, null, "\t"));
}
if (!File.exists(path + 'data')) {
    File.writeTo(path + 'data/data.json', JSON.stringify({}, null, "\t"));
}

i18n.load(path + "language/language.json", "zh_CN", {
    "zh_CN": {
        "PluginsName": "无线漏斗",
        "Msg_tips_1": "请在2分钟内使用木棍链接！",
        "Msg_tips_2": "已退出链接模式！",
        "Msg_tips_3": "你处于链接模式中！",
        "Msg_tips_4": "点1已记录",
        "Msg_tips_5": "链接成功",
        "Msg_tips_6": "已退出链接模式！",
        "Msg_tips_7": "链接失败，距离过长！\n已退出链接模式！",
        "Msg_tips_8": "{0} 处漏斗被摧毁，无线漏斗链接已移除！"
    },
    "en": {
        "PluginsName": "Wireless funnel",
        "Msg_tips_1": "Please use the stick link within 2 minutes!",
        "Msg_tips_2": "Link mode exited!",
        "Msg_tips_3": "You are in link mode!",
        "Msg_tips_4": "Point 1 recorded",
        "Msg_tips_5": "Link succeeded",
        "Msg_tips_6": "Link mode exited!",
        "Msg_tips_7": "Link failed, the distance is too long! \n Link mode exited!",
        "Msg_tips_8": "The funnel at {0} has been destroyed, and the wireless funnel link has been removed!"
    }
});


let configJson = JSON.parse(File.readFrom(path + 'config.json'));
if (configJson.data != undefined) {
    let data = configJson.data;
    File.writeTo(path + 'data/data.json', JSON.stringify(data, null, "\t"));
    delete configJson.data;
    File.writeTo(path + 'config.json', JSON.stringify(configJson, null, "\t"));
}
let dataJson = JSON.parse(File.readFrom(path + 'data/data.json'));
let hotSpot = {};
let MRrestrictions = {};
let linkStatus = {};

/**
 * 服务器启动完成监听.
 * 目前用于读取数据库和基础配置文件.
 */
mc.listen("onServerStarted", () => {
    let Command = mc.newCommand("wf", i18n.get("PluginsName", ll.language), PermType.Any);
    Command.overload([]);
    Command.setCallback((_cmd, origin, _output, _results) => {
        let player = origin.player;
        if (linkStatus[player.xuid] == undefined || !linkStatus[player.xuid]) {
            linkStatus[player.xuid] = true;
            player.tell(i18n.get("Msg_tips_1", player.langCode));
            setTimeout(() => {
                if (linkStatus[player.xuid]) {
                    linkStatus[player.xuid] = false;
                    player.tell(i18n.get("Msg_tips_2", player.langCode));
                }
            }, 1000 * 60 * 2);
        } else {
            player.tell(i18n.get("Msg_tips_3", player.langCode));
        }

    });
    Command.setup();
});

mc.listen("onHopperSearchItem", (pos) => {
    if (JSON.stringify(dataJson) != "{}") {
        let posList = Object.keys(dataJson);
        pos = `${parseInt(pos.x)},${parseInt(pos.y)},${parseInt(pos.z)},${pos.dimid}`;
        posList.forEach(cPos => {
            let p = cPos.split(',');
            if (pos == cPos) {
                setTimeout(() => {
                    let block = mc.getBlock(parseInt(p[0]), parseInt(p[1]), parseInt(p[2]), parseInt(p[3]));
                    if (block != undefined) {
                        let p1 = dataJson[cPos].point.split(',');
                        let block2 = mc.getBlock(parseInt(p1[0]), parseInt(p1[1]), parseInt(p1[2]), parseInt(p1[3]));
                        let Block1Container = block.getContainer();
                        let ctList = Block1Container.getAllItems();
                        if (block2.hasContainer()) {
                            let Block2Container = block2.getContainer();
                            for (let i = 0; i < ctList.length; i++) {
                                let item = ctList[i];
                                if (item.name != "") {
                                    if (Block2Container.hasRoomFor(item)) {
                                        if (Block2Container.addItem(item)) {
                                            Block1Container.removeItem(i, item.count);
                                            let posList = dataJson[cPos].CoordinateChain;
                                            posList.forEach(cPosList => {
                                                mc.spawnParticle(cPosList.x, cPosList.y, cPosList.z, 0, "minecraft:eyeofender_death_explode_particle")
                                            })
                                        }
                                        return false;
                                    }
                                }
                            }
                        }
                        return false;
                    }
                }, 500);

            }
        });
    }
})

mc.listen("onUseItemOn", (player, item, block, _side) => {
    if (MRrestrictions[player] == undefined && linkStatus[player.xuid]) {
        MRrestrictions[player] = false;
        setTimeout(() => {
            delete MRrestrictions[player];
        }, 1000);
        if (item.type == configJson.hold && block.pos.dimid == 0) {
            if (block.type == "minecraft:hopper") {
                let pos = block.pos;
                if (hotSpot[player.xuid] == undefined) {
                    hotSpot[player.xuid] = {}
                    hotSpot[player.xuid].Point1 = `${parseInt(pos.x)},${parseInt(pos.y)},${parseInt(pos.z)},${pos.dimid}`;
                    player.tell(i18n.get("Msg_tips_4", player.langCode));

                } else {
                    let BeforeSegmentation = hotSpot[player.xuid].Point1.split(',');
                    let distance = synthesize.QingYiLxlEuclideanMetric([parseInt(BeforeSegmentation[0]), parseInt(BeforeSegmentation[1]), parseInt(BeforeSegmentation[2])], [parseInt(pos.x), parseInt(pos.y), parseInt(pos.z)]);
                    if (distance <= configJson["distance"]) {
                        hotSpot[player.xuid].Point2 = `${parseInt(pos.x)},${parseInt(pos.y)},${parseInt(pos.z)},${pos.dimid}`;
                        dataJson[hotSpot[player.xuid].Point1] = {};
                        let TemporaryVariable = dataJson[hotSpot[player.xuid].Point1];
                        let CoordinateChain = synthesize.CoordinateCalculation(parseInt(BeforeSegmentation[0]), parseInt(BeforeSegmentation[1]), parseInt(BeforeSegmentation[2]), parseInt(pos.x), parseInt(pos.y), parseInt(pos.z))
                        TemporaryVariable["point"] = hotSpot[player.xuid].Point2;
                        TemporaryVariable["CoordinateChain"] = CoordinateChain;
                        delete hotSpot[player.xuid];
                        File.writeTo(path + 'config.json', JSON.stringify(configJson, null, "\t"));
                        player.tell(i18n.get("Msg_tips_5", player.langCode));
                        linkStatus[player.xuid] = false;
                        player.tell(i18n.get("Msg_tips_6", player.langCode));
                    } else {
                        linkStatus[player.xuid] = false;
                        delete hotSpot[player.xuid];
                        player.tell(i18n.get("Msg_tips_7", player.langCode));
                    }
                }
                return false;
            }
        }
    }
})

mc.listen("onDestroyBlock", (player, block) => {
    if (block.type == "minecraft:hopper") {
        let pos = block.pos;
        pos = `${parseInt(pos.x)},${parseInt(pos.y)},${parseInt(pos.z)},${pos.dimid}`;
        if (dataJson[pos] != undefined) {
            delete dataJson[pos];
            File.writeTo(path + 'config.json', JSON.stringify(configJson, null, "\t"));
            player.tell(i18n.trl(player.langCode, "Msg_tips_8", pos));
        }
    }
})

/**
 * 综合
 */
const synthesize = {
    /**
     * 获取两个坐标点之间的路径坐标.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @param {Number} x1 
     * @param {Number} y1 
     * @param {Number} z1 
     * @returns 路径集合
     */
    CoordinateCalculation: function (x, y, z, x1, y1, z1) {
        let temporaryData = [];
        let i = 0;
        while (i < 1) {
            if (x != x1 || y != y1 || z != z1) {
                if (x - x1 != 0) {
                    if (x > x1) {
                        x = x - 1;
                    } else {
                        x = x + 1;
                    }
                } else if (y - y1 != 0) {
                    if (y > y1) {
                        y = y - 1;
                    } else {
                        y = y + 1;
                    }
                } else if (z - z1 != 0) {
                    if (z > z1) {
                        z = z - 1;
                    } else {
                        z = z + 1;
                    }
                }
                temporaryData.push({ "x": x, "y": y, "z": z });
            } else {
                i = 1
                return temporaryData;
            }
        }
    },
    /**
     * 获取两个坐标点之间的距离.
     * @param {Pos} posList1 坐标点1
     * @param {Pos} posList2 坐标点2
     * @returns 距离
     */
    QingYiLxlEuclideanMetric: function (posList1, posList2) {
        let x = posList1[0];
        let y = posList1[1];
        let z = posList1[2];
        let playerX = posList2[0];
        let playerY = posList2[1];
        let playerZ = posList2[2];
        let xj, yj, zj;
        if (playerX >= x) {
            xj = (playerX - x) * 2;
        } else {
            xj = (x - playerX) * 2;
        }
        if (playerY >= y) {
            yj = (playerY - y) * 2;
        } else {
            yj = (y - playerY) * 2;
        }
        if (playerZ >= z) {
            zj = (playerZ - z) * 2;
        } else {
            zj = (z - playerZ) * 2;
        }
        let a = xj + yj + zj;
        return Math.sqrt(a);
    }
}

ll.registerPlugin(pluginName, pluginDescribe, pluginVersion, pluginOther);


/**
 * 003
 * 新增语言文件.
 * 适配1.19.63.
 * 更改漏斗监听接口.
 * 修复移除漏斗时出现的错误.
 * 因受到版本更新影响，漏斗只会在吸入物品时工作。直接放入的物品将不再会工作.
 */