//--------------基础信息定义--------------
const pluginName = 'Difficult_survival';
const pluginDescribe = '强化生存';
const pluginVersion = [1, 9, 9];
const pluginOther = { "作者": "清漪花开" };
const path = './plugins/Difficult survival/';
const path1 = './plugins/Difficult survival/data/';
const path2 = './plugins/Difficult survival/data/Book/';
const path3 = './plugins/Difficult survival/data/Lang/';
const version = '1.9.9';

if (!File.exists(path)) {
    //玩家选择消息位置，通知内容配置文件
    File.writeTo(path1 + 'PlayerMsgData.json', JSON.stringify({}, null, "\t"));
    //金币解锁装备配置文件
    let GoldCoinLimitList = { 10000: ["minecraft:netherite_sword", "minecraft:netherite_hoe", "minecraft:netherite_axe", "minecraft:netherite_pickaxe", "minecraft:netherite_shovel", "minecraft:thrown_trident"], 6000: ["minecraft:diamond_sword", "minecraft:diamond_hoe", "minecraft:diamond_axe", "minecraft:diamond_pickaxe", "minecraft:diamond_shovel"], 3500: ["minecraft:golden_sword", "minecraft:golden_hoe", "minecraft:golden_axe", "minecraft:golden_pickaxe", "minecraft:golden_shovel"], 3200: ["minecraft:iron_sword", "minecraft:iron_hoe", "minecraft:iron_axe", "minecraft:iron_pickaxe", "minecraft:iron_shovel"], 1000: ["minecraft:stone_sword", "minecraft:stone_hoe", "minecraft:stone_axe", "minecraft:stone_pickaxe", "minecraft:stone_shovel"], 100: ["minecraft:wooden_sword", "minecraft:wooden_hoe", "minecraft:wooden_axe", "minecraft:wooden_pickaxe", "minecraft:wooden_shovel"] };
    File.writeTo(path1 + 'GoldCoinLimitList.json', JSON.stringify(GoldCoinLimitList, null, "\t"));
    //破坏加金币配置文件
    let DestroyToGetTheListOfGoldCoins = { "minecraft:grass": 1, "minecraft:coal_ore": 1, "minecraft:stone": 1, "minecraft:iron_ore": 2, "minecraft:gold_ore": 2, "minecraft:diamond_ore": 3 };
    File.writeTo(path1 + 'DestroyBlockAddMoney.json', JSON.stringify(DestroyToGetTheListOfGoldCoins, null, "\t"));
    //击杀加金币配置文件
    let KillPlusGoldList = { "minecraft:skeleton": 1, "minecraft:zombie": 1, "minecraft:spider": 1, "minecraft:creeper": 2, "minecraft:zombie_villager": 1 };
    File.writeTo(path1 + 'KillPlusGold.json', JSON.stringify(KillPlusGoldList, null, "\t"));
    //技能相关配置文件
    let WeaponSkillsMoneyList = { "True_Damage": { "buy": 1000, "SkillLevel": 3, "tag": "True_Damage", "PictureURL": "https://s3.bmp.ovh/imgs/2021/09/e7cadbcf80cab7f9.png", "Upgrade": { "2": 5000, "3": 10000 }, "Damage": { "1": { "Harm": 1, "CD": 60 }, "2": { "Harm": 2, "CD": 50 }, "3": { "Harm": 3, "CD": 40 } } }, "Blast_Attack": { "buy": 1500, "SkillLevel": 3, "tag": "Blast_Attack", "PictureURL": "https://s3.bmp.ovh/imgs/2021/09/c43e957897b3de91.png", "Upgrade": { "2": 10000, "3": 15000 }, "Damage": { "1": { "Harm": 1, "Scope": 2, "CD": 80 }, "2": { "Harm": 2, "Scope": 3, "CD": 70 }, "3": { "Harm": 3, "Scope": 4, "CD": 60 } } }, "Monster_Gift": { "buy": 2000, "SkillLevel": 4, "tag": "Monster_Gift", "PictureURL": "https://s3.bmp.ovh/imgs/2021/09/e0d9bbfe35abed45.png", "Upgrade": { "2": 15000, "3": 30000, "4": 50000 }, "Damage": { "1": { "CD": 240 }, "2": { "CD": 230 }, "3": { "CD": 220 }, "4": { "CD": 210 } } }, "Holy_Guardian": { "buy": 2500, "SkillLevel": 3, "PictureURL": "https://s3.bmp.ovh/imgs/2021/09/27c6bebd486eb69a.png", "Upgrade": { "2": 10000, "3": 15000 }, "Damage": { "1": { "Healing amount": 2, "CD": 190 }, "2": { "Healing amount": 3, "CD": 180 }, "3": { "Healing amount": 4, "CD": 170 } } } };
    File.writeTo(path1 + 'WeaponSkillsMoneyList.json', JSON.stringify(WeaponSkillsMoneyList, null, "\t"));
    //吃食物获得buff列表
    let EatFoodBuffList = { "debuff": ["slowness", "mining_fatigue", "instant_damage", "nausea", "blindness", "hunger", "weakness", "poison", "wither", "unluck", "bad_omen", "darkness"], "buff": ["speed", "haste", "strength", "instant_health", "jump_boost", "regeneration", "resistance", "fire_resistance", "water_breathing", "invisibility", "night_vision", "health_boost", "absorption", "saturation", "glowing", "levitation", "luck", "slow_falling", "conduit_power", "dolphins_grace", "hero_of_the_village"] };
    File.writeTo(path1 + 'EatFoodBuffList.json', JSON.stringify(EatFoodBuffList, null, "\t"));
    //食物对应的金币和buff类型列表
    let FoodBuffTypeMoneyList = { "minecraft:apple": ["buff", 2], "minecraft:rotten_flesh": ["debuff", 10] };
    File.writeTo(path1 + 'FoodBuffTypeMoneyList.json', JSON.stringify(FoodBuffTypeMoneyList, null, "\t"));
    //物品可附魔列表
    let ItemEnchantList = { "en_US": { "aqua_affinity": { "Price": 2000, "ID": 8 }, "bane_of_arthropods": { "Price": 3000, "ID": 11 }, "blast_protection": { "Price": 4000, "ID": 3 }, "channeling": { "Price": 3000, "ID": 32 }, "depth_strider": { "Price": 3000, "ID": 7 }, "efficiency": { "Price": 8000, "ID": 15 }, "feather_falling": { "Price": 5000, "ID": 2 }, "fire_aspect": { "Price": 5000, "ID": 13 }, "fire_protection": { "Price": 3000, "ID": 1 }, "flame": { "Price": 1000, "ID": 21 }, "fortune": { "Price": 10000, "ID": 18 }, "frost_walker": { "Price": 3000, "ID": 25 }, "impaling": { "Price": 6000, "ID": 29 }, "infinity": { "Price": 1000, "ID": 22 }, "knockback": { "Price": 3000, "ID": 12 }, "looting": { "Price": 15000, "ID": 14 }, "loyalty": { "Price": 1000, "ID": 31 }, "luck_of_the_sea": { "Price": 15000, "ID": 23 }, "lure": { "Price": 10000, "ID": 24 }, "mending": { "Price": 10000, "ID": 26 }, "multishot": { "Price": 6000, "ID": 33 }, "piercing": { "Price": 6000, "ID": 34 }, "power": { "Price": 13000, "ID": 19 }, "projectile_protection": { "Price": 4000, "ID": 4 }, "protection": { "Price": 9000, "ID": 0 }, "punch": { "Price": 6000, "ID": 20 }, "quick_charge": { "Price": 3000, "ID": 35 }, "respiration": { "Price": 3000, "ID": 6 }, "riptide": { "Price": 3000, "ID": 30 }, "sharpness": { "Price": 9000, "ID": 9 }, "silk_touch": { "Price": 4000, "ID": 16 }, "smite": { "Price": 6000, "ID": 10 }, "soul_speed": { "Price": 2000, "ID": 36 }, "thorns": { "Price": 8000, "ID": 5 }, "unbreaking": { "Price": 12000, "ID": 17 } }, "zh_CN": { "水下速掘": { "Price": 2000, "ID": 8 }, "节肢杀手": { "Price": 3000, "ID": 11 }, "爆炸保护": { "Price": 4000, "ID": 3 }, "引雷": { "Price": 3000, "ID": 32 }, "深海探索者": { "Price": 3000, "ID": 7 }, "效率": { "Price": 8000, "ID": 15 }, "摔落保护": { "Price": 5000, "ID": 2 }, "火焰附加": { "Price": 5000, "ID": 13 }, "火焰保护": { "Price": 3000, "ID": 1 }, "火矢": { "Price": 1000, "ID": 21 }, "时运": { "Price": 10000, "ID": 18 }, "冰霜行者": { "Price": 3000, "ID": 25 }, "穿刺": { "Price": 6000, "ID": 29 }, "无限": { "Price": 1000, "ID": 22 }, "击退": { "Price": 3000, "ID": 12 }, "抢夺": { "Price": 15000, "ID": 14 }, "忠诚": { "Price": 1000, "ID": 31 }, "海之眷顾": { "Price": 15000, "ID": 23 }, "饵钓": { "Price": 10000, "ID": 24 }, "经验修补": { "Price": 10000, "ID": 26 }, "多重射击": { "Price": 6000, "ID": 33 }, "穿透": { "Price": 6000, "ID": 34 }, "力量": { "Price": 13000, "ID": 19 }, "弹射物保护": { "Price": 4000, "ID": 4 }, "保护": { "Price": 9000, "ID": 0 }, "冲击": { "Price": 6000, "ID": 20 }, "快速装填": { "Price": 3000, "ID": 35 }, "水下呼吸": { "Price": 3000, "ID": 6 }, "激流": { "Price": 3000, "ID": 30 }, "锋利": { "Price": 9000, "ID": 9 }, "精准采集": { "Price": 4000, "ID": 16 }, "亡灵杀手": { "Price": 6000, "ID": 10 }, "灵魂疾行": { "Price": 2000, "ID": 36 }, "荆棘": { "Price": 8000, "ID": 5 }, "耐久": { "Price": 12000, "ID": 17 } } };
    File.writeTo(path1 + 'ItemEnchantList.json', JSON.stringify(ItemEnchantList, null, "\t"));
    //受伤不掉落物品列表
    let ListOfItemsNotDropped = { "minecraft:netherite_sword": true };
    File.writeTo(path1 + 'ListOfItemsNotDropped.json', JSON.stringify(ListOfItemsNotDropped, null, "\t"));
    //随机复活的生物列表
    let randomlyResurrectedCreatures = ["minecraft:skeleton", "minecraft:zombie", "minecraft:spider", "minecraft:creeper", "minecraft:zombie_villager"];
    File.writeTo(path1 + 'randomlyResurrectedCreatures.json', JSON.stringify(randomlyResurrectedCreatures, null, "\t"));
    //基础配置文件列表
    let BasicProfile = { "language": "zh_CN", "Death_related_configuration": { "Does_death_deduct_gold_coins": true, "Does_non-kill_death_deduct_gold_coins": true, "Gold_coin_limit": 0 }, "Cross-world_related_configuration": { "Whether_to_deduct_gold_coins_across_the_world": true, "Overworld": 100, "Hell": 200, "TheEnd": 300 }, "Destruction_plus_gold_coins": { "Whether_to_enable_gold_limit_destruction": true, "Whether_to_limit_the_number_of_daily_destruction_plus_gold_coins": true, "Destruction_Cap": 500, "Reset_Time": 4 }, "Attack_Related": { "Whether_to_enable_gold_limited_weapons": true, "Whether_to_enable_attack_chance_is_invalid": true, "Invalid_chance": 25, "Whether_to_enable_damaged_items": true, "Item_drop_chance_in_PVE": 25, "Item_drop_chance_in_PVP": 100, "Whether_there_is_no_real_injury_to_the_item": true, "Does_PVP_deduct_gold_coins": true, "PVP_deduction_gold_coins_quantity": 10, "Is_there_a_cap_on_PVE_plus_gold_coins": true, "PVE_plus_gold_limit": 500 }, "Ender_dragon_related": { "Whether_to_limit_the_damage_of_specific_weapons_to_the_ender_dragon": true, "Weapon_ID_that_can_deal_damage": "minecraft:netherite_sword", "Whether_to_set_the_player's_ineffective_chance_of_attacking_the_ender_dragon": true, "Attack_on_the_ender_dragon_ineffective_chance": 25, "Does_the_death_of_the_ender_dragon_cause_an_explosion": true, "Blast_radius": 100, "Can_the_ender_dragon_take_ranged_damage": false, "How_much_gold_to_kill_the_ender_dragon": 10000 }, "Projectile_related": { "Whether_to_enable_the_arrow_fishing_rod_trident_gold_limit": true, "Does_fishing_deduct_gold_coins": true, "Trident_throw_to_unlock_gold_coins": 3000, "Fishing_rod_unlocks_gold_coins": 2000, "Arrows_unlock_coins": 1000, "Fishing_Buckle_Gold_Coins_quantity": 2 }, "Player_growth": { "Whether_to_enable_the_Player_growth_system": true, "Player's_initial_health": 10, "The_player_adds_a_bit_of_blood_for_every_gold_coin": 1000, "The_player_adds_a_point_of_attack_for_every_gold_coin": 5000 }, "Other_Settings": { "Repair_equipment_durability_price": 200, "Whether_to_show_the_sidebar": true, "Whether_to_intercept_the_bed_explosion": true, "Whether_to_intercept_respawn_anchor_explosions": true, "Whether_to_show_health_bar_when_attacking": true, "Whether_the_killed_monster_is_randomly_resurrected": true, "Chance_of_resurrection": 75, "Plugin_Directive": "/gt", "Plugin_OP_Settings_Panel": "/gtop gui", "Added_hand-held_items_to_not_drop_commands_for_injuries": "/gtop hold", "Set_the_item_in_hand_as_the_item_given_in_the_suit": "/gtop set", "Item_default_enchantment_level": 5, "Debt_record_scoreboard_name": "arrears", "Enable_fracture": true, "Fracture_probability": 60 } };
    File.writeTo(path + 'config.json', JSON.stringify(BasicProfile, null, "\t"));
    //介绍书原始内容
    let IntroductionBookOriginal = '{"Count":1b,"Damage":0s,"Name":"minecraft:writable_book","WasPickedUp":0b,"tag":{"pages":[{"photoname":"","text":"    欢迎来到这个全新的世界，请详细阅读此书，可能会对你之后在这个世界生存有一定的帮助！\n    公元2087年，以风云为首的重启党在腐竹出巡时造反，期间成功夺得服务器部分权限，但是没想到腐竹早就有所准备，在重启党即将成功完全占领服务器时，服务器发生了翻天覆地的变化，自此，服务器来到了一个全新的纪元，肝帝纪元！\n    在这个纪元中，一切都变得异常困难，你的背包和末影箱不再安全。希望你能坚持到最后！"},{"photoname":"","text":"肝帝纪元规则介绍：\n1，你只能通过手/和相关武器工具进行攻击和破坏。\n2，你受到伤害有50%的几率掉落背包物品，如果这个伤害来自玩家，那么几率将会变为100%。\n3，你要小心不能死亡，不然会随机掉落你的金币。\n4，吃食物的时候如果你的金币大于等于5，那么将会自动扣款并给你一个随机的buff/debuff。\n5，在你对生物进行攻击时，有几率攻击无效，请小心。\n————————>请翻页——————>>>"},{"photoname":"","text":"6,如果你的金币不够，那么你将不 能使用武器/工具以及钓鱼。\n7，使用钓竿每次会消耗1金币，不管你是钓鱼还是干啥。\n8，如果你攻击了村民或者铁傀儡，那么将会扣除你20金币并警告你不要恶意攻击。\n9，pvp攻击每次扣除5金币，如果金币不足那么你的攻击将会无效。\n10，你可以通过指令/jineng来购买武器的技能，1个玩家只能购买一次，请谨慎选择。\n11，玩家只有使用下界合金剑才能攻击末影龙且伤害有几率无效"},{"photoname":"","text":"12，跨世界时会扣除金币，如果余额不足那么将会计入欠账模式，后期逐步扣款。\n13，末影龙死亡后，将在击杀他的玩家为中心引发一个半径100的球形区域的爆炸。\n14，击杀末影龙的玩家将会获得屠龙者的称号，玩家可使用/jineng指令实时查询他的位置。\n15.击杀屠龙者后，你将会获得一次死亡免掉金币的机会，并且会获得解脱者称号。你还能获得屠龙者末影箱的随机物品一个， 如果末影箱没有物品你将会获得他"},{"photoname":"","text":"的全部金币。\n16，末影龙会根据玩家数量进行强化，当末地多进入一 个玩家时，属性会在当前状态下*2，离开时会/2，以此类推。\n17，当末地没有玩家时，末影龙的属性将会恢复到默认状态。"},{"photoname":"","text":"武器技能介绍：\n真实伤害：\n此技能分为3个等级，分别在原始的伤害上增加1/2/3点伤害，此技能造成的伤害无视 任何防御，CD时间为60/50/40秒。\n爆炸攻击：\n此技能会在被攻击的生物处造成爆炸，分为3个等级，伤害分别是1/2/3，范围是2/3/4 为半径的球形，CD时间为80/70/60.（此技能无法在末地使用）。\n\n------>请翻页---->>"},{"photoname":"","text":"神圣守护：\n 此技能会使被你的攻击的对象回血，分为3个等级，分别恢复2/3/4滴血，CD时间为190/180/170（可超过血量上限）。\n取你装备：\n此 技能分为4个等级，分别能取1/2/3/4件装备，如果你只有一级，但是他有4件装备，那么你只能获得1件但是他会失去全部。CD时间为240/230/220/210秒"},{"photoname":"","text":"金币来源介绍：\n击杀：\n骷髅 1金币\n僵尸 1金币\n蜘蛛 1金币\n苦力怕 2金币\n破坏：\n原木 1金币（每天200个上限）\n草方块 1金币\n煤炭 1金币\n石头 1金币\n铁矿石 2金币\n金矿石 2金币\n钻石矿石 3金币"},{"photoname":"","text":"近战武器/工具解锁：\n100金币\n木剑/斧/稿/锄/铲\n1000金币\n石剑/斧/稿/锄/铲\n3200金币\n铁剑/斧/镐/锄/铲\n3500金币\n金剑/斧/稿/锄/铲\n6000金币\n钻石剑/斧/稿/锄/铲\n10000金币\n下界合金剑/斧/稿/锄/铲\n三叉戟"},{"photoname":"","text":"远程武器解锁：\n1000金币\n钓鱼\n2000金币\n弓箭/弩箭\n3000金币\n三叉戟"}]}}';
    File.writeTo(path2 + 'IntroductionBookOriginal.txt', IntroductionBookOriginal);
    File.writeTo(path2 + 'ServerGiveBooks.txt', IntroductionBookOriginal);
    //语言json数据
    let articlesInChineseAndEnglish = { "badOmen": "凶兆", "villageHero": "村庄英雄", "arrowDamage": "力量", "arrowFire": "火矢", "arrowInfinite": "无限", "arrowKnockback": "冲击", "crossbowMultishot": "多重箭", "crossbowPiercing": "穿透", "crossbowQuickCharge": "快速装填", "digging": "效率", "durability": "耐久", "fishingSpeed": "饵钓", "frostwalker": "冰霜行者", "knockback": "击退", "lootBonus": "抢夺", "lootBonusDigger": "时运", "lootBonusFishing": "海之眷顾", "mending": "经验修补", "oxygen": "水下呼吸", "all": "保护", "explosion": "爆炸保护", "fall": "摔落保护", "projectile": "弹射物保护", "soul_speed": "灵魂疾行", "thorns": "荆棘", "untouching": "精准采集", "waterWalker": "深海探索者", "waterWorker": "水下速掘", "tridentChanneling": "引雷", "tridentLoyalty": "忠诚", "tridentRiptide": "激流", "tridentImpaling": "穿刺", "area_effect_cloud": "区域效果云雾", "armor_stand": "盔甲架", "bat": "蝙蝠", "bee": "蜜蜂", "blaze": "烈焰人", "cat": "猫", "cave_spider": "洞穴蜘蛛", "chicken": "鸡", "cow": "牛", "creeper": "爬行者", "dolphin": "海豚", "goat": "山羊", "panda": "熊猫", "donkey": "驴", "dragon_fireball": "末影龙火球", "drowned": "溺尸", "egg": "鸡蛋", "elder_guardian": "远古守卫者", "ender_crystal": "末影水晶", "ender_dragon": "末影龙", "enderman": "末影人", "endermite": "末影螨", "ender_pearl": "末影珍珠", "evocation_illager": "唤魔者", "evocation_fang": "唤魔者尖牙", "eye_of_ender_signal": "末影之眼", "falling_block": "下落的方块", "fireball": "火球", "fireworks_rocket": "焰火火箭", "fishing_hook": "鱼钩", "fox": "狐狸", "cod": "鳕鱼", "pufferfish": "河豚", "salmon": "鲑鱼", "tropicalfish": "热带鱼", "axolotl": "美西螈", "ghast": "恶魂", "glow_squid": "发光鱿鱼", "piglin_brute": "残暴猪灵", "guardian": "守卫者", "hoglin": "疣猪兽", "horse": "马", "husk": "尸壳", "ravager": "劫掠兽", "iron_golem": "铁傀儡", "item": "物品", "leash_knot": "拴绳结", "lightning_bolt": "闪电", "lingering_potion": "滞留药水", "llama": "羊驼", "llama_spit": "羊驼口水", "magma_cube": "岩浆怪", "chest_minecart": "运输矿车", "command_block_minecart": "命令方块矿车", "furnace_minecart": "动力矿车", "hopper_minecart": "漏斗矿车", "tnt_minecart": "TNT 矿车", "mule": "骡子", "mooshroom": "哞菇", "moving_block": "移动中的方块", "ocelot": "豹猫", "painting": "画", "parrot": "鹦鹉", "phantom": "幻翼", "pig": "猪", "piglin": "猪灵", "pillager": "掠夺者", "polar_bear": "北极熊", "rabbit": "兔子", "sheep": "羊", "shulker": "潜影贝", "shulker_bullet": "潜影贝子弹", "silverfish": "蠹虫", "skeleton": "骷髅", "skeleton_horse": "骷髅马", "stray": "流浪者", "small_fireball": "小火球", "snowball": "雪球", "snow_golem": "雪傀儡", "spider": "蜘蛛", "splash_potion": "药水", "squid": "鱿鱼", "strider": "炽足兽", "thrown_trident": "三叉戟", "tripod_camera": "三脚架摄像机", "turtle": "海龟", "vex": "恼鬼", "villager": "村民", "armor": "盔甲匠", "butcher": "屠夫", "cartographer": "制图师", "cleric": "牧师", "farmer": "农民", "fisherman": "渔夫", "fletcher": "制箭师", "leather": "皮匠", "librarian": "图书管理员", "shepherd": "牧羊人", "tool": "工具匠", "weapon": "武器匠", "mason": "石匠", "unskilled": "不熟练的村民", "villager_v2": "村民", "vindicator": "卫道士", "wandering_trader": "流浪商人", "witch": "女巫", "wither_skeleton": "凋灵骷髅", "wither_skull": "凋灵头颅", "wither_skull_dangerous": "凋灵头颅", "wolf": "狼", "xp_orb": "经验球", "xp_bottle": "附魔之瓶", "zoglin": "僵尸疣猪兽", "zombie": "僵尸", "zombie_horse": "僵尸马", "zombie_pigman": "僵尸猪灵", "zombie_villager": "僵尸村民", "zombie_villager_v2": "怪人村民", "endcity": "末地之城", "fortress": "下界要塞", "mansion": "林地宅邸", "mineshaft": "废弃矿井", "missingno": "未知功能", "monument": "海底遗迹", "stronghold": "要塞", "temple": "神庙", "village": "村庄", "shipwreck": "沉船", "buriedtreasure": "埋藏的宝藏", "ruins": "海洋废墟", "pillageroutpost": "掠夺者前哨", "bastionremnant": "堡垒遗迹", "ruinedportal": "破坏的传送门", "apple": "苹果", "axolotlAdultBodySingle": "成年 %1$s 美西螈", "axolotlBabyBodySingle": "幼年 %1$s 美西螈", "axolotlColorLucy": "白化", "axolotlColorCyan": "青色", "axolotlColorGold": "金色", "axolotlColorWild": "棕色", "axolotlColorBlue": "蓝色", "golden_apple": "金苹果", "appleEnchanted": "附魔苹果", "tipped_arrow": "药箭", "black": "黑色旗帜", "blue": "蓝色旗帜", "brown": "棕色旗帜", "cyan": "青色旗帜", "gray": "灰色旗帜", "green": "绿色旗帜", "illager_captain": "灾厄村民旗帜", "lightBlue": "淡蓝色旗帜", "lime": "黄绿色旗帜", "magenta": "品红色旗帜", "pink": "粉红色旗帜", "purple": "紫色旗帜", "red": "红色旗帜", "white": "白色旗帜", "yellow": "黄色旗帜", "steak": "牛排", "beef": "生牛肉", "beetroot_soup": "甜菜根汤", "blaze_powder": "烈焰粉", "blaze_rod": "烈焰棒", "bone": "骨头", "book": "书", "chainmail_boots": "锁链靴子", "leather_boots": "皮革靴子", "diamond_boots": "钻石靴子", "golden_boots": "金靴子", "iron_boots": "铁靴子", "bow": "弓", "bowl": "碗", "bread": "面包", "brewing_stand": "酿造台", "brick": "砖", "bucket": "桶", "bucketLava": "熔岩桶", "bucketWater": "水桶", "bucketFish": "桶装鳕鱼", "bucketSalmon": "桶装鲑鱼", "bucketTropical": "桶装热带鱼", "bucketPuffer": "桶装河豚", "bucketCustomFish": "桶装 ", "bucketAxolotl": "美西螈桶", "tropicalColorWhite": "白色", "tropicalColorOrange": "橙色", "tropicalColorMagenta": "品红色", "tropicalColorSky": "天蓝色", "tropicalColorYellow": "黄色", "tropicalColorLime": "黄绿色", "tropicalColorRose": "玫瑰色", "tropicalColorGray": "灰色", "tropicalColorSilver": "银色", "tropicalColorTeal": "水鸭色", "tropicalColorPlum": "紫红色", "tropicalColorBlue": "蓝色", "tropicalColorBrown": "棕色", "tropicalColorGreen": "绿色", "tropicalColorRed": "红色", "tropicalSchoolAnemone": "海葵鱼", "tropicalSchoolBlackTang": "黑刺尾鲷", "tropicalSchoolBlueDory": "拟刺尾鲷", "tropicalSchoolButterflyFish": "蝶鱼", "tropicalSchoolCichlid": "慈鲷", "tropicalSchoolClownfish": "海葵鱼", "tropicalSchoolCottonCandyBetta": "五彩搏鱼", "tropicalSchoolDottyback": "拟雀鲷", "tropicalSchoolEmperorRedSnapper": "川纹笛鲷", "tropicalSchoolGoatfish": "拟羊鱼", "tropicalSchoolMoorishIdol": "镰鱼", "tropicalSchoolOrnateButterfly": "华丽蝴蝶鱼", "tropicalSchoolParrotfish": "鹦嘴鱼", "tropicalSchoolQueenAngelFish": "额斑刺蝶鱼", "tropicalSchoolRedCichlid": "红慈鲷", "tropicalSchoolRedLippedBlenny": "红唇鳚鱼", "tropicalSchoolRedSnapper": "红边笛鲷", "tropicalSchoolThreadfin": "马鲅", "tropicalSchoolTomatoClown": "白条双锯鱼", "tropicalSchoolTriggerfish": "鳞鲀", "tropicalSchoolYellowTang": "黄刺尾鲷", "tropicalSchoolYellowtailParrot": "黄尾鹦嘴鱼", "canBreak": "会损坏：", "canPlace": "可以放在：", "golden_carrot": "金胡萝卜", "carrotOnAStick": "胡萝卜钓竿", "warped_fungus_on_a_stick": "诡异真菌钓竿", "charcoal": "木炭", "chainmail_chestplate": "锁链胸甲", "leather_chestplate": "皮革胸甲", "diamond_chestplate": "钻石胸甲", "golden_chestplate": "金胸甲", "iron_chestplate": "铁胸甲", "chorus_fruit": "紫颂果", "chorus_fruit_popped": "爆裂紫颂果", "cooked_beef": "熟牛肉", "cooked_chicken": "熟鸡肉", "cooked_porkchop": "熟猪排", "clay_ball": "粘土", "clock": "钟", "coal": "煤炭", "comparator": "红石比较器", "compass": "指南针", "lodestonecompass": "磁石指南针", "cookie": "曲奇", "crossbow": "弩", "diamond": "钻石", "repeater": "红石中继器", "acacia_door": "金合欢木门", "birch_door": "桦木门", "dark_oak_door": "深色橡木门", "jungle_door": "丛林木门", "wooden_door": "橡木门", "spruce_door": "云杉木门", "dragon_breath": "龙息", "glow_ink_sac": "发光墨囊", "glow_frame": "发光物品展示框", "elytra": "鞘翅", "emerald": "绿宝石", "emptyMap": "空白地图", "emptyLocatorMap": "空的定位器地图", "enchanted_book": "附魔书", "end_crystal": "末地水晶", "end_rod": "末地烛", "ender_eye": "末影之眼", "experience_bottle": "附魔之瓶", "feather": "羽毛", "fermented_spider_eye": "发酵蛛眼", "fireworks": "焰火火箭", "clownfish": "热带鱼", "cooked_fish": "熟鳕鱼", "fish": "生鳕鱼", "photo": "照片", "cooked_salmon": "熟鲑鱼", "fishing_rod": "钓鱼竿", "flint": "燧石", "flint_and_steel": "打火石", "flower_pot": "花盆", "frame": "物品展示框", "ghast_tear": "恶魂之泪", "glass_bottle": "玻璃瓶", "gold_nugget": "金粒", "iron_nugget": "铁粒", "diamond_axe": "钻石斧", "golden_axe": "金斧", "iron_axe": "铁斧", "stone_axe": "石斧", "wooden_axe": "木斧", "chainmail_helmet": "锁链头盔", "leather_helmet": "皮革帽子", "diamond_helmet": "钻石头盔", "golden_helmet": "金头盔", "iron_helmet": "铁头盔", "diamond_hoe": "钻石锄", "golden_hoe": "金锄", "iron_hoe": "铁锄", "stone_hoe": "石锄", "wooden_hoe": "木锄", "honey_bottle": "蜂蜜瓶", "honeycomb": "蜜脾", "horsearmordiamond": "钻石马铠", "horsearmorgold": "黄金马铠", "horsearmoriron": "铁马铠", "horsearmorleather": "皮革马铠", "gold_ingot": "金锭", "iron_ingot": "铁锭", "netherite_ingot": "下界合金锭", "netherite_scrap": "下界合金碎片", "netherite_sword": "下界合金剑", "netherite_pickaxe": "下界合金镐", "netherite_axe": "下界合金斧头", "netherite_shovel": "下界合金锹", "netherite_hoe": "下界合金锄头", "netherite_boots": "下界合金靴子", "netherite_leggings": "下界合金护腿", "netherite_chestplate": "下界合金胸甲", "netherite_helmet": "下界合金头盔", "lead": "拴绳", "chainmail_leggings": "锁链护腿", "leather_leggings": "皮革裤子", "diamond_leggings": "钻石护腿", "golden_leggings": "金护腿", "iron_leggings": "铁护腿", "nautilus_shell": "鹦鹉螺壳", "heart_of_the_sea": "海洋之心", "magma_cream": "岩浆膏", "map": "地图", "melon": "西瓜片", "milk": "牛奶", "minecartFurnace": "动力矿车", "trident": "三叉戟", "mushroom_stew": "蘑菇煲", "muttonCooked": "熟羊肉", "muttonRaw": "生羊肉", "name_tag": "命名牌", "netherbrick": "下界砖", "quartz": "下界石英", "netherStar": "下界之星", "paper": "纸", "diamond_pickaxe": "钻石镐", "golden_pickaxe": "金镐", "iron_pickaxe": "铁镐", "stone_pickaxe": "石镐", "wooden_pickaxe": "木镐", "porkchop_cooked": "熟猪排", "porkchop": "生猪排", "portfolio": "相片簿", "potato": "马铃薯", "baked_potato": "烤马铃薯", "poisonous_potato": "毒马铃薯", "prismarine_crystals": "海晶砂粒", "prismarine_shard": "海晶碎片", "pumpkin_pie": "南瓜派", "cooked_rabbit": "熟兔肉", "rabbit_foot": "兔子脚", "rabbit_hide": "兔子皮", "rabbit_stew": "兔肉煲", "redstone": "红石粉", "kelp": "海带", "dried_kelp": "干海带", "rotten_flesh": "腐肉", "ruby": "红宝石", "saddle": "鞍", "wheat_seeds": "种子", "beetroot_seeds": "甜菜根种子", "melon_seeds": "西瓜种子", "pumpkin_seeds": "南瓜种子", "shears": "剪刀", "diamond_shovel": "钻石锹", "golden_shovel": "金锹", "iron_shovel": "铁锹", "stone_shovel": "石锹", "wooden_shovel": "木锹", "spruce_sign": "云杉木告示牌", "birch_sign": "桦木告示牌", "jungle_sign": "丛林木告示牌", "acacia_sign": "金合欢木告示牌", "darkoak_sign": "深色橡木告示牌", "crimson_sign": "绯红告示牌", "warped_sign": "诡异木告示牌", "slime_ball": "粘液球", "speckled_melon": "闪烁的西瓜片", "spider_eye": "蜘蛛眼", "stick": "木棍", "string": "线", "sugar": "糖", "gunpowder": "火药", "diamond_sword": "钻石剑", "golden_sword": "金剑", "iron_sword": "铁剑", "stone_sword": "石剑", "wooden_sword": "木剑", "unbreakable": "无法破坏", "writable_book": "书和羽毛笔", "written_book": "成书", "glowstone_dust": "荧石粉", "shield": "护盾", "shulker_shell": "潜影壳", "totem": "不死图腾", "turtle_helmet": "海龟壳", "turtle_shell_piece": "鳞甲", "phantom_membrane": "幻翼膜", "sweet_berries": "甜浆果", "suspicious_stew": "迷之炖菜", "bucketPowderSnow": "粉状雪桶", "planks": "木板", "walls": "墙", "fenceGate": "栅栏门", "stairs": "阶梯", "door": "门", "glassPane": "玻璃板", "permission": "权限块", "slab": "台阶", "stoneBrick": "装饰石头", "woolCarpet": "羊毛地毯", "concretePowder": "混凝土粉末", "concrete": "混凝土", "stainedClay": "陶瓦", "glazedTerracotta": "带釉陶瓦", "dye": "染料", "ore": "矿石", "stone": "石头", "sapling": "树苗", "seed": "种子", "crop": "农作物", "flower": "花", "rawFood": "生食", "cookedFood": "熟食", "miscFood": "其他食物", "monsterStoneEgg": "被虫蚀的石头", "mobEgg": "生物蛋", "helmet": "头盔", "chestplate": "胸甲", "leggings": "护腿", "boots": "靴子", "horseArmor": "马铠", "sword": "剑", "axe": "斧头", "pickaxe": "镐", "shovel": "锹", "hoe": "锄头", "arrow": "箭", "potion": "药水", "splashPotion": "喷溅药水", "lingeringPotion": "滞留药水", "chalkboard": "黑板", "anvil": "铁砧", "chest": "箱子", "shulkerBox": "潜影盒", "record": "唱片", "skull": "生物头颅", "boat": "船", "rail": "铁轨", "minecart": "矿车", "pressurePlate": "压力板", "trapdoor": "活板门", "enchantedBook": "附魔书", "banner": "旗帜", "firework": "焰火", "fireworkStars": "焰火炸药", "coral": "珊瑚块", "coral_decorations": "珊瑚装饰", "buttons": "按钮", "sign": "告示牌", "wood": "树木", "banner_pattern": "旗帜图案", "netherWartBlock": "下界疣", "candles": "蜡烛", "absorption": "伤害吸收", "blindness": "失明", "conduitPower": "潮涌能量", "confusion": "反胃", "digSlowDown": "开采疲劳", "digSpeed": "急速", "empty": "无效果", "emptyPotion": "水瓶", "healthBoost": "生命提升", "hunger": "饥饿", "awkward": "粗制药水", "mundane": "平凡药水", "thick": "浓稠药水", "resistance": "抗性", "saturation": "饱和", "turtleMaster": "缓慢", "turtleMaster2": "抗性", "acaciaFence": "金合欢木栅栏", "acacia_fence_gate": "金合欢木栅栏门", "activator_rail": "激活铁轨", "allow": "允许方块", "air": "空气", "unknown": "未知", "deny": "拒绝方块", "border_block": "边界方块", "barrier": "屏障", "beacon": "信标", "beehive": "蜂箱", "bee_nest": "蜂巢", "target": "标靶", "bed": "床", "bedrock": "基岩", "bell": "钟", "camera": "摄像机", "conduit": "潮涌核心", "invisibleBedrock": "隐形基岩", "beetroot": "甜菜根", "big_dripleaf": "大型垂滴叶", "small_dripleaf_block": "小型垂滴叶", "hanging_roots": "垂根", "dirt_with_roots": "带根泥土", "spore_blossom": "孢子花", "azalea_leaves": "杜鹃花叶", "azalea_leaves_flowered": "盛开杜鹃花叶", "azalea": "杜鹃花", "flowering_azalea": "发光杜鹃花", "cave_vines": "洞穴藤蔓", "cave_vines_body_with_berries": "洞穴藤蔓", "cave_vines_head_with_berries": "洞穴藤蔓", "glow_berries": "发光浆果", "moss_block": "苔藓块", "moss_carpet": "苔藓地毯", "birchFence": "桦木栅栏", "birch_fence_gate": "桦木栅栏门", "blast_furnace": "高炉", "bone_block": "骨头方块", "coal_block": "煤炭块", "diamond_block": "钻石块", "emerald_block": "绿宝石块", "gold_block": "金块", "iron_block": "铁块", "lapis_block": "青金石块", "redstone_block": "红石块", "bookshelf": "书架", "brick_block": "砖块", "brown_mushroom": "棕色蘑菇", "wooden_button": "橡木按钮", "acacia_button": "金合欢木按钮", "birch_button": "桦木按钮", "dark_oak_button": "深色橡木按钮", "jungle_button": "丛林木按钮", "spruce_button": "云杉按钮", "stone_button": "石头按钮", "cactus": "仙人掌", "cake": "蛋糕", "dried_kelp_block": "干海带方块", "carrot": "胡萝卜", "carved_pumpkin": "雕刻南瓜", "cauldron": "炼药锅", "ender_chest": "末影箱", "jigsaw": "拼图方块", "honey_block": "蜂蜜方块", "honeycomb_block": "蜜脾块", "lodestone": "磁石", "nether_sprouts": "下界芽", "crimson_stem": "绯红菌柄", "warped_stem": "诡异菌柄", "stripped_crimson_stem": "去皮绯红菌柄", "stripped_warped_stem": "去皮诡异菌柄", "crimson_hyphae": "绯红菌丝", "warped_hyphae": "诡异菌丝", "stripped_crimson_hyphae": "去皮绯红菌丝", "stripped_warped_hyphae": "去皮诡异菌丝", "crimson_planks": "绯红木板", "warped_planks": "诡异木板", "crimson_door": "绯红门", "warped_door": "诡异门", "crimson_trapdoor": "绯红活板门", "warped_trapdoor": "诡异木活板门", "crimson_standing_sign": "绯红告示牌", "warped_standing_sign": "诡异木告示牌", "crimson_wall_sign": "绯红告示牌", "warped_wall_sign": "诡异木告示牌", "crimson_stairs": "绯红阶梯", "warped_stairs": "诡异阶梯", "crimson_fence": "绯红栅栏", "warped_fence": "诡异木栅栏", "crimson_fence_gate": "绯红栅栏门", "warped_fence_gate": "诡异木栅栏门", "crimson_button": "绯红按钮", "warped_button": "诡异木按钮", "crimson_pressure_plate": "绯红压力板", "warped_pressure_plate": "诡异木压力板", "crimson_slab": "绯红台阶", "warped_slab": "诡异木台阶", "crimson_double_slab": "绯红台阶", "warped_double_slab": "诡异木台阶", "shroomlight": "菌光体", "crimson_nylium": "绯红菌岩", "warped_nylium": "诡异菌岩", "basalt": "玄武岩", "polished_basalt": "磨制玄武岩", "blackstone": "黑石", "polished_blackstone_bricks": "磨制黑石砖", "cracked_polished_blackstone_bricks": "裂纹磨制黑石砖", "polished_blackstone_brick_stairs": "磨制黑石砖阶梯", "blackstone_stairs": "黑石阶梯", "blackstone_wall": "黑石墙", "polished_blackstone_brick_wall": "磨制黑石砖墙", "chiseled_polished_blackstone": "錾制磨制黑石", "gilded_blackstone": "镀金黑石", "blackstone_slab": "黑石台阶", "polished_blackstone_brick_slab": "磨制黑石砖台阶", "chain": "锁链", "soul_soil": "灵魂土", "soul_fire": "灵魂火", "polished_blackstone": "磨制黑石", "polished_blackstone_stairs": "磨制黑石阶梯", "polished_blackstone_slab": "磨制黑石台阶", "polished_blackstone_pressure_plate": "磨制黑石压力板", "polished_blackstone_button": "磨制黑石按钮", "polished_blackstone_wall": "磨制黑石墙", "soul_campfire": "灵魂营火", "chiseled_nether_bricks": "錾制下界砖", "cracked_nether_bricks": "裂纹下界砖", "quartz_bricks": "石英砖", "trapped_chest": "陷阱箱", "shulkerBoxWhite": "白色潜影盒", "shulkerBoxOrange": "橙色潜影盒", "shulkerBoxMagenta": "品红色潜影盒", "shulkerBoxLightBlue": "淡蓝色潜影盒", "shulkerBoxYellow": "黄色潜影盒", "shulkerBoxLime": "黄绿色潜影盒", "shulkerBoxPink": "粉红色潜影盒", "shulkerBoxGray": "灰色潜影盒", "shulkerBoxSilver": "淡灰色潜影盒", "shulkerBoxCyan": "青色潜影盒", "shulkerBoxPurple": "紫色潜影盒", "shulkerBoxBlue": "蓝色潜影盒", "shulkerBoxBrown": "棕色潜影盒", "shulkerBoxGreen": "绿色潜影盒", "shulkerBoxRed": "红色潜影盒", "shulkerBoxBlack": "黑色潜影盒", "chorus_flower": "紫颂花", "chorus_plant": "紫颂植物", "clay": "粘土块", "hardened_clay": "陶瓦", "stained_hardened_clay": "陶瓦", "structure_block": "结构方块", "structure_void": "结构空位", "wool": "羊毛", "cocoa": "可可", "command_block": "命令方块", "composter": "堆肥箱", "light_block": "光源方块", "repeating_command_block": "重复命令方块", "chain_command_block": "连锁命令方块", "wheat": "农作物", "darkOakFence": "深色橡木栅栏", "dark_oak_fence_gate": "深色橡木栅栏门", "daylight_detector": "阳光传感器", "deadbush": "枯萎的灌木", "detector_rail": "探测铁轨", "dirt": "泥土", "podzol": "灰化土", "dispenser": "发射器", "iron_door": "铁门", "doorWood": "木门", "double_plant": "植物", "dragon_egg": "龙蛋", "dropper": "投掷器", "enchanting_table": "附魔台", "enderChest": "末影箱", "end_portal_frame": "末地传送门", "farmland": "农地", "fletching_table": "制箭台", "fence": "橡木栅栏", "fence_gate": "橡木栅栏门", "iron_bars": "铁栏杆", "fire": "火", "yellow_flower": "花", "red_flower": "花", "wither_rose": "凋零玫瑰", "furnace": "熔炉", "glass": "玻璃", "golden_rail": "动力铁轨", "grass": "草方块", "grass_path": "泥土小径", "gravel": "砂砾", "hay_block": "干草捆", "netherrack": "下界岩", "soul_sand": "灵魂沙", "hopper": "漏斗", "ice": "冰", "packed_ice": "浮冰", "blue_ice": "蓝冰", "frosted_ice": "冰霜", "iron_trapdoor": "铁活板门", "jukebox": "唱片机", "jungleFence": "丛林木栅栏", "jungle_fence_gate": "丛林木栅栏门", "ladder": "梯子", "flowing_lava": "熔岩", "leaves": "树叶", "lever": "拉杆", "glowstone": "荧石", "glow_lichen": "发光地衣", "lightning_rod": "雷霆之杖", "lit_pumpkin": "南瓜灯", "lockedchest": "上锁的箱子", "log": "原木", "magma": "岩浆方块", "melon_block": "西瓜", "mob_spawner": "刷怪箱", "monster_egg": "被虫蚀的石头", "mushroom": "蘑菇", "noteblock": "音符盒", "mycelium": "菌丝", "nether_brick": "下界砖块", "red_nether_brick": "红色下界砖", "nether_brick_fence": "下界砖栅栏", "quartz_ore": "下界石英矿石", "netherreactor": "下界反应核", "nether_wart": "下界疣", "nether_wart_block": "下界疣方块", "warped_wart_block": "诡异疣方块", "unlit_redstone_torch": "红石火把", "redstone_torch": "红石火把", "soul_torch": "灵魂火把", "obsidian": "黑曜石", "coal_ore": "煤矿石", "diamond_ore": "钻石矿石", "emerald_ore": "绿宝石矿石", "gold_ore": "金矿石", "iron_ore": "铁矿石", "copper_ore": "铜矿石", "lapis_ore": "青金石矿石", "redstone_ore": "红石矿石", "oreRuby": "红宝石矿石", "observer": "侦测器", "piston": "活塞", "sticky_piston": "粘性活塞", "portal": "传送门", "potatoes": "马铃薯", "stone_pressure_plate": "石质压力板", "wooden_pressure_plate": "橡木压力板", "acacia_pressure_plate": "金合欢木压力板", "birch_pressure_plate": "桦木压力板", "dark_oak_pressure_plate": "深色橡木压力板", "jungle_pressure_plate": "丛林木压力板", "spruce_pressure_plate": "云杉压力板", "pumpkin": "南瓜", "pumpkin_stem": "南瓜茎", "quartz_block": "石英块", "red_mushroom": "红蘑菇", "crimson_fungus": "绯红真菌", "warped_fungus": "诡异真菌", "red_mushroom_block": "红蘑菇方块", "red_sandstone": "红沙石", "redstone_wire": "红石粉", "redstone_lamp": "红石灯", "reeds": "甘蔗", "sand": "沙子", "sandstone": "沙石", "seaLantern": "海晶灯", "standing_sign": "告示牌", "spruce_standing_sign": "云杉木告示牌", "birch_standing_sign": "桦木告示牌", "jungle_standing_sign": "丛林木告示牌", "acacia_standing_sign": "金合欢木告示牌", "darkoak_standing_sign": "深色橡木告示牌", "slime": "粘液块", "snow": "雪", "spruceFence": "云杉栅栏", "spruce_fence_gate": "云杉栅栏门", "brick_stairs": "砖阶梯", "nether_brick_stairs": "下界砖阶梯", "quartz_stairs": "石英阶梯", "smooth_quartz_stairs": "平滑石英阶梯", "red_sandstone_stairs": "红沙石阶梯", "sandstone_stairs": "沙石阶梯", "stone_stairs": "圆石阶梯", "normal_stone_stairs": "石质阶梯", "stone_brick_stairs": "石砖阶梯", "oak_stairs": "橡木阶梯", "acacia_stairs": "金合欢木阶梯", "birch_stairs": "桦木阶梯", "dark_oak_stairs": "深色橡木阶梯", "jungle_stairs": "丛林木阶梯", "spruce_stairs": "云杉木阶梯", "purpur_stairs": "紫珀阶梯", "prismarine_stairs": "海晶石阶梯", "dark_prismarine_stairs": "暗海晶石阶梯", "prismarine_bricks_stairs": "海晶石砖阶梯", "granite_stairs": "花岗岩阶梯", "diorite_stairs": "闪长岩阶梯", "andesite_stairs": "安山岩阶梯", "polished_granite_stairs": "磨制花岗岩阶梯", "polished_diorite_stairs": "磨制闪长岩阶梯", "polished_andesite_stairs": "磨制安山岩阶梯", "mossy_stone_brick_stairs": "苔石砖阶梯", "smooth_red_sandstone_stairs": "平滑红沙石阶梯", "smooth_sandstone_stairs": "平滑沙石阶梯", "end_brick_stairs": "末地石砖阶梯", "mossy_cobblestone_stairs": "苔圆石阶梯", "red_nether_brick_stairs": "红色下界砖阶梯", "smooth_stone": "平滑石", "standing_banner": "旗帜", "cobblestone": "圆石", "stonebrick": "石砖", "stonecutter": "切石机", "stonecutter_block": "切石机", "mossy_cobblestone": "苔圆石", "double_stone_slab": "石台阶", "stone_slab": "石台阶", "tallgrass": "草", "sea_pickle": "海泡菜", "turtle_egg": "海龟蛋", "glass_pane": "玻璃板", "tnt": "TNT", "snow_layer": "顶层雪", "torch": "火把", "acacia_trapdoor": "金合欢木活板门", "birch_trapdoor": "桦木活板门", "dark_oak_trapdoor": "深色橡木活板门", "jungle_trapdoor": "丛林木活板门", "spruce_trapdoor": "云杉木活板门", "tripWire": "绊线", "tripwire_hook": "绊线钩", "vine": "藤蔓", "weeping_vines": "垂泪藤", "twisting_vines": "缠怨藤", "flowing_water": "水", "water": "水", "waterlily": "睡莲", "web": "蜘蛛网", "heavy_weighted_pressure_plate": "测重压力板（重型）", "light_weighted_pressure_plate": "测重压力板（轻型）", "end_stone": "末地石", "end_bricks": "末地石砖", "wooden_slab": "木台阶", "carpet": "地毯", "crafting_table": "工作台", "glazedTerracottaWhite": "白色带釉陶瓦", "glazedTerracottaOrange": "橙色带釉陶瓦", "glazedTerracottaMagenta": "品红色带釉陶瓦", "glazedTerracottaLightBlue": "淡蓝色带釉陶瓦", "glazedTerracottaYellow": "黄色带釉陶瓦", "glazedTerracottaLime": "黄绿色带釉陶瓦", "glazedTerracottaPink": "粉红色带釉陶瓦", "glazedTerracottaGray": "灰色带釉陶瓦", "glazedTerracottaSilver": "淡灰色带釉陶瓦", "glazedTerracottaCyan": "青色带釉陶瓦", "glazedTerracottaPurple": "紫色带釉陶瓦", "glazedTerracottaBlue": "蓝色带釉陶瓦", "glazedTerracottaBrown": "棕色带釉陶瓦", "glazedTerracottaGreen": "绿色带釉陶瓦", "glazedTerracottaRed": "红色带釉陶瓦", "glazedTerracottaBlack": "黑色带釉陶瓦", "stripped_spruce_log": "去皮云杉原木", "stripped_dark_oak_log": "去皮深色橡树原木", "stripped_birch_log": "去皮桦树原木", "stripped_jungle_log": "去皮丛林原木", "stripped_oak_log": "去皮橡树原木", "stripped_acacia_log": "去皮金合欢原木", "bamboo": "竹子", "scaffolding": "脚手架", "grindstone": "磨石", "cartography_table": "制图台", "lantern": "灯", "soul_lantern": "灵魂灯", "smoker": "火炉", "smithing_table": "锻造台", "barrel": "木桶", "campfire": "营火", "loom": "织布机", "lectern": "讲台", "sweet_berry_bush": "甜浆果灌木丛", "oak": "橡木", "spruce": "云杉木", "birch": "桦木", "jungle": "丛林木", "acacia": "金合欢木", "dark_oak": "深色橡木", "netherite_block": "下界合金块", "ancient_debris": "远古残骸", "nether_gold_ore": "下界金矿石", "respawn_anchor": "重生锚", "crying_obsidian": "哭泣的黑曜石", "powder_snow": "粉状雪", "deepslate": "深板岩", "infested_deepslate": "被虫蚀的深板岩", "cobbled_deepslate": "深板岩圆石", "dripstone_block": "滴水石方块", "pointed_dripstone": "滴水石锥", "cobbled_deepslate_slab": "深板岩圆石台阶", "cobbled_deepslate_stairs": "深板岩圆石阶梯", "cobbled_deepslate_wall": "深板岩圆石墙", "polished_deepslate": "磨制深板岩", "polished_deepslate_slab": "磨制深板岩台阶", "polished_deepslate_stairs": "磨制深板岩阶梯", "polished_deepslate_wall": "磨制深板岩墙", "deepslate_tiles": "深板岩瓦", "deepslate_tile_slab": "深板岩瓦台阶", "deepslate_tile_stairs": "深板岩瓦阶梯", "deepslate_tile_wall": "深板岩瓦墙", "deepslate_bricks": "深板岩砖", "deepslate_brick_slab": "深板岩砖台阶", "deepslate_brick_stairs": "深板岩砖阶梯", "deepslate_brick_wall": "深板岩砖墙", "chiseled_deepslate": "錾制深板岩", "cobbled_deepslate_double_slab": "深板岩圆石双台阶", "polished_deepslate_double_slab": "磨制深板岩双台阶", "deepslate_tile_double_slab": "深板岩瓦双台阶", "deepslate_brick_double_slab": "深板岩砖双台阶", "deepslate_lapis_ore": "深板岩青金石矿石", "deepslate_iron_ore": "深层铁矿石", "deepslate_gold_ore": "深层金矿石", "deepslate_redstone_ore": "深层红石矿石", "deepslate_diamond_ore": "深层钻石矿石", "deepslate_coal_ore": "深层煤矿石", "deepslate_emerald_ore": "深层绿宝石矿石", "deepslate_copper_ore": "深层铜矿石", "cracked_deepslate_tiles": "裂纹深板岩瓦", "cracked_deepslate_bricks": "裂纹深板岩砖", "copper_ingot": "铜锭", "raw_copper": "粗铜", "raw_iron": "粗铁", "raw_gold": "粗金", "copper_block": "铜方块", "exposed_copper": "外露铜", "weathered_copper": "风化铜", "oxidized_copper": "氧化铜", "waxed_copper": "涂蜡铜方块", "waxed_exposed_copper": "涂蜡外露铜", "waxed_weathered_copper": "涂蜡风化铜", "waxed_oxidized_copper": "涂蜡氧化铜", "cut_copper": "切制铜", "exposed_cut_copper": "外露切制铜", "weathered_cut_copper": "风化切制铜", "oxidized_cut_copper": "氧化切制铜", "waxed_cut_copper": "涂蜡切制铜", "waxed_exposed_cut_copper": "涂蜡外露切制铜", "waxed_weathered_cut_copper": "涂蜡风化切制铜", "waxed_oxidized_cut_copper": "涂蜡氧化切制铜", "cut_copper_stairs": "切制铜阶梯", "exposed_cut_copper_stairs": "外露切制铜阶梯", "weathered_cut_copper_stairs": "风化切制铜阶梯", "oxidized_cut_copper_stairs": "氧化切制铜阶梯", "waxed_cut_copper_stairs": "涂蜡切制铜阶梯", "waxed_exposed_cut_copper_stairs": "涂蜡外露切制铜阶梯", "waxed_weathered_cut_copper_stairs": "涂蜡风化切制铜阶梯", "waxed_oxidized_cut_copper_stairs": "涂蜡氧化切制铜阶梯", "cut_copper_slab": "切制铜台阶", "exposed_cut_copper_slab": "外露切制铜台阶", "weathered_cut_copper_slab": "风化切制铜台阶", "oxidized_cut_copper_slab": "氧化切制铜台阶", "waxed_cut_copper_slab": "涂蜡切制铜台阶", "waxed_exposed_cut_copper_slab": "涂蜡外露切制铜台阶", "waxed_weathered_cut_copper_slab": "涂蜡风化切制铜台阶", "waxed_oxidized_cut_copper_slab": "涂蜡氧化切制铜台阶", "raw_copper_block": "粗铜块", "raw_iron_block": "粗铁块", "raw_gold_block": "粗金块", "copper": "铜", "candle": "蜡烛", "white_candle": "白色蜡烛", "orange_candle": "橙色蜡烛", "magenta_candle": "品红色蜡烛", "light_blue_candle": "淡蓝色蜡烛", "yellow_candle": "黄色蜡烛", "lime_candle": "黄绿色蜡烛", "pink_candle": "粉红色蜡烛", "gray_candle": "灰色蜡烛", "light_gray_candle": "淡灰色蜡烛", "cyan_candle": "青色蜡烛", "purple_candle": "紫色蜡烛", "blue_candle": "蓝色蜡烛", "brown_candle": "棕色蜡烛", "green_candle": "绿色蜡烛", "red_candle": "红色蜡烛", "black_candle": "黑色蜡烛", "candle_cake": "带蜡烛的蛋糕", "white_candle_cake": "带白色蜡烛的蛋糕", "orange_candle_cake": "带橙色蜡烛的蛋糕", "magenta_candle_cake": "带品红色蜡烛的蛋糕", "light_blue_candle_cake": "带淡蓝色蜡烛的蛋糕", "yellow_candle_cake": "带黄色蜡烛的蛋糕", "lime_candle_cake": "带黄绿色蜡烛的蛋糕", "pink_candle_cake": "带粉红色蜡烛的蛋糕", "gray_candle_cake": "带灰色蜡烛的蛋糕", "light_gray_candle_cake": "带淡灰色蜡烛的蛋糕", "cyan_candle_cake": "带青色蜡烛的蛋糕", "purple_candle_cake": "带紫色蜡烛的蛋糕", "blue_candle_cake": "带蓝色蜡烛的蛋糕", "brown_candle_cake": "带棕色蜡烛的蛋糕", "green_candle_cake": "带绿色蜡烛的蛋糕", "red_candle_cake": "带红色蜡烛的蛋糕", "black_candle_cake": "带黑色蜡烛的蛋糕", "spyglass": "望远镜", "amethyst_shard": "紫水晶碎片", "amethyst_block": "紫水晶方块", "budding_amethyst": "发芽紫水晶", "amethyst_cluster": "紫水晶簇", "large_amethyst_bud": "大型紫水晶芽", "medium_amethyst_bud": "中型紫水晶芽", "small_amethyst_bud": "小型紫水晶芽", "tuff": "凝灰岩", "calcite": "方解石", "tinted_glass": "染色玻璃", "smooth_basalt": "平滑玄武岩" };//中英对照
    let languageZhCN = { "Language_Enable_Fracture": "你因为从高处摔下来导致骨折！", "Language_sidebar_avgPing": "§l§5平均延迟", "Language_sidebar_money": "§l§6金币余额", "Language_sidebar_title": "§l§3--肝帝纪元--", "Language_Settlement_of_arrears": "§l§6扣除欠款成功，欠款金额已清零。恭喜！", "Language_Partial_settlement": "§l§6扣除部分欠款金额成功，共扣除：{m}", "Language_Fishing_failed": "余额不足，无法钓鱼", "Language_Failed_use": "余额不足，无法使用", "Language_Player_Get_gold_coins": "§l§6你获得了：{m} 个金币！", "Language_Biological_Resurrection": "§l§4受到神龙影响生物将在3秒后复活并强化，请注意！", "Language_Kill_Dragon": "§l§6玩家：{p} 成功击杀末影龙，获得{m} 金币", "Language_Kill_Dragon_blast": "§l§4玩家：{p} 成功击杀末影龙，因受到神龙的诅咒，将在3秒后发生爆炸！！请注意躲避！", "Language_Deduct_gold_coins": "§l§3扣除{m} 金币成功！", "Language_Attack_failed": "§l§4余额不足，无法进行PVP", "Language_Boss_Blood_strip": ["剩余血量:", "本次伤害:"], "Language_Lore_1": "技能列表：", "Language_Throw_out_interception": "§l§4技能物品无法丢出！", "Language_Sabotage_interception": "§l§4你的破坏被神龙之力阻挡，破坏无效！", "Language_Dragon_Slayer_notification": "§l§2屠龙者：{p} 上线了！\n§l§2当前所在坐标：{pos}\n§l§2当前血量：${h}", "Language_Invalid_attack": "§l§4你的攻击被神龙之力阻挡，攻击无效！", "Language_Death_deduction": "§l§3你因死亡扣除 {m} 金币！", "Language_Kill_Dragon_palyer_1": "§l§3玩家: {p} 成功击杀了屠龙者，获得其末影箱随机物品", "Language_Kill_Dragon_palyer_2": "§l§4玩家：{p} 成功击杀了屠龙者，但因其背包满了无法获得物品", "Language_Kill_Dragon_palyer_3": "§l§6玩家：{p} 成功击杀了屠龙者，因屠龙者末影箱无物品，其将获得屠龙者的所有金币！", "Language_edible": "§l§3你食用了： {i} 获得了 {buff} 秒 {buffLvl} 级 {buffName} 效果，扣除 {m} 金币！", "Language_Loading_succeeded": "[New 强化生存] 插件加载成功，当前版本：{v}", "Language_Divine_Guardian": "§l§3你使用技能，恢复{h}血量，对方减少{h}血量！", "Language_Real_injury": "§l§3你使用技能，额外造成{d}点真实伤害！", "Language_Attack_drop": "§l§2你因被攻击导致 {i} 掉落", "Language_Attack_drop_damage": "§l§2你因无可掉落物品额外收到{d}点真实伤害！", "Language_Transmission_cost": "§l§3你已扣除传送费用 {m} 金币！", "Language_Transmission_cost_arrears": "§l§3除传送费用 {m} 金币失败，已计入欠款额度！", "Language_Form_title": "§l§6强化生存", "Language_Form_Content": "§l§3提示：请选择购买还是强化\n§l§4请注意要手持需要购买技能的武器打开此窗口！", "Language_Form_Button1": ["§l§3购买武器技能", "https://s3.bmp.ovh/imgs/2021/09/070c7d5cf30904a4.png"], "Language_Form_Button2": ["§l§3强化武器技能", "https://s3.bmp.ovh/imgs/2021/09/253edbaac602f3cd.png"], "Language_Form_Button3": ["§l§3打开附魔界面", "https://s3.bmp.ovh/imgs/2021/09/290476a112a76340.png"], "Language_Form_Button4": ["§l§3修复物品耐久", "https://s3.bmp.ovh/imgs/2021/12/9309741d68695519.png"], "Language_Form_Button5": ["§l§3查屠龙者坐标", "https://s3.bmp.ovh/imgs/2021/09/290476a112a76340.png"], "Language_Form_Button6": ["§l§3获取新手引导书", "https://s3.bmp.ovh/imgs/2021/09/118b8910b2a261db.png"], "Language_Form_Button7": ["§l§3相关通知设置", "textures/items/end_crystal"], "Language_Form_choice": "§l§3提示：请选择！", "Language_Purchase_failed1": "§l§4你已购买过武器技能，无法再次购买！", "Language_Reinforcement_failure1": "§l§4你尚未购买过技能，无法强化！", "Language_Item_repair": "§l§3提示：请选择物品！当前修复价格{m}", "Language_View_dragon_slaughtering1": "玩家不在线或未完成屠龙任务", "Language_View_dragon_slaughtering2": "玩家：{p} 在 {dim} {x} {y} {z}", "Language_Repair_successful": "§l§3修复成功！", "Language_Deduction_failed": "§l§4扣款失败！", "Language_credit": "§l§4余额不足！", "Language_Cannot_repair": "§l§4此物品不能修复！", "Language_enchanting_Form_title": "附魔选择界面", "Language_balance": "你的余额为：{m}", "Language_Enchant_Level": "附魔等级默认为{l}级", "Language_Select_Properties": "选择属性", "Language_SkillStrengthening_Form_title": "§l§6武器技能强化界面", "Language_SkillStrengthening_Form_Content": "§l§3提示：价高不一定最好！", "Language_Upgrade_requires_gold_coins": "§l§3{sn} ${m}金", "Language_Reinforcement_failure2": "§l§4此武器技能已达到满级，无法强化！", "Language_Reinforcement_failure3": "此物品无法升级技能，原因：他没有技能！", "Language_Strengthen_success1": ["技能列表：", "{sn}", "技能等级：{l}"], "Language_Strengthen_success2": "§l§5成功！", "Language_Reinforcement_failure4": "§l§4扣款失败", "Language_Reinforcement_failure5": "§l§4余额不足", "Language_Purchase_interface": "§l§6武器技能购买界面", "Language_Purchase_interface_Content": "§l§3提示：以下三个技能只能购买一个", "Language_Purchase_success1": ["技能列表：", "{sn}", "技能等级：1"], "Language_Purchase_failed2": "§l§4此武器已无法购买！", "Language_Enchant_failure": "§l§4你的余额不足，你还需要 {m} 金币", "Language_Enchant_successfully": "§l§3附魔成功！", "Language_OP_Form_Button1": "重载配置文件", "Language_OP_Form_Button2": "启用侧边栏", "Language_OP_Form_Button3": "关闭侧边栏", "Language_OP_Form_Button4": "给自己1万金币", "Language_Do_not_fall_success": "§l§3添加成功！", "Language_Invalid_attack1": "§l§4你的攻击因为你运气差，导致攻击无效！", "Language_Do_not_fall_fail": "§l§4添加失败，已存在！", "Language_Service_items_success": "§l§3设置成功!", "Language_High_version_tips": "[强化生存] 你目前正在使用内测版本，请勿外泄！", "Language_Low_version_prompt": "[强化生存] 发现新版本，版本号为：{v},请更新！", "Language_Instruction_description": "打开武器强化面板", "Language_Instruction_description_op": "打开gui界面|设置手持物品为受伤不掉落|设置手持物品为进服给予物品", "Language_MsgType1": "普通消息", "Language_MsgType2": "失败消息", "Language_MsgType3": "警告消息", "Language_MsgType4": "消息显示位置", "Language_MsgType4Data": ["聊天栏", "物品栏上方"], "Language_True_Damage": "真实伤害", "Language_Blast_Attack": "爆炸攻击", "Language_Take_Your_Equipment": "取你装备", "Language_Holy_Guardian": "神圣守护", "Language_Amount_owed": "欠款金额" };
    let languageEnUS = { "Language_Enable_Fracture": "You broke your bone because you fell from a high place!", "Language_sidebar_avgPing": "§l§5Ping Delay", "Language_sidebar_money": "§l§6Gold Balance", "Language_sidebar_title": "§l§3--The Era of the Emperor--", "Language_Settlement_of_arrears": "§l§6The arrears have been successfully deducted, and the arrears have been cleared. Congratulations!", "Language_Partial_settlement": "§l§6Successfully deducted part of the arrears, total deduction: {m}", "Language_Fishing_failed": "Insufficient balance to fish", "Language_Failed_use": "Insufficient balance to use", "Language_Player_Get_gold_coins": "§l§6You got: {m} coins!", "Language_Biological_Resurrection": "§l§4Creatures affected by Shenlong will be resurrected and strengthened after 3 seconds, please pay attention!", "Language_Kill_Dragon": "§l§6Player: {p} successfully kills the ender dragon and gets {m} gold coins", "Language_Kill_Dragon_blast": "§l§4Player: {p} successfully killed the ender dragon. Due to the curse of the dragon, it will explode after 3 seconds! ! Be careful to avoid!", "Language_Deduct_gold_coins": "§l§3Successfully deducted {m} coins!", "Language_Attack_failed": "§l§4Insufficient balance for PVP", "Language_Boss_Blood_strip": ["Blood: ", "Injury: "], "Language_Lore_1": "Skill List: ", "Language_Throw_out_interception": "§l§4Skill items cannot be thrown!", "Language_Sabotage_interception": "§l§4Your destruction is blocked by the power of the dragon, the destruction is invalid!", "Language_Dragon_Slayer_notification": "§l§2Dragon Slayer: {p} is online!\n§l§2Current coordinates: {pos}\n§l§2Current HP: ${h}", "Language_Invalid_attack": "§l§4Your attack is blocked by the power of the dragon, and the attack is invalid!", "Language_Death_deduction": "§l§3You deduct {m} gold for your death!", "Language_Kill_Dragon_palyer_1": "§l§3Player: {p} successfully killed the Dragon Slayer to get a random item from its ender chest", "Language_Kill_Dragon_palyer_2": "§l§4Player: {p} successfully killed the Dragon Slayer, but couldn't get the item because his backpack was full", "Language_Kill_Dragon_palyer_3": "§l§6Player: {p} successfully killed the dragon slayer, since there is no item in the dragon slayer ender chest, he will get all the dragon slayer's gold coins!", "Language_edible": "§l§3You ate: {i} gained {buff} second {buffLvl} level {buffName} effect, deducting {m} gold!", "Language_Loading_succeeded": "[New Enhanced Survival] plugin loaded successfully, current version: {v}", "Language_Invalid_attack1": "§l§4Your attack is invalid because of your bad luck!", "Language_Divine_Guardian": "§l§3You use a skill to restore {h} HP, and the opponent reduces {h} HP!", "Language_Real_injury": "§l§3You use a skill, dealing an additional {d} true damage!", "Language_Attack_drop": "§l§2You dropped {i} due to being attacked", "Language_Attack_drop_damage": "§l§2You take an additional {d} true damage for having no items to drop!", "Language_Transmission_cost": "§l§3You have deducted the delivery fee of {m} gold!", "Language_Transmission_cost_arrears": "§l§3In addition to the failure of the delivery fee {m} gold coins, it has been included in the arrears!", "Language_Form_title": "§l§6Strengthen Survival", "Language_Form_Content": "§l§3Tip: Please choose to buy or strengthen\n§l§4Be careful to open this window with a weapon that requires a skill to be purchased!", "Language_Form_Button1": ["§l§3Buy Weapon Skills", "textures/items/fish_raw"], "Language_Form_Button2": ["§l§3Enhance Weapon Skills", "textures/items/fish_salmon_cooked"], "Language_Form_Button3": ["§l§3Open The Enchanting Interface", "textures/items/fishing_rod_cast"], "Language_Form_Button4": ["§l§3Repair Item Durability", "textures/items/flint"], "Language_Form_Button5": ["§l§3Check The Coordinates of The Dragon Slayer", "textures/items/flint_and_steel"], "Language_Form_Button6": ["§l§3Get the Beginner's Guide", "textures/blocks/flower_pot"], "Language_Form_Button7": ["§l§3Notification related settings", "textures/items/end_crystal"], "Language_Form_choice": "§l§3Tip: Please choose!", "Language_Purchase_failed1": "§l§4You have already purchased weapon skills, you cannot buy them again!", "Language_Reinforcement_failure1": "§l§4You haven't purchased skills yet, so you can't strengthen them!", "Language_Item_repair": "§l§3Tip: Please select an item! Current repair price {m}", "Language_View_dragon_slaughtering1": "The player is offline or has not completed the dragon slaying quest", "Language_View_dragon_slaughtering2": "Player: {p} at {dim} {x} {y} {z}", "Language_Repair_successful": "§l§3Repaired successfully!", "Language_Deduction_failed": "§l§4Deduction failed!", "Language_credit": "§l§4Insufficient balance!", "Language_Cannot_repair": "§l§4This item cannot be repaired!", "Language_enchanting_Form_title": "Enchantment selection interface", "Language_balance": "Your balance is: {m}", "Language_Enchant_Level": "The enchantment level defaults to level {l}", "Language_Select_Properties": "Select Properties", "Language_SkillStrengthening_Form_title": "§l§6Weapon skill enhancement interface", "Language_SkillStrengthening_Form_Content": "§l§3Tip: high price is not necessarily the best!", "Language_Upgrade_requires_gold_coins": "§l§3{sn} ${m} gold", "Language_Reinforcement_failure2": "§l§4This weapon skill has reached full level and cannot be strengthened!", "Language_Reinforcement_failure3": "This item cannot upgrade skills, reason: he has no skills!", "Language_Strengthen_success1": ["Skill List:", "{sn}", "Skill Level: {l}"], "Language_Strengthen_success2": "§l§5Update Successed!", "Language_Reinforcement_failure4": "§l§4Deduction failed", "Language_Reinforcement_failure5": "§l§4Insufficient balance", "Language_Purchase_interface": "§l§6Weapon skill purchase interface", "Language_Purchase_interface_Content": "§l§3Tip: Only one of the following three skills can be purchased", "Language_Purchase_success1": ["Skill List:", "{sn}", "Skill Level: 1"], "Language_Purchase_failed2": "§l§4This weapon is no longer available for purchase!", "Language_Enchant_failure": "§l§4Your balance is insufficient, you still need {m} coins", "Language_Enchant_successfully": "§l§3Enchanting success!", "Language_OP_Form_Button1": "Reload Configuration File", "Language_OP_Form_Button2": "Enable Sidebar", "Language_OP_Form_Button3": "Close Sidebar", "Language_OP_Form_Button4": "Give yourself 10,000 gold coins", "Language_Do_not_fall_success": "§l§3Added successfully!", "Language_Do_not_fall_fail": "§l§4Add failed, already exists!", "Language_Service_items_success": "§l§3Set up successfully!", "Language_High_version_tips": "[Enhanced Survival] You are currently using the beta version, please do not leak!", "Language_Low_version_prompt": "[Enhanced Survival] Found a new version, the version number is: {v}, please update!", "Language_Instruction_description": "Open the weapon enhancement panel", "Language_Instruction_description_op": "Open the gui interface | set the hand-held item to be injured and not drop | set the hand-held item to give items to the suit", "Language_MsgType1": "General message", "Language_MsgType2": "Failure message", "Language_MsgType3": "Warning message", "Language_MsgType4": "Message display location", "Language_MsgType4Data": ["Chat bar", "Above item bar"], "Language_True_Damage": "True_Damage", "Language_Blast_Attack": "Blast_Attack", "Language_Take_Your_Equipment": "Monster_Gift", "Language_Holy_Guardian": "Holy_Guardian", "Language_Amount_owed": "Amount owed" };
    File.writeTo(path3 + 'Item_zh_CN.json', JSON.stringify(articlesInChineseAndEnglish, null, "\t"));
    File.writeTo(path3 + 'zh_CN.json', JSON.stringify(languageZhCN, null, "\t"));
    File.writeTo(path3 + 'en_US.json', JSON.stringify(languageEnUS, null, "\t"));
}

