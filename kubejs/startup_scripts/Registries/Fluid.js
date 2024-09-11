StartupEvents.registry("fluid", (event) => {
	const MODID = "new_create:"
	const PATH = "block/fluid/"
	const otherFluidRegisters = MODID + PATH

	let fluidRegisters = [
	]
	fluidRegisters.forEach(([name, color]) => {
		event.create(MODID + name)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(otherFluidRegisters + "flowing")
			.stillTexture(otherFluidRegisters + "still")
	})

	// 金属
	let moltenFluid = [
	]
	moltenFluid.forEach(([name, color]) => {
		event.create(MODID + "molten_" + name)
			.thickTexture(color)
			.bucketColor(color)
			.flowingTexture(otherFluidRegisters + "flowing")
			.stillTexture(otherFluidRegisters + "still")
			.tag(`forge:molten_${name}`)
			.tag("forge:molten_materials")
	})
})