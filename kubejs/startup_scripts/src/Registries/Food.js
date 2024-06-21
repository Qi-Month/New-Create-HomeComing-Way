StartupEvents.registry('item', (event) => {
	const MODID = 'new_create:'
	let Food = [
		['chaochi', 'uncommon', false, 3, 0.5], // 炒祺
	]
	Food.forEach(([name, rarity, glow, hunger, saturation]) => {
		event.create(MODID + name)
			.rarity(rarity)
			.glow(glow)
			.tag(MODID + 'items')
			.tag(MODID + 'food')
			.food((food) => {
				food.hunger(hunger)
				food.saturation(saturation)
			})
	})
})

// Modify
ItemEvents.modification(event => {
	event.modify(MODID + 'chaochi', (item) => {
		item.foodProperties = food => {
			food.alwaysEdible(true)
			food.fastToEat(true)
		}
	})
})