/*
                           _ooOoo_
                          o8888888o
                          88" . "88
                          (| -_- |)
                          O\  =  /O
                       ____/`---'\____
                     .'  \\|     |//  `.
                    /  \\|||  :  |||//  \
                   /  _||||| -:- |||||-  \
                   |   | \\\  -  /// |   |
                   | \_|  ''\---/''  |   |
                   \  .-\__  `-`  ___/-. /
                 ___`. .'  /--.--\  `. . __
              ."" '<  `.___\_<|>_/___.'  >'"".
             | | :  `- \`.;`\ _ /`;.`/ - ` : | |
             \  \ `-.   \_ __\ /__ _/   .-` /  /
        ======`-.____`-.___\_____/___.-`____.-'======
                           `=---='
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                 佛祖保佑       永无BUG
                Buddha bless, never BUG
*/

//----------------申明变量
let basicProfile, PlayerMsgDataListJson, SystemLanguage, moneyUnlockListJson, destructionAddMoneyListJson, killEntityAddMoneyListJson, purchaseSkillsMoneyListJson, eatFoodGiveBuffListJson, foodBuffTypeMoneyListJson, itemEnchantListJson, listOfRandomlyResurrectedCreatures, injuryDoesNotFallListJson, thePluginContentManualCannotBeEdited, repairEquipmentDurabilityPrice, nameOfArrearsScoreboard, showsidebar, whetherToInterceptBedExplosion, whetherToInterceptTheRebirthAnchorExplosion, whetherToDisplayBloodBarDuringAttack, nweDiddicultSurvivalPlayerCmd, itemDefaultEnchantLevel, newplugInOPSettingsPanel, handHeldItemsWillNotFallIfInjured, handHeldItemsAreGivenForService, isTheSlainMonsterResurrectedRandomly, resurrectionProbabilityOfKilledMonster, doesDeathDeductGoldCoins, numberOfGoldCoinsDeductedFromDeath, deductMoneyForCrossingDimensions, enterTheMainWorldRemovemoney, intoHellRemovemoney, enterTheDestinationRemovemoney, enableGoldCoinRestrictedWeapons, whetherToEnableInvalidAttackProbability, deductGoldCoinsForNonKillDeath, attackInvalidProbability, whetherToEnableInjuredItems, PVPDropProbability, PVEDropProbability, noObjectIsReallHurt, doesPVPDeductGoldCoins, PVPDeductionGoldCoinQuantity, IsThereAnUpperLimitForPVEPlusGold, PVEPlusGoldUpperLimit, specificWeaponsHurtEnderDragon, enderDragonRangedDamageAllow, weaponIDCapableOfCausingDamage, enderDragonInvalidAttackProbability, contendenderDragonDamageProbability, enderDragonDoesDeathExplode, killEnderDragonAddMoney, enableGoldLimitDestruction, resetDestructionAddMoneyTime, limitDailyDamagePlusGold, limitTheAmountOfDamageAndGoldCoinsPerDay, enableArrowFishingRodTridentGoldCoinLimit, doYouDeductGoldCoinsForFishing, numberOfGoldCoinsDeductedForFishing, tridentThrowUnlockGoldCoin, whetherEnablePlayerGrowth, playerInitialHealth, playerMoneyAddHealth, playerMoneyAddAttack, pluginLanguage, pluginLanguageFile, TrueDamageTag, BlastAttackTag, MonsterGiftTag, HolyGuardianTag, ConfigEnchantNameList, ConfigEnchantMoneyList, ConfigEnchantIDList, ii;

