JEIEvents.hideItems((event) => {
	let hideItem = [
		"createmetallurgy:mechanical_belt_grinder"
	]
	hideItem.forEach((item) => {
		event.hide(item)
	})
})