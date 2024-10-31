ServerEvents.recipes((event) => {
	let { kubejs, farmersdelight, create } = event.recipes

	// 重力水晶簇
	farmersdelight.cutting("4x edenring:gravilite_shards", [
		"edenring:gravilite_block"
	], { type: "farmersdelight:tool_action", action: "pickaxe_dig" })
		.id("edenring:gravilite_shards")

	// 藻球
	farmersdelight.cutting([
		"2x new_create:volvox_ball",
		Item.of("new_create:volvox_ball").withChance(0.3)
	], "edenring:volvox_block", { tag: "forge:tools/knives" })

	// 藻块
	event.custom({
		"type": "lychee:item_inside",
		"item_in": [
			{ "item": "edenring:volvox_block_dense" }
		],
		"block_in": {
			"blocks": [
				"new_create:nutrient_solution"
			]
		},
		"post": {
			"type": "drop_item",
			"item": "edenring:volvox_block"
		},
		"hide_in_viewer": false,
		"time": 20
	})

	create.filling("edenring:volvox_block", [
		"edenring:volvox_block_dense",
		Fluid.of("new_create:nutrient_solution", 250)
	])

	// 风帆(飞机)
	kubejs.shaped("immersive_aircraft:sail", [
		"AAB",
		"CCD",
		"AAB"
	], {
		A: "#minecraft:wool",
		B: "#forge:rods/wooden",
		C: "#forge:string",
		D: "#minecraft:planks"
	}).id("immersive_aircraft:sail")

	// 机身
	kubejs.shaped("immersive_aircraft:hull", [
		"ABA",
		"DCD",
		"ABA"
	], {
		A: "edenring:balloon_mushroom_block",
		B: "#minecraft:wooden_slabs",
		C: "#forge:ingots/gravilite",
		D: "#forge:cobblestone"
	}).id("immersive_aircraft:hull")

	// 螺旋桨
	kubejs.shaped("immersive_aircraft:propeller", [
		"AA ",
		" B ",
		" AA"
	], {
		A: "new_create:gravilite_ingot",
		B: "edenring:gravilite_block"
	}).id("immersive_aircraft:propeller")

	// 固定旋翼机
	kubejs.shaped("immersive_aircraft:gyrodyne", [
		" A ",
		"BCB",
		"DDD"
	], {
		A: "immersive_aircraft:propeller",
		B: "immersive_aircraft:sail",
		C: "#forge:chests",
		D: "immersive_aircraft:hull"
	}).id("immersive_aircraft:gyrodyne")

	// 反重力活塞
	kubejs.shaped("edenring:gravity_compressor", [
		"ABA",
		"CDC",
		"EFE"
	], {
		A: "#forge:ingots/iron",
		B: "#minecraft:planks",
		C: "edenring:gravilite_block",
		D: "#forge:storage_blocks/copper",
		E: "#forge:ingots/andesite_alloy",
		F: "create:andesite_casing"
	}).id("edenring:gravity_compressor")

	// 飞艇
	kubejs.shaped("immersive_aircraft:airship", [
		"ABA",
		"ACA",
		"DED"
	], {
		A: "immersive_aircraft:sail",
		B: "edenring:balloon_mushroom_block",
		C: "#forge:chests",
		D: "immersive_aircraft:hull",
		E: "immersive_aircraft:engine"
	}).id("immersive_aircraft:airship")

	// 发动机
	kubejs.shaped("immersive_aircraft:engine", [
		" A ",
		"BCB",
		"ADA"
	], {
		A: "#forge:cobblestone",
		B: "edenring:gravity_compressor",
		C: "#forge:storage_blocks/copper",
		D: "immersive_aircraft:boiler"
	}).id("immersive_aircraft:engine")
})