GlobalVariableAssignment()
function GlobalVariableAssignment() {
    /*-----------配置文件读取，默认数据，全局变量，内存爆炸专区-----------*/
    basicProfile = JSON.parse(File.readFrom(path + 'config.json'));//读取基础配置文件
    SystemLanguage = basicProfile.language;//获取配置文件语言设置
    moneyUnlockListJson = JSON.parse(File.readFrom(path1 + 'GoldCoinLimitList.json'));//读取金币解锁装备配置文件
    destructionAddMoneyListJson = JSON.parse(File.readFrom(path1 + 'DestroyBlockAddMoney.json'));//读取破坏加金币配置文件
    killEntityAddMoneyListJson = JSON.parse(File.readFrom(path1 + 'KillPlusGold.json'));//读取击杀加金币配置文件
    purchaseSkillsMoneyListJson = JSON.parse(File.readFrom(path1 + 'WeaponSkillsMoneyList.json'));//读取购买技能相关配置文件
    eatFoodGiveBuffListJson = JSON.parse(File.readFrom(path1 + 'EatFoodBuffList.json'));//读取食物buff列表配置文件
    foodBuffTypeMoneyListJson = JSON.parse(File.readFrom(path1 + 'FoodBuffTypeMoneyList.json'));//读取食物对应buff类型和金币配置文件
    itemEnchantListJson = JSON.parse(File.readFrom(path1 + 'ItemEnchantList.json'));//读取物品附魔列表配置文件
    listOfRandomlyResurrectedCreatures = JSON.parse(File.readFrom(path1 + 'randomlyResurrectedCreatures.json'));//随机复活生物列表
    injuryDoesNotFallListJson = JSON.parse(File.readFrom(path1 + 'ListOfItemsNotDropped.json'));//读取受伤不掉落物品列表配置文件
    thePluginContentManualCannotBeEdited = File.readFrom(path2 + 'ServerGiveBooks.txt');//读取进服给玩家的书的snbt
    PlayerMsgDataListJson = JSON.parse(File.readFrom(path1 + 'PlayerMsgData.json'));//读取玩家提示内容等相关设置
    //---------------其他设置相关配置变量定义
    repairEquipmentDurabilityPrice = basicProfile["Other_Settings"]["Repair_equipment_durability_price"];//耐久修复价格数据读取
    nameOfArrearsScoreboard = basicProfile["Other_Settings"]["Debt_record_scoreboard_name"];//欠款计分板配置文件设置名称
    showsidebar = basicProfile["Other_Settings"]["Whether_to_show_the_sidebar"];//是否显示侧边栏
    whetherToInterceptBedExplosion = basicProfile["Other_Settings"]["Whether_to_intercept_the_bed_explosion"];//是否拦截床爆炸
    whetherToInterceptTheRebirthAnchorExplosion = basicProfile["Other_Settings"]["Whether_to_intercept_respawn_anchor_explosions"];//是否拦截重生锚爆炸
    whetherToDisplayBloodBarDuringAttack = basicProfile["Other_Settings"]["Whether_to_show_health_bar_when_attacking"];//攻击时是否显示健康状态
    nweDiddicultSurvivalPlayerCmd = basicProfile["Other_Settings"]["Plugin_Directive"];//读取玩家指令
    itemDefaultEnchantLevel = basicProfile["Other_Settings"]["Item_default_enchantment_level"];//读取物品默认附魔等级
    newplugInOPSettingsPanel = basicProfile["Other_Settings"]["Plugin_OP_Settings_Panel"];//读取op指令
    handHeldItemsWillNotFallIfInjured = basicProfile["Other_Settings"]["Added_hand-held_items_to_not_drop_commands_for_injuries"];//读取增加手持物品为受伤不掉落指令
    handHeldItemsAreGivenForService = basicProfile["Other_Settings"]["Set_the_item_in_hand_as_the_item_given_in_the_suit"];//读取设置手持物品为进服给予物品
    isTheSlainMonsterResurrectedRandomly = basicProfile["Other_Settings"]["Whether_the_killed_monster_is_randomly_resurrected"];//被杀的怪物是否随机复活
    resurrectionProbabilityOfKilledMonster = basicProfile["Other_Settings"]["Chance_of_resurrection"];//被杀怪物复活几率
    EnableFractureConfig = basicProfile["Other_Settings"]["Enable_fracture"];//启用骨折事件
    FractureProbabilityConfig = basicProfile["Other_Settings"]["Fracture_probability"];//骨折几率
    //---------------死亡相关设置变量定义
    doesDeathDeductGoldCoins = basicProfile["Death_related_configuration"]["Does_death_deduct_gold_coins"];//死亡是否扣金币配置文件数据
    deductGoldCoinsForNonKillDeath = basicProfile["Death_related_configuration"]["Does_non-kill_death_deduct_gold_coins"];//非击杀死亡是否扣金币配置文件数据
    numberOfGoldCoinsDeductedFromDeath = basicProfile["Death_related_configuration"]["Gold_coin_limit"];//死亡是否扣金币配置文件数据
    //---------------跨世界相关设置变量定义
    deductMoneyForCrossingDimensions = basicProfile["Cross-world_related_configuration"]["Whether_to_deduct_gold_coins_across_the_world"];//跨纬度是否扣钱
    enterTheMainWorldRemovemoney = basicProfile["Cross-world_related_configuration"]["Overworld"];//主世界扣钱数量
    intoHellRemovemoney = basicProfile["Cross-world_related_configuration"]["Hell"];//地狱扣钱数量
    enterTheDestinationRemovemoney = basicProfile["Cross-world_related_configuration"]["TheEnd"];//末地扣钱数量
    //---------------Attack Related设置变量定义
    enableGoldCoinRestrictedWeapons = basicProfile["Attack_Related"]["Whether_to_enable_gold_limited_weapons"];//是否启用经济限制装备
    whetherToEnableInvalidAttackProbability = basicProfile["Attack_Related"]["Whether_to_enable_attack_chance_is_invalid"];//攻击无效配置文件
    attackInvalidProbability = basicProfile["Attack_Related"]["Invalid_chance"];//攻击无效几率
    whetherToEnableInjuredItems = basicProfile["Attack_Related"]["Whether_to_enable_damaged_items"];//是否启用受伤掉装备
    PVPDropProbability = basicProfile["Attack_Related"]["Item_drop_chance_in_PVP"];//pvp受伤掉落物品几率
    PVEDropProbability = basicProfile["Attack_Related"]["Item_drop_chance_in_PVE"];//pve受伤掉落物品几率
    noObjectIsReallHurt = basicProfile["Attack_Related"]["Whether_there_is_no_real_injury_to_the_item"];//是否受到真实伤害
    doesPVPDeductGoldCoins = basicProfile["Attack_Related"]["Does_PVP_deduct_gold_coins"];//PVP是否扣除金币
    PVPDeductionGoldCoinQuantity = basicProfile["Attack_Related"]["PVP_deduction_gold_coins_quantity"];//PVP扣除额金币数量
    IsThereAnUpperLimitForPVEPlusGold = basicProfile["Attack_Related"]["Is_there_a_cap_on_PVE_plus_gold_coins"];//PVE加金币是否有上限
    PVEPlusGoldUpperLimit = basicProfile["Attack_Related"]["PVE_plus_gold_limit"];//PVE金币上限
    //---------------末影龙相关设置变量定义
    specificWeaponsHurtEnderDragon = basicProfile["Ender_dragon_related"]["Whether_to_limit_the_damage_of_specific_weapons_to_the_ender_dragon"];//是否特定武器伤害末影龙
    enderDragonRangedDamageAllow = basicProfile["Ender_dragon_related"]["Can_the_ender_dragon_take_ranged_damage"];//是否能远程伤害末影龙
    weaponIDCapableOfCausingDamage = basicProfile["Ender_dragon_related"]["Weapon_ID_that_can_deal_damage"];//能对末影龙造成伤害武器ID
    enderDragonInvalidAttackProbability = basicProfile["Ender_dragon_related"]["Whether_to_set_the_player's_ineffective_chance_of_attacking_the_ender_dragon"];//是否开启对末影龙攻击无效几率
    contendenderDragonDamageProbability = basicProfile["Ender_dragon_related"]["Attack_on_the_ender_dragon_ineffective_chance"];//对末影龙攻击无效几率
    enderDragonDoesDeathExplode = basicProfile["Ender_dragon_related"]["Does_the_death_of_the_ender_dragon_cause_an_explosion"];//末影龙死亡是否爆炸
    enderDragonExplodeRange = basicProfile["Ender_dragon_related"]["Blast_radius"];//末影龙死亡爆炸半径
    killEnderDragonAddMoney = basicProfile["Ender_dragon_related"]["How_much_gold_to_kill_the_ender_dragon"];//击杀末影龙奖励金币
    //---------------破坏加金币相关设置变量定义
    enableGoldLimitDestruction = basicProfile["Destruction_plus_gold_coins"]["Whether_to_enable_gold_limit_destruction"];//是否启用金币破坏
    resetDestructionAddMoneyTime = basicProfile["Destruction_plus_gold_coins"]["Reset_Time"];//重置破坏加金币限制配置文件数据
    limitDailyDamagePlusGold = basicProfile["Destruction_plus_gold_coins"]["Whether_to_limit_the_number_of_daily_destruction_plus_gold_coins"];//获取是否限制每日加金币数量
    limitTheAmountOfDamageAndGoldCoinsPerDay = basicProfile["Destruction_plus_gold_coins"]["Destruction_Cap"];//获取每日加金币数量
    //---------------抛射物相关设置变量定义
    enableArrowFishingRodTridentGoldCoinLimit = basicProfile["Projectile_related"]["Whether_to_enable_the_arrow_fishing_rod_trident_gold_limit"];//是否启用限制
    doYouDeductGoldCoinsForFishing = basicProfile["Projectile_related"]["Does_fishing_deduct_gold_coins"];//是否启钓鱼扣钱
    fishingRodGoldLimit = basicProfile["Projectile_related"]["Fishing_rod_unlocks_gold_coins"];//钓鱼杆解锁金币
    numberOfGoldCoinsDeductedForFishing = basicProfile["Projectile_related"]["Fishing_Buckle_Gold_Coins_quantity"];//钓鱼扣金币数量
    arrowUnlockGold = basicProfile["Projectile_related"]["Arrows_unlock_coins"];//弓箭解锁金币数量
    tridentThrowUnlockGoldCoin = basicProfile["Projectile_related"]["Trident_throw_to_unlock_gold_coins"];//三叉戟解锁金币
    //---------------玩家成长相关设置变量定义
    whetherEnablePlayerGrowth = basicProfile["Player_growth"]["Whether_to_enable_the_Player_growth_system"];//是否启用玩家成长系统
    playerInitialHealth = basicProfile["Player_growth"]["Player's_initial_health"];//玩家的初始健康状况
    playerMoneyAddHealth = basicProfile["Player_growth"]["The_player_adds_a_bit_of_blood_for_every_gold_coin"];//玩家多少金币加上一点血
    playerMoneyAddAttack = basicProfile["Player_growth"]["The_player_adds_a_point_of_attack_for_every_gold_coin"];//玩家多少金币加上攻击点数
    //--------------语言文件读取分辨
    pluginLanguage = {};
    pluginLanguageFile = {};
    if (SystemLanguage == "en_US") {
        pluginLanguage = JSON.parse(File.readFrom(path3 + 'en_US.json'));//读取英文语言文件
    } else if (SystemLanguage == "zh_CN") {
        pluginLanguage = JSON.parse(File.readFrom(path3 + 'zh_CN.json'));//读取英文语言文件
        pluginLanguageFile = JSON.parse(File.readFrom(path3 + 'item_zh_CN.json'));//读取中英对照语言文件
    }
    //---------------Tag读取
    TrueDamageTag = purchaseSkillsMoneyListJson.True_Damage.tag;
    BlastAttackTag = purchaseSkillsMoneyListJson.Blast_Attack.tag;
    MonsterGiftTag = purchaseSkillsMoneyListJson.Monster_Gift.tag;
    HolyGuardianTag = purchaseSkillsMoneyListJson.Holy_Guardian.tag;
    //---------------附魔相关变量设定
    ConfigEnchantNameList = [];
    ConfigEnchantMoneyList = [];
    ConfigEnchantIDList = [];
    ii = 0;
    for (i1 in itemEnchantListJson[SystemLanguage]) {
        ConfigEnchantNameList[ii] = i1;
        ConfigEnchantMoneyList[ii] = itemEnchantListJson[SystemLanguage][i1].Price;
        ConfigEnchantIDList[ii] = itemEnchantListJson[SystemLanguage][i1].ID;
        ii += 1;
    }
}

