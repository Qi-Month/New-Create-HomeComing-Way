ItemEvents.foodEaten("new_create:balloon_mushroom_slurry_bucket", (event) => {
	let { player } = event
	if (player.foodEaten) {
		player.give("minecraft:bucket")
		// player.effect("minecraft:speed", 400, 1)
	}
})