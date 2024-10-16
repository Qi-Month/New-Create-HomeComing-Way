JEIEvents.hideItems((event) => {
	let hideItem = [
		"createmetallurgy:mechanical_belt_grinder"
	]
	hideItem.forEach((item) => {
		event.hide(item)
	})
})

JEIEvents.addItems((event) => {
	let addItem = [
		"create:chromatic_compound",
		"create:shadow_steel",
		"create:shadow_steel_casing",
		"create:refined_radiance",
		"create:refined_radiance_casing",
		"createdieselgenerators:pumpjack_hole",
		"thermal:rf_coil"
	]
	addItem.forEach((item) => {
		event.add(item)
	})
})