//---------------插件内部处理相关变量定义
let attackSkillCDCountdown = {};//武器技能cd倒计时
let playersDestroyRecords = {};//破坏记录
let playersKillEntityRecords = {};//击杀记录
let resetDamageRecordMonitoring = 0;//重置破坏加金币限制记录数据次数
let setIntervalId = 0;//侧边栏状态记录
let terminalExplosionRecord = 0;
let listOfWeaponsSelectedByPlayersToPurchaseSkills = {};//玩家背包可购买技能物品列表
let playersBuyWeaponsOfSkillChoice = {};//玩家购买技能选择的物品
let listOfPlayersUpgradingSkillBackpacks = {};//玩家背包可升级技能物品列表
let playerUpgradeSkillMoney = {};//玩家升级技能选择的物品
let playerEnchantSelectionBackpackList = {};//玩家附魔背包物品列表
let playerEnchantSelectionBackpackListSelectionResults = {};//玩家附魔选择背包物品结果
let repairDurableSelectionItems = {};//修复耐久选择的物品
let playerAttackEntityHealthDisplay = {};//玩家攻击实体记录相关数据
let playerAttackEntityUniqueId = {};//玩家攻击实体记录相关数据
let entityBossHealthMsg = {};//

const enderDragonAttribute = '{"Armor":[{"Count":0b,"Damage":0s,"Name":"","WasPickedUp":0b},{"Count":0b,"Damage":0s,"Name":"","WasPickedUp":0b},{"Count":0b,"Damage":0s,"Name":"","WasPickedUp":0b},{"Count":0b,"Damage":0s,"Name":"","WasPickedUp":0b}],"AttackTime":0s,"Attributes":[{"Base":0f,"Current":0f,"DefaultMax":1024f,"DefaultMin":-1024f,"Max":1024f,"Min":-1024f,"Name":"minecraft:luck"},{"Base":200f,"Current":200f,"DefaultMax":200f,"DefaultMin":0f,"Max":200f,"Min":0f,"Name":"minecraft:health"},{"Base":0f,"Current":0f,"DefaultMax":16f,"DefaultMin":0f,"Max":16f,"Min":0f,"Name":"minecraft:absorption"},{"Base":100f,"Current":100f,"DefaultMax":100f,"DefaultMin":0f,"Max":100f,"Min":0f,"Name":"minecraft:knockback_resistance"},{"Base":0.3f,"Current":0.3f,"DefaultMax":3.40282e+38f,"DefaultMin":0f,"Max":3.40282e+38f,"Min":0f,"Name":"minecraft:movement"},{"Base":0.02f,"Current":0.02f,"DefaultMax":3.40282e+38f,"DefaultMin":0f,"Max":3.40282e+38f,"Min":0f,"Name":"minecraft:underwater_movement"},{"Base":0.02f,"Current":0.02f,"DefaultMax":3.40282e+38f,"DefaultMin":0f,"Max":3.40282e+38f,"Min":0f,"Name":"minecraft:lava_movement"},{"Base":16f,"Current":16f,"DefaultMax":2048f,"DefaultMin":0f,"Max":2048f,"Min":0f,"Name":"minecraft:follow_range"},{"Base":3f,"Current":3f,"DefaultMax":3f,"DefaultMin":3f,"Max":3f,"Min":3f,"Name":"minecraft:attack_damage"}],"BodyRot":89.6083f,"Chested":0b,"Color":0b,"Color2":0b,"Dead":0b,"DeathTime":0s,"FallDistance":0f,"Fire":0s,"HurtTime":0s,"Invulnerable":0b,"IsAngry":0b,"IsAutonomous":1b,"IsBaby":0b,"IsEating":0b,"IsGliding":0b,"IsGlobal":1b,"IsIllagerCaptain":0b,"IsOrphaned":0b,"IsOutOfControl":0b,"IsPregnant":0b,"IsRoaring":0b,"IsScared":0b,"IsStunned":0b,"IsSwimming":0b,"IsTamed":0b,"IsTrusting":0b,"LastDimensionId":2,"LeasherID":-1l,"LootDropped":0b,"Mainhand":[{"Count":0b,"Damage":0s,"Name":"","WasPickedUp":0b}],"MarkVariant":0,"Motion":[0.41062f,-0.0801882f,0.0189916f],"NaturalSpawn":0b,"Offhand":[{"Count":0b,"Damage":0s,"Name":"","WasPickedUp":0b}],"OnGround":0b,"OwnerNew":-1l,"Persistent":1b,"PortalCooldown":0,"Pos":[-3.61875f,72.6525f,0.525409f],"Rotation":[89.6083f,0f],"Saddled":0b,"Sheared":0b,"ShowBottom":0b,"Sitting":0b,"SkinID":0,"SpawnedByNight":0b,"Strength":0,"StrengthMax":0,"Surface":0b,"Tags":[],"TargetID":-1l,"TradeExperience":0,"TradeTier":0,"UniqueID":-197568495580l,"Variant":0,"boundX":0,"boundY":0,"boundZ":0,"canPickupItems":0b,"definitions":["+minecraft:ender_dragon","+","-dragon_flying","+dragon_sitting"],"hasBoundOrigin":0b,"hasSetCanPickupItems":1b,"identifier":"minecraft:ender_dragon"}';//末影龙原始属性
const weaponStandardTypeName = ["minecraft:wooden_sword", "minecraft:stone_sword", "minecraft:iron_sword", "minecraft:diamond_sword", "minecraft:golden_sword", "minecraft:netherite_sword"];
const minebbsApiUrl = ["http://49.235.118.203/resource-info?resource_id=2970", "http://124.222.132.223/resource-info?resource_id=2970"];

//侧边栏显示
function sidebarDisplay() {
    try {
        let playerList = mc.getOnlinePlayers();
        if (JSON.stringify(playerList) != "[]") {
            for (let i in playerList) {
                let sidebarDisplayjson = {}
                sidebarDisplayjson[pluginLanguage.Language_sidebar_avgPing] = playerList[i].getDevice().avgPing;
                sidebarDisplayjson[pluginLanguage.Language_sidebar_money] = money.get(playerList[i].xuid);
                if (playerList[i].hasTag(`${TrueDamageTag}`)) {
                    sidebarDisplayjson[pluginLanguage.Language_True_Damage] = attackSkillCDCountdown[playerList[i].xuid]["True_Damage"];
                }
                if (playerList[i].hasTag(`${BlastAttackTag}`)) {
                    sidebarDisplayjson[pluginLanguage.Language_Blast_Attack] = attackSkillCDCountdown[playerList[i].xuid]["Blast_Attack"];
                }
                if (playerList[i].hasTag(`${MonsterGiftTag}`)) {
                    sidebarDisplayjson[pluginLanguage.Language_Take_Your_Equipment] = attackSkillCDCountdown[playerList[i].xuid]["Monster_Gift"];
                }
                if (playerList[i].hasTag(`${HolyGuardianTag}`)) {
                    sidebarDisplayjson[pluginLanguage.Language_Holy_Guardian] = attackSkillCDCountdown[playerList[i].xuid]["Holy_Guardian"];
                }
                if (playerList[i].hasTag("arrears")) {
                    sidebarDisplayjson[pluginLanguage.Language_Amount_owed] = parseInt(playerList[i].getScore(nameOfArrearsScoreboard));
                }
                playerList[i].setSidebar(pluginLanguage.Language_sidebar_title, sidebarDisplayjson);
                if (attackSkillCDCountdown[playerList[i].xuid]["True_Damage"] > 0) {
                    attackSkillCDCountdown[playerList[i].xuid]["True_Damage"] -= 1;
                }
                if (attackSkillCDCountdown[playerList[i].xuid]["Blast_Attack"] > 0) {
                    attackSkillCDCountdown[playerList[i].xuid]["Blast_Attack"] -= 1;
                }
                if (attackSkillCDCountdown[playerList[i].xuid]["Monster_Gift"] > 0) {
                    attackSkillCDCountdown[playerList[i].xuid]["Monster_Gift"] -= 1;
                }
                if (attackSkillCDCountdown[playerList[i].xuid]["Holy_Guardian"] > 0) {
                    attackSkillCDCountdown[playerList[i].xuid]["Holy_Guardian"] -= 1;
                }
            }
        }
    } catch (err) {
        //log("侧边栏显示报错" + err);
    }
}

