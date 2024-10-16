ItemEvents.rightClicked((event) => {
	let { player, item } = event

	/*
	* 右键初始物品给予一部分初始物品
	* 如果不在指定群系的话额外给一个指南针
	*/

	let biomeGroup = [
		"edenring:mycotic_forest",
		"edenring:old_mycotic_forest"
	]
	biomeGroup.forEach((biomeName) => {
		// 判断手上的物品并且需要潜行
		if (player.mainHandItem === "new_create:initial_item_kit" && player.crouching) {
			// 获取生物群系
			let biome = player.level.getBiome(player.blockPosition())
			// 判断是否为上方的群系, 如果是就只给予下方物品
			player.give(Item.of("immersiveengineering:axe_steel")
				.withCount(3)
				.withNBT("{Damage:578}")
			)

			player.give(Item.of("immersiveengineering:pickaxe_steel")
				.withCount(1)
				.withNBT("{Damage:636}")
			)

			player.give(Item.of("youkaishomecoming:red_velvet_cake_slice")
				.withName(Text.translate("custom.youkaishomecoming.red_velvet_cake_slice"))
				.withCount(5)
			)

			player.give(Item.of("youkaishomecoming:onigili")
				.withName(Text.translate("custom.youkaishomecoming.onigili"))
				.withCount(8)
			)

			player.give(Item.of("farmersdelight:iron_knife")
				.withCount(1)
			)

			player.give(Item.of("minecraft:sand")
				.withCount(4)
			)

			// 如果不在指定群系中
			if (!biome.is(biomeName)) {
				// 这里不是上面指定群系, 因此额外给个指南针
				player.give(Item.of("naturescompass:naturescompass")
					.withName(Text.translate("custom.naturescompass.naturescompass"))
					.withCount(1)
				)
			}
			// 删除手中的物品
			item.shrink(1)
		}
	})
})