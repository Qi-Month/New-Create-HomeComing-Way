ServerEvents.recipes((event) => {
	const { create, createmetallurgy } = event.recipes

	// 浇筑&融化

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

	// 熔融
	let meltingRecipes = [
		// 铸铁
		["new_create:molten_cast_iron", '#forge:ingots/cast_iron'],
		// 安山合金
		["new_create:molten_andesite_alloy", 'new_create:andesite_compound']
	]
	meltingRecipes.forEach(([fluid, input]) => {
		create.mixing(Fluid.of(fluid, 90), [
			input
		]).heatLevel("melt")
	})

	createmetallurgy.casting_in_basin("create:andesite_casing", [
		Fluid.of("new_create:molten_andesite_alloy", 90),
		'#minecraft:planks'
	]).processingTime(60).mold_consumed(true)

	// 获取

	// 铸铁
	create.mixing(Fluid.of("new_create:molten_cast_iron", 90), [
		'#forge:ingots/iron',
		'#forge:coal'
	]).heatLevel("melt")

	// 批量
	let moltenRecipes_1 = [
		['new_create:cast_iron_ingot', "new_create:cast_iron_block", "new_create:molten_cast_iron"],
		['create:andesite_alloy', "create:andesite_alloy_block", "new_create:molten_andesite_alloy"]
	]
	moltenRecipes_1.forEach(([ingot, block, fluid]) => {
		createmetallurgy.casting_in_table(ingot, [
			Fluid.of(fluid, 90),
			"createmetallurgy:graphite_ingot_mold"
		]).processingTime(60).mold_consumed(false)

		createmetallurgy.casting_in_basin(block, [
			Fluid.of(fluid, 810)
		]).processingTime(60).mold_consumed(false)
	})
})