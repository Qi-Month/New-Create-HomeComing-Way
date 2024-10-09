ServerEvents.recipes((event) => {
	let { create, minecraft, kubejs } = event.recipes

	// 玻璃板
	event.forEachRecipe({
		type: "minecraft:crafting_shaped",
		output: "#forge:glass_panes",
		input: "#forge:glass",
	}, (recipes) => {
		let outputItem = recipes.getOriginalRecipeResult().getId()
		let inputItem = recipes.getOriginalRecipeIngredients()[0].getItemIds()[0]

		minecraft.stonecutting(Item.of(outputItem, 4), inputItem)
	})

	// 木板
	event.forEachRecipe({
		type: "minecraft:crafting_shapeless",
		output: "#minecraft:planks",
		input: "#minecraft:logs",
	}, (recipes) => {
		let outputItem = recipes.getOriginalRecipeResult().getId()
		let inputItem = recipes.getOriginalRecipeIngredients()[0].getItemIds()[0]

		event.custom({
			"type": "farmersdelight:cutting",
			"ingredients": [{ "item": inputItem }],
			"result": [
				{ "item": outputItem, "count": 2, "chance": 1.0 },
				{ "item": outputItem, "count": 1, "chance": 0.3 }
			],
			"tool": {
				"type": "farmersdelight:tool_action",
				"action": "axe_dig"
			}
		})

		minecraft.stonecutting(Item.of(outputItem, 4), inputItem)
	})

	// 台阶木板
	event.forEachRecipe({
		type: "crafting_shaped",
		output: "#minecraft:slabs"
	}, (recipes) => {
		let slab_id = recipes.getOriginalRecipeResult().getId()
		let plank_id = recipes.getOriginalRecipeIngredients()[0].getItemIds()[0]
		kubejs.shaped(plank_id, [
			"S",
			"S"
		], {
			S: slab_id
		})
	})
})