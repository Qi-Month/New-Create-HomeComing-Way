let key = Text.translate('scheme.nc.structure')
BlockEvents.rightClicked('minecraft:blast_furnace', (event) => {
	const { block, server, player } = event
	let scheme = [
		[1, 0, 0], [-1, 0, 0],
		[-1, 0, -1], [1, 0, -1],
		[0, 0, -2],
		// 
		[0, 1, 0], [0, 1, -1]
	]
	let x, y, z
	for ([x, y, z] of scheme) {
		if (block.offset(x, y, z).id != 'minecraft:stone_bricks' && !player.shiftKeyDown) {
			server.tell(key)
			event.cancel()
			return
		}
	}
})