ItemEvents.modification((event) => {
	// 气球菇浆液桶
	event.modify("new_create:balloon_mushroom_slurry_bucket", (modify) => {
		modify.getUseAnimation("drink")
		modify.foodProperties = (food) => {
			food.hunger(8)
			food.saturation(1)
			food.alwaysEdible()
			// food.effect("minecraft:speed", 400, 1)
			// food.effect("minecraft:jump_boost", 400, 1)
		}
	})
})