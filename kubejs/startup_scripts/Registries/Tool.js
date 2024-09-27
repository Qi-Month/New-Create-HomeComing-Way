StartupEvents.registry("item", (event) => {
	// id, 颜色, [剑, 镐, 斧, 锹, 锄], 耐久, 速度, 等级
	let toolRegisters = [
		// 气球菇
		["balloon_mushroom", 0xFF69B4, [1, 0, 4, -1, 0], 64, 2, 0]
	]
	toolRegisters.forEach(([
		id, color, [swordDamage, pickaxeDamage, axeDamage, shovelDamage, hoeDamage], use, speed, level
	]) => {
		/**
		* @param {string} id - 物品id
		* @param {number} speed - 速度
		* @param {number} setLevel -工具等级
		* @param {number} use - 耐久
		* 
		* 所有的伤害都是[所填数值 + 3 = 游戏内面板数值]
		* @param {number} swordDamage - 剑伤害
		* @param {number} pickaxeDamage - 镐伤害
		* @param {number} axeDamage - 斧伤害
		* @param {number} shovelDamage - 锹伤害
		* @param {number} hoeDamage - 锄伤害
		*/

		// 剑
		event.create(`${global.namespace + id}_sword`, "sword")
			.modifyTier((tool) => {
				tool.uses = use
				tool.speed = speed
				tool.setLevel(level)
			})
			.modelJson({
				"parent": "minecraft:item/generated",
				"textures": {
					"layer0": "new_create:item/tool/sword/head",
					"layer1": "new_create:item/tool/sword/handle"
				}
			})
			.color(0, color)
			.attackDamageBaseline(swordDamage)
			.tag("forge:tools")

		// 镐
		event.create(`${global.namespace + id}_pickaxe`, "pickaxe")
			.modifyTier((tool) => {
				tool.uses = use
				tool.speed = speed
				tool.setLevel(level)
			})
			.modelJson({
				"parent": "minecraft:item/generated",
				"textures": {
					"layer0": "new_create:item/tool/pickaxe/head",
					"layer1": "new_create:item/tool/pickaxe/handle"
				}
			})
			.color(0, color)
			.attackDamageBaseline(pickaxeDamage)
			.tag("forge:tools")

		// 斧
		event.create(`${global.namespace + id}_axe`, "axe")
			.modifyTier((tool) => {
				tool.uses = use
				tool.speed = speed
				tool.setLevel(level)
			})
			.modelJson({
				"parent": "minecraft:item/generated",
				"textures": {
					"layer0": "new_create:item/tool/axe/head",
					"layer1": "new_create:item/tool/axe/handle"
				}
			})
			.color(0, color)
			.attackDamageBaseline(axeDamage)
			.tag("forge:tools")

		// 锹
		event.create(`${global.namespace + id}_shovel`, "shovel")
			.modifyTier((tool) => {
				tool.uses = use
				tool.speed = speed
				tool.setLevel(level)
			})
			.modelJson({
				"parent": "minecraft:item/generated",
				"textures": {
					"layer0": "new_create:item/tool/shovel/head",
					"layer1": "new_create:item/tool/shovel/handle"
				}
			})
			.color(0, color)
			.attackDamageBaseline(shovelDamage)
			.tag("forge:tools")

		// 锄
		event.create(`${global.namespace + id}_hoe`, "hoe")
			.modifyTier((tool) => {
				tool.uses = use
				tool.speed = speed
				tool.setLevel(level)
			})
			.modelJson({
				"parent": "minecraft:item/generated",
				"textures": {
					"layer0": "new_create:item/tool/hoe/head",
					"layer1": "new_create:item/tool/hoe/handle"
				}
			})
			.color(0, color)
			.attackDamageBaseline(hoeDamage)
			.tag("forge:tools")
	})
})