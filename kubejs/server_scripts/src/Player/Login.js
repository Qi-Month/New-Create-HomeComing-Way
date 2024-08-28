PlayerEvents.loggedIn((event) => {
	const { player } = event
	
	// 欢迎
	// player.tell(Text.translate("message.new_create.welcome", [player.username]))
	player.tell(Text.translate("message.new_create.welcome"))
})