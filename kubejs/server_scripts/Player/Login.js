PlayerEvents.loggedIn((event) => {
	let { player } = event
	
	// 欢迎
	player.tell(Text.translate("message.new_create.player.welcome"))

	// 修改规则
	player.runCommandSilent("gamerule artifacts.diggingClaws.toolTier 3")
	// player.runCommandSilent("gamerule waterSourceConversion false")
})