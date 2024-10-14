BlockEvents.modification((event) => {
	// Fix
	event.modify("melter:melter", (modify) => {
		modify.destroySpeed = 1
	})
})