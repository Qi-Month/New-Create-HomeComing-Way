PlayerEvents.loggedIn((event) => {
	const { player } = event
	
	player.tell(Text.translate('message.new_create.welcome', [player.username]))
})