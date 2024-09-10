StartupEvents.registry("block", (event) => {
	const MODID = "new_create:"

	let machinery = [
		"brain_electric_extractor"
	]
	machinery.forEach((name) => {
		event.create(MODID + name, "custommachinery")
			.machine(MODID + name)
	})
})