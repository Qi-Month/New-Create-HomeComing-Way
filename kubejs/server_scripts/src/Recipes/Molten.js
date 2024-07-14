ServerEvents.recipes((event) => {
	const { create, createmetallurgy } = event.recipes

	// 铸模
	createmetallurgy.casting_in_table('createmetallurgy:graphite_blank_mold', [
		Fluid.of('createmetallurgy:molten_gold', 90)
	]).processingTime(1000)

	createmetallurgy.alloying(Fluid.of('new_create:obsidian', 10), [
		Fluid.of('minecraft:water', 1000),
		Fluid.of('minecraft:lava', 1000)
	])
})