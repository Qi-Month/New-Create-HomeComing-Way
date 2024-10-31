PlayerEvents.loggedIn((event) => {
	let { player, server } = event

	// 欢迎
	server.tell(Text.translate("message.new_create.player.welcome"))

	// 修改规则
	player.runCommandSilent("gamerule artifacts.diggingClaws.toolTier 3")

	global.debugUserName.forEach((debugUser) => {
		if (player.username === debugUser) {
			// 无限水限制, 如果username符合开发者id就打开无限水, 否则关闭
			player.runCommandSilent("gamerule waterSourceConversion false")
		} else if (player.username !== debugUser) {
			player.runCommandSilent("gamerule waterSourceConversion true")
		}

		// 留言(一个无聊到真的不能再无聊的东西)
		if (player.username === debugUser) {
			let devInfo = Text.translate("text.new_create.dev").getString()
			player.paint({
				devTooltip: {
					type: "text",
					x: 10,
					y: "$screenH - 40",
					alignX: "left",
					text: devInfo,
					scale: 1.0,
				}
			})
		} else if (player.username !== debugUser) {
			let playerInfo = Text.translate("text.new_create.player").getString()
			player.paint({
				playerTooltip: {
					type: "text",
					x: 10,
					y: "$screenH - 30",
					alignX: "left",
					text: playerInfo,
					scale: 1.0,
				}
			})
			let modPackVersion = Text.translate("text.new_create.version").getString()
			player.paint({
				versionTooltip: {
					type: "text",
					x: 10,
					y: "$screenH - 20",
					alignX: "left",
					text: modPackVersion,
					scale: 1.0
				}
			})
		}
	})
})