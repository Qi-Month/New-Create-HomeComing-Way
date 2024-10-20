JEIEvents.information((event) => {
	let addJEIInfo = [
		"new_create:brain_sapling",
		"portality:controller",
		"portality:frame",
		"portality:module_energy",
		"portality:module_fluids",
		"portality:module_items",
		"portality:module_interdimensional",
		"portality:generator",
		"portality:teleportation_token"
	]
	addJEIInfo.forEach((name) => {
		event.addItem(name, Text.translate(`jei.info.${name}`.replace(":", ".")))
	})
})