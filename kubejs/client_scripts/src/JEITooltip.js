JEIEvents.information(info => {
	let Info = [
		['melter:melter', 'jei.mt.melter'],
		['new_create:chaochi', 'jei.nc.chaochi']
	]
	Info.forEach(([Name, Key]) => {
		info.addItem(Name, Text.translate(Key))
	})
})