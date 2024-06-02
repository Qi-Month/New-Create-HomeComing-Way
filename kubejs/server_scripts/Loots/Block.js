LootJS.modifiers(loots => {
	let All = Ingredient.all
	// 土豆
	loots.addBlockLootModifier('minecraft:potato')
		.removeLoot('minecraft:poisonous_potato')

	// 砂砾
	loots.addBlockLootModifier('minecraft:gravel')
		.removeLoot(All)
		.addAlternativesLoot(
			LootEntry.of('new_create:flint_knapp')
				.when(loots => loots.randomChance(0.3)),
			LootEntry.of('minecraft:flint')
				.when(loots => loots.randomChance(0.15)),
			LootEntry.of('minecraft:gravel')
				.when(loots => loots.randomChance(1))
		)

	// 草丛掉杂草
	loots.addBlockLootModifier('minecraft:grass')
		.addAlternativesLoot(
			LootEntry.of('new_create:grass_fiber')
				.when(loots => loots.randomChance(0.6))
		)

	// 纯净石英
	loots.addBlockLootModifier('#forge:sand')
		.addAlternativesLoot(
			LootEntry.of('new_create:pure_quartz')
				.when(loots => loots.randomChance(0.01))
		)

	// 铁矿掉粉碎铁矿石
	loots.addBlockLootModifier('#forge:ores/iron')
		.removeLoot(All)
		.addLoot('2x create:crushed_raw_iron')
		.addAlternativesLoot(LootEntry.of('create:crushed_raw_iron')
			.when(loots => loots.randomChance(0.1))
		)

	// 所有矿石掉落矿渣
	loots.addBlockLootModifier('#forge:ores')
		.addAlternativesLoot(
			LootEntry.of('immersiveengineering:slag')
				.when(loots => loots.randomChance(0.35)),
			LootEntry.of('2x immersiveengineering:slag')
				.when(loots => loots.randomChance(0.1))
		)

	// 锌矿掉落粉碎锌矿石
	loots.addBlockLootModifier('#forge:ores/zinc')
		.removeLoot('create:raw_zinc')
		.addLoot('2x create:crushed_raw_zinc')

	// 篝火
	loots.addBlockLootModifier('minecraft:campfire')
		.removeLoot(All)
		.addAlternativesLoot(
			LootEntry.of('minecraft:campfire')
				.when(loots => loots.randomChance(0.5)),
			LootEntry.of('minecraft:charcoal')
				.when(loots => loots.randomChance(1))
		)

	// 灵魂篝火
	loots.addBlockLootModifier('minecraft:soul_campfire')
		.removeLoot(All)
		.addAlternativesLoot(
			LootEntry.of('minecraft:soul_campfire')
				.when(loots => loots.randomChance(0.5)),
			LootEntry.of('minecraft:soul_soil')
				.when(loots => loots.randomChance(1)),
			LootEntry.of('minecraft:soul_sand')
				.when(loots => loots.randomChance(1))
		)

	// 树叶
	loots.addBlockLootModifier('#minecraft:leavesf')
		.addAlternativesLoot(
			LootEntry.of('minecraft:stick')
				.when(loots => loots.randomChance(0.15)),
			LootEntry.of('minecraft:apple')
				.when(loots => loots.randomChance(0.2))
		)
})