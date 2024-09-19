PlayerEvents.loggedIn((event) => {
	const { player } = event
	// player.tell(Text.translate("message.new_create.player.welcome", [player.username]))
	player.tell(Component.translate("message.new_create.player.welcome"))
})