//每10分钟执行的循环任务
function everyTenMinutes() {
    try {
        let myDate = system.getTimeStr();
        let playerList = mc.getOnlinePlayers();
        if (JSON.stringify(playerList) != "[]") {
            for (let i in playerList) {
                let player = playerList[i];
                if (player.hasTag("arrears")) {
                    let amountOwed = parseInt(player.getScore(nameOfArrearsScoreboard));//获取玩家欠款数据
                    let playerLLMoney = money.get(player.xuid);//获取玩家llmoney金币数据
                    if (playerLLMoney >= amountOwed) {//判断玩家余额是否比欠款多或相等
                        if (money.reduce(player.xuid, amountOwed)) {//扣除玩家欠款金额并判断是否成功
                            if (player.reduceScore(nameOfArrearsScoreboard, amountOwed)) {//减少玩家计分板欠款数据并判断是否成功
                                player.removeTag("arrears")//移除欠款标签
                                TellMsg(player, pluginLanguage.Language_Settlement_of_arrears, 'MsgType1');
                            }
                        }
                    } else {
                        if (money.reduce(player.xuid, playerLLMoney)) {//扣除玩家欠款金额并判断是否成功
                            if (player.reduceScore(nameOfArrearsScoreboard, playerLLMoney)) {//减少玩家计分板欠款数据并判断是否成功
                                TellMsg(player, pluginLanguage.Language_Partial_settlement.replace(/{m}/g, playerLLMoney), 'MsgType1');
                            }
                        }
                    }
                }
            }
        }
        if (myDate.h == resetDestructionAddMoneyTime && resetDamageRecordMonitoring == 0) {
            resetDamageRecordMonitoring = 1;//设置破坏加金币限制记录数据次数为1，避免重复清理
            playersDestroyRecords = {};//重置破坏记录
            playersKillEntityRecords = {};//重置玩家击杀记录
        } else if (myDate.h == resetDestructionAddMoneyTime + 1) {
            resetDamageRecordMonitoring = 0;//清零破坏加金币限制记录数据次数
        }
    } catch (err) {
        log(`循环事件报错：${err}`);
    }
}

//抛射物创建监听事件处理
function entitySpawnProjectileHandle(entity, itemType) {
    try {
        if (entity.isPlayer()) {//判断是否是玩家
            if (enableArrowFishingRodTridentGoldCoinLimit) {//判断是否启用限制
                let player = entity.toPlayer();//实体转玩家对象
                let playerMoney = money.get(player.xuid);//获取玩家金币
                if (itemType == "minecraft:fishing_hook") {
                    if (playerMoney < fishingRodGoldLimit) {
                        TellMsg(player, pluginLanguage.Language_Fishing_failed, 'MsgType2');
                        return false;
                    } else {
                        if (doYouDeductGoldCoinsForFishing) {//判断是否扣除金币
                            money.reduce(player.xuid, numberOfGoldCoinsDeductedForFishing);//扣除玩家金币
                        }
                    }
                } else if (itemType == "minecraft:arrow") {
                    if (playerMoney < arrowUnlockGold) {
                        TellMsg(player, pluginLanguage.Language_Failed_use, 'MsgType2');
                        return false;
                    }
                } else if (itemType == "minecraft:thrown_trident") {
                    if (playerMoney < tridentThrowUnlockGoldCoin) {
                        TellMsg(player, pluginLanguage.Language_Failed_use, 'MsgType2');
                        return false;
                    }
                }
            }
        }
    } catch (err) {
        log(`抛射物创建监听事件：${err}`);
    }
}

//重生锚爆炸事件处理
function blockRespawnAnchorExplode(pos, player) {
    if (whetherToInterceptTheRebirthAnchorExplosion) {//判断是否拦截
        return false;//拦截爆炸
    }
}

//床爆炸事件处理
function blockBedExplodeHandle(pos) {
    if (whetherToInterceptBedExplosion) {//判断是否拦截
        if (pos.dimid == 2 && terminalExplosionRecord == 0) {//判断爆炸发生区域，避免拦截插件制造的爆炸
            return false;//拦截爆炸
        }
    }
}

//实体死亡事件处理
function entityMobDieHandle(mob, source, cause) {
    try {
        let entityType = mob.type;//储存生物标准类型名
        let entityPos = mob.pos;//储存生物死亡地点
        if (!mob.isPlayer()) {//判断死亡是否是玩家
            if (source != undefined) {
                if (source.isPlayer()) {//判断伤害是否来自玩家
                    let player = source.toPlayer();//实体转为玩家
                    if (mob.type != "minecraft:ender_dragon") {//判断死亡生物是不是末影龙
                        if (playerAttackEntityHealthDisplay[player.xuid] == 1) {
                            playerAttackEntityHealthDisplay[player.xuid] = 0;
                        }
                        let killEntityAddMoney = killEntityAddMoneyListJson[mob.type];
                        if (killEntityAddMoney != undefined) {//判断是否需要加金币
                            if (IsThereAnUpperLimitForPVEPlusGold) {//判断是否有加金币上限
                                if (PVEPlusGoldUpperLimit > playersKillEntityRecords[player.xuid]) {//判断是否达到上限
                                    if (money.add(player.xuid, killEntityAddMoney)) {//加金币判断是否成功
                                        TellMsg(player, pluginLanguage.Language_Player_Get_gold_coins.replace(/{m}/g, killEntityAddMoney), 'MsgType1');
                                        playersKillEntityRecords[player.xuid] += 1;
                                    }
                                }
                            } else {
                                if (money.add(player.xuid, killEntityAddMoney)) {//加金币判断是否成功
                                    TellMsg(player, pluginLanguage.Language_Player_Get_gold_coins.replace(/{m}/g, killEntityAddMoney), 'MsgType1');
                                }
                            }
                        }
                        if (isTheSlainMonsterResurrectedRandomly) {//判断是否复活
                            if (isTheCreatureOnTheResurrectionList(entityType)) {
                                let randomNumber = specifiedRangeRandomNumber(0, 100);//取随机数
                                if (randomNumber < resurrectionProbabilityOfKilledMonster) {//判断随机数是否在几率范围内
                                    TellMsg(player, pluginLanguage.Language_Biological_Resurrection, 'MsgType1');
                                    setTimeout(function () { generateEntitiesAndEnforceOperations(entityType, entityPos, player) }, 3000);//调用生成并强化函数
                                }
                            }
                        }
                    } else {//末影龙死亡处理
                        if (player.hasTag("Liberator")) {
                            player.removeTag('Liberator');
                        }
                        player.addTag("Dragon_Slayer");
                        money.add(player.xuid, killEnderDragonAddMoney);
                        mc.broadcast(pluginLanguage.Language_Kill_Dragon.replace(/{p}/g, player.name).replace(/{m}/g, killEnderDragonAddMoney));
                        if (enderDragonDoesDeathExplode) {
                            terminalExplosionRecord = 1;//记录要爆炸，避免被拦截
                            mc.broadcast(pluginLanguage.Language_Kill_Dragon_blast.replace(/{p}/g, player.name));
                            setTimeout(function () { mc.explode(mob.pos, null, enderDragonExplodeRange, enderDragonExplodeRange, false, true); }, 3000);
                            setTimeout(function () { terminalExplosionRecord = 0; }, 4000);
                        }
                    }
                }
            }
        }
    } catch (err) {
        log(`实体死亡事件：${err}`);
    }
}

//实体受伤事件处理
function entityMobHurtHandle(mob, source, damage, cause) {
    try {
        if (mob.type != "minecraft:ender_dragon") {//判断实体是否是末影龙
            if (source != undefined) {//判断伤害来源是否是未知伤害
                if (!mob.isPlayer() && source.isPlayer()) {//玩家攻击生物判断
                    if (whetherToDisplayBloodBarDuringAttack) {//判断是否显示血条
                        setBossBloodVolumeBarDisplay(mob, source, damage)//调用显示血条操作函数
                    }
                    playerPVEUseSkills(mob, source, damage);//调用玩家PVE使用技能操作函数
                } else if (source.isPlayer() && mob.isPlayer()) {//玩家攻击玩家判断
                    if (doesPVPDeductGoldCoins) {//是否启用pvp扣金币
                        if (money.reduce(source.toPlayer().xuid, PVPDeductionGoldCoinQuantity)) {//判断扣金币是否成功
                            TellMsg(source.toPlayer(), pluginLanguage.Language_Deduct_gold_coins.replace(/{m}/g, PVPDeductionGoldCoinQuantity), 'MsgType1');
                        } else {
                            TellMsg(source.toPlayer(pluginLanguage.Language_Attack_failed), 'MsgType2');
                            return false;
                        }
                    }
                    if (whetherToEnableInjuredItems) {//判断是否启用受伤掉装备
                        let randomNumber = specifiedRangeRandomNumber(0, 100);//取随机数
                        if (randomNumber < PVPDropProbability) {//判断是否在几率范围内
                            let player = mob.toPlayer();//受伤实体转玩家对象
                            entityMobHurtHandle_removeItem(player, damage);//调用玩家受伤掉装备操作
                        }
                    }
                    playerPVPUseSkills(mob, source, damage);//调用玩家PVP使用技能操作函数
                } else if (mob.isPlayer() && !source.isPlayer()) {//生物攻击玩家判断
                    if (whetherToEnableInjuredItems) {//判断是否启用受伤掉装备
                        let randomNumber = specifiedRangeRandomNumber(0, 100);//取随机数
                        if (randomNumber < PVEDropProbability) {//判断是否在几率范围内
                            let player = mob.toPlayer();//受伤实体转玩家对象
                            entityMobHurtHandle_removeItem(player, damage);//调用玩家受伤掉装备操作
                        }
                    }
                }
            }
        } else {//末影龙受伤处理
            if (!enderDragonRangedDamageAllow) {//是否拦截远程伤害
                if (!source.isPlayer()) {//判断伤害是否是玩家
                    return false;//拦截伤害
                }
            }
            if (source.isPlayer()) {//判断是否是玩家造成伤害
                let player = source.toPlayer();//获得玩家对象
                if (specificWeaponsHurtEnderDragon) {//判断是否开启手持物品判断
                    if (player.getHand().type != weaponIDCapableOfCausingDamage) {//判断手持物品是否同配置文件
                        return false;//拦截伤害
                    }
                }
                if (enderDragonInvalidAttackProbability) {//是否开启对末影龙伤害随机无效
                    let randomNumber = specifiedRangeRandomNumber(0, 100);//取随机数
                    if (randomNumber >= contendenderDragonDamageProbability) {//判断是否在范围内
                        return false;//拦截伤害
                    }
                }
            }
        }
        if (EnableFractureConfig) {//判断是否启用摔伤骨折事件
            if (mob.isPlayer()) {//判断实体是否是玩家
                if (cause == 5) {//判断是否是摔伤
                    let randomNumber = specifiedRangeRandomNumber(0, 100);//取随机数
                    if (randomNumber < FractureProbabilityConfig) {//判断是否在几率范围内
                        let cmd = `effect "${mob.name}" slowness 60 2 true`
                        mc.runcmdEx(cmd)
                        TellMsg(mob.toPlayer(), '§l§4' + pluginLanguage.Language_Enable_Fracture, 'MsgType1');
                    }
                }
            }
        }
    } catch (err) {
        log(`实体受伤事件报错：${err}`);
    }
}

//玩家移动事件处理
function playerMoveHandle(player, pos) {
    if (whetherToDisplayBloodBarDuringAttack) {//判断是否显示血条
        if (playerAttackEntityHealthDisplay[player.xuid] == 1) {//判断玩家是否有攻击数据
            let playerX = pos.x;
            let playerY = pos.y;
            let playerZ = pos.z;
            let entityList = mc.getAllEntities();
            let whetherLivingThingsExist = false;
            for (let i in entityList) {
                let entity = entityList[i];
                if (playerAttackEntityUniqueId[player.xuid] == entity.uniqueId) {
                    whetherLivingThingsExist = true;
                    let entityX = entity.pos.x;
                    let entityY = entity.pos.y;
                    let entityZ = entity.pos.z;
                    let XJudge;
                    let YJudge;
                    let ZJudge;
                    if (playerX >= entityX) {
                        XJudge = (playerX - entityX) * 2;
                    } else {
                        XJudge = (entityX - playerX) * 2;
                    } if (playerY >= entityY) {
                        YJudge = (playerY - entityY) * 2;
                    } else {
                        YJudge = (entityY - playerY) * 2;
                    } if (playerZ >= entityZ) {
                        ZJudge = (playerZ - entityZ) * 2;
                    } else {
                        ZJudge = (entityZ - playerZ) * 2;
                    }
                    let coordinateSum = XJudge + YJudge + ZJudge;
                    let jieguo = Math.sqrt(coordinateSum);
                    if (jieguo >= 7) {
                        player.removeBossBar("")
                    } else {
                        player.removeBossBar("")
                        let bloodVolumeDisplayPercentage = 100 / entity.maxHealth;//取得百分比
                        let currentBloodVolume = entity.health * bloodVolumeDisplayPercentage - entityBossHealthMsg[player.xuid].damage * bloodVolumeDisplayPercentage;
                        let bossDisplayText = `             ${entityBossHealthMsg[player.xuid].biologicalName} \n\n${pluginLanguage.Language_Boss_Blood_strip[0]}${entity.health}/${entity.maxHealth}       ${pluginLanguage.Language_Boss_Blood_strip[1]}${entityBossHealthMsg[player.xuid].damage}`;
                        player.setBossBar(bossDisplayText, currentBloodVolume)

                    }
                }
            }
            if (!whetherLivingThingsExist) {
                player.removeBossBar("")
            }
        }
    }
}

//玩家丢出物品事件处理
function playerDropItemHurt(player, item) {
    try {
        if (judgeWhetherPlayersBuySkills(player)) {//调用判断玩家是否购买过技能
            let dropItemNbtJson = item.getNbt().toString();//获取丢出物品的NBTJson数据
            if (dropItemNbtJson.indexOf('Lore') != -1) {//判断丢出物品是否有Lore标签
                let dropItemLore = JSON.parse(dropItemNbtJson).tag.display.Lore;//获取物品Lore数据
                if (dropItemLore != undefined && dropItemLore[0] == pluginLanguage.Language_Lore_1) {//判断物品是否拥有技能
                    TellMsg(player, pluginLanguage.Language_Throw_out_interception, 'MsgType3');
                    return false;//拦截丢出
                }
            }
        }
    } catch (err) {
        log(`玩家丢出物品事件处理报错：${err}`);
    }
}

//玩家破坏方块事件处理
function playerDestroyBlockHandle(player, block) {
    try {
        if (enableGoldLimitDestruction) {
            let playerHandItem = player.getHand().type//获取玩家手持物品
            if (playerHandItem != "") {//判断是否是空手
                let playerMoney = money.get(player.xuid);//获取玩家金币
                let noInterception = false;//设置默认拦截
                for (configMoney in moneyUnlockListJson) {//遍历配置文件
                    if (playerMoney >= configMoney) {//判断玩家金币是否符合
                        for (let configItemType in moneyUnlockListJson[configMoney]) {//遍历配置文件工具列表
                            if (moneyUnlockListJson[configMoney][configItemType] == playerHandItem) {//判断是否存在
                                if (destructionAddMoneyListJson[block.type] != undefined) {//判断是否给金币
                                    if (limitDailyDamagePlusGold) {//判断是否有上限
                                        if (playersDestroyRecords[player.xuid] < limitTheAmountOfDamageAndGoldCoinsPerDay) {//判断是否达到上限
                                            TellMsg(player, pluginLanguage.Language_Player_Get_gold_coins.replace(/{m}/g, destructionAddMoneyListJson[block.type]), 'MsgType1');
                                            money.add(player.xuid, destructionAddMoneyListJson[block.type]);//给玩家金币
                                            playersDestroyRecords[player.xuid] += 1;
                                        }
                                    } else {
                                        TellMsg(player, pluginLanguage.Language_Player_Get_gold_coins.replace(/{m}/g, destructionAddMoneyListJson[block.type]), 'MsgType1');
                                        money.add(player.xuid, destructionAddMoneyListJson[block.type]);//给玩家金币
                                    }
                                }
                                noInterception = true;//设置不拦截
                            }
                        }
                    }
                }
                if (!noInterception) {//判断是否拦截
                    TellMsg(player, pluginLanguage.Language_Sabotage_interception, 'MsgType3');
                    return noInterception
                }
            } else {
                if (destructionAddMoneyListJson[block.type] != undefined) {//判断是否给金币
                    if (limitDailyDamagePlusGold) {//判断是否有上限
                        if (playersDestroyRecords[player.xuid] < limitTheAmountOfDamageAndGoldCoinsPerDay) {//判断是否达到上限
                            TellMsg(player, pluginLanguage.Language_Player_Get_gold_coins.replace(/{m}/g, destructionAddMoneyListJson[block.type]), 'MsgType1');
                            money.add(player.xuid, destructionAddMoneyListJson[block.type]);//给玩家金币
                            playersDestroyRecords[player.xuid] += 1;
                        }
                    } else {
                        TellMsg(player, pluginLanguage.Language_Player_Get_gold_coins.replace(/{m}/g, destructionAddMoneyListJson[block.type]), 'MsgType1');
                        money.add(player.xuid, destructionAddMoneyListJson[block.type]);//给玩家金币
                    }
                }
            }
        } else {
            if (destructionAddMoneyListJson[block.type] != undefined) {//判断是否给金币
                if (limitDailyDamagePlusGold) {//判断是否有上限
                    if (playersDestroyRecords[player.xuid] < limitTheAmountOfDamageAndGoldCoinsPerDay) {//判断是否达到上限
                        TellMsg(player, pluginLanguage.Language_Player_Get_gold_coins.replace(/{m}/g, destructionAddMoneyListJson[block.type]), 'MsgType1');
                        money.add(player.xuid, destructionAddMoneyListJson[block.type]);//给玩家金币
                        playersDestroyRecords[player.xuid] += 1;
                    }
                } else {
                    TellMsg(player, pluginLanguage.Language_Player_Get_gold_coins.replace(/{m}/g, destructionAddMoneyListJson[block.type]), 'MsgType1');
                    money.add(player.xuid, destructionAddMoneyListJson[block.type]);//给玩家金币
                }
            }
        }
    } catch (err) {
        log(`玩家破坏方块事件：${err}`);
    }
}

//玩家进入游戏处理
function palyerJoinHandle(player) {
    try {
        if (PlayerMsgDataListJson[player.xuid] == undefined) {
            PlayerMsgDataListJson[player.xuid] = {};
            PlayerMsgDataListJson[player.xuid].MsgType1 = true;
            PlayerMsgDataListJson[player.xuid].MsgType2 = true;
            PlayerMsgDataListJson[player.xuid].MsgType3 = true;
            PlayerMsgDataListJson[player.xuid].MsgType4 = 5;
            File.writeTo(path1 + 'PlayerMsgData.json', JSON.stringify(PlayerMsgDataListJson, null, "\t"));
        }
        if (attackSkillCDCountdown[player.xuid] == undefined) {//判断玩家是否有技能CD数据
            attackSkillCDCountdown[player.xuid] = {};//创建玩家技能cd数据
            for (let i in purchaseSkillsMoneyListJson) {//获取所有技能名称
                attackSkillCDCountdown[player.xuid][i] = 0;//所有技能cd归零
            }
        }
        if (playersDestroyRecords[player.xuid] == undefined) {//判断玩家是否有破坏上限数据
            playersDestroyRecords[player.xuid] = 0;//玩家破坏上限置零
        }
        if (playersKillEntityRecords[player.xuid] == undefined) {//判断玩家是否有击杀数据
            playersKillEntityRecords[player.xuid] = 0;
        }
        if (player.hasTag('Dragon_Slayer')) {//判断玩家是否有标签
            let pos = player.pos;//获取坐标对象
            let MsgPos = `${pos.dim} ${Math.round(pos.x)} ${Math.round(pos.y)} ${Math.round(pos.z)}`;
            mc.broadcast(pluginLanguage.Language_Dragon_Slayer_notification.replace(/{p}/g, player.name).replace(/{pos}/g, MsgPos).replace(/{h}/g, player.health))
        }
        if (!player.hasTag('Books_given')) {
            player.addTag('Books_given');
            player.giveItem(mc.newItem(NBT.parseSNBT(thePluginContentManualCannotBeEdited)));
            player.refreshItems();
        }
        if (whetherEnablePlayerGrowth) {
            if (!player.hasTag('Growth_system')) {
                let playerNbt = player.getNbt();//获取玩家Nbt数据
                let playerNbtAttributes = playerNbt.getTag("Attributes");//获取Attributes内容
                for (let i = 0; i < playerNbtAttributes.getSize(); i++) {
                    let playerNbtAttributesObj = playerNbtAttributes.getTag(i);//获取当前位置的数据
                    if (playerNbtAttributesObj.getTag("Name") == "minecraft:health") {
                        playerNbtAttributesObj.setFloat("Base", playerInitialHealth);//设置基础血量
                        playerNbtAttributesObj.setFloat("Current", playerInitialHealth);//设置当前血量
                        playerNbtAttributesObj.setFloat("DefaultMax", playerInitialHealth);//设置默认最大血量
                        playerNbtAttributesObj.setFloat("Max", playerInitialHealth);//设置最大血量
                    }
                }
                player.setNbt(playerNbt);//写入新的nbt数据
                player.addTag('Growth_system');//设置tag标签
            }
        } else {
            if (player.hasTag('Growth_system')) {
                let playerNbt = player.getNbt();//获取玩家Nbt数据
                let playerNbtAttributes = playerNbt.getTag("Attributes");//获取Attributes内容
                for (let i = 0; i < playerNbtAttributes.getSize(); i++) {
                    let playerNbtAttributesObj = playerNbtAttributes.getTag(i);//获取当前位置的数据
                    if (playerNbtAttributesObj.getTag("Name") == "minecraft:health") {
                        playerNbtAttributesObj.setFloat("Base", 20);//设置基础血量
                        playerNbtAttributesObj.setFloat("Current", 20);//设置当前血量
                        playerNbtAttributesObj.setFloat("DefaultMax", 20);//设置默认最大血量
                        playerNbtAttributesObj.setFloat("Max", 20);//设置最大血量
                    }
                    if (playerNbtAttributesObj.getTag("Name") == "minecraft:attack_damage") {
                        let baseAttack = parseInt(playerNbtAttributesObj.getTag("DefaultMax").toString());//获取当前最大攻击
                        if (baseAttack != 1) {
                            playerNbtAttributesObj.setFloat("Base", 1);//设置基础攻击
                            playerNbtAttributesObj.setFloat("DefaultMax", 1);//设置默认最大攻击
                            playerNbtAttributesObj.setFloat("DefaultMin", 1);//设置默认最小攻击
                            playerNbtAttributesObj.setFloat("Max", 1);//设置最大攻击
                            playerNbtAttributesObj.setFloat("Current", 1);//设置当前攻击
                            playerNbtAttributesObj.setFloat("Min", 1);//设置最小攻击
                        }
                    }
                }
                player.setNbt(playerNbt);//写入新的nbt数据
                player.removeTag('Growth_system');//设置tag标签
            }
        }
    } catch (err) {
        log(`玩家进入游戏事件：${err}`);
    }
}

//玩家攻击事件处理
function playerAttackHandle(player, entity) {
    try {
        if (enableGoldCoinRestrictedWeapons) {
            let playerMoney = money.get(player.xuid);//获取玩家金币
            let playerHandItem = player.getHand().type;//获取玩家手持物品type
            let noInterception = false;//设置默认拦截伤害
            let noInterception1 = true;//设置默认拦截伤害
            if (playerHandItem == "") {//判断是否是空手
                noInterception = true;//设置不拦截伤害
            } else {
                for (let configMoney in moneyUnlockListJson) {
                    if (playerMoney >= configMoney) {//判断金额是否足够
                        for (let configItmeType in moneyUnlockListJson[configMoney]) {
                            if (moneyUnlockListJson[configMoney][configItmeType] == playerHandItem) {//判断物品是否存在
                                noInterception = true;//设置不拦截伤害
                            }
                        }
                    }
                }
            }
            if (whetherToEnableInvalidAttackProbability) {//判断是否启用攻击无效
                let randomNumber = specifiedRangeRandomNumber(0, 100);//取随机数
                if (randomNumber < attackInvalidProbability) {//判断随机数是否在几率范围内
                    noInterception = false;//拦截攻击
                    noInterception1 = false;
                }
            }
            if (!noInterception) {//判断是否拦截
                if (!noInterception1) {
                    TellMsg(player, pluginLanguage.Language_Invalid_attack1, 'MsgType3');
                } else {
                    TellMsg(player, pluginLanguage.Language_Invalid_attack, 'MsgType3');
                }
                return noInterception
            }
        }
    } catch (err) {
        log(`玩家攻击事件报错：${err}`);
    }
}

