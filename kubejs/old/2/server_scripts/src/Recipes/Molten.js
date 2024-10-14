ServerEvents.recipes((event) => {
	const { create, createmetallurgy } = event.recipes

	/**
	 * @param {Special.result} Result 输出
	 * @param {Special.input} input 输入
	 */

	// 热量
	let heatLevel = {
		heated: "heated",
		superheated: "superheated",
		melt: "melt",
		frozen: "frozen"
	}

	// 空铸模
	createmetallurgy.casting_in_table("createmetallurgy:graphite_blank_mold", [
		Fluid.of("createmetallurgy:molten_gold", 90)
	]).processingTime(60).mold_consumed(true)

	// 锭铸模
	createmetallurgy.casting_in_table("createmetallurgy:graphite_ingot_mold", [
		Fluid.of("createmetallurgy:molten_gold", 90),
		"#forge:ingots"
	]).processingTime(60).mold_consumed(true)

	// 粒铸模
	createmetallurgy.casting_in_table("createmetallurgy:graphite_nugget_mold", [
		Fluid.of("createmetallurgy:molten_gold", 90),
		"#forge:nuggets"
	]).processingTime(60).mold_consumed(true)

	// 板铸模
	createmetallurgy.casting_in_table("createmetallurgy:graphite_plate_mold", [
		Fluid.of("createmetallurgy:molten_gold", 90),
		"#forge:plates"
	]).processingTime(60).mold_consumed(true)

	// 铁轨
	create.mixing(Fluid.of("createmetallurgy:molten_iron", 30), [
		"minecraft:rail"
	]).heatLevel("melt")

	// 激活铁轨
	create.mixing(Fluid.of("createmetallurgy:molten_iron", 90), [
		"minecraft:activator_rail"
	]).heatLevel("melt")

	// 探测铁轨
	create.mixing(Fluid.of("createmetallurgy:molten_iron", 30), [
		"minecraft:detector_rail"
	]).heatLevel("melt")

	// 动力铁轨
	create.mixing(Fluid.of("createmetallurgy:molten_gold", 30), [
		"minecraft:powered_rail"
	]).heatLevel("melt")

	// 控制铁轨
	create.mixing(Fluid.of("createmetallurgy:molten_gold", 30), [
		"create:controller_rail"
	]).heatLevel("melt")

	// 熔融
	let meltingRecipes = [
		// 铸铁
		["new_create:molten_cast_iron", "#forge:ingots/cast_iron"],
		// 安山合金
		["new_create:molten_andesite_alloy", "new_create:andesite_compound"]
	]
	meltingRecipes.forEach(([fluid, input]) => {
		create.mixing(Fluid.of(fluid, 90), [input])
			.heatLevel("melt")
	})

	createmetallurgy.casting_in_basin("create:andesite_casing", [
		Fluid.of("new_create:molten_andesite_alloy", 90),
		"#minecraft:planks"
	]).processingTime(60).mold_consumed(true)

	// 铸铁
	create.mixing(Fluid.of("new_create:molten_cast_iron", 90), [
		"#forge:ingots/iron",
		"#forge:coal"
	]).heatLevel("melt")

	// 批量
	let moltenRecipes_1 = [
		[["new_create:cast_iron_ingot", "new_create:cast_iron_block"], "new_create:molten_cast_iron"],
		[["create:andesite_alloy", "create:andesite_alloy_block"], "new_create:molten_andesite_alloy"]
	]
	moltenRecipes_1.forEach(([[ingot, block], fluid]) => {
		// Ingot
		createmetallurgy.casting_in_table(ingot, [
			Fluid.of(fluid, 90),
			"createmetallurgy:graphite_ingot_mold"
		]).processingTime(60).mold_consumed(false)

		// Block
		createmetallurgy.casting_in_basin(block, [
			Fluid.of(fluid, 810)
		]).processingTime(60).mold_consumed(false)
	})

	// 合金搅拌
	let alloyRecipes = [
		// 青铜
		["new_create:molten_bronze", ["createmetallurgy:molten_copper", "new_create:molten_tin"]],
		// 黄铜
		["createmetallurgy:molten_brass", ["createmetallurgy:molten_zinc", "createmetallurgy:molten_copper"]]
	]
	alloyRecipes.forEach(([output, [input_1, input_2]]) => {
		createmetallurgy.alloying(Fluid.of(output, 10), [
			Fluid.of(input_1, 5),
			Fluid.of(input_2, 5)
		]).heatRequirement(heatLevel["heated"]).processingTime(10)
	})
})