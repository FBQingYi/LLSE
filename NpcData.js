let path = './plugins/NpcData/';

mc.listen("onServerStarted", () => {
    let command = mc.newCommand('bc', '储存目前已加载区块的npc数据', PermType.GameMasters);
    command.setEnum("ChangeAction", ["add", "set"]);
    command.mandatory("action", ParamType.Enum, "ChangeAction", 1);
    command.overload(["ChangeAction"]);
    command.setCallback((cmd, origin, output, results) => {
        if (results.action == 'add') {
            let entityList = mc.getAllEntities();
            entityList.forEach(entity => {
                if (entity.type == 'minecraft:npc') {
                    let pathPost = `${Math.round(entity.pos.x)}_${entity.pos.y}_${Math.round(entity.pos.z)}`;
                    File.writeTo(path + pathPost + '.snbt', entity.getNbt().toSNBT());
                }
            });
            output.success('成功！')
        }
    })
    command.setup()
})

ll.registerPlugin('NpcData', '保存npc数据', [0,0,1], {"插件作者":"清漪花开","版权所有":"LIGHT服务器"});