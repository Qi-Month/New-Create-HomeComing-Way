ItemEvents.modification((event) => {
	event.modify("edenring:volvox_block_dense", (modify) => {
		modify.fireResistant = true
	})

	event.modify("edenring:volvox_block", (modify) => {
		modify.fireResistant = true
	})
})