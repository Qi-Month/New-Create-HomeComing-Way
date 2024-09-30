StartupEvents.registry("item", (event) => {
	// 藻球
	event.create(`${global.namespace}volvox_ball`)
		.texture(`${global.namespace}item/food/volvox_ball`)
		.food((food) => {
			food.hunger(3)
			food.saturation(0.6)
		})
})