ServerEvents.recipes((event) => {
	const { create, createmetallurgy } = event.recipes

	// 空铸模
	createmetallurgy.casting_in_table('createmetallurgy:graphite_blank_mold', [
		Fluid.of('createmetallurgy:molten_gold', 90)
	]).processingTime(60).mold_consumed(true)

	// 锭铸模
	createmetallurgy.casting_in_table('createmetallurgy:graphite_ingot_mold', [
		Fluid.of('createmetallurgy:molten_gold', 90),
		'#forge:ingots'
	]).processingTime(60).mold_consumed(true)

	// 粒铸模
	createmetallurgy.casting_in_table('createmetallurgy:graphite_nugget_mold', [
		Fluid.of('createmetallurgy:molten_gold', 90),
		'#forge:nuggets'
	]).processingTime(60).mold_consumed(true)

	// 板铸模
	createmetallurgy.casting_in_table('createmetallurgy:graphite_plate_mold', [
		Fluid.of('createmetallurgy:molten_gold', 90),
		'#forge:plates'
	]).processingTime(60).mold_consumed(true)

	// 熔融铸铁
	create.mixing(Fluid.of("new_create:molten_cast_iron", 90), [
		'#forge:ingots/cast_iron'
	]).heatLevel("melt")

	createmetallurgy.casting_in_basin("create:andesite_casing", [
		Fluid.of("new_create:molten_andesite_alloy", 90),
		'#minecraft:planks'
	]).processingTime(60).mold_consumed(true)
})