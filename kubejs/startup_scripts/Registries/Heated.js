CreateHeatJS.registerHeatEvent((event) => {
	let addHeatLevel = [
		// 冻结
		["frozen", 0x87CEFA, "minecraft:blue_ice"]
	]
	addHeatLevel.forEach(([name, color, block]) => {
		event.registerHeat(name, color)
			.addHeatSource(block)
			.register()
	})
})