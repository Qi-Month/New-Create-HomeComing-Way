LootJS.modifiers((event) => {
	let all = Ingredient.all
	// 土豆
	event.addBlockLootModifier("minecraft:potato")
		.removeLoot("minecraft:poisonous_potato")

	// 砂砾
	event.addBlockLootModifier("minecraft:gravel")
		.removeLoot(all)
		.addAlternativesLoot(
			LootEntry.of("new_create:flint_knapp")
				.when((loots) => loots.randomChance(0.3)),
			LootEntry.of("minecraft:flint")
				.when((loots) => loots.randomChance(0.15)),
			LootEntry.of("minecraft:gravel")
				.when((loots) => loots.randomChance(1))
		)

	// 草丛掉杂草
	event.addBlockLootModifier("minecraft:grass")
		.addAlternativesLoot(
			LootEntry.of("new_create:grass_fiber")
				.when((loots) => loots.randomChance(0.6))
		)

	// 纯净石英
	event.addBlockLootModifier("#forge:sand")
		.addAlternativesLoot(
			LootEntry.of("new_create:pure_quartz")
				.when((loots) => loots.randomChance(0.01))
		)

	// 铁矿掉粉碎铁矿石
	event.addBlockLootModifier("#forge:ores/iron")
		.removeLoot(all)
		.addLoot("2x create:crushed_raw_iron")
		.addAlternativesLoot(
			LootEntry.of("create:crushed_raw_iron")
				.when((loots) => loots.randomChance(0.1))
		)

	// 所有矿石掉落矿渣
	event.addBlockLootModifier("#forge:ores")
		.addAlternativesLoot(
			LootEntry.of("immersiveengineering:slag")
				.when((loots) => loots.randomChance(0.35)),
			LootEntry.of("2x immersiveengineering:slag")
				.when((loots) => loots.randomChance(0.1))
		)

	// 锌矿掉落粉碎锌矿石
	event.addBlockLootModifier("#forge:ores/zinc")
		.removeLoot("create:raw_zinc")
		.addLoot("2x create:crushed_raw_zinc")

	// 篝火
	event.addBlockLootModifier("minecraft:campfire")
		.removeLoot(all)
		.addAlternativesLoot(
			LootEntry.of("minecraft:campfire")
				.when((loots) => loots.randomChance(0.5)),
			LootEntry.of("minecraft:charcoal")
				.when((loots) => loots.randomChance(1))
		)

	// 灵魂篝火
	event.addBlockLootModifier("minecraft:soul_campfire")
		.removeLoot(all)
		.addAlternativesLoot(
			LootEntry.of("minecraft:soul_campfire")
				.when((loots) => loots.randomChance(0.5)),
			LootEntry.of("minecraft:soul_soil")
				.when((loots) => loots.randomChance(1)),
			LootEntry.of("minecraft:soul_sand")
				.when((loots) => loots.randomChance(1))
		)

	// 树叶
	event.addBlockLootModifier("#minecraft:leavesf").addAlternativesLoot(
		LootEntry.of("minecraft:stick")
			.when((loots) => loots.randomChance(0.3)),
		LootEntry.of("minecraft:apple")
			.when((loots) => loots.randomChance(0.2))
	)

	// 热煤块
	event.addBlockLootModifier("new_create:heat_coal_block")
		.removeLoot(all)
		.addLoot("minecraft:coal_block")
	/*
		// 石墨
		let graphiteaa = [
			"new_create:graphite_ore",
			"new_create:deepslate_graphite_ore"
		]
		graphiteaa.forEach((ores) => {
			event.addBlockLootModifier(ores)
				.removeLoot(all)
				.addLoot("new_create:graphite")
	
			event.addBlockLootModifier(ores)
				.randomChanceWithEnchantment("minecraft:silk_touch", [1])
				.removeLoot(all)
				.addLoot(ores)
	
			event.addBlockLootModifier(ores)
				.randomChanceWithEnchantment("minecraft:fortune", [0, 0.25, 0.5, 1])
				.removeLoot(all)
				.addLoot("3x new_create:graphite")
		})
	*/
})