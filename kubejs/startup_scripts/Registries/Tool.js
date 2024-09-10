StartupEvents.registry("item", (event) => {
	/**
	 * @param {number} speed - 速度
	 * @param {number} setLevel -工具等级
	 * @param {number} use - 耐久
	 * 
	 * 所有的伤害都是[所填数值 +3 = 游戏内面板数值]
	 * @param {string} swordDamage - 剑伤害
	 * 
	 * @param {string} pickaxeDamage - 镐伤害
	 * 
	 * @param {string} axeDamage - 斧伤害
	 * 
	 * @param {string} shovelDamage - 锹伤害
	 * 
	 * @param {string} hoeDamage - 锄伤害
	*/

	const MODID = "new_create:"

	// id[剑伤, 镐伤, 斧伤, 锹伤, 锄伤], 耐久, 速度, 等级
	let toolRegisters = [
		// 气球菇
		["balloon_mushroom", [1, 0, 4, -1, 0], 64, 2, 0]
	]
	toolRegisters.forEach(([
		id, [swordDamage, pickaxeDamage, axeDamage, shovelDamage, hoeDamage], use, speed, level
	]) => {
		// 剑
		event.create(`${MODID}${id}_sword`, "sword")
			.texture(`${MODID}item/tool/${id}/sword`)
			.attackDamageBaseline(swordDamage)
			.unstackable()
			.tag("forge:tools")
			.modifyTier((tool) => {
				tool.uses = use
				tool.speed = speed
				tool.setLevel(level)
			})

		// 镐
		event.create(`${MODID}${id}_pickaxe`, "pickaxe")
			.texture(`${MODID}item/tool/${id}/pickaxe`)
			.attackDamageBaseline(pickaxeDamage)
			.unstackable()
			.tag("forge:tools")
			.modifyTier((tool) => {
				tool.uses = use
				tool.speed = speed
				tool.setLevel(level)
			})

		// 斧
		event.create(`${MODID}${id}_axe`, "axe")
			.texture(`${MODID}item/tool/${id}/axe`)
			.attackDamageBaseline(axeDamage)
			.unstackable()
			.tag("forge:tools")
			.modifyTier((tool) => {
				tool.uses = use
				tool.speed = speed
				tool.setLevel(level)
			})

		// 锹
		event.create(`${MODID}${id}_shovel`, "shovel")
			.texture(`${MODID}item/tool/${id}/shovel`)
			.attackDamageBaseline(shovelDamage)
			.unstackable()
			.tag("forge:tools")
			.modifyTier((tool) => {
				tool.uses = use
				tool.speed = speed
				tool.setLevel(level)
			})

		// 锄
		event.create(`${MODID}${id}_hoe`, "hoe")
			.texture(`${MODID}item/tool/${id}/hoe`)
			.attackDamageBaseline(hoeDamage)
			.unstackable()
			.tag("forge:tools")
			.modifyTier((tool) => {
				tool.uses = use
				tool.speed = speed
				tool.setLevel(level)
			})
	})
})