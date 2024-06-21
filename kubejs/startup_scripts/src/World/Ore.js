/*
WorldgenEvents.add((event) => {
	// 俄矿
	event.addOre((ore) => {
		ore.id = 'mekanism:osmium_ore'
		ore.addTarget('minecraft:stone', 'mekanism:osmium_ore')
		ore.count([1, 2, 3, 4, 5])
		ore.triangleHeight(1, 63)
		ore.size(5)
		ore.worldgenLayer = 'underground_ores'
		ore.noSurface = 0.5
	})

	// 深层俄矿
	event.addOre((ore) => {
		ore.id = 'mekanism:deepslate_osmium_ore'
		ore.addTarget('minecraft:deepslate_stone', 'mekanism:deepslate_osmium_ore')
		ore.count([1, 2, 3, 4, 5])
		ore.triangleHeight(-64, -16)
		ore.size(5)
		ore.worldgenLayer = 'underground_ores'
		ore.noSurface = 0.5
	})
})
*/