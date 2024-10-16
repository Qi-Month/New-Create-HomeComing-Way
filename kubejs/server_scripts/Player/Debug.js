let debugUserName = [
	"toleave",
	"Qi_Month",
	"lex_Eden",
	"sara_Eden"
]
ItemEvents.rightClicked((event) => {
	let { item, player } = event

	for (let i = 0; i < debugUserName.length; i++) {
		// 潜行+右键获取物品ID
		if (player.mainHandItem === item.id &&
			player.crouching &&
			player.mainHandItem !== "minecraft:air" &&
			player.username === debugUserName[i]) {
			player.runCommandSilent("kubejs hand")
		}
	}
})

PlayerEvents.chat((event) => {
	let { player, message, server } = event

	for (let i = 0; i < debugUserName.length; i++) {
		// 输入-ki删除所有掉落物
		if (message.trim().equalsIgnoreCase("-ki") && player.username === debugUserName[i]) {
			server.runCommandSilent("kill @e[type=item]")
			server.runCommandSilent("tellraw @a '掉落物已清除'")
			event.cancel()
		}

		// 输入-kf获得[夜视 力量 抗性]buff
		if (message.trim().equalsIgnoreCase("-kf") && player.username === debugUserName[i]) {
			player.runCommandSilent("effect give @s minecraft:night_vision infinite 255 true")
			player.runCommandSilent("effect give @s minecraft:strength infinite 255 true")
			player.runCommandSilent("effect give @s minecraft:resistance infinite 255 true")
			event.cancel()
		}

		// 输入-efc清除自身所有buff
		if (message.trim().equalsIgnoreCase("-efc") && player.username === debugUserName[i]) {
			player.runCommandSilent("effect clear")
			event.cancel()
		}

		// 输入-kla清除玩家之外的所有实体
		if (message.trim().equalsIgnoreCase("-kla") && player.username === debugUserName[i]) {
			server.runCommandSilent("kill @e[type=!player]")
			event.cancel()
		}
	}
})

// 遍历Tag下的id
PlayerEvents.loggedIn((event) => {
	let { player } = event

	/* 
	* 获取Tag下的所有id,会在
	* "logs/kubejs/server.log"
	* 打印出来,更换Tag在Ingredient.of()内更换
	*/

	for (let i = 0; i < debugUserName.length; i++) {
		if (player.username === debugUserName[i]) {
			player.tell(Text.translate("message.new_create.debug.getItemId", [player.username]))
			// 遍历Tag
			Ingredient.of("#forge:stone")
				.getItemIds()
				.forEach((print) => {
					console.log(print)
				})
		}
	}
})

// 查看方块硬度(潜行+右键方块)
BlockEvents.rightClicked((event) => {
	let { player } = event

	let blockState = event.getBlock().getBlockState()
	let pos = event.getBlock().getPos()
	let blockHardness = blockState.getDestroySpeed(event.getLevel(), pos)

	for (let i = 0; i < debugUserName.length; i++) {
		if (event.hand !== "MAIN_HAND" && player.crouching && player.username === debugUserName[i]) {
			player.tell(Text.translate("message.new_create.debug.getHardness", [blockHardness]))
		}
	}
})