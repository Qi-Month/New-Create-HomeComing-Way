CreateHeatJS.registerHeatEvent((event) => {
	let heatLevel = [
		// 熔化
		['melt', 1, 0xFF8C00, 'new_create:heat_coal_block'],
		// 冻结
		['frozen', -1, 0x87CEFA, 'minecraft:blue_ice']
	]
	heatLevel.forEach(([name, level, color, block]) => {
		event.registerHeat(name, level, color)
			.addHeatSource(block)
			.register()
	})
})