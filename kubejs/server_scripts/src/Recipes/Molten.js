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
})