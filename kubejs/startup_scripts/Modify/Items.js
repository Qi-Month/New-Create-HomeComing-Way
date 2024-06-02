ItemEvents.modification(e => {
	let ToolDamage = [
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
	ToolDamage.forEach(([Name, MaxDamage]) => {
		e.modify(Name, modify => {
			modify.maxDamage = MaxDamage
		})
	})
})