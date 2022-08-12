//--------------基础信息定义--------------
const pluginName = 'WirelessFunnel';
const pluginDescribe = '无线漏斗';
const pluginVersion = [0, 0, 1];
const pluginOther = { "开源地址": "https://github.com/FBQingYi/LLSE/blob/main/WirelessFunnel.js" };
const path = './plugins/WirelessFunnel/';

if (!File.exists(path)) {
    File.writeTo(path + 'config.json', JSON.stringify({ "hold": "minecraft:stick", "distance": 8, "data": {} }, null, "\t"));
}

let configJson = JSON.parse(File.readFrom(path + 'config.json'));//读取基础配置文件
let hotSpot = {};
let MRrestrictions = {};
let cmda = {};

mc.regPlayerCmd('wf', '无线漏斗', (player, _args) => {
    if (cmda[player.xuid] == undefined || !cmda[player.xuid]) {
        cmda[player.xuid] = true;
        player.tell('请在2分钟内使用木棍链接！');
        setTimeout(() => {
            if(cmda[player.xuid]){
                cmda[player.xuid] = false;
                player.tell('已退出链接模式！');
            }
        }, 1000 * 60 * 2);
    } else {
        player.tell('你处于链接模式中！');
    }
})

mc.listen("onHopperPushOut", (pos) => {
    if (JSON.stringify(configJson.data) != "{}") {
        let posList = Object.keys(configJson.data);
        pos = `${parseInt(pos.x)},${parseInt(pos.y)},${parseInt(pos.z)},${pos.dimid}`;
        posList.forEach(cPos => {
            let p = cPos.split(',');
            if (pos == cPos) {
                let block = mc.getBlock(parseInt(p[0]), parseInt(p[1]), parseInt(p[2]), parseInt(p[3]));
                if (block != undefined) {
                    let p1 = configJson.data[cPos].point.split(',');
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
                                        let posList = configJson.data[cPos].CoordinateChain;
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
            }
        });
    }
})

mc.listen("onUseItemOn", (player, item, block, _side) => {
    if (MRrestrictions[player] == undefined && cmda[player.xuid]) {
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
                    player.tell('点1已记录');
                } else {
                    let BeforeSegmentation = hotSpot[player.xuid].Point1.split(',');
                    let distance = QingYiLxlEuclideanMetric([parseInt(BeforeSegmentation[0]), parseInt(BeforeSegmentation[1]), parseInt(BeforeSegmentation[2])],[parseInt(pos.x), parseInt(pos.y), parseInt(pos.z)]);
                    if(distance<=configJson["distance"]){
                        hotSpot[player.xuid].Point2 = `${parseInt(pos.x)},${parseInt(pos.y)},${parseInt(pos.z)},${pos.dimid}`;
                        configJson.data[hotSpot[player.xuid].Point1] = {};
                        let TemporaryVariable = configJson.data[hotSpot[player.xuid].Point1];
                        let CoordinateChain = CoordinateCalculation(parseInt(BeforeSegmentation[0]), parseInt(BeforeSegmentation[1]), parseInt(BeforeSegmentation[2]), parseInt(pos.x), parseInt(pos.y), parseInt(pos.z))
                        TemporaryVariable["point"] = hotSpot[player.xuid].Point2;
                        TemporaryVariable["CoordinateChain"] = CoordinateChain;
                        delete hotSpot[player.xuid];
                        File.writeTo(path + 'config.json', JSON.stringify(configJson, null, "\t"));
                        player.tell('链接成功');
                        cmda[player.xuid] = false;
                        player.tell('已退出链接模式！');
                    }else{
                        cmda[player.xuid] = false;
                        delete hotSpot[player.xuid];
                        player.tell('链接失败，距离过长！\n已退出链接模式！');
                    }
                }
            }
        }
    }
})

function CoordinateCalculation(x, y, z, x1, y1, z1) {
    let jj = [];
    let i = 0;
    while (i < 1) {
        if (x != x1 || y != y1 || z != z1) {
            if (x - x1 != 0) {
                if (x > x1) {
                    x = x - 1
                } else {
                    x = x + 1
                }
            } else if (y - y1 != 0) {
                if (y > y1) {
                    y = y - 1
                } else {
                    y = y + 1
                }
            } else if (z - z1 != 0) {
                if (z > z1) {
                    z = z - 1
                } else {
                    z = z + 1
                }
            }
            jj[jj.length] = { "x": x, "y": y, "z": z }
        } else {
            i = 1
            return jj
        }
    }
}

function QingYiLxlEuclideanMetric(posList1, posList2) {
    let x = posList1[0];
    let y = posList1[1];
    let z = posList1[2];
    let playerX = posList2[0];
    let playerY = posList2[1];
    let playerZ = posList2[2];
    let xj;
    let yj;
    let zj;
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

ll.registerPlugin(pluginName, pluginDescribe, pluginVersion, pluginOther);