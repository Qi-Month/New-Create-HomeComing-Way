// 开发调试(这个脚本的东西发布时要记得删除)
ItemEvents.rightClicked(e => {
	const { item, player, server } = e

	const ItemID = item.id
	if (player.mainHandItem == ItemID && player.shiftKeyDown && player.mainHandItem != "minecraft:air") {
		player.runCommandSilent('kubejs hand')
	}

	if (player.mainHandItem == 'minecraft:diamond' && player.mainHandItem != "minecraft:air") {
		server.runCommandSilent('tellraw @a "正在重新加载ing...q(≧▽≦q)"')
		player.runCommandSilent('reload')
	}
})

PlayerEvents.chat(e => {
	const { player, message, server } = e
	if (message.trim().equalsIgnoreCase('-rld')) {
		server.runCommandSilent('reload')
		server.runCommandSilent('tellraw @a "正在重新加载ing...q(≧▽≦q)"')
		e.cancel()
	}

	if (message.trim().equalsIgnoreCase('-kl')) {
		server.runCommandSilent('kill @e[type=item]')
		server.runCommandSilent('tellraw @a "掉落物已清除"')
		e.cancel()
	}

	if (message.trim().equalsIgnoreCase('-hd')) {
		player.runCommandSilent('kubejs hand')
		e.cancel()
	}

	if (message.trim().equalsIgnoreCase('-kf')) {
		player.runCommandSilent('effect give @s minecraft:night_vision infinite 255 true')
		player.runCommandSilent('effect give @s minecraft:strength infinite 255 true')
		player.runCommandSilent('effect give @s minecraft:resistance infinite 255 true')
		e.cancel()
	}

	if (message.trim().equalsIgnoreCase('-efc')) {
		player.runCommandSilent('effect clear')
		player.runCommandSilent('tellraw @s "已清除所有BUFF"')
		e.cancel()
	}

	if (message.trim().equalsIgnoreCase('-kla')) {
		server.runCommandSilent('kill @e[type=!player]')
		server.runCommandSilent('tellraw @a "所有实体已清除"')
		e.cancel()
	}
})