ServerEvents.recipes((event) => {
	// 输出
	let output = [
		'#forge:tools/wooden',
		'#forge:graphite_molds',
		'pipez:filter_destination_tool',
		"createmetallurgy:mechanical_belt_grinder",
		'#alltheores:ore_hammers',
		'#create:metal_cogwheel',
		'#create:metal_large_cogwheel',
		'farmersdelight:tree_bark',
		'#minecraft:planks',
		'#minecraft:spruce_logs',
		"refinedstorage:cover",
		"refinedstorage:hollow_cover"
	]
	output.forEach((item) => {
		event.remove({ output: item })
	})

	// 输入
	let input = [
		'#alltheores:ore_hammers'
	]
	input.forEach((item) => {
		event.remove({ input: item })
	})

	// 配方类型
	let recipeType = [
		"createmetallurgy:alloying"
	]
	recipeType.forEach((type) => {
		event.remove({ type: type })
	})

	// ModRecipes
	let mod = [
		// 'mekanism'
	]
	mod.forEach((modid) => {
		event.remove({ mod: modid })
	})
})