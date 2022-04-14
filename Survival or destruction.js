//--------------基础信息定义--------------
const pluginName = 'Survival_Or_destruction';
const pluginDescribe = '生存还是毁灭，这是一个问题！';
const pluginVersion = [0, 0, 1];
const pluginOther = { "开源地址": "https://github.com/FBQingYi/LLSE/blob/main/Survival%20or%20destruction.js" };
const pluginConfigPath = './plugins/Survival Or destruction/';

//--------------基础配置文件--------------
const configJson = { "JoinTag": "已选择" };

//--------------写入基础配置文件--------------
if (!File.exists(pluginConfigPath)) {//判断文件夹是否存在
    File.writeTo(pluginConfigPath + 'config.json', JSON.stringify(configJson, null, "\t"));//格式化写入基础配置文件
    File.writeTo(pluginConfigPath + 'data/playerData.json', JSON.stringify({}, null, "\t"));//格式化写入基础配置文件
}

//--------------全局变量声明--------------
let basicProfile, configTag;
//--------------全局变量赋值--------------
StartAndRun()
function StartAndRun() {
    basicProfile = JSON.parse(File.readFrom(pluginConfigPath + 'config.json'));//读取基础配置文件
    configTag = basicProfile.JoinTag;//获取配置文件内的tag
}

//--------------数据处理区域--------------
//玩家玩家进入游戏事件处理
function LLSEPlayerOnJoin(player) {
    if (!player.hasTag(configTag)) {//判断玩家是否未选择生存模式
        let form = mc.newSimpleForm()
            .setTitle('请选择生存模式')
            .setContent('生存还是毁灭，这是一个问题！')
            .addButton('普通生存')
            .addButton('困难生存');
        player.sendForm(form, (player, id) => {
            if (id != undefined) {
                if (id == 0) {
                    PlayerSelectMode('普通生存', player);
                } else if (id == 1) {
                    PlayerSelectMode('困难生存', player);
                }
            } else {
                PlayerSelectMode('噩梦生存', player);
            }
        });
    }
}

//玩家加入游戏后模式选择标签函数
function PlayerSelectMode(tag, player) {
    if (tag == '普通生存') {
        player.tell(`你选择了：${tag}`);
    } else {
        if (tag == '噩梦生存') {
            PlayerBasicPropertiesDistribution(player, 20)
        } else if (tag == '困难生存') {

        }
    }
    //player.addTag(configTag);
    //player.addTag(tag);
}

//基础属性分配弹窗及处理
function PlayerBasicPropertiesDistribution(player, Modepoint) {
    let HealthForm = mc.newCustomForm()
        .setTitle('请进行基础数据加点')
        .addLabel(`生存还是毁灭，这是一个问题！\n你一共有${Modepoint}点`)
        .addLabel(`这是第一次加点，后面还有3个`)
        .addSlider('生命', 1, Modepoint, 1, 1)
        player.sendForm(HealthForm, (player, data) => {
        let RemainingPoints = Modepoint - data[2];
        if (RemainingPoints > 0) {
            let RepulsionResistanceForm = mc.newCustomForm()
                .setTitle('请进行基础数据加点')
                .addLabel(`生存还是毁灭，这是一个问题！\n你一共还有${RemainingPoints}点`)
                .addLabel(`这是第一次加点，后面还有2个`)
                .addSlider('击退抗性', 1, RemainingPoints, 1, 1)
                player.sendForm(RepulsionResistanceForm, (player, data) => {
                log(data)
            })
        }
    })
}

//玩家金币增加事件处理
function LLMoneyPlayerAdd(xuid, money) {
    let player = GetPlayerObject(xuid);
}

