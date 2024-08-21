ItemEvents.modification((event) => {
	/*
	event.modify("minecraft:sugar_cane", (modify) => {
		modify.foodProperties = (food) => {
			food.hunger(2)
			food.saturation(2)
			food.eaten((event) => {
				const { player } = event
				player.give("new_create:bagasse")
				player.give("new_create:sugar_cane_skin")
			})
		}
	})
	*/

	event.modify("new_create:chaochi", (item) => {
		item.foodProperties = (food) => {
			food.alwaysEdible(true)
			food.fastToEat(true)
		}
	})
})