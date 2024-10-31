let $Category = Java.loadClass("com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory")
let $ConversionRecipe = Java.loadClass("com.simibubi.create.compat.jei.ConversionRecipe")

ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 光辉石
	$Category.RECIPES.add($ConversionRecipe.create(
		"create:chromatic_compound", "create:refined_radiance"
	))

	// 暗影钢
	$Category.RECIPES.add($ConversionRecipe.create(
		"create:chromatic_compound", "create:shadow_steel"
	))

	// 传送带
	kubejs.shaped("2x create:belt_connector", [
		"AAA",
		"AAA"
	], {
		A: "thermal:cured_rubber"
	}).id("create:crafting/kinetics/belt_connector")

	// 传动杆
	kubejs.shaped("4x create:shaft", [
		"A",
		"B",
		"A"
	], {
		A: "#forge:stone",
		B: "edenring:brain_tree_planks"
	})

	// 石磨
	kubejs.shaped("create:millstone", [
		" A ",
		"ABA",
		" C "
	], {
		A: "#create:metal_cogwheel",
		B: "edenring:brain_tree_stripped_log",
		C: "#forge:stone"
	}).id("create:crafting/kinetics/millstone")

	// 熔铸盖
	kubejs.shaped("createmetallurgy:foundry_lid", [
		"AAA",
		"A A"
	], {
		A: "new_create:inferior_brick"
	}).id("createmetallurgy:foundry_lid")

	// 熔铸盆
	kubejs.shaped("createmetallurgy:foundry_basin", [
		"A A",
		"ABA",
		"AAA"
	], {
		A: "new_create:inferior_brick",
		B: "new_create:inferior_bricks"
	}).id("createmetallurgy:foundry_basin")

	// 浇筑盆
	kubejs.shaped("createmetallurgy:casting_basin", [
		"A A",
		"A A",
		"AAA"
	], {
		A: "new_create:inferior_brick"
	}).id("createmetallurgy:casting_basin")

	// 浇筑台
	kubejs.shaped("createmetallurgy:casting_table", [
		"A A",
		"A A",
		"AAA"
	], {
		A: "new_create:inferior_brick"
	}).id("createmetallurgy:casting_table")

	// 玻璃熔铸盖
	kubejs.shaped("createmetallurgy:glassed_foundry_lid", [
		"ABA",
		"B B"
	], {
		A: "new_create:inferior_brick",
		B: "#forge:glass"
	}).id("createmetallurgy:glassed_foundry_lid")

	// 工作盆
	kubejs.shaped("create:basin", [
		"A A",
		"AAA"
	], {
		A: "new_create:inferior_brick"
	})

	// 工作盆盖板
	kubejs.shaped("createdieselgenerators:basin_lid", [
		"AAA",
		"AAA"
	], {
		A: "new_create:inferior_brick"
	})

	// 电子管
	kubejs.shaped("create:electron_tube", [
		"A",
		"B"
	], {
		A: "#forge:ingots/gravilite",
		B: "#forge:plates/aluminum"
	}).id("create:crafting/materials/electron_tube")

	// 手部零件
	kubejs.shaped("create:brass_hand", [
		" A ",
		"BBB",
		" B "
	], {
		A: "#forge:ingots/andesite_alloy",
		B: "#forge:plates/gold"
	}).id("create:crafting/kinetics/brass_hand")

	// 电动马达
	kubejs.shaped("createaddition:electric_motor", [
		"ABA",
		"ACA",
		"ABA"
	], {
		A: "#forge:plates/gold",
		B: "#immersiveengineering:coil",
		C: "create:shaft"
	}).id("createaddition:mechanical_crafting/electric_motor")
})