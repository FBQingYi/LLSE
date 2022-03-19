mc.listen("onServerStarted", () => {
    let Command = mc.newCommand("transfer", "前往另外一个服务器。", PermType.GameMasters);
    Command.setAlias("tr");
    Command.mandatory("player", ParamType.Player);
    Command.mandatory("IP", ParamType.String);
    Command.mandatory("Port", ParamType.Int);
    Command.overload(["player", "IP", "Port"]);
    Command.setCallback((cmd, origin, output, results) => {
        let playerList = results.player;
        let playerName = "";
        for (let i in playerList) {
            let player = playerList[i];
            player.transServer(results.IP, results.Port);
            playerName += `${player.name} `;
        }
        if(playerName == ""){
            output.error(`没找到合适的目标。`)
        }else{
            output.success(`玩家 ${playerName} 前往 ${results.IP}：${results.Port} 成功。`)
        }
    });
    Command.setup();
})

ll.registerPlugin('transfer', '真指令版跨服传送', [0, 0, 1], { "插件作者": "清漪花开" })