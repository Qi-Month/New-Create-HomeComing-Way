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
})