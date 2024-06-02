let Timeout = false

BlockEvents.leftClicked(event => {
	const { player, block, server } = event

	if (Timeout) {
		server.tell(Text.translate('info.nc.flint'))
		return
	}

	if (player.mainHandItem.id !== 'minecraft:flint') return

	Ingredient.of('#forge:stone').getItemIds().some(stoneId => {
		if (block.id === stoneId) {
			handleFlintKnapping(event)
			return true
		}
	})
})

function handleFlintKnapping(event) {
	const { player, block, item, server } = event
	let Random = Math.floor(Math.random() * 4) + 1
	let Entity = block.createEntity('item')

	Timeout = true
	setTimeout(() => {
		item.count--
		Entity.item = `${Random}x new_create:flint_knapp`
		Entity.x += 0.5
		Entity.y += 1
		Entity.z += 0.5
		Entity.spawn()
		Timeout = false
	}, 2000)
}
