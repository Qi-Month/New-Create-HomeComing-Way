ServerEvents.recipes((event) => {
	const {
		create,
		createmetallurgy,
		create_bic_bit,
		create_new_age,
		createaddition,
		createdieselgenerators,
		createoreexcavation,
		create_mechanical_extruder,
		kubejs,
		thermal,
		immersiveengineering
	} = event.recipes

	// 打磨石板
	create.sandpaper_polishing('new_create:stone_sheet', [
		'new_create:unpolished_stone_sheet'
	])
	create.sandpaper_polishing('new_create:deepslate_stone_sheet', [
		'new_create:unpolished_deepslate_stone_sheet'
	])

	// 石板
	kubejs.shapeless('new_create:unpolished_stone_sheet', [
		'#forge:cobblestone/normal',
		'#new_create:hammer'
	]).damageIngredient('#new_create:hammer')

	kubejs.shapeless('new_create:unpolished_deepslate_stone_sheet', [
		'#forge:cobblestone/deepslate',
		'#new_create:hammer'
	]).damageIngredient('#new_create:hammer')

	// 晾干网
	kubejs.shaped('new_create:drying_web', [
		'HGH',
		'GGG',
		'HGH'
	], {
		H: 'new_create:hay',
		G: 'new_create:grass_string'
	})

	// 晾干架
	kubejs.shaped('youkaishomecoming:drying_rack', [
		'PRP',
		'RDR',
		'PRP'
	], {
		P: '#minecraft:planks',
		R: '#forge:rods/wooden',
		D: 'new_create:drying_web'
	}).id('youkaishomecoming:drying_rack_from_bamboo_block_stonecutting')

	// 干草
	event.custom({
		"type": "youkaishomecoming:drying_rack",
		"category": "misc",
		"cookingtime": 200,
		"experience": 0.0,
		"ingredient": {
			"item": "new_create:grass_fiber"
		},
		"result": "new_create:hay"
	})
})