//--------------基础信息定义--------------
const pluginName = 'cauldron';
const pluginDescribe = '让漏斗能把炼药锅的岩浆自动装桶';
const pluginVersion = [1, 0, 2];
const pluginOther = { "开源地址": "https://github.com/FBQingYi/LLSE/blob/main/cauldron.js" };

//--------------基础配置文件--------------
const LavaBucketSNbt = '{"Count":1b,"Damage":0s,"Name":"minecraft:lava_bucket","WasPickedUp":0b}';
const CauldronSnbt = '{"name":"minecraft:cauldron","states":{"cauldron_liquid":"water","fill_level":0},"version":17959425}'

mc.listen("onHopperPushOut", (pos) => {
    let block = mc.getBlock(pos.x, pos.y + 1, pos.z, pos.dimid);
    let block2 = mc.getBlock(pos.x, pos.y - 1, pos.z, pos.dimid);
    let hopperBlock = mc.getBlock(pos);
    if (block.type == 'minecraft:lava_cauldron' || block.type == 'minecraft:cauldron') {
        let Block1Container = hopperBlock.getContainer();
        let ctList = Block1Container.getAllItems();
        if (block2.hasContainer()) {
            let Block2Container = block2.getContainer();
            if (block.type == 'minecraft:lava_cauldron') {
                for (let i = 0; i < ctList.length; i++) {
                    let item = ctList[i];
                    if (item.name != "") {
                        if (item.type == "minecraft:bucket") {
                            let NewItmNbt = mc.newItem(NBT.parseSNBT(LavaBucketSNbt));
                            if (Block2Container.hasRoomFor(NewItmNbt)) {
                                Block1Container.removeItem(i, 1);
                                Block2Container.addItem(NewItmNbt);
                                mc.setBlock(pos.x, pos.y + 1, pos.z, pos.dimid, NBT.parseSNBT(CauldronSnbt))
                                return false;
                            }
                        }
                    }
                };
            } else {
                for (let i = 0; i < ctList.length; i++) {
                    let item = ctList[i];
                    if (item.name != "" && item.type != "minecraft:bucket") {
                        if (Block2Container.hasRoomFor(item)) {
                            if (Block2Container.addItem(item)) {
                                Block1Container.removeItem(i, item.count);
                            }
                            return false;
                        }
                    }
                }
            }
        }
        return false;
    }
})

mc.listen("onHopperSearchItem", (pos, _isMinecart) => {
    let block = mc.getBlock(pos.x, pos.y + 2, pos.z, pos.dimid);
    if (block.type == 'minecraft:lava_cauldron' || block.type == 'minecraft:cauldron') {
        return false;
    }
})

ll.registerPlugin(pluginName, pluginDescribe, pluginVersion, pluginOther);