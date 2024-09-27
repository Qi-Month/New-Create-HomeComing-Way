ItemEvents.rightClicked((event) => {
	let { player, item } = event

	/*
	* 右键初始物品给予3把缺少耐久的钢斧, 还有一把耐久很低的钢镐
	* 如果不在指定群系的话额外给一个指南针
	*/
	let biomeGiveItem = [
		"edenring:mycotic_forest",
		"edenring:old_mycotic_forest"
	]
	biomeGiveItem.forEach((getBiome) => {
		if (player.mainHandItem === "new_create:initial_item_kit") {
			let biome = player.level.getBiome(player.blockPosition())
			if (biome.is(getBiome)) {
				player.give(Item.of("immersiveengineering:axe_steel", 3, "{Damage:578}"))
				player.give(Item.of("immersiveengineering:pickaxe_steel", "{Damage:636}"))
				item.shrink(1)
			} else {
				player.give(Item.of("naturescompass:naturescompass", 1))
				player.give(Item.of("immersiveengineering:axe_steel", 3, "{Damage:578}"))
				player.give(Item.of("immersiveengineering:pickaxe_steel", "{Damage:636}"))
				item.shrink(1)
			}
		}
	})
})