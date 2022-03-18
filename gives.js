const PluginsName = 'gives';
const PluginsIntroduction = '一个用于强化give指令功能的插件';
const PluginsVersion = [0, 1, 6];
const PluginsOtherInformation = { "插件作者": "清漪花开" ,"开源地址":"https://github.com/FBQingYi/LLSE/blob/main/gives.js"};


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
    Command.setCallback((cmd, origin, output, results) => {
        let nbt = ""
        if (results.Json == undefined) {
            nbt = NewItemNbt(results.item, results.itemDIsplayName, "", results.amount)
        } else {
            nbt = NewItemNbt(results.item, results.itemDIsplayName, JSON.parse(results.Json), results.amount)
        }
        let it = mc.newItem(nbt);
        let playerList = results.player;
        let playerName = "";
        for (let i in playerList) {
            let player = playerList[i];
            player.giveItem(it);
            playerName += `${player.name} `;
        }
        output.success(`给予玩家 ${playerName} ${results.item.name} ${results.amount} 个。`)
    });
    Command.setup();
}

//修改nbt
function NewItemNbt(item, itemDIsplayName, itemEnch, itemCount) {
    let nbt = item.getNbt();
    let nbt1 ="";
    if(itemDIsplayName == undefined){
        nbt1 = new NbtCompound({
            "Damage": new NbtInt(0),
            "RepairCost": new NbtInt(1),
            "ench": new NbtList([]),
        })
    }else{
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
            for (let i = 0; i < itemEnch.length; i++) {
                let nbt2 = new NbtCompound({
                    "id": new NbtShort(parseInt(itemEnch[i].n)),
                    "lvl": new NbtShort(parseInt(itemEnch[i].l))
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

mc.listen("onServerStarted", () => { CommandRegistration() })
ll.registerPlugin(PluginsName, PluginsIntroduction, PluginsVersion, PluginsOtherInformation)