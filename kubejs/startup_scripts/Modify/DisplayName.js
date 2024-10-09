let displayName = [
	["new_create", "New Create: HomeComing Way"],
	["kubejs", "New Create: HomeComing Way"],
	["alltheores", "All The Ores"]
]
displayName.forEach(([namespace, displayName]) => {
	Platform.getInfo(namespace).name = displayName
})