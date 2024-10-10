JEIEvents.information((event) => {
	let addJEIInfo = [
		"new_create:brain_sapling"
	]
	addJEIInfo.forEach((name) => {
		event.addItem(name, Text.translate(`jei.info.${name}`.replace(":", ".")))
	})
})