//--------------基础信息定义--------------
const pluginName = 'OPPanel';
const pluginDescribe = 'OP功能面板';
const pluginVersion = [0, 0, 3];
const pluginOther = { "开源地址": "https://github.com/FBQingYi/LLSE/blob/main/OPPanel.js" };
const pluginConfigPath = './plugins/OPPanel/';

//--------------基础配置文件--------------
const configJson = { "cmd": "opgui", "buttonImage": { "踢人": "textures/items/end_crystal", "添加白名单": "textures/items/ender_eye", "移除白名单": "textures/items/fireball", "禁言玩家": "textures/items/minecart_furnace", "解除禁言": "textures/items/minecart_command_block", "服务器最大人数": "textures/items/fireball", "服务器MOTD": "textures/items/painting", "在线玩家": "textures/items/snowball" } };
const BanMsgTime = [10, 30, 60, 120, 1440];
const BanMsgTimeDisplay = ["10分钟", "30分钟", "1小时", "2小时", "1天"];
//--------------写入基础配置文件--------------
if (!File.exists(pluginConfigPath)) {//判断文件夹是否存在
    File.writeTo(pluginConfigPath + 'config.json', JSON.stringify(configJson, null, "\t"));//格式化写入基础配置文件
    File.writeTo(pluginConfigPath + 'data/BanPlayerMsgList.json', JSON.stringify({}, null, "\t"));
}

let basicProfile = JSON.parse(File.readFrom(pluginConfigPath + 'config.json'));//读取基础配置文件
let BanPlayerMsgList = JSON.parse(File.readFrom(pluginConfigPath + 'data/BanPlayerMsgList.json'));
let buttonImage = basicProfile.buttonImage;

mc.regPlayerCmd(basicProfile.cmd, 'OP功能面板', (player, args) => {
    if (player.isOP()) {
        let fm = mc.newSimpleForm()
            .setTitle('OP功能面板')
            .setContent('请选择')
            .addButton('踢人', buttonImage["踢人"])
            .addButton('添加白名单', buttonImage["添加白名单"])
            .addButton('移除白名单', buttonImage["移除白名单"])
            .addButton('禁言玩家', buttonImage["禁言玩家"])
            .addButton('解除禁言', buttonImage["解除禁言"])
            .addButton('服务器最大人数', buttonImage["服务器最大人数"])
            .addButton('服务器MOTD', buttonImage["服务器MOTD"])
            .addButton('在线玩家', buttonImage["在线玩家"]);
        player.sendForm(fm, (player, id) => {
            if (id == undefined) {
                return false;
            } else {
                switch (id) {
                    case 0:
                        KickPlayer(player);
                        break;
                    case 1:
                        AddPlayer(player);
                        break;
                    case 2:
                        RemovePlayer(player);
                        break;
                    case 3:
                        BanPlayerMsg(player);
                        break;
                    case 4:
                        RelieveBanPlayerMsg(player);
                        break;
                    case 5:
                        SetServerPlayer(player);
                        break;
                    case 6:
                        SetServerMotd(player);
                        break;
                    case 7:
                        PlayerInformation(player);
                        break;
                }
            }
        });
    }
}, 1)

//踢人处理
function KickPlayer(player) {
    let PlayerList = mc.getOnlinePlayers();
    let fm = mc.newSimpleForm()
        .setTitle('OP功能面板-踢人')
        .setContent('请选择玩家');
    PlayerList.forEach(PlayerName => {
        fm.addButton(PlayerName.name);
    });
    player.sendForm(fm, (player, id) => {
        if (id == undefined) {
            return false;
        } else {
            if (player.isOP()) {
                PlayerList[id].kick(`你被 ${player.name} 移出服务器！`);
                player.tell(`${PlayerList[id].name} 已被移除！`);
            }
        }
    })
}

//添加白名单处理
function AddPlayer(player) {
    let fm = mc.newCustomForm()
        .setTitle('OP功能面板-添加白名单')
        .addInput('玩家ID')
    player.sendForm(fm, (player, data) => {
        if (data == undefined) {
            return false;
        } else {
            let cmdOut = mc.runcmdEx(`allowlist add "${data[0]}"`);
            if (cmdOut.output.indexOf('Player added to allowlist') != -1) {
                player.tell(`[系统] 玩家：${data[0]} 白名单添加成功！`);
            } else {
                player.tell(`[系统] 玩家：${data[0]} 白名单添加失败\n${cmdOut.output}`);
            }
        }
    })
}

