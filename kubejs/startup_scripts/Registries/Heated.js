CreateHeatJS.registerHeatEvent((event) => {
	let addHeatLevel = [
		// 冻结
		["frozen", 0x87CEFA, "minecraft:blue_ice"],
		// 熔化
		["melt", 0xFF8C00, "new_create:heat_coal_block"]
	]
	addHeatLevel.forEach(([name, color, block]) => {
		event.registerHeat(name, color)
			.addHeatSource(block)
			.register()
	})
})