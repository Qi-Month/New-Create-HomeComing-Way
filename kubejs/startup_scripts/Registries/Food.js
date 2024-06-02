StartupEvents.registry('item', e => {
	const ModID = 'new_create:'
	let Food = [
		['chaochi', 'uncommon', false, 3, 0.5], // 炒祺
	]
	Food.forEach(([Name, Rarity, Glow, Hunger, Saturation]) => {
		e.create(ModID + Name)
			.rarity(Rarity)
			.glow(Glow)
			.tag(ModID + 'items')
			.tag(ModID + 'food')
			.food(food => {
				food.hunger(Hunger)
				food.saturation(Saturation)
			})
	})
})

// Modify
ItemEvents.modification(e => {
	e.modify(ModID + 'chaochi', item => {
		item.foodProperties = food => {
			food.alwaysEdible(true)
			food.fastToEat(true)
		}
	})
})