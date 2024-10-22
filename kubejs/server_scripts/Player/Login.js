PlayerEvents.loggedIn((event) => {
	let { player } = event

	// 欢迎
	player.tell(Text.translate("message.new_create.player.welcome"))

	// 修改规则
	player.runCommandSilent("gamerule artifacts.diggingClaws.toolTier 3")

	global.debugUserName.forEach((userName) => {
		if (player.username === userName) {
			// 规则
			player.runCommandSilent("gamerule waterSourceConversion false")
			// Dev发言(一个真的是无聊到不能再无聊的东西)
			player.paint({
				devTooltip: {
					type: "text",
					x: 11,
					y: "$screenH - 30",
					alignX: "left",
					text: " ● 开发中画面, 实际内容请以正式上线为准",
					scale: 1.0,
				}
			})
		} else {
			player.runCommandSilent("gamerule waterSourceConversion true")
		}
	})
})