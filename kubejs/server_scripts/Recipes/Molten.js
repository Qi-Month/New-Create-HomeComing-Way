ServerEvents.recipes((event) => {
	let { createmetallurgy, create, kubejs } = event.recipes

	createmetallurgy.casting_in_basin("create:andesite_casing", [
		"#minecraft:planks",
		Fluid.of("createmetallurgy:molten_iron", 1000)
	]).mold_consumed(true).processingTime(100)

	// 铸铁块
	kubejs.shapeless("new_create:cast_iron_block", [
		"9x #forge:ingots/cast_iron"
	])

	kubejs.shapeless("9x new_create:cast_iron_ingot", [
		"#forge:storage_blocks/cast_iron"
	])
})