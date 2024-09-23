StartupEvents.registry("item", (event) => {
	// id[剑, 镐, 斧, 锹, 锄], 耐久, 速度, 等级
	let toolRegisters = [
		// 气球菇z
		["balloon_mushroom", [1, 0, 4, -1, 0], 64, 2, 0]
	]
	toolRegisters.forEach(([
		id, [swordDamage, pickaxeDamage, axeDamage, shovelDamage, hoeDamage], use, speed, level
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
			.attackDamageBaseline(swordDamage)
			.texture(`${global.namespace}item/tool/${id}/sword`)
			.tag("forge:tools")

		// 镐
		event.create(`${global.namespace + id}_pickaxe`, "pickaxe")
			.modifyTier((tool) => {
				tool.uses = use
				tool.speed = speed
				tool.setLevel(level)
			})
			.attackDamageBaseline(pickaxeDamage)
			.texture(`${global.namespace}item/tool/${id}/pickaxe`)
			.tag("forge:tools")

		// 斧
		event.create(`${global.namespace + id}_axe`, "axe")
			.modifyTier((tool) => {
				tool.uses = use
				tool.speed = speed
				tool.setLevel(level)
			})
			.attackDamageBaseline(axeDamage)
			.texture(`${global.namespace}item/tool/${id}/axe`)
			.tag("forge:tools")

		// 锹
		event.create(`${global.namespace + id}_shovel`, "shovel")
			.modifyTier((tool) => {
				tool.uses = use
				tool.speed = speed
				tool.setLevel(level)
			})
			.attackDamageBaseline(shovelDamage)
			.texture(`${global.namespace}item/tool/${id}/shovel`)
			.tag("forge:tools")

		// 锄
		event.create(`${global.namespace + id}_hoe`, "hoe")
			.modifyTier((tool) => {
				tool.uses = use
				tool.speed = speed
				tool.setLevel(level)
			})
			.attackDamageBaseline(hoeDamage)
			.texture(`${global.namespace}item/tool/${id}/hoe`)
			.tag("forge:tools")
	})
})