PlayerEvents.loggedIn(e => {
	const { player } = e
	player.tell(Text.translate('message.new_create.welcome', [player.username]))
})