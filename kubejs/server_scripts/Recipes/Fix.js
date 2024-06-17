ServerEvents.recipes((event) => {
	const {
		create,
		create_mechanical_extruder,
		immersiveengineering,
		kubejs,
		melter,
		minecraft,
		thermal
	} = event.recipes

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


	// Fix Thermal tin_block <=> tin_ingot crafting
	kubejs.shapeless('9x thermal:tin_ingot', [
		'thermal:tin_block'
	])

	// Fix nuggets <=> ingots crafting
	fixRecipes('crafting_shapeless', '#forge:nuggets')

	// Fix ingots <=> block crafting
	fixRecipes('crafting_shapeless', '#forge:ingots', '#forge:storage_blocks')

	// Fixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Recipes
	function fixRecipes(Type, Output, Input) {
		if (Input == null) {
			return event.forEachRecipe({
				type: Type,
				output: Output
			}, Recipes => {
				var Output = Recipes.getOriginalRecipeResult().getId()
				var Input = Recipes.getOriginalRecipeIngredients()[0].getItemIds()[0]
				kubejs.shapeless(Input, [`9x ${Output}`])
			})
		} else return event.forEachRecipe({
			type: Type,
			output: Output,
			input: Input
		}, Recipes => {
			var Output = Recipes.getOriginalRecipeResult().getId()
			var Input = Recipes.getOriginalRecipeIngredients()[0].getItemIds()[0]
			kubejs.shapeless(`9x ${Output}`, [`${Input}`])
		})
	}

	// logs => 6x planks for StoneCutting
	// ☝亖人栗子有中文不用放洋屁☝🤣
	event.forEachRecipe({
		type: 'minecraft:crafting_shapeless',
		output: '#minecraft:planks',
		input: '#minecraft:logs'
	}, Recipes => {
		var Output = Recipes.getOriginalRecipeResult().getId()
		var Input = Recipes.getOriginalRecipeIngredients()[0].getItemIds()[0]
		minecraft.stonecutting(`6x ${Output}`, [`${Input}`])
	})

	// 粉末处理(高炉)*这个毕竟是遍历的产物,多多少少肯定会有一点冲突的*
	event.forEachRecipe({
		type: 'minecraft:blasting',
		output: '#forge:ingots',
		input: '#forge:dusts'
	}, Recipes => {
		let Output = Recipes.getOriginalRecipeResult().getId()
		let Input = Recipes.getOriginalRecipeIngredients()[0].getItemIds()[0]
		minecraft.blasting(Output, [`${Input}`])
	})

	/*
	event.forEachRecipe({
		type: 'create:compacting',
		output: '#forge:dusts',
		input: '#create:crushed_raw_materials'
	}, Recipes => {
		let Output = Recipes.getOriginalRecipeResult().getId()
		let Input = Recipes.getOriginalRecipeIngredients()[0].getItemIds()[0]
		create.compacting(Output, [`${Input}`])
	})

	event.forEachRecipe({
		type: 'create:compacting',
		output: '#forge:dusts',
		input: '#forge:ores'
	}, Recipes => {
		let Output = Recipes.getOriginalRecipeResult().getId()
		let Input = Recipes.getOriginalRecipeIngredients()[0].getItemIds()[0]
		create.compacting(Output, [`${Input}`])
	})
	*/
})