//玩家切换维度事件处理
function playerChangeDimHandle(player, dimid) {
    try {
        if (deductMoneyForCrossingDimensions) {//判断跨纬度是否扣金币
            if (dimid == 0) {//判断是否是主世界
                playerChangeDimHandle_removeMoney(player, enterTheMainWorldRemovemoney)//调用扣款函数
            } else if (dimid == 1) {//判断是否是地狱
                playerChangeDimHandle_removeMoney(player, intoHellRemovemoney)//调用扣款函数
            } else if (dimid == 2) {//判断是否是末地
                playerChangeDimHandle_removeMoney(player, enterTheDestinationRemovemoney)//调用扣款函数
            }
        }
    } catch (err) {
        log(`切换纬度报错：${err}`);
    }
}

//玩家死亡事件处理
function playerDieHandle(player, source) {
    try {
        if (doesDeathDeductGoldCoins) {//判断死亡是否扣金币
            let playerMoney = money.get(player.xuid);//获取玩家金币数量
            if (deductGoldCoinsForNonKillDeath && source == undefined) {//判断非正常死亡是否扣金币
                if (numberOfGoldCoinsDeductedFromDeath == 0) {//判断是否无上限扣除
                    let playerRemoveMoney = specifiedRangeRandomNumber(0, playerMoney);//取扣除金额随机数
                    if (money.reduce(player.xuid, playerRemoveMoney)) {//判断是否扣款成功
                        TellMsg(player, pluginLanguage.Language_Death_deduction.replace(/{m}/g, playerRemoveMoney), 'MsgType1');
                    }
                } else {//有上限处理
                    if (numberOfGoldCoinsDeductedFromDeath <= playerMoney) {//判断玩家余额是否大于上限
                        let playerRemoveMoney = specifiedRangeRandomNumber(0, numberOfGoldCoinsDeductedFromDeath);//取扣除金额随机数
                        if (money.reduce(player.xuid, playerRemoveMoney)) {//判断是否扣款成功
                            TellMsg(player, pluginLanguage.Language_Death_deduction.replace(/{m}/g, playerRemoveMoney), 'MsgType1');
                        }
                    } else {//玩家金额小于上限处理
                        let playerRemoveMoney = specifiedRangeRandomNumber(0, playerMoney);//取扣除金额随机数
                        if (money.reduce(player.xuid, playerRemoveMoney)) {//判断是否扣款成功
                            TellMsg(player, pluginLanguage.Language_Death_deduction.replace(/{m}/g, playerRemoveMoney), 'MsgType1');
                        }
                    }
                }
            } else if (source != undefined) {//判断玩家是否正常死亡
                if (numberOfGoldCoinsDeductedFromDeath == 0) {
                    let playerRemoveMoney = specifiedRangeRandomNumber(0, playerMoney);//取扣除金额随机数
                    if (money.reduce(player.xuid, playerRemoveMoney)) {//判断是否扣款成功
                        TellMsg(player, pluginLanguage.Language_Death_deduction.replace(/{m}/g, playerRemoveMoney), 'MsgType1');
                    }
                } else {//有上限处理
                    if (numberOfGoldCoinsDeductedFromDeath <= playerMoney) {//判断玩家余额是否大于上限
                        let playerRemoveMoney = specifiedRangeRandomNumber(0, numberOfGoldCoinsDeductedFromDeath);//取扣除金额随机数
                        if (money.reduce(player.xuid, playerRemoveMoney)) {//判断是否扣款成功
                            TellMsg(player, pluginLanguage.Language_Death_deduction.replace(/{m}/g, playerRemoveMoney), 'MsgType1');
                        }
                    } else {//玩家金额小于上限处理
                        let playerRemoveMoney = specifiedRangeRandomNumber(0, playerMoney);//取扣除金额随机数
                        if (money.reduce(player.xuid, playerRemoveMoney)) {//判断是否扣款成功
                            TellMsg(player, pluginLanguage.Language_Death_deduction.replace(/{m}/g, playerRemoveMoney), 'MsgType1');
                        }
                    }
                }
                if (player.getTag("Dragon_Slayer") && source.isPlayer()) {
                    let player2 = source.toPlayer();//将实体转为玩家方便后续处理
                    let diePlayerEnderChest = player.getEnderChest();//获取死亡玩家的末影箱容器数据
                    if (!diePlayerEnderChest.isEmpty()) {//判断死亡玩家末影箱是否为空
                        let diePlayerEnderChestList = diePlayerEnderChest.getAllItems();//获取容器内所有格子列表
                        let newDiePlayerEnderChestList = [];//新建一个列表
                        for (let i = 0; i < diePlayerEnderChestList.length; i++) {
                            if (diePlayerEnderChestList[i].name != "") {//判断容器内此位置是否为空
                                newDiePlayerEnderChestList[newDiePlayerEnderChestList.length] = i; //将物品位置写入新列表
                            }
                        }
                        if (JSON.stringify(newDiePlayerEnderChestList) != "[]") {
                            let randomNumber = newDiePlayerEnderChestList[specifiedRangeRandomNumber(0, newDiePlayerEnderChestList.length)];//取随机数
                            let containerItem = containerObject.getItem(randomNumber);//获取格子的物品对象
                            if (player2.giveItem(containerItem)) {//给击杀者物品
                                diePlayerEnderChest.removeItem(randomNumber, containerItem.count);//删除末影箱容器内的物品
                                mc.broadcast(pluginLanguage.Language_Kill_Dragon_palyer_1.replace(/{p}/g, player2.name));
                            } else {
                                mc.broadcast(pluginLanguage.Language_Kill_Dragon_palyer_2.replace(/{p}/g, player2.name));
                            }
                        }
                    } else {//处理玩家容器为空
                        let playerMoney = money.get(player.xuid);//获取死亡玩家的金币
                        if (playerMoney > 0) {
                            if (money.reduce(player.xuid, playerMoney)) {//清空玩家金币
                                money.add(player2.xuid, playerMoney);//给击杀者所有金币
                                mc.broadcast(pluginLanguage.Language_Kill_Dragon_palyer_3.replace(/{p}/g, player2.name));
                            }
                        }
                    }
                    player.removeTag('Dragon_Slayer');
                }
            }
        }
    } catch (err) {
        log(`玩家死亡事件报错：${err}`);
    }
}

//玩家吃食物事件处理
function playerEatHandle(player, item) {
    try {
        if (foodBuffTypeMoneyListJson[item.type] != undefined) {
            let eatBuffType = eatFoodGiveBuffListJson[foodBuffTypeMoneyListJson[item.type][0]];//获取对应食物的buff类型列表
            let eatRemoveMoney = foodBuffTypeMoneyListJson[item.type][1];//获取对应食物的扣金币数
            if (money.reduce(player.xuid, eatRemoveMoney)) {//扣除玩家金币并判断是否成功
                let buffEnglishName = eatBuffType[specifiedRangeRandomNumber(0, eatBuffType.length - 1)];//根据随机数取列表对应buff名称
                let buffTimeRandomNumber = specifiedRangeRandomNumber(3, 60);//buff持续时间随机数3-60秒
                let buffLvlRandomNumber = specifiedRangeRandomNumber(1, 4);//buff等级1-3级
                mc.runcmdEx(`effect "${player.name}" ${buffEnglishName} ${buffTimeRandomNumber} ${buffLvlRandomNumber} true`);//后台执行指令给buff
                TellMsg(player, pluginLanguage.Language_edible.replace(/{i}/g, item.name).replace(/{buff}/g, buffTimeRandomNumber).replace(/{buffLvl}/g, buffLvlRandomNumber).replace(/{buffName}/g, buffEnglishName).replace(/{m}/g, eatRemoveMoney), 'MsgType1');
            }
        }
    } catch (err) {
        log(`玩家吃食物事件报错：${err}`);
    }
}

//服务器启动完毕事件处理
function serverServerStarted() {
    try {
        if (mc.getScoreObjective(nameOfArrearsScoreboard) == undefined) {
            mc.newScoreObjective(nameOfArrearsScoreboard, 'Arrears_data');//创建欠款计分板
        }
        if (showsidebar) {//判断是否显示侧边栏
            setIntervalId = setInterval(sidebarDisplay, 1000);//每秒调用侧边栏函数
        }
        setInterval(minebbsVersionMonitoring, 1000 * 60 * 60 * 3);//调用minebbs版本监测函数
        setInterval(everyTenMinutes, 1000 * 60 * 10);//调用欠款扣款函数
        minebbsVersionMonitoring();//启动进行一次版本检查
        log(pluginLanguage.Language_Loading_succeeded.replace(/{v}/g, version))
    } catch (err) {
        log(`服务器启动完毕事件报错：${err}`);
    }
}

//血量显示操作
function setBossBloodVolumeBarDisplay(mob, source, damage) {
    let entityMaxHealth = mob.maxHealth;
    let player = source.toPlayer();//实体转玩家
    playerAttackEntityUniqueId[player.xuid] = mob.uniqueId
    playerAttackEntityHealthDisplay[player.xuid] = 1;
    let bloodVolumeDisplayPercentage = 100 / entityMaxHealth;//取得百分比
    let remainingBloodVolume = mob.health
    let currentBloodVolume = mob.health * bloodVolumeDisplayPercentage - parseInt(damage) * bloodVolumeDisplayPercentage;
    let biologicalName = mob.name;
    if (currentBloodVolume < 0) {
        currentBloodVolume = 0
    }
    if (pluginLanguageFile[mob.type.split(':')[1]] != undefined) {
        biologicalName = pluginLanguageFile[mob.type.split(':')[1]];
    }
    player.removeBossBar("")
    if (remainingBloodVolume < 0) {
        remainingBloodVolume = 0
    }
    let bossDisplayText = `             ${biologicalName} \n\n${pluginLanguage.Language_Boss_Blood_strip[0]}${remainingBloodVolume}/${entityMaxHealth}       ${pluginLanguage.Language_Boss_Blood_strip[1]}${damage}`;
    entityBossHealthMsg[player.xuid] = { "biologicalName": `${biologicalName}`, "damage": `${parseInt(damage)}` };
    player.setBossBar(bossDisplayText, currentBloodVolume)
    setTimeout(function () {
        if (playerAttackEntityHealthDisplay[player.xuid] == 0) {
            player.removeBossBar("")
        }
    }, 2000);
}

//玩家PVP使用技能操作
function playerPVPUseSkills(mob, source, damage) {
    try {
        let player = source.toPlayer();//攻击实体转为玩家
        let playerHandItem = player.getHand().getNbt().toString();//玩家手持物品Json数据
        if (playerHandItem.indexOf("Lore") != -1) {
            let playerHandItemJson = JSON.parse(playerHandItem);//玩家手持物品json对象数据
            let playerItemLore = playerHandItemJson.tag.display.Lore;//获取物品Lore数据
            if (playerItemLore != undefined && playerItemLore[0] == pluginLanguage.Language_Lore_1) {//判断物品是否拥有技能
                let skillName = playerItemLore[1];//获得技能名称
                if (player.hasTag(`${skillName}`)) {//判断玩家是否能使用这个技能
                    let currentSkillLevel = parseInt(playerItemLore[2].split('：')[1]);//切割字符串获得等级
                    if (skillName == pluginLanguage.Language_Holy_Guardian && attackSkillCDCountdown[player.xuid][skillName] == 0) {
                        let skillCd = purchaseSkillsMoneyListJson[skillName].Damage[currentSkillLevel]["CD"];//获取技能cd
                        let skillTreatment = purchaseSkillsMoneyListJson[skillName].Damage[currentSkillLevel]["Healing amount"];//获取技能治疗量
                        let playerNbtData = player.getNbt();//获得玩家自己Nbt数据
                        let getPlayerHealth = player.health;//获得玩家当前生命值
                        for (let i = 0; i < 14; i++) {
                            if (playerNbtData.getTag("Attributes").getTag(i).getTag("Name").toString() == "minecraft:health") {//判断是否是生命数据nbt项
                                playerNbtData.getTag("Attributes").getTag(i).getTag("Current").set(skillTreatment + getPlayerHealth);//修改玩家生命值
                            }
                        }
                        player.setNbt(playerNbtData);//设置玩家nbt
                        mob.hurt(skillTreatment)//对受伤害者进行扣血
                        TellMsg(player, pluginLanguage.Language_Divine_Guardian.replace(/{h}/g, skillTreatment), 'MsgType1');
                        attackSkillCDCountdown[player.xuid][skillName] = skillCd;//设置技能进入cd状态
                    }
                }
            }
        }
    } catch (err) {
        log(`玩家PVP使用技能操作报错：${err}`);
    }
}

//玩家Pve使用技能操作
function playerPVEUseSkills(mob, source, damage) {
    try {
        let player = source.toPlayer();//攻击实体转为玩家
        let playerHandItem = player.getHand().getNbt().toString();//玩家手持物品Json数据
        if (playerHandItem.indexOf("Lore") != -1) {
            let playerHandItemJson = JSON.parse(playerHandItem);//玩家手持物品json对象数据
            let playerItemLore = playerHandItemJson.tag.display.Lore;//获取物品Lore数据
            if (playerItemLore != undefined && playerItemLore[0] == pluginLanguage.Language_Lore_1) {//判断物品是否拥有技能
                let skillName = playerItemLore[1];//获得技能名称
                if (player.hasTag(`${skillName}`)) {//判断玩家是否能使用这个技能
                    let currentSkillLevel = parseInt(playerItemLore[2].split("：")[1]);//切割字符串获得等级
                    if (skillName == pluginLanguage.Language_True_Damage && attackSkillCDCountdown[player.xuid][skillName] == 0) {//判断技能名称和CD情况
                        let skillCd = purchaseSkillsMoneyListJson[skillName].Damage[currentSkillLevel]["CD"];//获取技能cd
                        let skillHurt = purchaseSkillsMoneyListJson[skillName].Damage[currentSkillLevel].Harm;//获取技能伤害
                        attackSkillCDCountdown[player.xuid][skillName] = skillCd;//设置技能进入cd状态
                        mob.hurt(parseInt(damage + skillHurt))//造成额外真实伤害
                        TellMsg(player, pluginLanguage.Language_Real_injury.replace(/{d}/g, parseInt(damage + skillHurt)), 'MsgType1');
                    } else if (skillName == pluginLanguage.Language_Blast_Attack && attackSkillCDCountdown[player.xuid][skillName] == 0) {
                        let skillCd = purchaseSkillsMoneyListJson[skillName].Damage[currentSkillLevel]["CD"];//获取技能cd
                        let skillHurt = purchaseSkillsMoneyListJson[skillName].Damage[currentSkillLevel].Harm;//获取技能伤害
                        let skillRange = purchaseSkillsMoneyListJson[skillName].Damage[currentSkillLevel].Scope;//获取技能范围
                        attackSkillCDCountdown[player.xuid][skillName] = skillCd;//设置技能进入cd状态
                        mc.explode(mob.pos, null, skillHurt, skillRange, false, false);//生成爆炸
                    } else if (skillName == pluginLanguage.Language_Take_Your_Equipment && attackSkillCDCountdown[player.xuid][skillName] == 0) {
                        if (!mob.getArmor().isEmpty()) {//判断受伤者容器盔甲栏是否为空
                            let entityArmorData = mob.getArmor().getAllItems();//获取实体盔甲栏容器数据
                            let acquisitionTimes = 1;//设置获取次数便于等级对比
                            for (let i = 0; i < entityArmorData.length; i++) {
                                let entityItemData = entityArmorData[i];//获取当前i位置的物品对象
                                if (acquisitionTimes <= currentSkillLevel) {//判断是否超过获取上限
                                    if (player.giveItem(entityItemData)) {//判断物品给玩家是否成功
                                        acquisitionTimes += 1;//获取次数加1
                                    }
                                }
                            }
                            mob.getArmor().removeAllItems()//清空生物容器
                            mob.refreshItems()//刷新实体容器数据
                            let skillCd = purchaseSkillsMoneyListJson[skillName].Damage[currentSkillLevel]["CD"];//获取技能cd
                            attackSkillCDCountdown[player.xuid][skillName] = skillCd;//设置技能进入cd状态
                        }
                    } else if (skillName == pluginLanguage.Language_Holy_Guardian && attackSkillCDCountdown[player.xuid][skillName] == 0) {
                        let skillCd = purchaseSkillsMoneyListJson[skillName].Damage[currentSkillLevel]["CD"];//获取技能cd
                        let skillTreatment = purchaseSkillsMoneyListJson[skillName].Damage[currentSkillLevel]["Healing amount"];//获取技能治疗量
                        let playerNbtData = player.getNbt();//获得玩家自己Nbt数据
                        let getPlayerHealth = player.health;//获得玩家当前生命值
                        for (let i = 0; i < 14; i++) {
                            if (playerNbtData.getTag("Attributes").getTag(i).getTag("Name").toString() == "minecraft:health") {//判断是否是生命数据nbt项
                                playerNbtData.getTag("Attributes").getTag(i).getTag("Current").set(skillTreatment + getPlayerHealth);//修改玩家生命值
                            }
                        }
                        player.setNbt(playerNbtData);//设置玩家nbt
                        mob.hurt(skillTreatment)//对受伤害者进行扣血
                        TellMsg(player, pluginLanguage.Language_Divine_Guardian.replace(/{h}/g, skillTreatment), 'MsgType1');
                        attackSkillCDCountdown[player.xuid][skillName] = skillCd;//设置技能进入cd状态
                    }
                }
            }
        }
    } catch (err) {
        log(`玩家Pve使用技能操作报错：${err}`);
    }
}

//玩家受伤掉装备操作
function entityMobHurtHandle_removeItem(player, damage) {
    try {
        let containerObject = player.getInventory();//获取受伤玩家物品栏容器
        if (!containerObject.isEmpty()) {//判断容器是否为空
            let listOfAllItems = containerObject.getAllItems();//容器所有物品列表
            let newListOfAllItems = [];//新建一个列表
            for (let i = 0; i < listOfAllItems.length; i++) {//循环获取每一格物品数据
                let currentItemObject = listOfAllItems[i];//获取当前物品对象
                let currentItemContentNbtJson = currentItemObject.getNbt().toString();//获取当前物品Json格式的nbt数据
                let judgeIfYouHaveSkills = currentItemContentNbtJson.indexOf(pluginLanguage.Language_Lore_1) == -1;//判断是否没有技能
                if (injuryDoesNotFallListJson[listOfAllItems[i].type] == undefined && currentItemObject.name != "" && judgeIfYouHaveSkills) {//物品不在禁止掉落列表内以及格子不为空
                    newListOfAllItems[newListOfAllItems.length] = i; //将物品位置写入新列表
                }
            }
            if (JSON.stringify(newListOfAllItems) != "[]") {
                let randomNumber1 = newListOfAllItems[specifiedRangeRandomNumber(0, newListOfAllItems.length)];//取随机数
                let containerItem = containerObject.getItem(randomNumber1);//获取格子的物品对象
                if (containerItem != undefined) {//判断获取是否成功
                    let playerPos = player.pos;//获取受伤玩家所在的坐标
                    let generateFallingObjects = mc.spawnItem(containerItem, playerPos.x + 2, playerPos.y + 2, playerPos.z + 1, playerPos.dimid)//在玩家附近生成对应的掉落物
                    if (generateFallingObjects != undefined) {//判断生成是否成功
                        let containerRemoveItem = containerObject.removeItem(randomNumber1, containerItem.count);//删除容器对象中的指定位置的物品
                        if (containerRemoveItem) {//判断是否删除成功
                            let itemName = pluginLanguageFile[containerItem.type.split(':')[1]];//获取物品的中文名称
                            if (itemName != undefined) {//判断语言文件是否存在中文名称
                                TellMsg(player, pluginLanguage.Language_Attack_drop.replace(/{i}/g, itemName), 'MsgType1');
                            } else {
                                TellMsg(player, pluginLanguage.Language_Attack_drop.replace(/{i}/g, containerItem.name), 'MsgType1');
                            }
                        }
                        player.refreshItems();//刷新玩家背包
                    }
                }
            } else {//背包为空处理
                if (noObjectIsReallHurt) {//是否造成真伤
                    player.hurt(parseInt(damage))//对玩家照成伤害
                    TellMsg(player, pluginLanguage.Language_Attack_drop_damage.replace(/{d}/g, parseInt(damage)), 'MsgType1');
                }
            }
        } else {//背包为空处理
            if (noObjectIsReallHurt) {//是否造成真伤
                player.hurt(parseInt(damage))//对玩家照成伤害
                TellMsg(player, pluginLanguage.Language_Attack_drop_damage.replace(/{d}/g, parseInt(damage)), 'MsgType1');
            }
        }
    } catch (err) {
        log(`实体受伤事件报错：${err}`);
    }
}

//玩家跨纬度扣款操作
function playerChangeDimHandle_removeMoney(player, deductionAmount) {
    try {
        let playerMoney = money.get(player.xuid);//获取玩家金币数量
        if (playerMoney >= deductionAmount) {//判断玩家金币是否足够
            if (money.reduce(player.xuid, deductionAmount)) {//判断是否扣款成功
                TellMsg(player, pluginLanguage.Language_Transmission_cost.replace(/{m}/g, deductionAmount), 'MsgType1');
            } else {
                if (player.hasTag("arrears")) {//判断是否已经欠款
                    if (player.addScore(nameOfArrearsScoreboard, deductionAmount)) {//判断是否写入欠款额度成功
                        TellMsg(player, pluginLanguage.Language_Transmission_cost_arrears.replace(/{m}/g, deductionAmount), 'MsgType3');
                    }
                } else {//尚未欠款处理
                    if (player.addScore(nameOfArrearsScoreboard, deductionAmount)) {//判断是否写入欠款额度成功
                        player.addTag("arrears")//写入欠款标签
                        TellMsg(player, pluginLanguage.Language_Transmission_cost_arrears.replace(/{m}/g, deductionAmount), 'MsgType3');
                    }
                }
            }
        } else {
            if (player.hasTag("arrears")) {//判断是否已经欠款
                if (player.addScore(nameOfArrearsScoreboard, deductionAmount)) {//判断是否写入欠款额度成功
                    TellMsg(player, pluginLanguage.Language_Transmission_cost_arrears.replace(/{m}/g, deductionAmount), 'MsgType3');
                }
            } else {//尚未欠款处理
                if (player.addScore(nameOfArrearsScoreboard, deductionAmount)) {//判断是否写入欠款额度成功
                    player.addTag("arrears")//写入欠款标签
                    TellMsg(player, pluginLanguage.Language_Transmission_cost_arrears.replace(/{m}/g, deductionAmount), 'MsgType3');
                }
            }
        }
    } catch (err) { log(`切换纬度扣款报错：${err}`); }
}

