ServerEvents.recipes((event) => {
	let { custommachinery } = event.recipes

	let furnaceRecipes = [
		// 铜锭
		["minecraft:copper_ingot", "forge:ores/copper"],
		["minecraft:copper_ingot", "forge:raw_materials/copper"],
		// 铁锭
		["minecraft:iron_ingot", "forge:ores/iron"],
		["minecraft:iron_ingot", "forge:raw_materials/iron"],
		// 金锭
		["minecraft:gold_ingot", "forge:ores/gold"],
		["minecraft:gold_ingot", "forge:raw_materials/gold"],
		// 热煤块
		["new_create:heat_coal_block", "forge:storage_blocks/coal"]
	]
	furnaceRecipes.forEach(([output, input]) => {
		custommachinery.custom_machine("new_create:soil_blast_furnace", 200)
			.produceItem(output)
			.requireItemTag(input)
			.requireStructure([
				["L"],
				["m"]
			], {
				L: "minecraft:lava"
			})
	})
})