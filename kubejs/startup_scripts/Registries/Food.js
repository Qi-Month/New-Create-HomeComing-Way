StartupEvents.registry("item", (event) => {
	// 藻球
	event.create(`${global.namespace}volvox_ball`)
		.texture(`${global.namespace}item/food/volvox_ball`)
		.food((food) => {
			food.hunger(3)
			food.saturation(0.6)
		})

	/*
// 气球菇浆液桶
event.create(`${global.namespace}balloon_mushroom_slurry_bucket`)
	.food((food) => {
		food.hunger(4)
		food.saturation(0.8)
		food.effect("minecraft:speed", 400, 1)
		food.effect("minecraft:jump_boost", 400, 1)
		food.eaten((event) => {
			let { player } = event
			player.give("minecraft:bucket")
		})
	})
*/
})