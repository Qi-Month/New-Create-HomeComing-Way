let displayName = [
	["new_create", "New Create"],
	["kubejs", "New Create"],
	["create_things_and_misc", "Create: Things And Misc"],
]
displayName.forEach(([MODID, displayName]) => {
	Platform.getInfo(MODID).name = displayName
})