//--------------基础信息定义--------------
const pluginName = 'bank';
const pluginDescribe = '小型银行？';
const pluginVersion = [0, 0, 1];
const pluginOther = { "开源地址": "https://github.com/FBQingYi/LLSE/blob/main/bank.js" };
const pluginConfigPath = './plugins/bank/';

if (!File.exists(pluginConfigPath)) {//判断文件夹是否存在
    File.writeTo(pluginConfigPath + 'data/playerData.json', JSON.stringify({}, null, "\t"));//格式化写入基础配置文件
}

basicProfile = JSON.parse(File.readFrom(pluginConfigPath + 'data/playerData.json'));//读取数据文件

mc.regPlayerCmd('bank', '银行', (player, args) => {
    let fm = mc.newSimpleForm()
        .setTitle('银行')
        .setContent('请选择业务！')
        .addButton('查询')
        .addButton('存款')
        .addButton('取款')
        .addButton('转账')
        .addButton('信用卡业务');
    if (player.isOP()) {
        fm.addButton('查看银行信息');
    }
    player.sendForm(fm, (player, id) => {
        if (id == undefined) {
            return false;
        } else {
            switch (id) {
                case 0:
                    player.tell(`§l§3[Bank]  当前银行余额：${basicProfile[player.xuid].card}`);
                    break;
                case 1:
                    bankDeposit(player);
                    break;
                case 2:
                    bankWithdraw(player);
                    break;
                case 3:
                    bankTransfer(player);
                    break;
                case 4:
                    bankCredit(player);
                    break;
                case 5:
                    bankInformation(player);
                    break;
            }
        }
    })
})

//存款处理
function bankDeposit(player) {
    let PlayerMoney = money.get(player.xuid);
    if (PlayerMoney > 10) {
        let fm = mc.newCustomForm()
            .setTitle('银行')
            .addLabel(`当前身上金额：${PlayerMoney}`)
            .addSlider('请选择存款金额', 1, PlayerMoney)
        player.sendForm(fm, (player, data) => {
            if (data == undefined) {
                return false;
            } else {
                if (PlayerMoney >= Math.floor(data[1])) {
                    if (money.reduce(player.xuid, Math.floor(data[1]))) {
                        basicProfile[player.xuid].card += Math.floor(data[1]);
                        File.writeTo(pluginConfigPath + 'data/playerData.json', JSON.stringify(basicProfile, null, "\t"));
                        player.tell('§l§3[Bank]  存款成功，当前账户余额：'+basicProfile[player.xuid].card)
                    }
                } else {
                    player.tell(`§l§4[Bank]  当前金额不足，无法办理！`);
                }
            }
        })

    } else {
        player.tell(`§l§4[Bank]  当前金额过低，无法办理！`);
    }
}

//取款处理
function bankWithdraw(player) {
    if (basicProfile[player.xuid].card > 0) {
        let fm = mc.newCustomForm()
            .setTitle('银行')
            .addLabel(`当前银行金额：${basicProfile[player.xuid].card}`)
            .addSlider('请选择存款金额', 1, basicProfile[player.xuid].card)
        player.sendForm(fm, (player, data) => {
            if (data == undefined) {
                return false;
            } else {
                if (Math.floor(data[1]) <= basicProfile[player.xuid].card) {
                    if (money.add(player.xuid, Math.floor(data[1]))) {
                        basicProfile[player.xuid].card = basicProfile[player.xuid].card - Math.floor(data[1]);
                        File.writeTo(pluginConfigPath + 'data/playerData.json', JSON.stringify(basicProfile, null, "\t"));
                        log(basicProfile)
                        player.tell('§l§3[Bank]  取款成功，当前账户余额：'+basicProfile[player.xuid].card)
                    }
                } else {
                    player.tell('§l§4[Bank]  存款不足！')
                }
            }
        });
    } else {
        player.tell('§l§4[Bank]  查询余额失败，你没有余额在银行！')
    }
}

//转账处理
function bankTransfer(player) {
    let PlayerList = mc.getOnlinePlayers();
    let fm = mc.newSimpleForm()
        .setTitle('银行')
        .setContent('请选择转账对象');
    PlayerList.forEach(PlayerName => {
        fm.addButton(PlayerName.name);
    });
    player.sendForm(fm, (player, id) => {
        if (id == undefined) {
            return false;
        } else {
            let player2 = PlayerList[id];
            let fm1 = mc.newCustomForm()
                .setTitle('银行')
                .addLabel(`当前银行金额：${basicProfile[player.xuid].card}`)
                .addLabel(`收款对象：${player2.name}`)
                .addSlider('请选择转账金额', 1, basicProfile[player.xuid].card);
            player.sendForm(fm1, (player, data) => {
                if (data == undefined) {
                    return false;
                } else {
                    if (Math.floor(data[2]) <= basicProfile[player.xuid].card) {
                        basicProfile[player.xuid].card -= Math.floor(data[2]);
                        basicProfile[player2.xuid].card += Math.floor(data[2]);
                        File.writeTo(pluginConfigPath + 'data/playerData.json', JSON.stringify(basicProfile, null, "\t"));
                        player.tell('§l§4[Bank]  转账成功，当前账户余额：'+basicProfile[player.xuid].card);
                    } else {
                        player.tell('§l§4[Bank]  存款不足！');
                    }
                }
            })
        }
    })
}

//信用卡业务处理
function bankCredit(player) {
    player.tell('§l§4[Bank]  暂未启用');
}

//查看银行信息
function bankInformation(player) {
    let TotalDeposit = 0;
    for (let i in basicProfile) {
        TotalDeposit += basicProfile[i].card;
    }
    let fm = mc.newSimpleForm()
        .setTitle('银行')
        .setContent(`当前银行总存款：${TotalDeposit}`)
        .addButton('信用卡审批');
    player.sendForm(fm, (player, id) => {
        if (id == undefined) {
            return false;
        } else {
            if (id == 0) {
                player.tell('§l§4[Bank]  暂无申请！')
            }
        }
    })
}

mc.listen("onPreJoin", (player) => {
    if (basicProfile[player.xuid] == undefined) {
        basicProfile[player.xuid] = { "card": 0, "CreditCardOpen": false, "CreditCard": 0 };
        File.writeTo(pluginConfigPath + 'data/playerData.json', JSON.stringify(basicProfile, null, "\t"));
    }
})

ll.registerPlugin(pluginName, pluginDescribe, pluginVersion, pluginOther)