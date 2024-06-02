BlockEvents.rightClicked(e => {
	const { player, block, item } = e

	// Fire!!!!!😡😡😡😡
	let RightClickEvents = (BlockId, BlockSet) => {
		if (player.mainHandItem == 'new_create:tinder' &&
			block.id == BlockId) {
			block.set(BlockSet)
			item.damageValue += 1
		}
	}
	RightClickEvents('new_create:log_pile', 'minecraft:fire')
	RightClickEvents('minecraft:campfire', 'minecraft:campfire', { lit: true })
	RightClickEvents('minecraft:soul_campfire', 'minecraft:soul_campfire', { lit: true })
})