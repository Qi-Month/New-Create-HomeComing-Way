JEIEvents.information((event) => {
	let addJEIInfo = [
	]
	addJEIInfo.forEach((name) => {
		event.addItem(name, Text.translate(`jei.${name}`.replace(":", ".")))
	})
})