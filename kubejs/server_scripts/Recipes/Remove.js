ServerEvents.recipes((event) => {
	// 输出
	let output = [
		"#alltheores:ore_hammers",
		"#forge:tools/wooden",
		"#minecraft:planks",
		"farmersdelight:tree_bark",
		"#edenring:volvox_block",
		"createmetallurgy:mechanical_belt_grinder",
		"#create:metal_cogwheel",
		"#create:metal_large_cogwheel",
		"create:cogwheel",
		"create:large_cogwheel",
		"thermal:device_rock_gen",
		"thermal:rubber",
		"thermal:rubber_block",
		"create:water_wheel",
		"create:large_water_wheel",
		"create:mechanical_piston",
		"create:sticky_mechanical_piston",
		"create:windmill_bearing"
	]
	output.forEach((item) => {
		event.remove({ output: item })
	})

	// 输入
	let input = [
		"#alltheores:ore_hammers",
		"immersiveengineering:wirecutter",
	]
	input.forEach((item) => {
		event.remove({ input: item })
	})

	// 配方id
	let recipeId = [
		"create:cutting/andesite_alloy",
		"thermal:machines/crystallizer/crystallizer_amethyst_cluster",
		"create:tiled_glass_from_glass_colorless_stonecutting",
		"create:vertical_framed_glass_from_glass_colorless_stonecutting",
		"create:horizontal_framed_glass_from_glass_colorless_stonecutting",
		"create:framed_glass_from_glass_colorless_stonecutting",
		"ad_astra:oxygen_loading/oxygen_from_oxygen_loading_water",
		"ad_astra:conversion/oxygen_from_water",
		"create:milling/calcite",
		"createmetallurgy:casting_in_table/bronze/gear",
		"createmetallurgy:casting_in_table/steel/gear",
		"immersiveengineering:crafting/plate_copper_hammering",
		"immersiveengineering:crafting/plate_iron_hammering",
		"ad_astra:hammering/iron_plate",
		"immersiveengineering:crafting/plate_gold_hammering",
		"create:item_application/andesite_casing_from_wood",
		"create:item_application/copper_casing_from_wood",
		"create:item_application/brass_casing_from_wood",
		"immersiveengineering:blastfurnace/steel",
		"createmetallurgy:alloying/steel"
	]
	recipeId.forEach((id) => {
		event.remove({ id: id })
	})

	// 配方类型
	let recipeType = [
		"createmetallurgy:grinding",
	]
	recipeType.forEach((type) => {
		event.remove({ type: type })
	})

	// ModRecipes
	let mod = [

	]
	mod.forEach((namespace) => {
		event.remove({ mod: namespace })
	})

	// 玻璃板
	event.remove({
		type: "minecraft:crafting_shaped",
		output: "#forge:glass_panes"
	})

	// 铜锭
	event.remove({
		type: "minecraft:smelting",
		output: "#forge:ingots/copper"
	})
	event.remove({
		type: "minecraft:blasting",
		output: "#forge:ingots/copper"
	})
	// 铁锭
	event.remove({
		type: "minecraft:smelting",
		output: "#forge:ingots/iron"
	})
	event.remove({
		type: "minecraft:blasting",
		output: "#forge:ingots/iron"
	})
	// 金锭
	event.remove({
		type: "minecraft:smelting",
		output: "#forge:ingots/gold"
	})
	event.remove({
		type: "minecraft:blasting",
		output: "#forge:ingots/gold"
	})
})