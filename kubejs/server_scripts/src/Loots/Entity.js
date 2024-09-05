LootJS.modifiers((event) => {
	const All = Ingredient.all
	// 删除铁傀儡掉落铁锭
	event.addEntityLootModifier("minecraft:iron_golem")
		.removeLoot(All)
		.addLoot("2x minecraft:apple")

	// 删除实体战利品
	let EntityLoots = [
		"minecraft:iron_ingot",
		"minecraft:copper_ingot"
	]
	EntityLoots.forEach((Loots) => {
		event.addLootTypeModifier(LootType.ENTITY)
			.removeLoot(Loots)
	})
})