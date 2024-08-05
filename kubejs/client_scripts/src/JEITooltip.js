JEIEvents.information(info => {
	let addJEIInfo = [
		['melter:melter', 'jei.mt.melter'],
		['new_create:chaochi', 'jei.nc.chaochi']
	]
	addJEIInfo.forEach(([Name, Key]) => {
		info.addItem(Name, Text.translate(Key))
	})
})