const playerName = ["toleave", "Qi_Month", "hxm"]
ItemEvents.rightClicked((event) => {
	const { item, player, server } = event

	for (let i = 0; i < playerName.length; i++) {
		// 潜行+右键获取物品ID
		if (player.mainHandItem == item.id &&
			player.crouching &&
			player.mainHandItem != "minecraft:air" &&
			player.username == playerName[i]) {
			player.runCommandSilent('kubejs hand')
		}
	}
})

PlayerEvents.chat((event) => {
	const { player, message, server } = event

	for (let i = 0; i < playerName.length; i++) {
		// 输入-kl删除所有掉落物
		if (message.trim().equalsIgnoreCase('-kl') &&
			player.username == playerName[i]) {
			server.runCommandSilent('kill @e[type=item]')
			server.runCommandSilent('tellraw @a "掉落物已清除"')
			event.cancel()
		}

		// 输入-kf获得[夜视 力量 抗性]buff
		if (message.trim().equalsIgnoreCase('-kf') &&
			player.username == playerName[i]) {
			player.runCommandSilent('effect give @s minecraft:night_vision infinite 255 true')
			player.runCommandSilent('effect give @s minecraft:strength infinite 255 true')
			player.runCommandSilent('effect give @s minecraft:resistance infinite 255 true')
			event.cancel()
		}

		// 输入-efc清除自身所有buff
		if (message.trim().equalsIgnoreCase('-efc') &&
			player.username == playerName[i]) {
			player.runCommandSilent('effect clear')
			player.runCommandSilent('tellraw @s "已清除所有BUFF"')
			event.cancel()
		}

		// 输入-kla清除玩家之外的所有实体
		if (message.trim().equalsIgnoreCase('-kla') &&
			player.username == playerName[i]) {
			server.runCommandSilent('kill @e[type=!player]')
			server.runCommandSilent('tellraw @a "所有实体已清除"')
			event.cancel()
		}
	}
})

/* 
 * 获取Tag下的所有id,会在
 * "log/kubejs/server.log"
 * 下打印出来,更换Tag在第二行的Ingredient.of()内更换
*/
ServerEvents.loaded((event) => {
	Ingredient.of("#minecraft:logs")
		.getItemIds()
		.forEach((print) => {
			console.log(print)
		})
})