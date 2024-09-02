ItemEvents.modification((event) => {
	event.modify("new_create:chaochi", (item) => {
		item.foodProperties = (food) => {
			food.alwaysEdible(true)
			food.fastToEat(true)
		}
	})

	// 将甘蔗modify改为可以吃
	event.modify("minecraft:sugar_cane", (modify) => {
		modify.foodProperties = (food) => {
			food.hunger(2)
			food.saturation(2)
		}
	})
})