ServerEvents.recipes((event) => {
	let { createmetallurgy, create } = event.recipes

	createmetallurgy.casting_in_basin("create:andesite_casing", [
		"#minecraft:planks",
		Fluid.of("createmetallurgy:molten_iron", 1000)
	]).mold_consumed(true).processingTime(100)

	// TEST RECIPES
	createmetallurgy.alloying(Fluid.of("createmetallurgy:molten_brass", 1000), [
		Fluid.of("minecraft:lava", 1000),
		Fluid.of("minecraft:water", 1000)
	]).heatRequirement("frozen").id("test:recipes")

	// TEST RECIPES
	create.mixing(Fluid.of("createmetallurgy:molten_brass", 1000), [
		Fluid.of("minecraft:lava", 1000),
		Fluid.of("minecraft:water", 1000)
	]).heatRequirement("frozen").id("test:recipes_2")
})