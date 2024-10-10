BlockEvents.modification((event) => {
	event.modify("edenring:volvox_block", (modify) => {
		modify.requiresTool = true
	})
	event.modify("edenring:volvox_block_dense", (modify) => {
		modify.requiresTool = true
	})
})