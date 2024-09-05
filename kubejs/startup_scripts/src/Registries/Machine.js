StartupEvents.registry("block", (event) => {
	const MODID = "new_create:"

	let machinery = [
		"iron_making_furnace",
		"firmament"
	]
	machinery.forEach((name) => {
		event.create(MODID + name, "custommachinery")
			.machine(MODID + name)
	})
})