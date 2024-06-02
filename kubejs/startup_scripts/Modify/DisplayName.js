let DisplayName = [
	['new_create', 'New Create'],
	['kubejs', 'New Create'],
	['create_things_and_misc', 'Create: Things And Misc']
]
DisplayName.forEach(([ModID, DisplayName]) => {
	Platform.getInfo(ModID).name = DisplayName
})