//生成实体并强化操作
function generateEntitiesAndEnforceOperations(entityType, entityPos, player) {
    try {
        let newEntity = mc.spawnMob(entityType, entityPos);//生成生物
        if (newEntity != undefined) {//判断是否生成成功
            let newEntityNbt = newEntity.getNbt();//获取生物Nbt数据
            //let newEntityNbtJson = newEntityNbt.toString()//获取生物NbtJson格式数据
            //if (newEntityNbtJson.indexOf("minecraft:health") != -1) {//判断生物是否有生命数据
            let newEntityAttributes = newEntityNbt.getTag("Attributes");//获取实体属性
            let getEntityDisplayName = newEntityNbt.getTag("CustomName");//获取实体属性
            if (newEntityAttributes != undefined) {//判断属性NBT是否获取成功
                let newEntityAttributesListLength = newEntityAttributes.getSize();//获取实体属性Nbt列表长度
                for (let i = 0; i < newEntityAttributesListLength; i++) {//循环读取
                    let currentLocationObject = newEntityAttributes.getTag(i)//获取当前位置的nbt内容
                    if (currentLocationObject.getTag("Name") == "minecraft:health") {//判断是否获取到生物生命内容
                        let baseHealth = parseInt(currentLocationObject.getTag("Base").toString());//获取基础血量
                        let currentHealth = parseInt(currentLocationObject.getTag("Current").toString());//获取当前血量
                        let healthDefaultMax = parseInt(currentLocationObject.getTag("DefaultMax").toString());//获取默认最大血量
                        currentLocationObject.setFloat("Base", baseHealth + 20);//设置生物基础血量增加20
                        currentLocationObject.setFloat("Current", currentHealth + 20);//设置生物当前血量增加20
                        currentLocationObject.setFloat("DefaultMax", healthDefaultMax + 20);//设置默认最大血量增加20
                        currentLocationObject.setFloat("Max", healthDefaultMax + 20);//设置最大血量增加20
                    } else if (currentLocationObject.getTag("Name") == "minecraft:movement") {//判断是否是移速数据
                        currentLocationObject.setFloat("Base", 0.45)//设置基础移速为0.45
                        currentLocationObject.setFloat("Current", 0.45)//设置当前移速为0.45
                    } else if (currentLocationObject.getTag("Name") == "minecraft:underwater_movement") {//判断是否是水中移速数据
                        currentLocationObject.setFloat("Base", 0.23)//设置基础移速为0.23
                        currentLocationObject.setFloat("Current", 0.23)//设置当前移速为0.23
                    } else if (currentLocationObject.getTag("Name") == "minecraft:lava_movement") {//判断是否是岩浆中移速数据
                        currentLocationObject.setFloat("Base", 0.23)//设置基础移速为0.23
                        currentLocationObject.setFloat("Current", 0.23)//设置当前移速为0.23
                    } else if (currentLocationObject.getTag("Name") == "minecraft:follow_range") {//判断是否是跟随数据
                        let basefollow = parseInt(currentLocationObject.getTag("Base").toString());//获取基础跟随范围
                        let currentfollow = parseInt(currentLocationObject.getTag("Current").toString());//获取当前跟随范围
                        currentLocationObject.setFloat("Base", basefollow + 10)//设置基础跟随范围增加10
                        currentLocationObject.setFloat("Current", currentfollow + 10)//设置当前跟随范围增加10
                    } else if (currentLocationObject.getTag("Name") == "minecraft:attack_damage") {//判断是否是攻击伤害数据
                        let baseattack = parseInt(currentLocationObject.getTag("Base").toString());//获取基础伤害数值
                        //-----------伤害全面提升6
                        currentLocationObject.setFloat("Base", baseattack + 6);
                        currentLocationObject.setFloat("Current", baseattack + 6);
                        currentLocationObject.setFloat("DefaultMax", baseattack + 6);
                        currentLocationObject.setFloat("Max", baseattack + 6);
                        currentLocationObject.setFloat("DefaultMin", baseattack + 6);
                        currentLocationObject.setFloat("Min", baseattack + 6);
                    } else if (currentLocationObject.getTag("Name") == "minecraft:knockback_resistance") {//判断是不是击退抗性
                        currentLocationObject.setFloat("Base", 6);//修改基础击退抗性为6
                        currentLocationObject.setFloat("DefaultMax", 6);//修改最大击退抗性为6
                        currentLocationObject.setFloat("Max", 6);
                        currentLocationObject.setFloat("DefaultMin", 3);//修改最小击退抗性为3
                        currentLocationObject.setFloat("Min", 3);
                    }
                }
            }
            if (getEntityDisplayName == undefined) {//判断是否有名称
                newEntityNbt.setString("CustomName", `§l§6[${pluginLanguage.Language_Form_title}] ${player.name}`);//设置名称
                newEntityNbt.setFloat("CustomNameVisible", 1);//设置为显示
            }
            //}
            newEntity.setNbt(newEntityNbt);//写入新的nbt数据
        }
    } catch (err) {
        log(`生成实体并强化操作报错：${err}`);
    }
}

//取指定范围随机数函数
function specifiedRangeRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//玩家输入弹窗指令事件处理
function playerRegCmd(player, args) {
    try {
        let playerForm = mc.newSimpleForm();//创建一个表单
        playerForm.setTitle(pluginLanguage.Language_Form_title);
        playerForm.setContent(pluginLanguage.Language_Form_Content);
        playerForm.addButton(pluginLanguage.Language_Form_Button1[0], pluginLanguage.Language_Form_Button1[1]);
        playerForm.addButton(pluginLanguage.Language_Form_Button2[0], pluginLanguage.Language_Form_Button2[1]);
        playerForm.addButton(pluginLanguage.Language_Form_Button3[0], pluginLanguage.Language_Form_Button3[1]);
        playerForm.addButton(pluginLanguage.Language_Form_Button4[0], pluginLanguage.Language_Form_Button4[1]);
        playerForm.addButton(pluginLanguage.Language_Form_Button5[0], pluginLanguage.Language_Form_Button5[1]);
        playerForm.addButton(pluginLanguage.Language_Form_Button6[0], pluginLanguage.Language_Form_Button6[1]);
        playerForm.addButton(pluginLanguage.Language_Form_Button7[0], pluginLanguage.Language_Form_Button7[1]);
        player.sendForm(playerForm, playerFormFirstProcessing);//发送弹窗并调用处理函数
        return false;//拦截指令
    } catch (err) {
        log(`玩家输入弹窗指令事件处理报错：${err}`);
    }
}

//玩家第一次选择弹窗后处理
function playerFormFirstProcessing(player, choiceId) {
    try {
        if (choiceId == undefined) {//判断是否是关闭按钮
            return false;//停止后续
        } else if (choiceId == 0) {//选择购买武器技能按钮处理
            if (!judgeWhetherPlayersBuySkills(player)) {//调用判断玩家是否已经购买过
                let playerInvenTory = player.getInventory();//获取玩家物品栏的容器对象
                if (!playerInvenTory.isEmpty()) {//判断玩家物品栏是否为空
                    let playerInvenToryItem = playerInvenTory.getAllItems();//获取玩家背包所有物品对象
                    let playerForm = mc.newSimpleForm();//创建一个表单
                    listOfWeaponsSelectedByPlayersToPurchaseSkills[player.xuid] = [];//新建一个玩家背包物品列表
                    playerForm.setTitle(pluginLanguage.Language_Form_title);
                    playerForm.setContent(pluginLanguage.Language_Form_choice);
                    for (let i in playerInvenToryItem) {//遍历玩家所有物品列表
                        if (playerInvenToryItem[i].name != "" && weaponStandardTypeName.indexOf(playerInvenToryItem[i].type) != -1) {//判断此物品是否能购买技能
                            listOfWeaponsSelectedByPlayersToPurchaseSkills[player.xuid][listOfWeaponsSelectedByPlayersToPurchaseSkills[player.xuid].length] = i;//符合规则加入列表
                            let itemName = pluginLanguageFile[playerInvenToryItem[i].type.split(':')[1]];//获取物品的中文名称
                            if (itemName != undefined) {//判断语言文件是否存在中文名称
                                playerForm.addButton(`${itemName}\n${playerInvenToryItem[i].type}`);//显示中文名称
                            } else {
                                playerForm.addButton(`${playerInvenToryItem[i].name}\n${playerInvenToryItem[i].type}`);//不存在显示英文名称
                            }
                        }
                    }
                    player.sendForm(playerForm, sendSkillListAfterSelectingWeapon);//发送弹窗并调用处理函数
                }
            } else {
                TellMsg(player, pluginLanguage.Language_Purchase_failed1, 'MsgType3');
            }
            return false;
        } else if (choiceId == 1) {//选择强化武器技能按钮处理
            if (judgeWhetherPlayersBuySkills(player)) {//调用判断是否已经购买
                let playerInvenTory = player.getInventory();//获取玩家物品栏的容器对象
                if (!playerInvenTory.isEmpty()) {//判断玩家物品栏是否为空
                    let playerInvenToryItem = playerInvenTory.getAllItems();//获取玩家背包所有物品对象
                    listOfPlayersUpgradingSkillBackpacks[player.xuid] = [];//新建一个玩家背包物品列表
                    let playerForm = mc.newSimpleForm();//创建一个表单
                    playerForm.setTitle(pluginLanguage.Language_Form_title);
                    playerForm.setContent(pluginLanguage.Language_Form_choice);
                    for (let i in playerInvenToryItem) {//遍历玩家所有物品列表
                        let playerHandItemJson = JSON.parse(playerInvenToryItem[i].getNbt().toString());//获取当前物品的json数据
                        if (JSON.stringify(playerHandItemJson).indexOf('Lore') != -1) {//判断当前物品有无Lore标签
                            let playerItemLore = playerHandItemJson.tag.display.Lore;//获取lore对象
                            if (playerInvenToryItem[i].name != "" && weaponStandardTypeName.indexOf(playerInvenToryItem[i].type) != -1 && playerItemLore[0] == pluginLanguage.Language_Lore_1) {//判断此物品是否能升级技能
                                listOfPlayersUpgradingSkillBackpacks[player.xuid][listOfPlayersUpgradingSkillBackpacks[player.xuid].length] = i;//符合规则加入列表
                                let itemName = pluginLanguageFile[playerInvenToryItem[i].type.split(':')[1]];//获取物品的中文名称
                                if (itemName != undefined) {//判断语言文件是否存在中文名称
                                    playerForm.addButton(`${itemName}\n${playerInvenToryItem[i].type}`);//显示中文名称
                                } else {
                                    playerForm.addButton(`${playerInvenToryItem[i].name}\n${playerInvenToryItem[i].type}`);//不存在显示英文名称
                                }
                            }
                        }
                    }
                    player.sendForm(playerForm, sendSkillListAfterStrengtheningWeapons);//发送弹窗并调用处理函数
                }
            } else {
                TellMsg(player, pluginLanguage.Language_Reinforcement_failure1, 'MsgType3');
                return false;
            }
            return false;
        } else if (choiceId == 2) {//选择附魔按钮处理
            let playerInvenTory = player.getInventory();//获取玩家物品栏的容器对象
            let playerInvenToryItem = playerInvenTory.getAllItems();//获取玩家背包所有物品对象
            playerEnchantSelectionBackpackList[player.xuid] = [];//创建一个新的列表
            let playerForm = mc.newSimpleForm();//创建一个表单
            playerForm.setTitle(pluginLanguage.Language_Form_title);
            playerForm.setContent(pluginLanguage.Language_Form_choice);
            for (let i in playerInvenToryItem) {//遍历玩家所有物品列表
                if (playerInvenToryItem[i].name != "") {//判断此物品是否能购买技能
                    playerEnchantSelectionBackpackList[player.xuid][playerEnchantSelectionBackpackList[player.xuid].length] = i;//符合规则加入列表
                    let itemName = pluginLanguageFile[playerInvenToryItem[i].type.split(':')[1]];//获取物品的中文名称
                    if (itemName != undefined) {//判断语言文件是否存在中文名称
                        playerForm.addButton(`${itemName}\n${playerInvenToryItem[i].type}`);//显示中文名称
                    } else {
                        playerForm.addButton(`${playerInvenToryItem[i].name}\n${playerInvenToryItem[i].type}`);//不存在显示英文名称
                    }
                }
            }
            player.sendForm(playerForm, enchantAfterSelectingItems);//发送弹窗并调用处理函数

        } else if (choiceId == 3) {//点击修复物品耐久按钮
            let playerInvenTory = player.getInventory();//获取玩家物品栏的容器对象
            let playerInvenToryItem = playerInvenTory.getAllItems();//获取玩家背包所有物品对象
            repairDurableSelectionItems[player.xuid] = [];//创建一个新的列表
            let playerForm = mc.newSimpleForm();//创建一个表单
            playerForm.setTitle(pluginLanguage.Language_Form_title);
            playerForm.setContent(pluginLanguage.Language_Item_repair.replace(/{m}/g, repairEquipmentDurabilityPrice));
            for (let i in playerInvenToryItem) {//遍历玩家所有物品列表
                let currentItem = playerInvenToryItem[i];//获取当前物品对象
                if (currentItem.name != "") {//判断是否存在物品
                    let currentItemNbtJson = currentItem.getNbt().toString();//获取物品Nbt的json格式内容
                    let currentItemNbtJsonObj = JSON.parse(currentItemNbtJson);//获得物品json对象内容
                    let currentItemNbtJsonTag = currentItemNbtJsonObj.tag;//获取物品tag内容信息
                    if (currentItemNbtJsonTag != undefined) {//判断物品有无tag内容
                        if (currentItemNbtJsonTag.Damage != 0 && currentItemNbtJsonTag.Damage != undefined) {//判断有无耐久信息
                            repairDurableSelectionItems[player.xuid][repairDurableSelectionItems[player.xuid].length] = i;//符合规则加入列表
                            let itemName = pluginLanguageFile[currentItem.type.split(':')[1]];//获取物品的中文名称
                            if (itemName != undefined) {//判断语言文件是否存在中文名称
                                playerForm.addButton(`${itemName}\n${currentItem.type}`);//显示中文名称
                            } else {
                                playerForm.addButton(`${currentItem.name}\n${currentItem.type}`);//不存在显示原名称
                            }
                        }
                    }
                }
            }
            player.sendForm(playerForm, afterRepairingTheSelectedItem);//发送弹窗并调用处理函数
        } else if (choiceId == 4) {//选择查屠龙者坐标按钮处理
            let playerOnlineList = mc.getOnlinePlayers();//获取在线玩家列表
            let msg = pluginLanguage.Language_View_dragon_slaughtering1;//设置默认消息
            for (let i in playerOnlineList) {//遍历在线玩家列表
                let player = playerOnlineList[i];
                if (player.hasTag("Dragon_Slayer")) {//判断玩家有无屠龙者标签
                    let playerPos = player.pos;//获取玩家坐标对象
                    msg = pluginLanguage.Language_View_dragon_slaughtering2.replace(/{p}/, player.name).replace(/{dim}/, playerPos.dim).replace(/{x}/, Math.round(playerPos.x)).replace(/{y}/, Math.round(playerPos.y)).replace(/{z}/, Math.round(playerPos.z));
                }
            }
            TellMsg(player, "§l§6" + msg, 'MsgType1');//发送消息给玩家
        } else if (choiceId == 5) {//选择给书按钮处理
            player.giveItem(mc.newItem(NBT.parseSNBT(thePluginContentManualCannotBeEdited)));
        } else if (choiceId == 6) {//选择消息通知设置
            let fm = mc.newCustomForm()
            fm.setTitle(pluginLanguage.Language_Form_title);
            fm.addSwitch(pluginLanguage.Language_MsgType1, PlayerMsgDataListJson[player.xuid].MsgType1);
            fm.addSwitch(pluginLanguage.Language_MsgType2, PlayerMsgDataListJson[player.xuid].MsgType2);
            fm.addSwitch(pluginLanguage.Language_MsgType3, PlayerMsgDataListJson[player.xuid].MsgType3);
            fm.addDropdown(pluginLanguage.Language_MsgType4, pluginLanguage.Language_MsgType4Data);
            player.sendForm(fm, (player, data) => {
                if (data == undefined) {
                    return false;
                } else {
                    PlayerMsgDataListJson[player.xuid].MsgType1 = data[0];
                    PlayerMsgDataListJson[player.xuid].MsgType2 = data[1];
                    PlayerMsgDataListJson[player.xuid].MsgType3 = data[2];
                    if (data[3] == 0) {
                        PlayerMsgDataListJson[player.xuid].MsgType4 = 0;
                    } else if (data[3] == 1) {
                        PlayerMsgDataListJson[player.xuid].MsgType4 = 5;
                    }
                    File.writeTo(path1 + 'PlayerMsgData.json', JSON.stringify(PlayerMsgDataListJson, null, "\t"));

                }
            })
        }
    } catch (err) {
        log(`玩家第一次选择弹窗后处理报错：${err}`);
    }
}

//玩家修复选择物品后处理
function afterRepairingTheSelectedItem(player, choiceId) {
    try {
        if (choiceId == undefined) {//判断是否是关闭按钮
            return false;//停止后续
        } else {
            let playerInvenTory = player.getInventory();//获取玩家物品栏的容器对象
            if (!playerInvenTory.isEmpty()) {//判断容器是否为空
                let playerSelectItem = playerInvenTory.getItem(parseInt(repairDurableSelectionItems[player.xuid][choiceId]));//获取玩家选择的物品对象
                let playerSelectItemJson = playerSelectItem.getNbt().toString();//获取玩家选择物品的json数据
                if (playerSelectItemJson.indexOf("Damage") != -1) {//判断此物品是否存在以及是否有耐久数据
                    let playerMoney = money.get(player.xuid);//获取玩家金币
                    if (repairEquipmentDurabilityPrice <= playerMoney) {//判断玩家余额是否足够
                        if (money.reduce(player.xuid, repairEquipmentDurabilityPrice)) {
                            let playerSelectItemNbt = playerSelectItem.getNbt();//获得玩家选中物品的nbt数据
                            let playerSelectItemNbtTag = playerSelectItemNbt.getTag("tag");//获得tag标签内的内容
                            playerSelectItemNbtTag.setFloat("Damage", 0);//设置耐久归0
                            playerSelectItem.setNbt(playerSelectItemNbt)//给物品写入新的nbt内容
                            player.refreshItems();//刷新玩家背包
                            TellMsg(player, pluginLanguage.Language_Repair_successful, 'MsgType1');
                        } else {
                            TellMsg(player, pluginLanguage.Language_Deduction_failed, 'MsgType2');
                        }
                    } else {
                        TellMsg(player, pluginLanguage.Language_credit, 'MsgType3');
                    }
                } else {
                    TellMsg(player, pluginLanguage.Language_Cannot_repair, 'MsgType3');
                }
            }
        }
    } catch (err) {
        log(`玩家修复选择物品后处理报错：${err}`);
    }
}

//玩家附魔选择物品后处理
function enchantAfterSelectingItems(player, choiceId) {
    try {
        if (choiceId == undefined) {//判断是否是关闭按钮
            return false;//停止后续
        } else {
            playerEnchantSelectionBackpackListSelectionResults[player.xuid] = choiceId;//数据写入玩家选择结果
            let FormEnchantList = [];
            for (let i in ConfigEnchantNameList) {
                FormEnchantList[i] = `${ConfigEnchantNameList[i]}   ${ConfigEnchantMoneyList[i]}￥`
            }
            let playerFrom = mc.newCustomForm()
                .setTitle(pluginLanguage.Language_enchanting_Form_title)
                .addLabel(pluginLanguage.Language_balance.replace(/{m}/g, money.get(player.xuid)))
                .addLabel(pluginLanguage.Language_Enchant_Level.replace(/{l}/g, itemDefaultEnchantLevel))
                .addDropdown(pluginLanguage.Language_Select_Properties, FormEnchantList);
            player.sendForm(playerFrom, enchantFormProcessing);//发送表单给玩家并调用处理函数
        }
    } catch (err) {
        log(`玩家附魔选择物品后处理报错：${err}`);
    }
}

//玩家选择强化武器后发送技能列表处理
function sendSkillListAfterStrengtheningWeapons(player, choiceId) {
    try {
        if (choiceId == undefined) {//判断是否是关闭按钮
            return false;//停止后续
        } else {
            let playerBackpackContainerObject = player.getInventory();//获得玩家背包容器对象
            let weaponObjectSelectedByThePlayer = playerBackpackContainerObject.getItem(parseInt(listOfPlayersUpgradingSkillBackpacks[player.xuid][choiceId]));//获取玩家选择的物品对象
            let playerHandItemJson = JSON.parse(weaponObjectSelectedByThePlayer.getNbt().toString());//获取玩家选择物品的json数据
            if (JSON.stringify(playerHandItemJson).indexOf('Lore') != -1) {//判断物品有无Lore标签
                let playerItemLore = playerHandItemJson.tag.display.Lore;//获取lore对象
                if (playerItemLore[0] == pluginLanguage.Language_Lore_1) {//判断是否是技能Lore
                    let skillName = playerItemLore[1];//获得技能名称
                    let currentSkillLevel = parseInt(playerItemLore[2].split('：')[1]);//切割字符串获得等级
                    if (currentSkillLevel < purchaseSkillsMoneyListJson[skillName].SkillLevel) {//判断物品技能等级是否还能强化
                        let upgradePrice = purchaseSkillsMoneyListJson[skillName].Upgrade[currentSkillLevel + 1];//获取升级需要的价格
                        playerUpgradeSkillMoney[player.xuid] = upgradePrice;
                        let playerFrom = mc.newSimpleForm();//创建一个新表单
                        playerFrom.setTitle(pluginLanguage.Language_SkillStrengthening_Form_title);
                        playerFrom.setContent(pluginLanguage.Language_SkillStrengthening_Form_Content);
                        playerFrom.addButton(pluginLanguage.Language_Upgrade_requires_gold_coins.replace(/{sn}/g, skillName).replace(/{m}/g, upgradePrice), purchaseSkillsMoneyListJson[skillName].PictureURL);
                        player.sendForm(playerFrom, upgradeSkillsSelectSkills);
                    } else {
                        TellMsg(player, pluginLanguage.Language_Reinforcement_failure2, 'MsgType2');
                    }
                }
            } else {
                TellMsg(player, pluginLanguage.Language_Reinforcement_failure3, 'MsgType2');
            }
        }
    } catch (err) {
        log(`玩家选择强化武器后发送技能列表处理报错：${err}`);
    }
}

//玩家升级技能选择技能后处理
function upgradeSkillsSelectSkills(player, choiceId) {
    try {
        if (choiceId == undefined) {//判断是否是关闭按钮
            return false;//停止后续
        } else if (money.get(player.xuid) >= playerUpgradeSkillMoney[player.xuid]) {//判断玩家金币是否足够
            let playerBackpackContainerObject = player.getInventory();//获得玩家背包容器对象
            if (!playerBackpackContainerObject.isEmpty() && money.reduce(player.xuid, playerUpgradeSkillMoney[player.xuid])) {//扣除金币判断是否成功
                let weaponObjectSelectedByThePlayer = playerBackpackContainerObject.getItem(parseInt(listOfPlayersUpgradingSkillBackpacks[player.xuid][choiceId]));//获取玩家选择的物品对象
                let playerHandItemJson = JSON.parse(weaponObjectSelectedByThePlayer.getNbt().toString());//获取玩家选择物品的json数据
                let playerItemLore = playerHandItemJson.tag.display.Lore;//获取lore对象
                let skillName = playerItemLore[1];//获得技能名称
                let currentSkillLevel = parseInt(playerItemLore[2].split('：')[1]);//切割字符串获得等级
                weaponObjectSelectedByThePlayer.setLore([pluginLanguage.Language_Strengthen_success1[0], skillName, pluginLanguage.Language_Strengthen_success1[2].replace(/{l}/g, String(currentSkillLevel + 1))]);//写入lore数据
                player.giveItem(weaponObjectSelectedByThePlayer);//给玩家物品
                player.refreshItems();//刷新玩家物品栏
                TellMsg(player, pluginLanguage.Language_Strengthen_success2, 'MsgType1');
            } else {
                TellMsg(player, pluginLanguage.Language_Reinforcement_failure4, 'MsgType2');
            }
        } else {
            TellMsg(player, pluginLanguage.Language_Reinforcement_failure5, 'MsgType3');
        }
    } catch (err) {
        log(`玩家升级技能选择技能后处理报错：${err}`);
    }
}

//玩家选择购买武器后发送技能列表处理
function sendSkillListAfterSelectingWeapon(player, choiceId) {
    try {
        if (choiceId == undefined) {//判断是否是关闭按钮
            return false;//停止后续
        } else {
            playersBuyWeaponsOfSkillChoice[player.xuid] = choiceId;//获取玩家选择的武器数据并储存
            let playerForm = mc.newSimpleForm();//创建一个新表单
            playerForm.setTitle(pluginLanguage.Language_Purchase_interface);
            playerForm.setContent(pluginLanguage.Language_Purchase_interface_Content);
            for (let skillName in purchaseSkillsMoneyListJson) {//遍历技能列表
                playerForm.addButton(`§l§3${skillName} ${purchaseSkillsMoneyListJson[skillName].buy}`, purchaseSkillsMoneyListJson[skillName].PictureURL);
            }
            player.sendForm(playerForm, purchaseSkillFormProcessing);//发送表单并调用处理函数
        }
    } catch (err) {
        log(`玩家选择购买武器后发送技能列表处理报错：${err}`);
    }
}

