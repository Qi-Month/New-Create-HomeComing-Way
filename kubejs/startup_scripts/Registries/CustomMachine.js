StartupEvents.registry("block", (event) => {
	let namespace = "new_create:"

	let machinery = [
		"brain_electric_extractor"
	]
	machinery.forEach((name) => {
		event.create(namespace + name, "custommachinery")
			.machine(namespace + name)
	})
})