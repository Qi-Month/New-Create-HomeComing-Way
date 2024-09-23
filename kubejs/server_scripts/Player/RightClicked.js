/*
ItemEvents.rightClicked((event) => {
	let { player, level, item } = event
	
	let initialItems = [

	]
	initialItems.forEach((item) => {
		if (player.mainHandItem === "minecraft:stone") {
			player.give(item)
			// event.cancel()
			event.item.shrink(1)
		}
	})
})
*/