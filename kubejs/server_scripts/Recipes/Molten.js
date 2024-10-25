ServerEvents.recipes((event) => {
	let { createmetallurgy, create, kubejs } = event.recipes

	// 熔融安山合金
	createmetallurgy.melting(Fluid.of("new_create:molten_andesite_alloy", 45), [
		"2x new_create:mixed_stone_dust"
	]).heatRequirement("melt")

	// 安山合金
	createmetallurgy.casting_in_table("create:andesite_alloy", [
		Fluid.of("new_create:molten_andesite_alloy", 90),
		"new_create:golden_ingot_cast"
	]).mold_consumed(false).processingTime(100)

	// 块
	createmetallurgy.casting_in_basin("create:andesite_alloy_block", [
		Fluid.of("new_create:molten_andesite_alloy", 810)
	]).processingTime(100)
})