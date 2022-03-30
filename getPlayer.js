mc.listen("onServerStarted", () => {
    //秃头guo修改
    let Command = mc.newCommand('c', '测试指令！', PermType.Any)
    let playerListName = "";
    Command.setCallback((cmd, origin, output, results) => {
        let playerList = mc.getOnlinePlayers();
        playerList.forEach((player) => {
            playerListName += player.name + '\n';
        })
    })
    outp.success(playerListName);
    Command.setup();
})
