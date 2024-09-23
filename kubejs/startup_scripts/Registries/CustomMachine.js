StartupEvents.registry("block", (event) => {
	let machinery = [
		"brain_electric_extractor"
	]
	machinery.forEach((name) => {
		event.create(global.namespace + name, "custommachinery")
			.machine(global.namespace + name)
	})
})