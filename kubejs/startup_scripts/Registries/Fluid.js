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
})