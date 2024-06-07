ServerEvents.recipes(e => {
	// 模具
	const cast = {
		ingot: 'createmetallurgy:graphite_ingot_mold',
		nugget: 'createmetallurgy:graphite_nugget_mold',
		plate: 'createmetallurgy:graphite_plate_mold'
	}
	// 浇筑台
	let tableRecipes = [
		// 铁锭
		['createmetallurgy:molten_iron', 90, 'ingot', 'minecraft:iron_ingot', 80]
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
})