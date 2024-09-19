StartupEvents.registry("fluid", (event) => {
	let namespace = "new_create:"
	let path = "block/fluid/"
	let otherFluidRegisters = namespace + path

	let fluidRegisters = [
	]
	fluidRegisters.forEach(([name, color]) => {
		event.create(namespace + name)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(otherFluidRegisters + "flowing")
			.stillTexture(otherFluidRegisters + "still")
	})
})