StartupEvents.registry("item", (event) => {
	const MODID = "new_create:"
	let Food = [
		["chaochi", "uncommon", false, 3, 0.5], // 炒祺
	]
	Food.forEach(([name, rarity, glow, hunger, saturation]) => {
		event.create(MODID + name)
			.rarity(rarity)
			.glow(glow)
			.food((food) => {
				food.hunger(hunger)
				food.saturation(saturation)
			})
			.tag(MODID + "items")
			.tag(MODID + "food")
	})

	// 甘蔗
	event.create("minecraft:sugar_cane")
		.texture("minecraft:item/sugar_cane")
		.food((food) => {
			food.hunger(2)
			food.saturation(0.5)
			food.alwaysEdible(true)
			food.eaten((event) => {
				const { player } = event
				player.give("new_create:bagasse")
				player.give("new_create:sugar_cane_skin")
			})
		})
		.tag(MODID + "items")
		.tag(MODID + "food")
})