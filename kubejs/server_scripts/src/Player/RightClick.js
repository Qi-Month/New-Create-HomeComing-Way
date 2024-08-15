BlockEvents.rightClicked((event) => {
	const { player, block, item } = event

	// Fire!!!😡😡😡😡
	let blockRightClick = [
		['new_create:log_pile', 'minecraft:fire'],
		['minecraft:campfire', 'minecraft:campfire', { lit: true }],
		['minecraft:soul_campfire', 'minecraft:soul_campfire', { lit: true }],
	]
	blockRightClick.forEach(([blockID, blockSet]) => {
		if (player.mainHandItem === 'new_create:tinder' && block.id === blockID) {
			block.set(blockSet)
			if (item.getDamageValue() < item.getMaxDamage() - 1) {
				item.hurtAndBreak(1, player, (entity) => {
					return entity.broadcastBreakEvent(event.hand)
				})
			} else {
				item.count--
				player.broadcastBreakEvent(event.hand)
			}
		}
	})
})