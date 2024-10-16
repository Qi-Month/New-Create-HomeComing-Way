StartupEvents.registry("block", (event) => {
	let machinery = [
		"brain_electric_extractor",
		"easy_rock_gen",
		"stone_gen",
		"oxygen_generator",
		"soil_blast_furnace"
	]
	machinery.forEach((name) => {
		event.create(global.namespace + name, "custommachinery")
			.machine(global.namespace + name)
			.tag("create:wrench_pickup")
	})
})