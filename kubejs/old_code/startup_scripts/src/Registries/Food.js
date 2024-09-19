StartupEvents.registry('item', (event) => {
	const namespace = 'new_create:'
	let Food = [
		['chaochi', 'uncommon', false, 3, 0.5], // 炒祺
	]
	Food.forEach(([name, rarity, glow, hunger, saturation]) => {
		event.create(namespace + name)
			.rarity(rarity)
			.glow(glow)
			.tag(namespace + 'items')
			.tag(namespace + 'food')
			.food((food) => {
				food.hunger(hunger)
				food.saturation(saturation)
			})
	})
})

// Modify
ItemEvents.modification((event) => {
	event.modify(namespace + 'chaochi', (item) => {
		item.foodProperties = (food) => {
			food.alwaysEdible(true)
			food.fastToEat(true)
		}
	})
})