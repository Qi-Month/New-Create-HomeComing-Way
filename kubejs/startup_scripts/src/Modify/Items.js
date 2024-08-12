ItemEvents.modification((event) => {
	/*
	// 设置耐久
	let toolDamage = [
		['minecraft:iron_sword', 450],
		['minecraft:iron_pickaxe', 450],
		['minecraft:iron_axe', 450],
		['minecraft:iron_shovel', 450],
		['minecraft:iron_hoe', 450],
		['minecraft:iron_helmet', 400],
		['minecraft:iron_chestplate', 400],
		['minecraft:iron_leggings', 400],
		['minecraft:iron_boots', 400]
	]
	toolDamage.forEach(([name, maxDamage]) => {
		event.modify(name, (modify) => {
			modify.maxDamage = maxDamage
		})
	})
	*/
	
	// 防火
	let fireResistantModify = [
		"new_create:heat_coal_block",
		"minecraft:coal_block"
	]
	fireResistantModify.forEach((item) => {
		event.modify(item, (modify) => {
			modify.fireResistant = true
		})
	})
})