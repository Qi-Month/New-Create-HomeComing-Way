let displayName = [
	["new_create", "New Create"],
	["kubejs", "New Create"]
]
displayName.forEach(([MODID, displayName]) => {
	Platform.getInfo(MODID).name = displayName
})