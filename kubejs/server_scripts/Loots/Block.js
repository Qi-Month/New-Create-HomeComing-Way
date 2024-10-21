LootJS.modifiers((event) => {
	let all = Ingredient.all

	// 黑土
	event.addBlockLootModifier("minecraft:dirt")
		.addAlternativesLoot(
			LootEntry.of("new_create:black_dirt")
				.when((loots) => loots.randomChance(0.35))
		)
})