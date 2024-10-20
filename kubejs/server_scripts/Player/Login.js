PlayerEvents.loggedIn((event) => {
	let { player } = event

	// 欢迎
	player.tell(Text.translate("message.new_create.player.welcome"))

	// 修改规则
	player.runCommandSilent("gamerule artifacts.diggingClaws.toolTier 3")

	// 如果玩家不是debug用户, 则关闭无限水
	global.debugUserName.forEach((userName) => {
		if (player.username !== userName) {
			player.runCommandSilent("gamerule waterSourceConversion true")
		} else {
			player.runCommandSilent("gamerule waterSourceConversion false")
		}
	})
})