ServerEvents.recipes((event) => {
	// 输出
	let output = [
		"#forge:tools",
		"#minecraft:planks",
		"farmersdelight:tree_bark"
	]
	output.forEach((item) => {
		event.remove({ output: item })
	})

	// 输入
	let input = [
		"#alltheores:ore_hammers"
	]
	input.forEach((item) => {
		event.remove({ input: item })
	})

	let recipeId = [
		"thermal:machines/crystallizer/crystallizer_amethyst_cluster",
		"create:tiled_glass_from_glass_colorless_stonecutting",
		"create:vertical_framed_glass_from_glass_colorless_stonecutting",
		"create:horizontal_framed_glass_from_glass_colorless_stonecutting",
		"create:framed_glass_from_glass_colorless_stonecutting"
	]
	recipeId.forEach((id) => {
		event.remove({ id: id })
	})

	// 配方类型
	let recipeType = [

	]
	recipeType.forEach((type) => {
		event.remove({ type: type })
	})

	// ModRecipes
	let mod = [

	]
	mod.forEach((namespace) => {
		event.remove({ mod: namespace })
	})

	// 玻璃板
	event.remove({ type: "minecraft:crafting_shaped", output: "#forge:glass_panes" })
})