ItemEvents.tooltip((event) => {
	let addTooltip = [
		"new_create:easy_rock_gen",
	]
	addTooltip.forEach((id) => {
		event.add(id, Text.translate(`tooltip.${id}`.replace(":", ".")))
	})
})