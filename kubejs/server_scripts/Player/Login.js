PlayerEvents.loggedIn((event) => {
	let { player, server } = event

	// 欢迎
	server.tell(Text.translate("message.new_create.player.welcome"))

	// 修改规则
	player.runCommandSilent("gamerule artifacts.diggingClaws.toolTier 3")

	global.debugUserName.forEach((userName) => {
		if (player.username === userName) {
			// 无限水
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
					x: 10,
					y: "$screenH - 20",
					alignX: "left",
					text: devInfo,
					scale: 1.0,
				}
			})
		} else {
			if (player.username !== userName) {
				let playerInfo = Text.translate("text.new_create.player").getString()
				player.paint({
					playerTooltip: {
						type: "text",
						x: 10,
						y: "$screenH - 10",
						alignX: "left",
						text: playerInfo,
						scale: 1.0,
					}
				})
			}
		}
	})
})