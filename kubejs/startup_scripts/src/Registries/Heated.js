CreateHeatJS.registerHeatEvent((event) => {
	let heatLevel = [
		// 熔化
		["melt", 0xFF8C00, "new_create:heat_coal_block"],
		// 冻结
		["frozen", 0x87CEFA, "minecraft:blue_ice"]
	]
	heatLevel.forEach(([name, color, block]) => {
		event.registerHeat(name, color)
			.addHeatSource(block)
			.register()
	})
})