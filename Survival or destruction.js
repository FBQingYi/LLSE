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
        player.tell(`你选择了：${tag}，即将进行基础数据修改！`);
        if (tag == '噩梦生存') {
            player.setNbt(SetPlayerNbtAttributes(player, 4, 0, '', '', ''));
        } else if (tag == '困难生存') {
            player.setNbt(SetPlayerNbtAttributes(player, 10, 1, '', '', ''));
        }
    }
    player.addTag(configTag);
    player.addTag(tag);
}

//设置玩家相关属性数据
//玩家对象，生命值，伤害值，移动值，水中移动值，岩浆中移动值
function SetPlayerNbtAttributes(player, MaxHealth, MaxAttack, MaxMovement, MaxUMovement, MaxLMovement) {
    let playerNbt = player.getNbt();//获取玩家nbt数据
    let playerNbtAttributes = playerNbt.getTag("Attributes");//获取Attributes内容
    for (let i = 0; i < playerNbtAttributes.getSize(); i++) {
        let playerNbtAttributesObj = playerNbtAttributes.getTag(i);//获取当前位置的数据
        if (playerNbtAttributesObj.getTag("Name") == "minecraft:health") {
            if (MaxHealth != '') {
                playerNbtAttributesObj.setFloat("Base", MaxHealth);//设置基础血量
                playerNbtAttributesObj.setFloat("Current", MaxHealth);//设置当前血量
                playerNbtAttributesObj.setFloat("DefaultMax", MaxHealth);//设置默认最大血量
                playerNbtAttributesObj.setFloat("Max", MaxHealth);//设置最大血量
            }
        }
        if (playerNbtAttributesObj.getTag("Name") == "minecraft:attack_damage") {
            if (MaxAttack != '') {
                playerNbtAttributesObj.setFloat("Base", MaxAttack);//设置基础攻击
                playerNbtAttributesObj.setFloat("DefaultMax", MaxAttack);//设置默认最大攻击
                playerNbtAttributesObj.setFloat("DefaultMin", MaxAttack);//设置默认最小攻击
                playerNbtAttributesObj.setFloat("Max", MaxAttack);//设置最大攻击
                playerNbtAttributesObj.setFloat("Current", MaxAttack);//设置当前攻击
                playerNbtAttributesObj.setFloat("Min", MaxAttack);//设置最小攻击
            }
        }
        if (playerNbtAttributesObj.getTag("Name") == "minecraft:movement") {//判断是否是移速数据
            if (MaxMovement != '') {
                playerNbtAttributesObj.setFloat("Base", MaxMovement)//设置基础移速
                playerNbtAttributesObj.setFloat("Current", MaxMovement)//设置当前移速
            }
        }
        if (playerNbtAttributesObj.getTag("Name") == "minecraft:underwater_movement") {//判断是否是移速数据
            if (MaxUMovement != '') {
                playerNbtAttributesObj.setFloat("Base", MaxUMovement)//设置基础移速
                playerNbtAttributesObj.setFloat("Current", MaxUMovement)//设置当前移速
            }
        }
        if (playerNbtAttributesObj.getTag("Name") == "minecraft:lava_movement") {//判断是否是岩浆中移速数据
            if (MaxLMovement != '') {
                playerNbtAttributesObj.setFloat("Base", MaxLMovement)//设置基础移速
                playerNbtAttributesObj.setFloat("Current", MaxLMovement)//设置当前移速
            }
        }
    }
    return playerNbt;//返回新的nbt
}

//--------------监听接口注册--------------
mc.listen("onJoin", LLSEPlayerOnJoin);//玩家进入游戏监听（完全进入）

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