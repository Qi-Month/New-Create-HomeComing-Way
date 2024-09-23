JEIEvents.information((event) => {
	let addJEIInfo = [
	]
	addJEIInfo.forEach((name) => {
		event.addItem(name, Component.translate(`jei.${name}`.replace(":", ".")))
	})
})