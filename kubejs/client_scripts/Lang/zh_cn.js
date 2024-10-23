ClientEvents.lang("zh_cn", (event) => {
	let namespace = "new_create"
	// 物品
	let itemLang = [
		["0", "0元硬币"],
		["1", "1元硬币"],
		["2", "2元硬币"],
		["3", "3元硬币"],
		["4", "4元硬币"],
		["5", "5元硬币"],
		["6", "6元硬币"],
		["7", "7元硬币"],
		["8", "8元硬币"],
		["9", "9元硬币"],
		["10", "10元硬币"],
		["20", "20元硬币"],
		["50", "50元硬币"],
		["100", "100元硬币"],
		["500", "500元硬币"],
		["1000", "1000元硬币"],
		["5000", "5000元硬币"],
		["10000", "10000元硬币"],
		["rainbow_mooncoin", "彩虹月币"],
		["initial_item_kit", "初始套件"],
		["volvox_ball", "藻球"],
		["drying_volvox_ball", "干燥的藻球"],
		["gravilite_ingot", "磨制重力水晶"],
		["brain_sapling", "脑树苗"],
		["wet_inferior_brick", "潮湿的土砖"],
		["inferior_brick", "土砖"],
		["transition_stone", "跃迁石"],
		["refractory_clay_ball", "耐火黏土"],
		["refractory_brick", "耐火砖"],
		["flux", "助焊剂"],
		["quicklime", "生石灰"],
		["mortar", "砂浆"]
	]
	for (let i = 0; i < itemLang.length; i++) {
		event.add(`item.${namespace}.${itemLang[i][0]}`, itemLang[i][1])
	}

	// 锭
	let ingotLang = [
	]
	for (let i = 0; i < ingotLang.length; i++) {
		event.add(`item.${namespace}.${ingotLang[i][0]}_ingot`, ingotLang[i][1] + "锭")
	}

	// 石头粉
	let stoneDustLang = [
		["stone", "石头"],
		["deepslate", "深板岩"],
		["tuff", "凝灰岩"],
		["calcite", "方解石"],
		["mixed_stone", "混合石头"]
	]
	for (let i = 0; i < stoneDustLang.length; i++) {
		event.add(`item.${namespace}.${stoneDustLang[i][0]}_dust`, stoneDustLang[i][1] + "粉")
	}

	// 工具
	let toolLang = [
		["balloon_mushroom", "气球菇"]
	]
	for (let i = 0; i < toolLang.length; i++) {
		event.add(`item.${namespace}.${toolLang[i][0]}_sword`, `${toolLang[i][1]}剑`)
		event.add(`item.${namespace}.${toolLang[i][0]}_pickaxe`, `${toolLang[i][1]}镐`)
		event.add(`item.${namespace}.${toolLang[i][0]}_axe`, `${toolLang[i][1]}斧`)
		event.add(`item.${namespace}.${toolLang[i][0]}_shovel`, `${toolLang[i][1]}锹`)
		event.add(`item.${namespace}.${toolLang[i][0]}_hoe`, `${toolLang[i][1]}锄`)
	}

	// 半成品
	let inItemLang = [
	]
	for (let i = 0; i < inItemLang.length; i++) {
		event.add(`item.${namespace}.incomplete_${inItemLang[i][0]}`, inItemLang[i][1])
	}

	// 方块
	let blockLang = [
		["nutrient_solution_dirt", "营养土"],
		["black_dirt", "黑土"],
		["soler_panel", "简易太阳能电池板"],
		["steel_casing", "钢机壳"],
		["magnetic_cast_iron_block", "磁性铸铁块"],
		["inferior_bricks", "土砖块"],
		["heat_coal_block", "热煤块"],
		["refractory_bricks", "耐火砖块"],
		["refractory_bricks_wall", "耐火砖块墙"]
	]
	for (let i = 0; i < blockLang.length; i++) {
		event.add(`block.${namespace}.${blockLang[i][0]}`, blockLang[i][1])
	}

	// 机器
	let machineLang = [
		["brain_electric_extractor", "脑电提取器(超级廉价版)"],
		["easy_rock_gen", "简易造石机"],
		["stone_gen", "结构造石机"],
		["oxygen_generator", "制氧机"],
		["soil_blast_furnace", "土法高炉"],
		["blast_furnace", "高炉"]
	]
	for (let i = 0; i < machineLang.length; i++) {
		event.add(`block.${namespace}.${machineLang[i][0]}`, machineLang[i][1])
		event.add(`machine.${namespace}.${machineLang[i][0]}`, machineLang[i][1])
	}

	// 压缩
	let compressedBlock = [
		["andesite", "安山岩"],
		["tuff", "凝灰岩"],
		["calcite", "方解石"]
	]
	for (let i = 0; i < compressedBlock.length; i++) {
		event.add(`block.${namespace}.compressed_${compressedBlock[i][0]}`, "一重压缩" + compressedBlock[i][1])
		event.add(`block.${namespace}.double_compressed_${compressedBlock[i][0]}`, "二重压缩" + compressedBlock[i][1])
		event.add(`block.${namespace}.triple_compressed_${compressedBlock[i][0]}`, "三重压缩" + compressedBlock[i][1])
	}

	// 流体
	let fluidLang = [
		["nutrient_solution", "营养液"],
		["balloon_mushroom_slurry", "气球菇浆液"],
		["lime_water", "石灰水"]
	]
	for (let i = 0; i < fluidLang.length; i++) {
		event.add(`block.${namespace}.${fluidLang[i][0]}`, fluidLang[i][1])
		event.add(`fluid.${namespace}.${fluidLang[i][0]}`, fluidLang[i][1])
		event.add(`item.${namespace}.${fluidLang[i][0]}_bucket`, fluidLang[i][1] + "桶")
	}

	// 金属
	let moltenLang = [
		["titanium", "钛"],
		["andesite_alloy", "安山合金"],
		["cast_iron", "铸铁"]
	]
	for (let i = 0; i < moltenLang.length; i++) {
		// Item
		event.add(`item.${namespace}.${moltenLang[i][0]}_ingot`, moltenLang[i][1] + "锭")
		event.add(`item.${namespace}.${moltenLang[i][0]}_sheet`, moltenLang[i][1] + "板")
		event.add(`item.${namespace}.raw_${moltenLang[i][0]}`, "粗" + moltenLang[i][1])

		// Block
		event.add(`block.${namespace}.${moltenLang[i][0]}_block`, moltenLang[i][1] + "块")
		event.add(`block.${namespace}.${moltenLang[i][0]}_ore`, moltenLang[i][1] + "矿")
		event.add(`block.${namespace}.deepslate_${moltenLang[i][0]}_ore`, "深层" + moltenLang[i][1] + "矿")

		// Fluid
		event.add(`block.${namespace}.molten_${moltenLang[i][0]}`, "熔融" + moltenLang[i][1])
		event.add(`fluid.${namespace}.molten_${moltenLang[i][0]}`, "熔融" + moltenLang[i][1])
		event.add(`item.${namespace}.molten_${moltenLang[i][0]}_bucket`, "熔融" + moltenLang[i][1] + "桶")
	}

	// 其它
	let otherLang = [
		["itemGroup.new_create.all", "New Create: HomeComing Way"],
		["itemGroup.new_create.tool", "New Create-Tool"],
		["itemGroup.new_create.money", "New Create-Money"],
		["itemGroup.new_create.metal", "New Create-Metal"]
	]
	otherLang.forEach(([key, text]) => {
		event.add(key, text)
	})

	// Tooltip
	let toolTipLang = [
		["new_create:easy_rock_gen", "如果发现不起效果尝试将熔岩和水的位置互换一下"],
		["new_create:initial_item_kit", "潜行加右键使用"],
		["new_create:drying_volvox_ball", "太干巴了没法吃"],
		["new_create:stone_gen", "在更换下方石头的时候需要将机器拆掉重放"],
		["new_create:soil_blast_furnace", "需要在下方放一桶熔岩作为热源"],
		["new_create:black_dirt", "挖土有35%的概率掉落"],

		["steampowered:bronze_cogwheel", "应力影响: 0.9"],
		["steampowered:bronze_large_cogwheel", "应力影响: 0.9"],
		["steampowered:cast_iron_cogwheel", "应力影响: 1.0"],
		["steampowered:cast_iron_large_cogwheel", "应力影响: 1.0"],
		["steampowered:steel_cogwheel", "应力影响: 0.8"],
		["steampowered:steel_large_cogwheel", "应力影响: 0.8"]
	]
	toolTipLang.forEach(([key, text]) => {
		event.add(`tooltip.${key}`.replace(":", "."), `§b${text}`)
	})

	// JEI信息
	let jeiInfoLang = [
		["new_create:brain_sapling", "这种树苗的生长条件非常特殊, 以至于甚至无法自然掉落, 需要人类人为制造出来\n§b目前人类所能达到的技术只能通过人工干预, 将其种植在特制的盆栽和特制的土壤中才能生长, 而人为干预生长的树则有一定可能掉落树苗(5%)"],
		["portality:controller", "在本Mod的传送门附近挖掘或放置方块都会有一定的显示延迟的bug"],
		["portality:frame", "在本Mod的传送门附近挖掘或放置方块都会有一定的显示延迟的bug"],
		["portality:module_energy", "在本Mod的传送门附近挖掘或放置方块都会有一定的显示延迟的bug"],
		["portality:module_fluids", "在本Mod的传送门附近挖掘或放置方块都会有一定的显示延迟的bug"],
		["portality:module_items", "在本Mod的传送门附近挖掘或放置方块都会有一定的显示延迟的bug"],
		["portality:module_interdimensional", "在本Mod的传送门附近挖掘或放置方块都会有一定的显示延迟的bug"],
		["portality:generator", "在本Mod的传送门附近挖掘或放置方块都会有一定的显示延迟的bug"],
		["portality:teleportation_token", "在本Mod的传送门附近挖掘或放置方块都会有一定的显示延迟的bug"],
	]
	jeiInfoLang.forEach(([key, text]) => {
		event.add(`jei.info.${key}`.replace(":", "."), `§b${text}`)
	})

	// 热量
	let heatedTip = [
		["frozen", "冰冻"],
		["melt", "熔化"]
	]
	heatedTip.forEach(([key, text]) => {
		event.add(`create.recipe.heat_requirement.${key}`, text)
	})

	// 其它
	let otherTipLang = [
		["message.new_create.player.welcome", "§b欢迎来到New Create: HomeComing Way!\n§b如果有什么BUG还请前往GitHub提交Issues"],
		["message.new_create.debug.getItemId", "验证开发者用户信息, 正确\n验证开发者身份信息, 正确\n欢迎回来, %s\nTag下的id以打印至logs/kubejs/server.log下"],
		["message.new_create.debug.getHardness", "这个方块的硬度是: %s"],
		["planets.edenring.edenring", "伊甸星环"],
		["custom.youkaishomecoming.red_velvet_cake_slice", "被幽幽子偷吃掉两块红丝绒蛋糕的剩余部分"],
		["custom.youkaishomecoming.onigili", "速冻饭团"],
		["custom.naturescompass.naturescompass", "请前往菌菇森林或远古菌菇森林"],
		["text.new_create.dev", " ● 开发中画面, 实际内容请以正式上线为准"],
		["text.new_create.player", " ● 测试中版本, 不代表最终品质"],
		["gui.edenring.text.edenring", "伊甸星环"],
		["gui.touhou.text.touhou", "幻想星"]
	]
	otherTipLang.forEach(([key, text]) => {
		event.add(key, text)
	})
})