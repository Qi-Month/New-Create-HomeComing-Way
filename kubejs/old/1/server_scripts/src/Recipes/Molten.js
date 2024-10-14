ServerEvents.recipes((event) => {
	const { create } = event.recipes
	// 铸模声明
	const CAST = {
		ingot: 'createmetallurgy:graphite_ingot_mold',
		nugget: 'createmetallurgy:graphite_nugget_mold',
		plate: 'createmetallurgy:graphite_plate_mold'
	}

	// 铸模
	let castRecipes = [
		// 空
		['minecraft:air', 'createmetallurgy:graphite_blank_mold'],
		// 锭
		['forge:ingots', 'createmetallurgy:graphite_ingot_mold'],
		// 板
		['forge:plates', 'createmetallurgy:graphite_plate_mold'],
		// 粒
		['forge:nuggets', 'createmetallurgy:graphite_nugget_mold']
	]
	castRecipes.forEach(([tag, results]) => {
		event.custom({
			"type": "createmetallurgy:casting_in_table",
			"ingredients": [
				{ "fluid": "createmetallurgy:molten_gold", "amount": 90 },
				{ "tag": tag },
			],
			"results": [{ "item": results, }],
			"processingTime": 90
		})
	})

	// 浇筑台
	let tableRecipes = [
		// 铁锭
		['createmetallurgy:molten_iron', 90, 'ingot', 'minecraft:iron_ingot', 90],
		// 黄铜
		['createmetallurgy:molten_brass', 90, 'ingot', 'create:brass_ingot', 90],
		// 金板修复
		['createmetallurgy:molten_gold', 90, 'plate', 'create:golden_sheet', 80],
		// 青铜
		['new_create:molten_bronze', 90, 'ingot', 'thermal:bronze_ingot', 90],
		// 铸铁
		['new_create:molten_cast_iron', 90, 'ingot', 'new_create:cast_iron_ingot', 90]
	]
	tableRecipes.forEach(([fluid, amount, mold, results, time]) => {
		event.custom({
			"type": "createmetallurgy:casting_in_table",
			"ingredients": [
				{ "fluid": fluid, "amount": amount },
				{ "item": CAST[mold] },
			],
			"results": [{ "item": results, }],
			"processingTime": time
		})
	})

	// 浇筑盆
	let basinRecipes = [
		// 玻璃
		['new_create:glass', 810, 'minecraft:glass', 180],
		// 黑曜石
		['new_create:obsidian', 810, 'minecraft:obsidian', 180],
		// 青铜
		['new_create:molten_bronze', 810, 'thermal:bronze_block', 180],
		// 铸铁
		['new_create:molten_cast_iron', 810, 'new_create:cast_iron_block', 180]
	]
	basinRecipes.forEach(([fluid, amount, results, time]) => {
		event.custom({
			"type": "createmetallurgy:casting_in_basin",
			"ingredients": [{ "fluid": fluid, "amount": amount }],
			"results": [{ "item": results }],
			"processingTime": time
		})
	})

	// 融化
	let meltRecipes = [
		// 铸模
		['createmetallurgy:molten_gold', 90, '#forge:graphite_molds'],
		// 普通铁轨
		['createmetallurgy:molten_iron', 30, 'minecraft:rail'],
		// 侦查铁轨
		['createmetallurgy:molten_iron', 30, 'minecraft:detector_rail'],
		// 激活铁轨
		['createmetallurgy:molten_iron', 90, 'minecraft:activator_rail'],
		// 充能铁轨
		['createmetallurgy:molten_gold', 30, 'minecraft:powered_rail'],
		// 控制铁轨
		['createmetallurgy:molten_gold', 90, 'create:controller_rail'],
		// 金
		['createmetallurgy:molten_gold', 120, 'minecraft:raw_gold'],
		// 铁
		['createmetallurgy:molten_iron', 90, '3x create:crushed_raw_iron'],
		// 铜
		['createmetallurgy:molten_copper', 120, '#forge:raw_materials/copper'],
		// 锌
		['createmetallurgy:molten_zinc', 90, '3x create:crushed_raw_zinc'],
		// 锡
		['new_create:molten_tin', 120, '#forge:raw_materials/tin'],
		// 铸铁
		['new_create:molten_cast_iron', 90, '#forge:ingots/cast_iron']
	]
	meltRecipes.forEach(([fluid, amount, input]) => {
		create.mixing(Fluid.of(fluid, amount), [
			input
		]).heatLevel('melt')
	})

	// 黄铜
	create.mixing(Fluid.of('createmetallurgy:molten_brass', 6), [
		Fluid.of('createmetallurgy:molten_zinc', 3),
		Fluid.of('new_create:molten_bronze', 3)
	]).heated()

	// 青铜
	create.mixing(Fluid.of('new_create:molten_bronze', 6), [
		Fluid.of('new_create:molten_tin', 3),
		Fluid.of('createmetallurgy:molten_copper', 3)
	]).heated()
})