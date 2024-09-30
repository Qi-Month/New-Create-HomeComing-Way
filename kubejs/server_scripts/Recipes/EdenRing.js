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
})