JEIEvents.information((event) => {
	let addJEIInfo = [
		['melter:melter', 'mt.melter'],
		['new_create:chaochi', 'nc.chaochi'],
		["new_create:heat_coal_block", "nc.heat_coal_block"]
	]
	addJEIInfo.forEach(([Name, Key]) => {
		event.addItem(Name, Text.translate("jei." + Key))
	})
})