/*
let Timeout = false
BlockEvents.leftClicked((event) => {
	const { player, block, server } = event

	// 敲击燧石并在聊天栏发送信息(Key)
	if (Timeout) {
		server.tell(Text.translate("info.nc.flint"))
		return
	}

	if (player.mainHandItem.id !== "minecraft:flint") {
		return
	}

	// 获取Tag下的全部id
	Ingredient.of("#forge:stone")
		.getItemIds()
		.some((StoneId) => {
			if (block.id === StoneId) {
				handleFlintKnapping(event)
				return true
			}
		})
})

// 生成产物燧石碎片
function handleFlintKnapping(event) {
	const { block, item } = event
	let Random = Math.floor(Math.random() * 4) + 1
	let Entity = block.createEntity("item")

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
*/