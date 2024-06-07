const playerName = [/* "toleave" , */ "Qi_Month"]
ItemEvents.rightClicked(e => {
	const { item, player, server } = e
	const itemID = item.id

	for (let i = 0; i < playerName.length; i++) {
		if (player.mainHandItem == itemID &&
			player.shiftKeyDown &&
			player.mainHandItem != "minecraft:air" &&
			player.username == playerName[i]) {
			player.runCommandSilent('kubejs hand')
		}

		if (player.mainHandItem == 'minecraft:diamond' &&
			player.mainHandItem != "minecraft:air" &&
			player.username == playerName[i]) {
			server.runCommandSilent('tellraw @a "正在重新加载ing...q(≧▽≦q)"')
			player.runCommandSilent('reload')
		}
	}
})

PlayerEvents.chat(e => {
	const { player, message, server } = e

	for (let i = 0; i < playerName.length; i++) {
		if (message.trim().equalsIgnoreCase('-rld') &&
			player.username == playerName[i]) {
			server.runCommandSilent('reload')
			server.runCommandSilent('tellraw @a "正在重新加载ing...q(≧▽≦q)"')
			e.cancel()
		}

		if (message.trim().equalsIgnoreCase('-kl') &&
			player.username == playerName[i]) {
			server.runCommandSilent('kill @e[type=item]')
			server.runCommandSilent('tellraw @a "掉落物已清除"')
			e.cancel()
		}

		if (message.trim().equalsIgnoreCase('-hd') &&
			player.username == playerName[i]) {
			player.runCommandSilent('kubejs hand')
			e.cancel()
		}

		if (message.trim().equalsIgnoreCase('-kf') &&
			player.username == playerName[i]) {
			player.runCommandSilent('effect give @s minecraft:night_vision infinite 255 true')
			player.runCommandSilent('effect give @s minecraft:strength infinite 255 true')
			player.runCommandSilent('effect give @s minecraft:resistance infinite 255 true')
			e.cancel()
		}

		if (message.trim().equalsIgnoreCase('-efc') &&
			player.username == playerName[i]) {
			player.runCommandSilent('effect clear')
			player.runCommandSilent('tellraw @s "已清除所有BUFF"')
			e.cancel()
		}

		if (message.trim().equalsIgnoreCase('-kla') &&
			player.username == playerName[i]) {
			server.runCommandSilent('kill @e[type=!player]')
			server.runCommandSilent('tellraw @a "所有实体已清除"')
			e.cancel()
		}
	}
})