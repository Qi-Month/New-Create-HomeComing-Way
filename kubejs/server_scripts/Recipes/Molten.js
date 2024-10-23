ServerEvents.recipes((event) => {
	let { createmetallurgy, create, kubejs } = event.recipes

	// 熔融安山合金
	createmetallurgy.melting(Fluid.of("new_create:molten_andesite_alloy", 45), [
		"2x new_create:mixed_stone_dust"
	]).heatRequirement("melt")

	// 安山合金
	createmetallurgy.casting_in_table("create:andesite_alloy", [
		Fluid.of("new_create:molten_andesite_alloy", 90),
		"createmetallurgy:graphite_ingot_mold"
	]).mold_consumed(false).processingTime(100)

	// 块
	createmetallurgy.casting_in_basin("create:andesite_alloy_block", [
		Fluid.of("new_create:molten_andesite_alloy", 810)
	]).processingTime(100)

	// 铸铁
	kubejs.shapeless("new_create:cast_iron_block", [
		"9x #forge:ingots/cast_iron"
	])

	kubejs.shapeless("9x new_create:cast_iron_ingot", [
		"#forge:storage_blocks/cast_iron"
	])

	createmetallurgy.melting(Fluid.of("new_create:molten_cast_iron", 90), [
		"#forge:ingots/cast_iron"
	]).heatRequirement("melt")
	createmetallurgy.melting(Fluid.of("new_create:molten_cast_iron", 90), [
		"#forge:plates/cast_iron"
	]).heatRequirement("melt")

	// 齿轮
	let cogwheel = ["bronze", "cast_iron", "steel"]
	cogwheel.forEach((metal) => {
		createmetallurgy.casting_in_table(`new_create:incomplete_${metal}_cogwheel`, [
			Fluid.of(`createmetallurgy:molten_${metal}`, 45),
			"new_create:golden_ball_cast"
		]).mold_consumed(false).processingTime(40)

		createmetallurgy.casting_in_table(`new_create:incomplete_${metal}_large_cogwheel`, [
			Fluid.of(`createmetallurgy:molten_${metal}`, 90),
			"new_create:golden_gear_cast"
		]).mold_consumed(false).processingTime(40)
	})
	// 补充
	createmetallurgy.casting_in_table("new_create:incomplete_cast_iron_cogwheel", [
		Fluid.of("new_create:molten_cast_iron", 45),
		"new_create:golden_ball_cast"
	]).mold_consumed(false).processingTime(40)

	createmetallurgy.casting_in_table("new_create:incomplete_cast_iron_large_cogwheel", [
		Fluid.of("new_create:molten_cast_iron", 90),
		"new_create:golden_gear_cast"
	]).mold_consumed(false).processingTime(40)
})