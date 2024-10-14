ClientEvents.lang("zh_cn", (event) => {
	const MODID = "new_create"

	// 物品
	let itemResourceLang = [
		["flint_knapp", "燧石碎片"],
		["rainbow_ingot", "彩虹锭"],
		["andesite_compound", "安山混合物"],
		["grass_string", "草绳"],
		["grass_fiber", "嫩草"],
		["hay", "干草"],
		["drying_web", "晒干网"],
		["flint_sword", "燧石剑"],
		["flint_axe", "燧石斧"],
		["flint_handaxe", "燧石短柄斧"],
		["flint_pickaxe", "燧石镐"],
		["flint_shovel", "燧石锹"],
		["flint_knife", "燧石小刀"],
		["flint_saw", "燧石锯子"],
		["iron_saw", "铁锯子"],
		["diamond_saw", "钻石锯子"],
		["stone_hammer", "石锤"],
		["iron_hammer", "铁锤"],
		["diamond_hammer", "钻石锤"],
		["radiant_helmet", "光辉头盔"],
		["radiant_chestplate", "光辉胸甲"],
		["radiant_leggings", "光辉裤腿"],
		["radiant_boots", "光辉靴子"],
		["cast_iron_sword", "铸铁剑"],
		["cast_iron_pickaxe", "铸铁镐"],
		["cast_iron_axe", "铸铁斧"],
		["cast_iron_shovel", "铸铁锹"],
		["cast_iron_hoe", "铸铁锄"],
		["cast_iron_helmet", "铸铁头盔"],
		["cast_iron_chestplate", "铸铁胸甲"],
		["cast_iron_leggings", "铸铁裤腿"],
		["cast_iron_boots", "铸铁靴子"],
		["cast_iron_ingot", "铸铁锭"],
		["cast_iron_sheet", "铸铁板"],
		["primary_bearing", "合成轴承"],
		["carbon_plate", "碳板"],
		["carbon_rod", "碳棒"],
		["coking_coal_rod", "焦煤棒"],
		["abstruse_mechanism", "幽静构件"],
		["calculation_mechanism", "计算构件"],
		["computer_mechanism", "电脑构件"],
		["inductive_mechanism", "电磁构件"],
		["infernal_mechanism", "下界构件"],
		["kinetic_mechanism", "动力构件"],
		["sealed_mechanism", "密封构件"],
		["sturdy_mechanism", "坚固构件"],
		["cast_electron_tube", "铸铁电子管"],
		["zinc_electron_tube", "锌电子管"],
		["plating_zinc_ingot", "电镀锌"],
		["mold_block", "金属模具:块"],
		["bronze_pickaxe", "青铜镐"],
		["bronze_axe", "青铜斧"],
		["bronze_shovel", "青铜锹"],
		["radiant_sword", "光辉刃"],
		["radiant_pickaxe", "光辉镐"],
		["radiant_axe", "光辉斧"],
		["radiant_shovel", "光辉锹"],
		["pure_quartz", "纯净石英"],
		["saw_silicon", "粗硅"],
		["silicon_crystal", "硅晶"],
		["mithril_ingot", "秘银锭"],
		["mithril_sheet", "秘银板"],
		["lapis_sheet", "青金石板"],
		["chaochi", "炒祺"],
		["egg_shell", "蛋壳"],
		["white_flour", "白面"],
		["processor_press", "空白压印模板"],
		["tinder", "火绒"],
		["integrated_circuit", "集成电路板"],
		["multi_block_detector", "多方块检测器"],
		["stone_sheet", "打磨过的石板"],
		["deepslate_stone_sheet", "打磨过的深板岩石板"],
		["unpolished_stone_sheet", "未打磨的石板"],
		["unpolished_deepslate_stone_sheet", "未打磨的深板岩石板"],
		["wooden_blank_mold", "空白木质铸模"],
		["wooden_ingot_mold", "锭木质铸模"],
		["wooden_plate_mold", "板木质铸模"],
		["wooden_nugget_mold", "粒木质铸模"],
		["raw_iron_ingot", "未成型的铁"],
		["bagasse", "甘蔗渣"],
		["sugar_cane_skin", "甘蔗皮"],
		["heat_resistant_brick", "耐热砖"],
		["calcium_carbonate", "碳酸钙"],
		["raw_iron_ingot", "粗铁锭"],
		["graphite", "石墨"],
		["heat_resistant_clay_ball", "耐热黏土球"],
		["titanium_ingot", "钛锭"]
	]
	for (let i = 0; i < itemResourceLang.length; i++) {
		event.add(`item.${MODID}.${itemResourceLang[i][0]}`, itemResourceLang[i][1])
	}

	// 半成品
	let inItemResourceLang = [
		["chaochi", "未加工的炒祺"],
		["cogwheel", "齿轮(未完成)"],
		["large_cogwheel", "大齿轮(未完成)"],
		["abstruse_mechanism", "幽静构件(未完成)"],
		["calculation_mechanism", "计算构件(未完成)"],
		["inductive_mechanism", "电磁构件(未完成)"],
		["infernal_mechanism", "下界构件(未完成)"],
		["kinetic_mechanism", "动力构件(未完成)"],
		["sealed_mechanism", "密封构件(未完成)"],
		["sturdy_mechanism", "坚固构件(未完成)"],
	]
	for (let i = 0; i < inItemResourceLang.length; i++) {
		event.add(`item.${MODID}.in_${inItemResourceLang[i][0]}`, inItemResourceLang[i][1])
	}

	// 方块
	let blockResourceLang = [
		["charred_cobblestone", "焦黑圆石"],
		["cast_iron_block", "铸铁块"],
		["charge_iron_block", "充电铁块"],
		["cast_iron_casing", "铸铁机壳"],
		["machine_core", "测试机器"],
		["dust", "尘土"],
		["log_pile", "原木堆"],
		["industrial_casing", "工业机壳"],
		["steel_casing", "钢机壳"],
		["heat_coal_block", "热煤块"],
		["industrial_iron_block_wall", "工业铁块墙"],
		["iron_making_furnace_up", "炼铁炉 - 上半部分"],
		["iron_making_furnace_under", "炼铁炉 - 下半部分"],
		["heat_resistant_bricks", "耐热砖块"],
		["silica_sand", "硅砂"],
		["soler_panel", "简易太阳能电池板"]
	]
	for (let i = 0; i < blockResourceLang.length; i++) {
		event.add(`block.${MODID}.${blockResourceLang[i][0]}`, blockResourceLang[i][1])
	}

	// 矿石
	let oreBlockResourceLang = [
		["graphite", "石墨"],
		["titanium", "钛"]
	]
	for (let i = 0; i < oreBlockResourceLang.length; i++) {
		event.add(`block.${MODID}.${oreBlockResourceLang[i][0]}_ore`, oreBlockResourceLang[i][1] + "矿石")
		event.add(`block.${MODID}.deepslate${oreBlockResourceLang[i][0]}_ore`, "深层" + oreBlockResourceLang[i][1] + "矿石")
	}

	// 流体
	let fluidResourceLang = [
		["embalming_fluid", "防腐液"],
		["working_fluid", "加工液"],
		["industrial_fuel", "工业燃油"],
		["kerosene", "煤油"],
		["mixed_gasoline", "混合汽油"],
		["soul", "液态灵魂"],
		["high_grade_refined_oil", "高级精炼油"],
		["egg_mixture_fluid", "鸡蛋混合液"],
		["sugarcane_juice", "甘蔗汁"],
		["crude_oil", "毛油"]
	]
	for (let i = 0; i < fluidResourceLang.length; i++) {
		event.add(`block.${MODID}.${fluidResourceLang[i][0]}`, fluidResourceLang[i][1])
		event.add(`fluid.${MODID}.${fluidResourceLang[i][0]}`, fluidResourceLang[i][1])
		event.add(`item.${MODID}.${fluidResourceLang[i][0]}_bucket`, fluidResourceLang[i][1] + "桶")
	}

	// 机器
	let machineResourceLang = [
		["firmament", "苍穹 - 817型"],
		["iron_making_furnace", "炼铁炉"],
		["brain_electric_extractor", "脑电提取器(超级廉价版)"]
	]
	for (let i = 0; i < machineResourceLang.length; i++) {
		event.add(`block.${MODID}.${machineResourceLang[i][0]}`, machineResourceLang[i][1])
		event.add(`machine.${MODID}.${machineResourceLang[i][0]}`, machineResourceLang[i][1])
	}

	// 熔融金属
	let moltenResourceLang = [
		["bronze", "青铜"],
		["andesite_alloy", "安山合金"],
		["cast_iron", "铸铁"],
		["rose_gold", "玫瑰金"],
		["mithril", "秘银"],
		["bronze", "青铜"],
		["tin", "锡"],
		["obsidian", "黑曜石"],
		["glass", "玻璃"],
		["raw_iron", "粗铁"],
		["rose_quartz", "玫瑰石英"],
		["titanium", "钛"]
	]
	for (let i = 0; i < moltenResourceLang.length; i++) {
		// Item
		event.add(`item.${MODID}.${moltenResourceLang[i][0]}_ingot`, moltenResourceLang[i][1] + "锭")
		event.add(`item.${MODID}.${moltenResourceLang[i][0]}_sheet`, moltenResourceLang[i][1] + "板")
		event.add(`item.${MODID}.raw_${moltenResourceLang[i][0]}`, "粗" + moltenResourceLang[i][1] + "矿")

		// Blocl
		event.add(`block.${MODID}.${moltenResourceLang[i][0]}_block`, moltenResourceLang[i][1] + "块")
		event.add(`block.${MODID}.${moltenResourceLang[i][0]}_ore`, moltenResourceLang[i][1] + "矿")
		event.add(`block.${MODID}.deepslate_${moltenResourceLang[i][0]}_ore`, "深层" + moltenResourceLang[i][1] + "矿")

		// Fluid
		event.add(`block.${MODID}.molten_${moltenResourceLang[i][0]}`, "熔融" + moltenResourceLang[i][1])
		event.add(`fluid.${MODID}.molten_${moltenResourceLang[i][0]}`, "熔融" + moltenResourceLang[i][1])
		event.add(`item.${MODID}.molten_${moltenResourceLang[i][0]}_bucket`, "熔融" + moltenResourceLang[i][1] + "桶")
	}

	// 其它
	let otherLang = [
		["itemGroup.new_create.tab", "New Create"]
	]
	otherLang.forEach(([key, text]) => {
		event.add(key, text)
	})

	// Tooltip
	let toolTipLang = [
		["new_create:grass_string", "一种勉强可以替代线的绳子,可以做点东西"],
		["new_create:grass_fiber", "在除草的时候可以获得"],
		["new_createhay", "嫩草晒干后的产物,可以编成草绳"],
		["new_create:pure_quartz", "挖掘沙子有1%的概率掉落"],
		["minecraft:stick", "破坏树叶时有概率获得"],
		["immersiveengineering:revolver", "似乎是一个很有用的东西"],
		["melter:melter", "使用思索查看搭建方式"],
		["minecraft:blast_furnace", "使用思索查看搭建方式"],
		["new_create:furnace_core", "使用思索查看搭建方式"],
		["new_create:primary_bearing", "只能用于替代传动杆合成"],
		["create:millstone", "应力可以从下方输入"],
		["new_create:metal_detector", "§c在服务器不可用!"],
		["createmetallurgy:casting_table", "同时兼容注液器"],
		["createmetallurgy:casting_basin", "同时兼容注液器"],
		["new_create:heat_coal_block", "也可以用火绒"],
		["youkaishomecoming:drying_rack", "可以和漏斗交互"],
		["pipez:filter_destination_tool", "该物品会导致莫名的卡顿,已移除"],
		["new_create:calcium_carbonate", "CaCO3"]
	]
	toolTipLang.forEach(([key, text]) => {
		event.add("tooltip." + key, "§b" + text)
	})

	// JEI信息
	let jeiInfoLang = [
		["new_create:chaochi", "垣曲炒祺(食其)是垣曲劳动人民长期与大自然和谐相处的产物。过去,人们出远门,有一个难题不好解决,那就是水土不服,常常拉肚子.于是,垣曲人就创造出了这种独特的食品,解决了这一难题.炒祺里带着家乡的水、家乡的土、家乡的面,又耐放易存,几个月都不腐不坏,每天吃一点,就平平安安换了肚子.人们发现,由于炒祺用垣曲独有的白土及绿色原料制作,具有健胃养胃之功效.所以才得以时代流传而不败.成了全国绝无仅有的§l§c国家非物质级文化遗产"],
		["melter:melter", "热量等级,\n1级,火把\n2级,营火\n4级,熔岩"],
		["new_create:heat_coal_block", "在灼热的深渊中,黑暗的核心有时会被烈焰赐予新的生命,变得更加炙热和沉重\n\n其中所富含的能量甚至可以让火焰在上方无限燃烧"]
	]
	jeiInfoLang.forEach(([key, text]) => {
		event.add("jei." + key, "§b" + text)
	})

	// 热量
	let heatedTip = [
		["melt", "熔化"],
		["frozen", "冻结"],
	]
	heatedTip.forEach(([key, text]) => {
		event.add("create.recipe.heat_requirement." + key, + text)
	})

	// 其它
	let otherTipLang = [
		["message.new_create.player.welcome", "§b欢迎来到New Create!\n§b如果有什么BUG还请前往GitHub提交Issues"],
		["message.new_create.debug.logIn", "验证开发者用户信息, 正确\n验证开发者身份信息, 正确\n欢迎回来, %s\nTag下的id以打印至logs/kubejs/server.log下"],
		["message.new_create.debug.getHardness", "这个方块的硬度是: %s"],
		["info.nc.flint", "正在敲击燧石"],
		["ore.nc.osmium", "锇矿脉"],
		["ore.nc.aluminum", "铝土矿脉"],
		["scheme.nc.structure.1", "结构不完整,请使用[思索]查看完整结构"],
		["scheme.nc.structure.2", "方向错了捏"]
	]
	otherTipLang.forEach(([key, text]) => {
		event.add(key, text)
	})
})