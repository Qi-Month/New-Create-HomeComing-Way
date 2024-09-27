ItemEvents.tooltip((event) => {
	let addTooltip = [
		"new_create:easy_rock_gen",
		"naturescompass:naturescompass"
	]
	addTooltip.forEach((id) => {
		event.add(id, Text.translate(`tooltip.${id}`.replace(":", ".")))
	})
})