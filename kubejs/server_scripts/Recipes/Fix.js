ServerEvents.recipes((event) => {
	let { kubejs, create, minecraft } = event.recipes

	// Glass
	event.forEachRecipe({
		type: "minecraft:crafting_shaped",
		output: "#forge:glass_panes",
		input: "#forge:glass",
	}, (recipes) => {
		let outputItem = recipes.getOriginalRecipeResult().getId()
		let inputItem = recipes.getOriginalRecipeIngredients()[0].getItemIds()[0]

		minecraft.stonecutting(Item.of(outputItem, 4), inputItem)
	})
})