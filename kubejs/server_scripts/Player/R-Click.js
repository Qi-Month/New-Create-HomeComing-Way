ItemEvents.rightClicked((event) => {
	let { player, item } = event

	if (player.mainHandItem === "new_create:transition_stone" && player.crouching) {
		item.shrink(1)
		player.runCommandSilent("execute in minecraft:overworld run tp ~ 85 ~")
		player.potionEffects.add("minecraft:resistance", 10, 254)
	}
})