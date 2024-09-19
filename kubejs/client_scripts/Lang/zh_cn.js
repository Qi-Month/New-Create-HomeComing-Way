ClientEvents.lang("zh_cn", (event) => {
	const namespace = "new_create"

	// 物品
	let itemResourceLang = [
		["rainbow_mooncoin", "彩虹月币"]
	]
	for (let i = 0; i < itemResourceLang.length; i++) {
		event.add(`item.${namespace}.${itemResourceLang[i][0]}`, itemResourceLang[i][1])
	}

	// 工具
	let toolResourceLang = [
		["balloon_mushroom", "气球菇"]
	]
	for (let i = 0; i < toolResourceLang.length; i++) {
		event.add(`item.${namespace}.${toolResourceLang[i][0]}_sword`, `${toolResourceLang[i][1]}剑`)
		event.add(`item.${namespace}.${toolResourceLang[i][0]}_pickaxe`, `${toolResourceLang[i][1]}镐`)
		event.add(`item.${namespace}.${toolResourceLang[i][0]}_axe`, `${toolResourceLang[i][1]}斧`)
		event.add(`item.${namespace}.${toolResourceLang[i][0]}_shovel`, `${toolResourceLang[i][1]}锹`)
		event.add(`item.${namespace}.${toolResourceLang[i][0]}_hoe`, `${toolResourceLang[i][1]}锄`)
	}

	// 半成品
	let inItemResourceLang = [
	]
	for (let i = 0; i < inItemResourceLang.length; i++) {
		event.add(`item.${namespace}.incomplete_${inItemResourceLang[i][0]}`, inItemResourceLang[i][1])
	}

	// 方块
	let blockResourceLang = [
		["soler_panel", "简易太阳能电池板"]
	]
	for (let i = 0; i < blockResourceLang.length; i++) {
		event.add(`block.${namespace}.${blockResourceLang[i][0]}`, blockResourceLang[i][1])
	}

	// 矿石
	let oreBlockResourceLang = []
	for (let i = 0; i < oreBlockResourceLang.length; i++) {
		event.add(`block.${namespace}.${oreBlockResourceLang[i][0]}_ore`, oreBlockResourceLang[i][1] + "矿石")
		event.add(`block.${namespace}.deepslate_${oreBlockResourceLang[i][0]}_ore`, "深层" + oreBlockResourceLang[i][1] + "矿石")
	}

	// 流体
	let fluidResourceLang = [
	]
	for (let i = 0; i < fluidResourceLang.length; i++) {
		event.add(`block.${namespace}.${fluidResourceLang[i][0]}`, fluidResourceLang[i][1])
		event.add(`fluid.${namespace}.${fluidResourceLang[i][0]}`, fluidResourceLang[i][1])
		event.add(`item.${namespace}.${fluidResourceLang[i][0]}_bucket`, fluidResourceLang[i][1] + "桶")
	}

	// 机器
	let machineResourceLang = [
		["brain_electric_extractor", "脑电提取器(超级廉价版)"]
	]
	for (let i = 0; i < machineResourceLang.length; i++) {
		event.add(`block.${namespace}.${machineResourceLang[i][0]}`, machineResourceLang[i][1])
		event.add(`machine.${namespace}.${machineResourceLang[i][0]}`, machineResourceLang[i][1])
	}

	// 熔融金属
	let moltenResourceLang = []
	for (let i = 0; i < moltenResourceLang.length; i++) {
		// Item
		event.add(`item.${namespace}.${moltenResourceLang[i][0]}_ingot`, moltenResourceLang[i][1] + "锭")
		event.add(`item.${namespace}.${moltenResourceLang[i][0]}_sheet`, moltenResourceLang[i][1] + "板")
		event.add(`item.${namespace}.raw_${moltenResourceLang[i][0]}`, "粗" + moltenResourceLang[i][1] + "矿")

		// Blocl
		event.add(`block.${namespace}.${moltenResourceLang[i][0]}_block`, moltenResourceLang[i][1] + "块")
		event.add(`block.${namespace}.${moltenResourceLang[i][0]}_ore`, moltenResourceLang[i][1] + "矿")
		event.add(`block.${namespace}.deepslate_${moltenResourceLang[i][0]}_ore`, "深层" + moltenResourceLang[i][1] + "矿")

		// Fluid
		event.add(`block.${namespace}.molten_${moltenResourceLang[i][0]}`, "熔融" + moltenResourceLang[i][1])
		event.add(`fluid.${namespace}.molten_${moltenResourceLang[i][0]}`, "熔融" + moltenResourceLang[i][1])
		event.add(`item.${namespace}.molten_${moltenResourceLang[i][0]}_bucket`, "熔融" + moltenResourceLang[i][1] + "桶")
	}

	// 其它
	let otherLang = [
		["itemGroup.new_create.itemTab", "New Create: Reload"],
		["itemGroup.new_create.toolTab", "New Create: Reload - Tool"]
	]
	otherLang.forEach(([key, text]) => {
		event.add(key, text)
	})

	// Tooltip
	let toolTipLang = [
	]
	toolTipLang.forEach(([key, text]) => {
		event.add(`tooltip.${key}`, "§b" + text)
	})

	// JEI信息
	let jeiInfoLang = [

	]
	jeiInfoLang.forEach(([key, text]) => {
		event.add(`jei.${key}`, "§b" + text)
	})

	// 热量
	let heatedTip = [

	]
	heatedTip.forEach(([key, text]) => {
		event.add(`create.recipe.heat_requirement.${key}`, + text)
	})

	// 其它
	let otherTipLang = [
		["message.new_create.player.welcome", "§b欢迎来到New Create: Reload!\n§b如果有什么BUG还请前往GitHub提交Issues"],
		["message.new_create.debug.getId", "验证开发者用户信息, 正确\n验证开发者身份信息, 正确\n欢迎回来, %s\nTag下的id以打印至logs/kubejs/server.log下"],
		["message.new_create.debug.getHardness", "这个方块的硬度是: %s"],
		["planets.edenring.edenring", "伊甸星环"]
	]
	otherTipLang.forEach(([key, text]) => {
		event.add(key, text)
	})
})