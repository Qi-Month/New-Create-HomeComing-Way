JEIEvents.information((event) => {
	let addJEIInfo = [
		['melter:melter', 'jei.mt.melter'],
		['new_create:chaochi', 'jei.nc.chaochi']
	]
	addJEIInfo.forEach(([Name, Key]) => {
		event.addItem(Name, Text.translate(Key))
	})
})