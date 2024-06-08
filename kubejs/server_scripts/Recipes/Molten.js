ServerEvents.recipes(e => {
	const { create } = e.recipes
	// 铸模声明
	const cast = {
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
		e.custom({
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
		['createmetallurgy:molten_brass', 90, 'ingot', 'create:brass_ingot', 90]
	]
	tableRecipes.forEach(([fluid, amount, mold, results, time]) => {
		e.custom({
			"type": "createmetallurgy:casting_in_table",
			"ingredients": [
				{ "fluid": fluid, "amount": amount },
				{ "item": cast[mold] },
			],
			"results": [{ "item": results, }],
			"processingTime": time
		})
	})

	// 浇筑盆
	let basinRecipes = [

	]
	basinRecipes.forEach(([fluid, amount, results, time]) => {
		e.custom({
			"type": "createmetallurgy:casting_in_basin",
			"ingredients": [{ "fluid": fluid, "amount": amount }],
			"results": [{ "item": results }],
			"processingTime": time
		})
	})

	// 熔化
	let meltingRecipes = [
		// 铸模回收
		['forge:graphite_molds', 'createmetallurgy:molten_gold', 90, 'heated', 90]
	]
	meltingRecipes.forEach(([tag, fluid, amount, heatedType, time]) => {
		e.custom({
			"type": "createmetallurgy:melting",
			"ingredients": [{ "tag": tag }],
			"results": [{ "fluid": fluid, "amount": amount }],
			"heatRequirement": heatedType,
			"processingTime": time
		})
	})

	// 黄铜
	create.mixing(Fluid.of('createmetallurgy:molten_brass', 180), [
		Fluid.of('createmetallurgy:molten_zinc', 90),
		Fluid.of('new_create:molten_bronze', 90)
	]).heated().id('createmetallurgy:alloying/alloying_brass')

	// 铸模回收
	create.mixing(Fluid.of('createmetallurgy:molten_gold', 90), [
		'#forge:graphite_molds'
	])
})