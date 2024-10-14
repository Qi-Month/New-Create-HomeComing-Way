ItemEvents.foodEaten("minecraft:sugar_cane", (event) => {
	const { player } = event
	if (player.foodEaten) {
		player.give("new_create:bagasse")
		player.give("new_create:sugar_cane_skin")
	}
})