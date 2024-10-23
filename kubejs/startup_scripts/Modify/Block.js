BlockEvents.modification((event) => {
	// 藻块
	event.modify("edenring:volvox_block", (modify) => {
		modify.requiresTool = true
	})
	event.modify("edenring:volvox_block_dense", (modify) => {
		modify.requiresTool = true
	})

	// 齿轮音效喵
	let cogwheelSoundType = [
		"steampowered:bronze_cogwheel",
		"steampowered:bronze_large_cogwheel",
		"steampowered:cast_iron_cogwheel",
		"steampowered:cast_iron_large_cogwheel",
		"steampowered:steel_cogwheel",
		"steampowered:steel_large_cogwheel",
	]
	cogwheelSoundType.forEach((id) => {
		event.modify(id, (modify) => {
			modify.soundType = SoundType.LANTERN
		})
	})
})