//移除白名单
function RemovePlayer(player) {
    let AllowList = JSON.parse(File.readFrom('allowlist.json'));//读取白名单文件
    let PlayerList = [];
    let fm = mc.newSimpleForm()
        .setTitle('OP功能面板-移除白名单')
        .setContent('请选择玩家');
    for (let i in AllowList) {
        PlayerList[i] = AllowList[i].name;
        fm.addButton(AllowList[i].name);
    }
    player.sendForm(fm, (player, id) => {
        if (id == undefined) {
            return false;
        } else {
            if (player.isOP()) {
                let cmdOut = mc.runcmdEx(`allowlist remove "${PlayerList[id]}"`);
                if (cmdOut.output.indexOf('Player removed from allowlist') != -1) {
                    player.tell(`${PlayerList[id]} 已被移除白名单！`);
                } else {
                    player.tell(`[系统] 玩家：${PlayerList[id]} 白名单移除失败\n${cmdOut.output}`);
                }
            }
        }
    })
}

//禁言玩家
function BanPlayerMsg(player) {
    let PlayerList = mc.getOnlinePlayers();
    let fm = mc.newSimpleForm()
        .setTitle('OP功能面板-禁言')
        .setContent('请选择玩家');
    PlayerList.forEach(PlayerName => {
        fm.addButton(PlayerName.name);
    });
    player.sendForm(fm, (player, id) => {
        if (id == undefined) {
            return false;
        } else {
            let BanMsgPlayer = PlayerList[id];
            let SetBanMsgForm = mc.newCustomForm()
                .setTitle('禁言设置')
                .addDropdown('请选择禁言时长（分）', BanMsgTimeDisplay)
            player.sendForm(SetBanMsgForm, (player, data) => {
                if (data == undefined) {
                    return false;
                } else {
                    BanPlayerMsgList[BanMsgPlayer.xuid].time += BanMsgTime[data[0]];
                    File.writeTo(pluginConfigPath + 'data/BanPlayerMsgList.json', JSON.stringify(BanPlayerMsgList, null, "\t"));
                    player.tell(`§l§4[系统] ${BanMsgPlayer.name} 禁止发言已设置成功，距离禁言结束还有：${BanPlayerMsgList[player.xuid].time}分。`)
                }
            })
        }
    })
}

//解除禁言
function RelieveBanPlayerMsg(player) {
    let BanMsgPlayerXuid = [];
    let fm = mc.newSimpleForm()
        .setTitle('OP功能面板-解除禁言')
        .setContent('请选择玩家');
    for (let PlayerXuid in BanPlayerMsgList) {
        BanMsgPlayerXuid[BanMsgPlayerXuid.length] = PlayerXuid;
        fm.addButton(BanPlayerMsgList[PlayerXuid].name);
    }
    player.sendForm(fm, (player, id) => {
        if (id == undefined) {
            return false;
        } else {
            BanPlayerMsgList[BanMsgPlayerXuid[id]].time = 0;
            File.writeTo(pluginConfigPath + 'data/BanPlayerMsgList.json', JSON.stringify(BanPlayerMsgList, null, "\t"));
            player.tell(`§l§4[系统] ${BanPlayerMsgList[BanMsgPlayerXuid[id]].name} 解除发言已设置成功`);
        }
    })
}

//设置服务器最大人数
function SetServerPlayer(player) {
    let fm = mc.newCustomForm()
        .setTitle('OP功能面板-最大人数')
        .addInput('最大人数');
    player.sendForm(fm, (player, data) => {
        if (data == undefined) {
            return false;
        } else {
            if (checkNumber(data[0])) {
                if (mc.setMaxPlayers(parseInt(data[0]))) {
                    basicProfile.MaxPlayer = parseInt(data[0]);
                    File.writeTo(pluginConfigPath + 'config.json', JSON.stringify(basicProfile, null, "\t"))
                    player.tell('§l§4[系统] 设置成功！');
                } else {
                    player.tell('§l§4[系统] 设置失败！');
                }
            } else {
                player.tell('§l§4[系统] 输入内容违规！');
            }
        }
    })
}

//设置服务器MOTD
function SetServerMotd(player) {
    let fm = mc.newCustomForm()
        .setTitle('OP功能面板-MOTD')
        .addInput('显示内容');
    player.sendForm(fm, (player, data) => {
        if (data == undefined) {
            return false;
        } else {
            if (mc.setMotd(data[0])) {
                basicProfile.MOTD = data[0];
                File.writeTo(pluginConfigPath + 'config.json', JSON.stringify(basicProfile, null, "\t"))
                player.tell('§l§4[系统] 设置成功！');
            } else {
                player.tell('§l§4[系统] 设置失败！');
            }
        }
    })
}

