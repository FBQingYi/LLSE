let path = './plugins/Vip/';
let path1 = './plugins/Difficult survival/data/DestroyBlockAddMoney.json';
if (!File.exists(path)) {
    let json = {};
    File.writeTo(path + 'playerData.json', JSON.stringify(json, null, "\t"));
}
let basicProfile = JSON.parse(File.readFrom(path + 'playerData.json'));//读取基础配置文件
let destructionAddMoneyListJson = JSON.parse(File.readFrom(path1));//读取破坏加金币配置文件

mc.regPlayerCmd('vip', '打开vip面板', (player, args) => {
    let time = system.getTimeObj();//获取当前系统时间
    let sysTime = `${time.Y}-${time.M}-${time.D}`;
    if (basicProfile[player.xuid] == undefined) {
        NewBuyFormData(player)
    } else {
        let dataTime = basicProfile[player.xuid];
        let judge =  datedifference(sysTime, dataTime);//判断日期
        NewRenewFormData(judge, player);
    }
})

function NewBuyFormData(player) {
    let fm = mc.newSimpleForm()
        .setTitle('VIP购买')
        .setContent('欢迎您成为尊贵的vip玩家！')
        .setContent('会员玩家每日破坏加金币无上限！\n其他权益逐步开放中！\n购买 10000金币/月')
        .addButton('购买')
        .addButton('取消');
    player.sendForm(fm, (player, id) => {
        if (id == undefined) {
            return false;
        } else {
            if (id == 0) {
                if (money.get(player.xuid) >= 10000) {
                    if (money.reduce(player.xuid, 10000)) {
                        player.addTag('vip');
                        let time = system.getTimeObj();//获取当前系统时间
                        let m = time.M;
                        let y = time.Y;
                        if (m == 12) {
                            m = 0
                            y += 1;
                        }
                        let sysTime = `${y}-${m + 1}-${time.D}`;
                        basicProfile[player.xuid] = sysTime;
                        File.writeTo(path + 'playerData.json', JSON.stringify(basicProfile, null, "\t"));
                        player.tell(`购买成功！到期日期${sysTime}`);
                    } else {
                        player.tell(`扣款失败`);
                    }
                } else {
                    player.tell(`余额不足，无法购买`);
                }
            } else {
                return false;
            }
        }
    })
}

function NewRenewFormData(judge, player) {
    let fm = mc.newSimpleForm()
        .setTitle('VIP续费')
        .setContent(`尊贵的vip玩家！\n您的会员还有${judge}天就要到期了！\n请及时续费！`)
        .addButton('续费')
        .addButton('取消');
    player.sendForm(fm, (player, id) => {
        if (id == undefined) {
            return false;
        } else {
            if (id == 0) {
                if (money.get(player.xuid) >= 8888) {
                    if (money.reduce(player.xuid, 8888)) {
                        if (player.hasTag('vip')) {
                            let time = basicProfile[player.xuid].split('-');
                            let m = parseInt(time[1]);
                            let y = parseInt(time[0]);
                            if (m == 12) {
                                m = 0
                                y += 1;
                            }
                            let sysTime = `${y}-${m + 1}-${time[2]}`;
                            basicProfile[player.xuid] = sysTime;
                            File.writeTo(path + 'playerData.json', JSON.stringify(basicProfile, null, "\t"));
                            player.tell(`购买成功！到期日期${sysTime}`);
                        } else {
                            let time = system.getTimeObj();//获取当前系统时间
                            let m = time.M;
                            let y = time.Y;
                            if (m == 12) {
                                m = 0
                                y += 1;
                            }
                            let sysTime = `${y}-${m + 1}-${time.D}`;
                            basicProfile[player.xuid] = sysTime;
                            File.writeTo(path + 'playerData.json', JSON.stringify(basicProfile, null, "\t"));
                            player.tell(`购买成功！到期日期${sysTime}`);
                            player.addTag('vip');
                        }
                    } else {
                        player.tell(`扣款失败`);
                    }
                } else {
                    player.tell(`余额不足，无法购买`);
                }
            } else {
                return false;
            }
        }
    })
}

mc.listen("onServerStarted", () => {
    setInterval(() => {
        let playerList = mc.getOnlinePlayers();
        playerList.forEach((player) => {
            if (player.hasTag('vip')) {
                let time = system.getTimeObj();//获取当前系统时间
                let sysTime = `${time.Y}-${time.M}-${time.D}`;
                let dataTime = basicProfile[player.xuid];
                let judge = datedifference(sysTime, dataTime);//判断日期
                if (judge < 0) {
                    player.removeTag('vip');
                }
            }
        })
    }, 1000 * 60);
})

mc.listen("onDestroyBlock", (player, block) => {
    if (player.hasTag('vip')) {
        if (destructionAddMoneyListJson[block.type] != undefined) {
            money.add(player.xuid, destructionAddMoneyListJson[block.type])
            player.tell(`§l§6你获得了：${destructionAddMoneyListJson[block.type]} 个金币！`, 5);
        }
    }
})

function datedifference(sDate1, sDate2) {
    var dateSpan, iDays;
    sDate1 = Date.parse(sDate1);
    sDate2 = Date.parse(sDate2);
    dateSpan = sDate2 - sDate1;
    let minutes = 1000 * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    return dateSpan / days;
};