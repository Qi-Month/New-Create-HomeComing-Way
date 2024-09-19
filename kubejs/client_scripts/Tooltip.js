ItemEvents.tooltip((event) => {
	let addTooltip = [

	]
	addTooltip.forEach((id) => {
		event.add(id, Component.translate(`tooltip.${id}`))
	})
})