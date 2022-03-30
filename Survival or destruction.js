//--------------基础信息定义--------------
const pluginName = 'Survival_Or_destruction';
const pluginDescribe = '生存还是毁灭，这是一个问题！';
const pluginVersion = [0,0,1];
const pluginOther = {"开源地址":"https://github.com/FBQingYi/LLSE/blob/main/Survival%20or%20destruction.js"};
const pluginConfigPath = './plugins/Survival Or destruction/';

//--------------基础配置文件--------------
const configJson = {"JoinTag":"已选择"};

//--------------写入基础配置文件--------------
if (!File.exists(pluginConfigPath)) {//判断文件夹是否存在
    File.writeTo(pluginConfigPath + 'config.json', JSON.stringify(configJson, null, "\t"));//格式化写入基础配置文件
}

//--------------全局变量声明--------------
let basicProfile,configTag;
//--------------全局变量赋值--------------
StartAndRun()
function StartAndRun(){
    basicProfile = JSON.parse(File.readFrom(pluginConfigPath + 'config.json'));//读取基础配置文件
    configTag = basicProfile.JoinTag;//获取配置文件内的tag
}

//--------------数据处理区域--------------
//玩家玩家进入游戏事件处理
function LLSEPlayerOnJoin(player){
    if(!player.hasTag(configTag)){//判断玩家是否未选择生存模式

    }
}


//--------------监听接口注册--------------
mc.listen("onJoin",LLSEPlayerOnJoin);//玩家进入游戏监听（完全进入）
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