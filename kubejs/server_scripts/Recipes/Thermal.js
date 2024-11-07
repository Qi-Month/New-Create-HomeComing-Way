ServerEvents.recipes((event) => {
	let { create, kubejs } = event.recipes

	// 橡胶
	create.compacting([
		Item.of("thermal:rubber").withChance(1),
		Item.of("thermal:rubber").withChance(0.2)
	], [
		Fluid.of("new_create:balloon_mushroom_slurry", 250)
	])

	// 树脂提取器
	kubejs.shaped("thermal:device_tree_extractor", [
		"AAA",
		"BCB",
		"ADA"
	], {
		A: "new_create:inferior_brick",
		B: "create:copper_casing",
		C: "flopper:flopper",
		D: "minecraft:bucket"
	}).id("thermal:device_tree_extractor")
})