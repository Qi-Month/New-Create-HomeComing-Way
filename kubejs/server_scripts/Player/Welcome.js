PlayerEvents.loggedIn((event) => {
	let { player } = event
	player.tell(Text.translate("message.new_create.player.welcome"))
	// player.tell(Text.translate("message.new_create.player.welcome", [player.username]))
})