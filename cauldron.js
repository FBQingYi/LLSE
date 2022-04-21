//--------------基础信息定义--------------
const pluginName = 'cauldron';
const pluginDescribe = '让漏斗能把炼药锅的岩浆自动装桶';
const pluginVersion = [0, 0, 1];
const pluginOther = { "开源地址": "https://github.com/FBQingYi/LLSE/blob/main/cauldron.js" };
const pluginConfigPath = './plugins/cauldron/';

//--------------基础配置文件--------------
const LavaBucketSNbt = '{"Count":1b,"Damage":0s,"Name":"minecraft:lava_bucket","WasPickedUp":0b}';
const CauldronSnbt = '{"name":"minecraft:cauldron","states":{"cauldron_liquid":"water","fill_level":0},"version":17959425}'

mc.listen("onBlockChanged", (beforeBlock, afterBlock) => {
    if (beforeBlock.type == 'minecraft:cauldron' && afterBlock.type == 'minecraft:lava_cauldron') {
        let block = mc.getBlock(afterBlock.pos.x, afterBlock.pos.y - 1, afterBlock.pos.z, afterBlock.pos.dimid);
        if (block.type == 'minecraft:hopper') {
            let Block1Container = block.getContainer();
            let ctList = Block1Container.getAllItems();
            if (ctList[4] != undefined) {
                let item = ctList[4];
                if (item.type == 'minecraft:bucket') {
                    let NewItmNbt = mc.newItem(NBT.parseSNBT(LavaBucketSNbt));
                    if (Block1Container.hasRoomFor(NewItmNbt)) {
                        Block1Container.removeItem(4, 1);
                        Block1Container.addItem(NewItmNbt);
                        mc.setBlock(afterBlock.pos.x, afterBlock.pos.y, afterBlock.pos.z, afterBlock.pos.dimid, NBT.parseSNBT(CauldronSnbt))
                    }
                }
            }
        }
    }
})

ll.registerPlugin(pluginName, pluginDescribe, pluginVersion, pluginOther);