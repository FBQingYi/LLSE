let path = './plugins/Redress/';
if (!File.exists(path)) {
    let json = {"0001":{"已补偿":[],"执行指令":[]}}
    File.writeTo(path + 'config.json', JSON.stringify(json, null, "\t"));
}
let configJson = JSON.parse(File.readFrom(path + 'config.json'));

mc.listen("onJoin",(player)=>{
    for(let Number in configJson){
        let NumberPlayerList = configJson[Number]["已补偿"];
        let NumberCmdList = configJson[Number]["执行指令"];
        if(!NumberPlayerList.includes(player.xuid)){
            NumberCmdList.forEach(cmd => {
                mc.runcmdEx(cmd.replace(/{p}/g, `"${player.name}"`))
            });
            NumberPlayerList[NumberPlayerList.length] = player.xuid;
            File.writeTo(path + 'config.json', JSON.stringify(configJson, null, "\t"));
        }
    }
})