const PluginsName = 'gives';
const PluginsIntroduction = '一个用于强化give指令功能的插件';
const PluginsVersion = [0, 2, 2];
const PluginsOtherInformation = { "插件作者": "清漪花开", "开源地址": "https://github.com/FBQingYi/LLSE/blob/main/gives.js" };
let itemCmdType;

//命令注册
function CommandRegistration() {
    let Command = mc.newCommand("gives", "给你一个原版无法实现的give！", PermType.GameMasters);
    Command.mandatory("player", ParamType.Player);
    Command.mandatory("item", ParamType.Item);
    Command.mandatory("amount", ParamType.Int);
    Command.optional("itemDIsplayName", ParamType.String);
    Command.optional("Json", ParamType.JsonValue);
    Command.overload(["player", "item", "amount", "itemDIsplayName", "Json"]);
    Command.overload(["player", "item", "amount", "Json"]);
    Command.setCallback((_cmd, _origin, output, results) => {
        setTimeout(function () {
            let nbt = ""
            if (results.Json == undefined) {
                nbt = NewItemNbt(itemCmdType, results.itemDIsplayName, "", results.amount)
            } else {
                nbt = NewItemNbt(itemCmdType, results.itemDIsplayName, JSON.parse(results.Json), results.amount)
            }
            let it = mc.newItem(nbt);
            let playerList = results.player;
            let playerName = "";
            for (let i in playerList) {
                let player = playerList[i];
                player.giveItem(it);
                playerName += `${player.name} `;
            }
        }, 10)
        output.success(`ok`)
    });
    Command.setup();
}

/**
 * 修改物品nbt
 * @param {Item} item 物品对象
 * @param {String} itemDIsplayName 显示名称
 * @param {Array} itemEnch 魔咒列表 
 * @param {Int} itemCount 数量
 * @returns 
 */
function NewItemNbt(item, itemDIsplayName, itemEnch, itemCount) {
    let nbt = item.getNbt();
    let nbt1 = "";
    if (itemDIsplayName == undefined) {
        nbt1 = new NbtCompound({
            "Damage": new NbtInt(0),
            "RepairCost": new NbtInt(1),
            "ench": new NbtList([]),
        })
    } else {
        nbt1 = new NbtCompound({
            "Damage": new NbtInt(0),
            "RepairCost": new NbtInt(1),
            "display": new NbtCompound({
                "Name": new NbtString(itemDIsplayName)
            }),
            "ench": new NbtList([]),
        })
    }
    if (itemEnch != "") {
        if (itemEnch.Enchantments != undefined) {
            for (let i = 0; i < itemEnch.Enchantments.length; i++) {
                let nbt2 = new NbtCompound({
                    "id": new NbtShort(parseInt(itemEnch.Enchantments[i].n)),
                    "lvl": new NbtShort(parseInt(itemEnch.Enchantments[i].l))
                })
                let ench = nbt1.getTag("ench");
                ench.addTag(nbt2);
            }
        }
    }
    nbt.setTag("tag", nbt1);
    nbt.setTag("Count", new NbtByte(parseInt(itemCount)));
    return nbt
}

mc.listen("onPlayerCmd", (_player, cmd) => {
    if (cmd.split(' ')[0] == 'gives' || cmd.split(' ')[0] == '/gives') {
        itemCmdType = mc.newItem('minecraft:' + cmd.split(' ')[2], 1)
    }
})

mc.listen("onCmdBlockExecute", (cmd, _pos, _isMinecart) => {
    if (cmd.split(' ')[0] == 'gives' || cmd.split(' ')[0] == '/gives') {
        itemCmdType = mc.newItem('minecraft:' + cmd.split(' ')[2], 1)
    }
})

mc.listen("onNpcCmd", (_npc, _pl, cmd) => {
    if (cmd.indexOf('gives') != -1) {
        itemCmdType = mc.newItem('minecraft:' + cmd.split('gives')[1].split(' ')[2], 1)
    }
})

mc.listen("onServerStarted", () => { CommandRegistration() })

ll.export(NewItemNbt,"NewItemNbt");
ll.registerPlugin(PluginsName, PluginsIntroduction, PluginsVersion, PluginsOtherInformation)