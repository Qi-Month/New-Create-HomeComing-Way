StartupEvents.registry("fluid", (event) => {
	let path = "block/fluid/"
	let otherFluidRegisters = global.namespace + path

	let fluidRegisters = []
	fluidRegisters.forEach(([name, color]) => {
		event.create(global.namespace + name)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(otherFluidRegisters + "flowing")
			.stillTexture(otherFluidRegisters + "still")
	})
	// 营养液
	event.create(`${global.namespace}nutrient_solution`)
		.thickTexture(0x90EE90)
		.bucketColor(0x90EE90)
		.flowingTexture(otherFluidRegisters + "flowing")
		.stillTexture(otherFluidRegisters + "still")
		.tag("forge:molten_materials")
})