//选择购买技能表单处理
function purchaseSkillFormProcessing(player, choiceId) {
    try {
        if (choiceId == undefined) {//判断是否是关闭按钮
            return false;//停止后续
        } else {
            let playerInvenTory = player.getInventory();//获取玩家物品栏的容器对象
            let playerHandItem = playerInvenTory.getItem(parseInt(listOfWeaponsSelectedByPlayersToPurchaseSkills[player.xuid][playersBuyWeaponsOfSkillChoice[player.xuid]]));//获取玩家选择的物品对象
            let playerHandItemJson = JSON.parse(playerHandItem.getNbt().toString())//获取玩家选择物品的json数据
            if (!playerInvenTory.isEmpty() && JSON.stringify(playerHandItemJson).indexOf("Lore") == -1) {//判断此武器是否购买过技能
                let playerMoney = money.get(player.xuid);//获取玩家金币
                let newskiullList = [];//新建一个技能列表
                for (let i in purchaseSkillsMoneyListJson) {//遍历技能列表
                    newskiullList[newskiullList.length] = i;//在新建的技能列表尾部追加技能名称
                }
                let purchaseSkillNeeds = purchaseSkillsMoneyListJson[newskiullList[choiceId]].buy//购买技能所需金币
                if (playerMoney >= purchaseSkillNeeds) {//判断玩家金币是否足够购买技能
                    if (money.reduce(player.xuid, purchaseSkillNeeds)) {//扣款并判断是否成功
                        playerHandItem.setLore([pluginLanguage.Language_Lore_1, newskiullList[choiceId], pluginLanguage.Language_Purchase_success1[2]]);//给物品增加Lore内容
                        player.giveItem(playerHandItem);//给玩家一个物品
                        player.addTag(newskiullList[choiceId]);//给玩家添加tag
                        player.refreshItems();//刷新玩家物品栏
                        TellMsg(player, pluginLanguage.Language_Strengthen_success2, 'MsgType1');
                    } else {
                        TellMsg(player, pluginLanguage.Language_Reinforcement_failure4, 'MsgType2');
                    }
                } else {
                    TellMsg(player, pluginLanguage.Language_Reinforcement_failure5, 'MsgType3');
                }
            } else {
                TellMsg(player, pluginLanguage.Language_Purchase_failed2, 'MsgType3');
            }
        }
    } catch (err) {
        log(`选择购买技能表单处理报错：${err}`);
    }
}

//选择附魔表单处理
function enchantFormProcessing(player, choiceId) {
    try {
        if (choiceId == undefined) {//判断是否是关闭按钮
            return false;//停止后续
        } else {
            let playerInvenTory = player.getInventory();//获取玩家物品栏的容器对象
            let playerInvenToryItem = playerInvenTory.getAllItems();//获取玩家背包所有物品对象
            let playerMoney = money.get(player.xuid);//获取玩家金币
            if (!playerInvenTory.isEmpty() && playerMoney >= ConfigEnchantMoneyList[choiceId[2]]) {//判断玩家金币是否足够
                if (money.reduce(player.xuid, ConfigEnchantMoneyList[choiceId[2]])) {//扣款并判断是否成功
                    let playerHandItem = playerInvenTory.getItem(parseInt(playerEnchantSelectionBackpackList[player.xuid][playerEnchantSelectionBackpackListSelectionResults[player.xuid]]));//获取玩家选择物品对象
                    let playerHandItemNbt = playerHandItem.getNbt();//获取玩家物品nbt对象
                    let playerHandItemNbtTag = playerHandItemNbt.getTag("tag");//获取玩家手持物品nbt tag数据
                    if (playerHandItemNbtTag != undefined && playerHandItemNbtTag != null) {//判断tag是否存在
                        let playerHandItemNbtTagEnch = playerHandItemNbtTag.getTag("ench");//获取玩家物品nbt tag内ench数据
                        if (playerHandItemNbtTagEnch != undefined && playerHandItemNbtTagEnch != null) {//判断ench是否存在
                            let newNbt = new NbtCompound({//新建一个nbt对象
                                "id": new NbtShort(ConfigEnchantIDList[choiceId[2]]),
                                "lvl": new NbtShort(itemDefaultEnchantLevel)
                            })
                            playerHandItemNbtTagEnch.addTag(newNbt);//在之前附魔数据后面追加附魔
                        } else {//ench不存在 tag存在处理
                            let newNbt = new NbtList([{//新建一个nbt对象
                                "id": new NbtShort(ConfigEnchantIDList[choiceId[2]]),
                                "lvl": new NbtShort(itemDefaultEnchantLevel)
                            }])
                            playerHandItemNbtTag.setTag("ench", newNbt);//给tag内增加ench数据
                        }
                    } else {//tag数据不存在处理
                        let newNbt = new NbtCompound({//新建一个nbt对象
                            "Damage": new NbtInt(0),
                            "ench": new NbtList([{
                                "id": new NbtShort(ConfigEnchantIDList[choiceId[2]]),
                                "lvl": new NbtShort(itemDefaultEnchantLevel)
                            }])
                        })
                        playerHandItemNbt.setTag("tag", newNbt);//给物品nbt数据增加tag内容
                    }
                    TellMsg(player, pluginLanguage.Language_Enchant_successfully, 'MsgType1');
                    playerHandItem.setNbt(playerHandItemNbt);//给物品写入nbt数据
                    player.refreshItems();//刷新玩家背包
                }
            } else {
                TellMsg(player, pluginLanguage.Language_Enchant_failure.replace(/{m}/g, parseInt(ConfigEnchantMoneyList[choiceId[2]]) - playerMoney), 'MsgType2');
            }
        }
    } catch (err) {
        log(`选择附魔表单处理报错：${err}`);
    }
}

//判断玩家是否购买技能
function judgeWhetherPlayersBuySkills(player) {
    let playerPurchased = false;//创建默认没购买过布尔变量
    for (let i in purchaseSkillsMoneyListJson) {//遍历技能列表
        if (player.hasTag(`${purchaseSkillsMoneyListJson[i].tag}`)) {//判断玩家是否有此标签
            playerPurchased = true;//修改布尔变量为已购买
        }
    }
    return playerPurchased//返回布尔值
}

//判断此生物是否在复活列表
function isTheCreatureOnTheResurrectionList(entityType) {
    let defaultReturnContent = false;//创建默认返回内容
    for (let i in listOfRandomlyResurrectedCreatures) {//遍历列表
        if (listOfRandomlyResurrectedCreatures[i] == entityType) {//判断在列表内
            defaultReturnContent = true;//修改返回布尔值
        }
    }
    return defaultReturnContent;//返回
}

//op输入指令事件处理
function opPlayerRegCmd(player, args) {
    try {
        if (player.isOP()) {
            if (args[0] == newplugInOPSettingsPanel.split(' ')[1]) {//gui窗口指令
                let playerFrom = mc.newSimpleForm()
                playerFrom.setTitle(pluginLanguage.Language_Form_title);
                playerFrom.addButton(pluginLanguage.Language_OP_Form_Button1);
                playerFrom.addButton(pluginLanguage.Language_OP_Form_Button2);
                playerFrom.addButton(pluginLanguage.Language_OP_Form_Button3);
                playerFrom.addButton(pluginLanguage.Language_OP_Form_Button4);
                player.sendForm(playerFrom, (player, choiceId) => {
                    if (player.isOP()) {
                        if (choiceId == 0) {
                            GlobalVariableAssignment()
                        } else if (choiceId == 1) {
                            if (setIntervalId == 0) {
                                setIntervalId = setInterval(sidebarDisplay, 1000);//每秒调用侧边栏函数
                            }
                        } else if (choiceId == 2) {
                            if (setIntervalId != 0) {
                                clearInterval(setIntervalId)//停止循环调用
                                let playerOnlineList = mc.getOnlinePlayers();//获取所有在线玩家列表
                                for (let i in playerOnlineList) {
                                    let player = playerOnlineList[i];
                                    player.removeSidebar()//移除所有玩家侧边栏
                                }
                            }
                        } else if (choiceId == 3) {
                            money.add(player.xuid, 10000);
                        }
                    }
                });//发送表单给玩家并调用处理函数
            } else if (args[0] == handHeldItemsWillNotFallIfInjured.split(' ')[1]) {//增加手持物品为受伤不掉落指令
                let playerHandItemType = player.getHand().type;//获取玩家手持物品对象标准类型
                if (injuryDoesNotFallListJson[playerHandItemType] == undefined) {
                    injuryDoesNotFallListJson[playerHandItemType] = true;
                    File.writeTo(path1 + 'ListOfItemsNotDropped.json', JSON.stringify(injuryDoesNotFallListJson, null, "\t"));
                    TellMsg(player, pluginLanguage.Language_Do_not_fall_success, 'MsgType1');
                } else {
                    TellMsg(player, pluginLanguage.Language_Do_not_fall_fail, 'MsgType2');
                }
            } else if (args[0] == handHeldItemsAreGivenForService.split(' ')[1]) {//设置手持物品为进服给予物品
                thePluginContentManualCannotBeEdited = player.getHand().getNbt().toSNBT();//获取玩家手持物品对象snbt数据
                File.writeTo(path2 + 'ServerGiveBooks.txt', thePluginContentManualCannotBeEdited);
                TellMsg(player, pluginLanguage.Language_Service_items_success, 'MsgType1');
            }
            return false;
        }
    } catch (err) {
        log(`op输入指令事件处理报错：${err}`);
    }
}

//玩家金币增加事件处理
function playerMoneyAddHandle(xuid, AddMoney) {
    if (whetherEnablePlayerGrowth) {//判断是否启用成长系统
        let Modify = false;//创建默认否布尔值
        let player = mc.getPlayer(xuid);//获得玩家对象
        let playerMoney = money.get(xuid);//获取玩家当前金币数量
        let playerNbt = player.getNbt();//获取玩家nbt
        let playerNbtAttributes = playerNbt.getTag("Attributes");//获取玩家Attributes属性
        if (playerMoney >= playerMoneyAddHealth) {//判断玩家金币是否大于加生命的数值
            let playerMaxHealth = player.maxHealth;//获取玩家当前最大生命数据
            let DivisionResult = Math.floor(playerMoney / playerMoneyAddHealth);//相除并向下取整
            for (let i = 0; i < playerNbtAttributes.getSize(); i++) {
                let playerNbtAttributesObj = playerNbtAttributes.getTag(i);//获取当前位置的数据
                if (playerNbtAttributesObj.getTag("Name") == "minecraft:health") {
                    let baseHealth = parseInt(playerNbtAttributesObj.getTag("DefaultMax").toString());//获取当前最大血量
                    if (baseHealth != playerInitialHealth + DivisionResult) {//判断是否需要增加血量
                        playerNbtAttributesObj.setFloat("Base", playerInitialHealth + DivisionResult);//设置基础血量
                        playerNbtAttributesObj.setFloat("DefaultMax", playerInitialHealth + DivisionResult);//设置默认最大血量
                        playerNbtAttributesObj.setFloat("Max", playerInitialHealth + DivisionResult);//设置最大血量
                        Modify = true;//设置为是
                    }
                }
            }
        }
        if (playerMoney >= playerMoneyAddAttack) {//判断玩家金币是否大于加攻击的数值
            let DivisionResultAttack = Math.floor(playerMoney / playerMoneyAddAttack);//相除并向下取整
            for (let i = 0; i < playerNbtAttributes.getSize(); i++) {
                let playerNbtAttributesObj = playerNbtAttributes.getTag(i);//获取当前位置的数据
                if (playerNbtAttributesObj.getTag("Name") == "minecraft:attack_damage") {
                    playerNbtAttributesObj.setFloat("Base", 1 + DivisionResultAttack);//设置基础攻击
                    playerNbtAttributesObj.setFloat("DefaultMax", 1 + DivisionResultAttack);//设置默认最大攻击
                    playerNbtAttributesObj.setFloat("DefaultMin", 1 + DivisionResultAttack);//设置默认最小攻击
                    playerNbtAttributesObj.setFloat("Max", 1 + DivisionResultAttack);//设置最大攻击
                    playerNbtAttributesObj.setFloat("Current", 1 + DivisionResultAttack);//设置当前攻击
                    playerNbtAttributesObj.setFloat("Min", 1 + DivisionResultAttack);//设置最小攻击
                    Modify = true;//设置为是
                }
            }
        }
        if (Modify) {
            player.setNbt(playerNbt);//写入新的nbt数据
        } else {
            playerNbt.destroy();//销毁nbt
        }
    }
}

//玩家金币减少事件处理
function playerMoneyReduceHandle(xuid, ReMoney) {
    if (whetherEnablePlayerGrowth) {//判断是否启用成长系统
        let Modify = false;//创建默认否布尔值
        let player = mc.getPlayer(xuid);//获得玩家对象
        let playerMoney = money.get(xuid);//获取玩家当前金币数量
        let DivisionResult = Math.floor(playerMoney / playerMoneyAddHealth);//相除并向下取整
        let DivisionResultAttack = Math.floor(playerMoney / playerMoneyAddAttack);//相除并向下取整
        let playerNbt = player.getNbt();//获取玩家nbt
        let playerNbtAttributes = playerNbt.getTag("Attributes");//获取玩家Attributes属性
        for (let i = 0; i < playerNbtAttributes.getSize(); i++) {
            let playerNbtAttributesObj = playerNbtAttributes.getTag(i);//获取当前位置的数据
            if (playerNbtAttributesObj.getTag("Name") == "minecraft:health") {
                let baseHealth = parseInt(playerNbtAttributesObj.getTag("DefaultMax").toString());//获取当前最大血量
                if (baseHealth != playerInitialHealth + DivisionResult) {//判断是否需要减少血量
                    playerNbtAttributesObj.setFloat("Base", playerInitialHealth + DivisionResult);//设置基础血量
                    playerNbtAttributesObj.setFloat("DefaultMax", playerInitialHealth + DivisionResult);//设置默认最大血量
                    playerNbtAttributesObj.setFloat("Max", playerInitialHealth + DivisionResult);//设置最大血量
                    Modify = true;//设置为是
                }
            }
            if (playerNbtAttributesObj.getTag("Name") == "minecraft:attack_damage") {
                let baseAttack = parseInt(playerNbtAttributesObj.getTag("DefaultMax").toString());//获取当前最大攻击
                if (baseAttack != 1 + DivisionResultAttack) {
                    playerNbtAttributesObj.setFloat("Base", 1 + DivisionResultAttack);//设置基础攻击
                    playerNbtAttributesObj.setFloat("DefaultMax", 1 + DivisionResultAttack);//设置默认最大攻击
                    playerNbtAttributesObj.setFloat("DefaultMin", 1 + DivisionResultAttack);//设置默认最小攻击
                    playerNbtAttributesObj.setFloat("Max", 1 + DivisionResultAttack);//设置最大攻击
                    playerNbtAttributesObj.setFloat("Current", 1 + DivisionResultAttack);//设置当前攻击
                    playerNbtAttributesObj.setFloat("Min", 1 + DivisionResultAttack);//设置最小攻击
                    Modify = true;//设置为是
                }
            }
        }
        if (Modify) {
            player.setNbt(playerNbt);//写入新的nbt数据
        } else {
            playerNbt.destroy();//销毁nbt
        }
    }
}

//玩家复活事件处理
function playerRespawnHandle(player) {
    if (whetherEnablePlayerGrowth) {//判断是否启用成长系统
        let Modify = false;//创建默认否布尔值
        let playerMoney = money.get(player.xuid);//获取玩家当前金币数量
        let DivisionResult = Math.floor(playerMoney / playerMoneyAddHealth);//相除并向下取整
        let DivisionResultAttack = Math.floor(playerMoney / playerMoneyAddAttack);//相除并向下取整
        let playerNbt = player.getNbt();//获取玩家nbt
        let playerNbtAttributes = playerNbt.getTag("Attributes");//获取玩家Attributes属性
        for (let i = 0; i < playerNbtAttributes.getSize(); i++) {
            let playerNbtAttributesObj = playerNbtAttributes.getTag(i);//获取当前位置的数据
            if (playerNbtAttributesObj.getTag("Name") == "minecraft:health") {
                let baseHealth = parseInt(playerNbtAttributesObj.getTag("DefaultMax").toString());//获取当前最大血量
                if (baseHealth != playerInitialHealth + DivisionResult) {//判断是否需要减少血量
                    playerNbtAttributesObj.setFloat("Base", playerInitialHealth + DivisionResult);//设置基础血量
                    playerNbtAttributesObj.setFloat("DefaultMax", playerInitialHealth + DivisionResult);//设置默认最大血量
                    playerNbtAttributesObj.setFloat("Max", playerInitialHealth + DivisionResult);//设置最大血量
                    Modify = true;//设置为是
                }
            }
            if (playerNbtAttributesObj.getTag("Name") == "minecraft:attack_damage") {
                let baseAttack = parseInt(playerNbtAttributesObj.getTag("DefaultMax").toString());//获取当前最大攻击
                if (baseAttack != 1 + DivisionResultAttack) {
                    playerNbtAttributesObj.setFloat("Base", 1 + DivisionResultAttack);//设置基础攻击
                    playerNbtAttributesObj.setFloat("DefaultMax", 1 + DivisionResultAttack);//设置默认最大攻击
                    playerNbtAttributesObj.setFloat("DefaultMin", 1 + DivisionResultAttack);//设置默认最小攻击
                    playerNbtAttributesObj.setFloat("Max", 1 + DivisionResultAttack);//设置最大攻击
                    playerNbtAttributesObj.setFloat("Current", 1 + DivisionResultAttack);//设置当前攻击
                    playerNbtAttributesObj.setFloat("Min", 1 + DivisionResultAttack);//设置最小攻击
                    Modify = true;//设置为是
                }
            }
        }
        if (Modify) {
            player.setNbt(playerNbt);//写入新的nbt数据
        } else {
            playerNbt.destroy();//销毁nbt
        }
    }
}

//对接minebbs进行版本监测
function minebbsVersionMonitoring() {
    network.httpGet(minebbsApiUrl[0], (status, result) => {
        if (status == 200) {
            let newVersion = JSON.parse(result).data.version;//获取minebbs上的版本数据
            let downloadUrl = JSON.parse(result).data.view_url;//获取下载链接
            if (newVersion != version) {//判断是否和本地版本相同
                let versionObj = version.split('.');//切割本地版本
                let newVersionObj = newVersion.split('.');//切割在线版本
                if (versionObj[0] < newVersionObj[0]) {
                    localup(newVersion, downloadUrl);
                } else if (versionObj[0] == newVersionObj[0]) {
                    if (versionObj[1] < newVersionObj[1]) {
                        localup(newVersion, downloadUrl);
                    } else if (versionObj[1] == newVersionObj[1]) {
                        if (versionObj[2] < newVersionObj[2]) {
                            localup(newVersion, downloadUrl);
                        } else if (versionObj[2] > newVersionObj[2]) {
                            cloudup();
                        }
                    } else if (versionObj[1] > newVersionObj[1]) {
                        cloudup();
                    }
                } else if (versionObj[0] > newVersionObj[0]) {
                    cloudup();
                }
            }
        } else {
            network.httpGet(minebbsApiUrl[1], (status, result) => {
                if (status == 200) {
                    let newVersion = JSON.parse(result).data.version;//获取minebbs上的版本数据
                    let downloadUrl = JSON.parse(result).data.view_url;//获取下载链接
                    if (newVersion != version) {//判断是否和本地版本相同
                        let versionObj = version.split('.');//切割本地版本
                        let newVersionObj = newVersion.split('.');//切割在线版本
                        if (versionObj[0] < newVersionObj[0]) {
                            localup(newVersion, downloadUrl);
                        } else if (versionObj[0] == newVersionObj[0]) {
                            if (versionObj[1] < newVersionObj[1]) {
                                localup(newVersion, downloadUrl);
                            } else if (versionObj[1] == newVersionObj[1]) {
                                if (versionObj[2] < newVersionObj[2]) {
                                    localup(newVersion, downloadUrl);
                                } else if (versionObj[2] > newVersionObj[2]) {
                                    cloudup();
                                }
                            } else if (versionObj[1] > newVersionObj[1]) {
                                cloudup();
                            }
                        } else if (versionObj[0] > newVersionObj[0]) {
                            cloudup();
                        }
                    }
                }
            })
        }
    })
}

//版本提示打印
function cloudup() {
    let msg = pluginLanguage.Language_High_version_tips;
    fastLog(msg);//打印到控制台
}

//版本提示打印
function localup(newVersion, downloadUrl) {
    let msg = pluginLanguage.Language_Low_version_prompt.replace(/{v}/g, newVersion);
    fastLog(msg);//打印到控制台
}

//发送玩家消息函数
function TellMsg(player, msg, msgType) {
    if (PlayerMsgDataListJson[player.xuid][msgType]) {
        player.tell(msg, PlayerMsgDataListJson[player.xuid].MsgType4)
    }
}

/*-----------监听注册，函数调用专区-----------*/
mc.listen("onRespawnAnchorExplode", blockRespawnAnchorExplode);//重生锚爆炸监听注册
mc.listen("onBedExplode", blockBedExplodeHandle);//床爆炸监听注册
mc.listen("onSpawnProjectile", entitySpawnProjectileHandle)//抛射物创建监听注册
mc.listen("onMobDie", entityMobDieHandle);//实体死亡监听注册
mc.listen("onMobHurt", entityMobHurtHandle);//实体受伤监听注册
mc.listen("onRespawn", playerRespawnHandle);//玩家复活监听
mc.listen("onMoneyAdd", playerMoneyAddHandle);//玩家金币增加事件
mc.listen("onMoneyReduce", playerMoneyReduceHandle);//玩家金币减少事件
mc.listen("onMove", playerMoveHandle);//玩家移动监听注册
mc.listen("onDropItem", playerDropItemHurt);//玩家丢出物品监听注册
mc.listen("onDestroyBlock", playerDestroyBlockHandle);//玩家破坏方块监听注册
mc.listen("onJoin", palyerJoinHandle);//玩家进入游戏监听注册
mc.listen("onAttack", playerAttackHandle);//玩家攻击实体监听注册
mc.listen("onChangeDim", playerChangeDimHandle);//玩家切换维度监听注册
mc.listen("onPlayerDie", playerDieHandle);//玩家死亡监听注册
mc.listen("onEat", playerEatHandle);//吃食物监听注册
mc.listen("onServerStarted", serverServerStarted);//服务器启动完毕监听注册
mc.regPlayerCmd(nweDiddicultSurvivalPlayerCmd, pluginLanguage.Language_Instruction_description, playerRegCmd);//玩家指令注册
mc.regPlayerCmd(newplugInOPSettingsPanel.split(' ')[0], `<${newplugInOPSettingsPanel.split(' ')[1]}>|<${handHeldItemsWillNotFallIfInjured.split(' ')[1]}>|<${handHeldItemsAreGivenForService.split(' ')[1]}> ${pluginLanguage.Language_Instruction_description_op}`, opPlayerRegCmd, 1);//op玩家指令注册
ll.registerPlugin(pluginName, pluginDescribe, pluginVersion, pluginOther)
/*
  _ooOoo_
  o8888888o
  88" . "88
  (| -_- |)
   O\ = /O
  ___/`---'\____
  .   ' \\| |// `.
  / \\||| : |||// \
  / _||||| -:- |||||- \
  | | \\\ - /// | |
  | \_| ''\---/'' | |
  \ .-\__ `-` ___/-. /
  ___`. .' /--.--\ `. . __
  ."" '< `.___\_<|>_/___.' >'"".
  | | : `- \`.;`\ _ /`;.`/ - ` : | |
  \ \ `-. \_ __\ /__ _/ .-` / /
  ======`-.____`-.___\_____/___.-`____.-'======
  `=---='
    .............................................
            佛曰：bug泛滥，我已瘫痪！
Buddha said: BUG are rampant, I have been paralyzed!
//------可自定义的内容------
1，自定义玩家破坏是否有每日限制，限制上限以及重置时间
2，自定义玩家吃物品获得的buff类型和扣款情况
3，自定义玩家金币解锁的物品和装备
4，自定义是否开启死亡扣金币、扣金币上限、和非击杀死亡是否扣金币
5，自定义跨世界是否扣金币以及各世界扣款金额
6，自定义是否启用金币限制攻击、是否开启几率攻击无效化、以及几率
7，自定义PVP\PvE是否掉装备，以及掉率
8，自定义PVP是否扣金币以及扣款数量
9，自定义特定武器伤害末影龙、远程是否能伤害末影龙
10，自定义玩家对末影龙的攻击无效几率、自定义末影龙死亡是否爆炸以及爆炸范围
11，自定义击杀末影龙获得多少金币
12，自定义是否限制钓鱼等抛射物生成，解锁额度，钓鱼是否扣金币等
13，自定义默认附魔等级
14，自定义技能伤害，cd等
15，自定义生物死亡后是否强化复活以及能复活的名单
//------其他主要内容------
1，插件大部分代码重构，支持大部分内容自定义
2，购买技能/强化技能/附魔等都不用手持物品，插件可自行扫描背包
3，修改神圣守护技能效果，变为：吸被你攻击的实体的血（包括玩家）并减少他相应的血
4，侧边栏开关选项，可自定义显示和关闭
5，生物死亡后强化复活，并命名为击杀他的人的名字
6，玩家被攻击不再会掉落技能物品，技能物品不能丢出，死亡不掉落
7，耐久修复功能
8,玩家属性成长系统。
//------本次更新主要内容------
1，修复部分bug
待办功能：
1，生物强化。
*/