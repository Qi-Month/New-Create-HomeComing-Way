PlayerEvents.loggedIn((event) => {
	let { player, server } = event

	// 欢迎
	server.tell(Text.translate("message.new_create.player.welcome"))

	// 修改规则
	player.runCommandSilent("gamerule artifacts.diggingClaws.toolTier 3")

	global.debugUserName.forEach((userName) => {
		if (player.username === userName) {
			// 无限水限制, 如果username符合开发者id就打开无限水, 否则关闭
			player.runCommandSilent("gamerule waterSourceConversion false")
		} else {
			player.runCommandSilent("gamerule waterSourceConversion true")
		}

		// Dev发言(一个真的是无聊到不能再无聊的东西)
		if (player.username === userName) {
			let devInfo = Text.translate("text.new_create.dev").getString()
			player.paint({
				devTooltip: {
					type: "text",
					x: 0,
					y: "$screenH - 30",
					alignX: "left",
					text: devInfo,
					scale: 0.9,
				}
			})
		} else {
			if (player.username !== userName) {
				let playerInfo = Text.translate("text.new_create.player").getString()
				player.paint({
					playerTooltip: {
						type: "text",
						x: 0,
						y: "$screenH - 40",
						alignX: "left",
						text: playerInfo,
						scale: 0.9,
					}
				})
			}
		}
	})
})