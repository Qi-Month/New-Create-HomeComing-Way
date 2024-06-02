LootJS.modifiers(loots => {
	const All = Ingredient.all
	// 删除铁傀儡掉落铁锭
	loots.addEntityLootModifier('minecraft:iron_golem')
		.removeLoot(All)
		.addLoot('2x minecraft:apple')

	// 删除实体战利品
	let EntityLoots = [
		'minecraft:iron_ingot',
		'minecraft:copper_ingot'
	]
	EntityLoots.forEach(Loots => {
		loots.addLootTypeModifier(LootType.ENTITY)
			.removeLoot(Loots)
	})
})