StartupEvents.registry("fluid", (event) => {
	let path = "block/fluid/"
	let otherFluidRegisters = global.namespace + path

	let fluidRegisters = [
		// 营养液
		["nutrient_solution", 0x90EE90],
		// 气球菇浆液
		["balloon_mushroom_slurry", 0xFF69B4],
		// 石灰水
		["lime_water", 0xB0C4DE]
	]
	fluidRegisters.forEach(([name, color]) => {
		event.create(global.namespace + name)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(otherFluidRegisters + "flowing")
			.stillTexture(otherFluidRegisters + "still")
	})

	// 金属
	let moltenRegisters = [
		// 安山
		["andesite_alloy", 0x808080]
	]
	moltenRegisters.forEach(([name, color]) => {
		event.create(`${global.namespace}molten_${name}`)
			.thickTexture(color)
			.bucketColor(color)
			.flowingTexture(otherFluidRegisters + "flowing")
			.stillTexture(otherFluidRegisters + "still")
			.tag(`forge:molten_${name}`)
			.tag("forge:molten_materials")
	})
})