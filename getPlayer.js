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
<<<<<<< HEAD
//从
=======
>>>>>>> 898962f01bd7914fe3f0ec77eed2401ed5f00bd5
