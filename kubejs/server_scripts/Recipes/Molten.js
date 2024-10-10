ServerEvents.recipes((event) => {
	let { createmetallurgy, create } = event.recipes

	createmetallurgy.casting_in_basin("create:andesite_casing", [
		"#minecraft:planks",
		Fluid.of("createmetallurgy:molten_iron", 1000)
	]).mold_consumed(true).processingTime(100)

	// TEST RECIPES
	createmetallurgy.casting_in_table("create:brass_casing", [
		Fluid.of("createmetallurgy:molten_brass", 1000),
		"create:andesite_casing"
	]).mold_consumed(true).processingTime(100)
})