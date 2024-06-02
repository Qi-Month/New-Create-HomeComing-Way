LootJS.modifiers(loots => {
	let ToolLoots = [
		// 圆石=>砂砾
		['#forge:cobblestone', '#new_create:hammer', 'minecraft:gravel', 0.5],
		// 石头=>砂砾
		['minecraft:stone', '#new_create:hammer', 'minecraft:gravel', 0.5],
		// 砂砾=>沙子
		['#forge:gravel', '#new_create:hammer', 'minecraft:sand', 0.5],
		// 砂石=>沙子
		['#forge:sandstone', '#new_create:hammer', 'minecraft:sand', 0.5],
		// 沙子=>尘土
		['#forge:sand', '#new_create:hammer', 'new_create:dust', 0.5],
		// 草=>杂草
		['minecraft:grass', '#forge:tools/knives', 'new_create:grass_fiber', 0.5]
	]
	ToolLoots.forEach(([Blocks, Tools, Loots, Chance]) => {
		loots.addBlockLootModifier(Blocks)
			.matchMainHand(Tools)
			.addAlternativesLoot(LootEntry.of(Loots)
				.when(loots => loots.randomChance(Chance)))
	})
})