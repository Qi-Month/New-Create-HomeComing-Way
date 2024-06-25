BlockEvents.rightClicked((event) => {
	const { player, block, item } = event

	// Fire!!!😡😡😡😡
	let RightClickEvents = (BlockId, BlockSet) => {
		if (player.mainHandItem == 'new_create:tinder' &&
			block.id == BlockId) {
			block.set(BlockSet)
			item.hurtAndBreak(1, event.player, (entity) => entity.broadcastBreakEvent(event.hand))
		}
	}
	RightClickEvents('new_create:log_pile', 'minecraft:fire')
	RightClickEvents('minecraft:campfire', 'minecraft:campfire', { lit: true })
	RightClickEvents('minecraft:soul_campfire', 'minecraft:soul_campfire', { lit: true })
	RightClickEvents('minecraft:coal_block', 'new_create:heat_coal_block')
})