//设置玩家相关属性函数
//玩家对象，生命值，伤害值，移动值，水中移动值，岩浆中移动值，击退抗性,伤害吸收,氧气
function SetPlayerNbtAttributes(player, MaxHealth, MaxAttack, MaxMovement, MaxUMovement, MaxLMovement, MinKnockback, absorption, air) {
    try {
        let playerNbt = player.getNbt();//获取玩家nbt数据
        let playerNbtAttributes = playerNbt.getTag("Attributes");//获取Attributes内容
        if (air != '' && air != undefined) {
            playerNbt.setShort('Air', air);//设置玩家水中氧气
        }
        for (let i = 0; i < playerNbtAttributes.getSize(); i++) {
            let playerNbtAttributesObj = playerNbtAttributes.getTag(i);//获取当前位置的数据
            if (playerNbtAttributesObj.getTag("Name") == "minecraft:health") {
                if (MaxHealth != '' && MaxHealth != undefined) {
                    playerNbtAttributesObj.setFloat("Base", MaxHealth);//设置基础血量
                    playerNbtAttributesObj.setFloat("Current", MaxHealth);//设置当前血量
                    playerNbtAttributesObj.setFloat("DefaultMax", MaxHealth);//设置默认最大血量
                    playerNbtAttributesObj.setFloat("Max", MaxHealth);//设置最大血量
                }
            }
            if (playerNbtAttributesObj.getTag("Name") == "minecraft:attack_damage") {
                if (MaxAttack != '' && MaxAttack != undefined) {
                    playerNbtAttributesObj.setFloat("Base", MaxAttack);//设置基础攻击
                    playerNbtAttributesObj.setFloat("DefaultMax", MaxAttack);//设置默认最大攻击
                    playerNbtAttributesObj.setFloat("DefaultMin", MaxAttack);//设置默认最小攻击
                    playerNbtAttributesObj.setFloat("Max", MaxAttack);//设置最大攻击
                    playerNbtAttributesObj.setFloat("Current", MaxAttack);//设置当前攻击
                    playerNbtAttributesObj.setFloat("Min", MaxAttack);//设置最小攻击
                }
            }
            if (playerNbtAttributesObj.getTag("Name") == "minecraft:movement") {//判断是否是移速数据
                if (MaxMovement != '' && MaxMovement != undefined) {
                    playerNbtAttributesObj.setFloat("Base", MaxMovement)//设置基础移速
                    playerNbtAttributesObj.setFloat("Current", MaxMovement)//设置当前移速
                }
            }
            if (playerNbtAttributesObj.getTag("Name") == "minecraft:underwater_movement") {//判断是否是水中移速数据
                if (MaxUMovement != '' && MaxUMovement != undefined) {
                    playerNbtAttributesObj.setFloat("Base", MaxUMovement)//设置基础移速
                    playerNbtAttributesObj.setFloat("Current", MaxUMovement)//设置当前移速
                }
            }
            if (playerNbtAttributesObj.getTag("Name") == "minecraft:lava_movement") {//判断是否是岩浆中移速数据
                if (MaxLMovement != '' && MaxLMovement != undefined) {
                    playerNbtAttributesObj.setFloat("Base", MaxLMovement)//设置基础移速
                    playerNbtAttributesObj.setFloat("Current", MaxLMovement)//设置当前移速
                }
            }
            if (playerNbtAttributesObj.getTag("Name") == "minecraft:knockback_resistance") {//判断是否是击退抗性数据
                if (MinKnockback != '' && MinKnockback != undefined) {
                    playerNbtAttributesObj.setFloat("Base", MinKnockback);//设置击退抗性
                    playerNbtAttributesObj.setFloat("DefaultMax", MinKnockback);//设置默认击退抗性
                    playerNbtAttributesObj.setFloat("DefaultMin", MinKnockback);//设置默认击退抗性
                    playerNbtAttributesObj.setFloat("Max", MinKnockback);//设置击退抗性
                    playerNbtAttributesObj.setFloat("Current", MinKnockback);//设置当前击退抗性
                    playerNbtAttributesObj.setFloat("Min", MinKnockback);//设置最小击退抗性
                }
            }
            if (playerNbtAttributesObj.getTag("Name") == "minecraft:absorption") {//判断是否是伤害吸收数据
                if (absorption != '' && absorption != undefined) {
                    playerNbtAttributesObj.setFloat("Base", absorption);//设置伤害吸收
                    playerNbtAttributesObj.setFloat("DefaultMax", absorption);//设置默认伤害吸收
                    playerNbtAttributesObj.setFloat("DefaultMin", absorption);//设置默认伤害吸收
                    playerNbtAttributesObj.setFloat("Max", absorption);//设置伤害吸收
                    playerNbtAttributesObj.setFloat("Current", absorption);//设置当前伤害吸收
                    playerNbtAttributesObj.setFloat("Min", absorption);//设置最小伤害吸收
                }
            }
        }
        return playerNbt;//返回新的nbt
    } catch (error) {
        colorLog("red", '设置玩家相关属性函数报错' + error);
    }

}

//xuid/名称获取玩家对象
function GetPlayerObject(XuidName) {
    return mc.getPlayer(XuidName);
}

//--------------监听接口注册--------------
mc.listen("onJoin", LLSEPlayerOnJoin);//玩家进入游戏监听（完全进入）
mc.listen("beforeMoneyAdd", LLMoneyPlayerAdd);//玩家金币增加监听;

//--------------插件基础信息注册--------------
ll.registerPlugin(pluginName, pluginDescribe, pluginVersion, pluginOther)
/*
待完成事项：
    1，玩家进服选择系统。
    2，困难模式系统建立。
    3，困难模式后期系统。
    4，生物强化系统。
    5，对战系统。
    6，技能系统。
    7，待定
*/