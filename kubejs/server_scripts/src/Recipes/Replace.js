ServerEvents.recipes((event) => {
	// 石工具
	let stoneTools = [
		"minecraft:stone_sword",
		"minecraft:stone_pickaxe",
		"minecraft:stone_axe",
		"minecraft:stone_shovel",
		"minecraft:stone_hoe"
	]
	stoneTools.forEach((input) => {
		event.replaceInput(input, "#minecraft:stone_tool_materials", "new_create:charred_cobblestone")
	})

	// 铸造
	let moltenBlock = [
		"createmetallurgy:foundry_basin",
		"createmetallurgy:glassed_foundry_lid",
		"createmetallurgy:foundry_lid",
		"createmetallurgy:casting_basin",
		"createmetallurgy:casting_table"
	]
	moltenBlock.forEach((input) => {
		event.replaceInput(input, "create:andesite_alloy", "new_create:heat_resistant_brick")
	})

	// 齿轮
	event.replaceInput({}, "create:cogwheel", "#create:cogwheel")
	event.replaceInput({}, "create:large_cogwheel", "#create:large_cogwheel")
})