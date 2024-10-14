JEIEvents.information((event) => {
	let addJEIInfo = [
		"melter:melter",
		"new_create:chaochi",
		"new_create:heat_coal_block",
	]
	addJEIInfo.forEach((name) => {
		event.addItem(name, Text.translate("jei." + name))
	})
})