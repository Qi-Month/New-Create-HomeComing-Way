ServerEvents.recipes(event => {
	let logIDs = Ingredient.of('#minecraft:logs').getItemIds()
	let Recipes = logIDs.map(logID => {
		let [namespace, item] = logID.split(':')
		let strippedLogID = `${namespace}:stripped_${item}`
		return {
			type: "farmersdelight:cutting",
			ingredients: [{ item: logID }],
			result: [
				{ item: strippedLogID },
				{ item: "farmersdelight:tree_bark" }
			],
			tool: {
				type: "farmersdelight:tool_action",
				action: "pickaxe_dig"
			}
		}
	})
	Recipes.forEach(recipe => event.custom(recipe))
})