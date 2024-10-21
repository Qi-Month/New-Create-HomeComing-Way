ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// 橡胶
	create.compacting([
		Item.of("thermal:rubber").withChance(1),
		Item.of("thermal:rubber").withChance(0.2)
	], [
		Fluid.of("new_create:balloon_mushroom_slurry", 250)
	])
})