//玩家查看
function PlayerInformation(player) {
    let PlayerList = mc.getOnlinePlayers();
    let fm = mc.newSimpleForm()
        .setTitle('OP功能面板-查看玩家');
    PlayerList.forEach(Player => {
        fm.addButton(Player.name);
    });
    player.sendForm(fm, (player, id) => {
        if (id == undefined) {
            return false;
        } else {
            let pl = PlayerList[id];
            let PlNbt = JSON.parse(pl.getNbt().toString());
            let pos = `${pl.pos.x.toFixed(2)} ${pl.pos.y.toFixed(2)} ${pl.pos.z.toFixed(2)}`;
            let fm1 = mc.newCustomForm()
                .setTitle(pl.name)
                .addLabel(`玩家ID: ${pl.name}`)
                .addLabel(`玩家XUID: ${pl.xuid}`)
                .addLabel(`玩家IP: ${pl.getDevice().ip}`)
                .addLabel(`玩家延迟: ${pl.getDevice().avgPing} ms`)
                .addLabel(`玩家设备: ${pl.getDevice().os}`)
                .addLabel(`玩家模式: ${pl.gameMode}`)
                .addLabel(`玩家权限: ${pl.permLevel}`)
                .addLabel(`当前生命: ${pl.health}/${pl.maxHealth}`)
                .addLabel(`当前等级: ${PlNbt.PlayerLevel}`)
                .addLabel(`当前移速: ${pl.speed.toFixed(2)}`)
                .addLabel(`当前坐标: ${pos}`)
                .addLabel(`玩家拥有TAG: ${JSON.stringify(PlNbt.Tags)}`)
                .addInput('\n以他身份执行命令', '{p}代表这个玩家名称', "")
                .addInput('以他身份发言', '', "");
            player.sendForm(fm1, (player, data) => {
                if (data == undefined) {
                    return false;
                } else {
                    if (data[12] != "") {
                        if (pl.runcmd(data[12].replace(/{p}/g, `"${pl.name}"`))) {
                            player.tell('§l§4[系统] 执行成功！');
                        } else {
                            player.tell('§l§4[系统] 执行失败,请检查指令格式等！');
                        }
                    }
                    if (data[13] != "") {
                        if (pl.talkAs(data[13])) {
                            player.tell('§l§4[系统] 执行成功！');
                        } else {
                            player.tell('§l§4[系统] 执行失败！');
                        }
                    }
                    if(data[13] != "" || data[12] != ""){
                        PlayerInformation(player);
                    }
                }
            })
        }
    })
}

//玩家上线监听
mc.listen("onPreJoin", (player) => {
    if (BanPlayerMsgList[player.xuid] == undefined) {
        BanPlayerMsgList[player.xuid] = {};
        BanPlayerMsgList[player.xuid].time = 0;
        BanPlayerMsgList[player.xuid].name = player.name;
    }
})

//玩家发送消息事件
mc.listen("onChat", (player, msg) => {
    if (BanPlayerMsgList[player.xuid].time != 0) {
        player.tell('你已经被禁言，消息无法发送！解除到期时间：' + BanPlayerMsgList[player.xuid].time);
        return false;
    }
})

//服务器启动完成事件
mc.listen("onServerStarted", () => {
    if (basicProfile.MOTD != undefined) {
        mc.setMotd(basicProfile.MOTD);
    }
    if (basicProfile.MaxPlayer != undefined) {
        mc.setMaxPlayers(basicProfile.MaxPlayer);
    }
    setInterval(() => {
        if (BanPlayerMsgList != {}) {
            for (let i in BanPlayerMsgList) {
                if (BanPlayerMsgList[i].time > 0) {
                    BanPlayerMsgList[i].time -= 1;
                }
            }
            File.writeTo(pluginConfigPath + 'data/BanPlayerMsgList.json', JSON.stringify(BanPlayerMsgList, null, "\t"));
        }
    }, 1000 * 60 * 3);
})

//验证字符串是否是数字
function checkNumber(theObj) {
    var reg = /^[0-9]+.?[0-9]*$/;
    if (reg.test(theObj)) {
        return true;
    }
    return false;
}

ll.registerPlugin(pluginName, pluginDescribe, pluginVersion, pluginOther);