ItemEvents.tooltip((event) => {
	let addTooltip = [
		"new_create:easy_rock_gen",
		"new_create:initial_item_kit",
		"new_create:drying_volvox_ball",
		"steampowered:bronze_cogwheel",
		"steampowered:bronze_large_cogwheel",
		"steampowered:cast_iron_cogwheel",
		"steampowered:cast_iron_large_cogwheel",
		"steampowered:steel_cogwheel",
		"steampowered:steel_large_cogwheel",
		"new_create:soil_blast_furnace"
	]
	addTooltip.forEach((id) => {
		event.add(id, Text.translate(`tooltip.${id}`.replace(":", ".")))
	})
})