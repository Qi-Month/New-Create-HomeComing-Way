let displayName = [
	["new_create", "New Create: HomeComing Way"],
	["kubejs", "New Create: HomeComing Way"]
]
displayName.forEach(([namespace, displayName]) => {
	Platform.getInfo(namespace).name = displayName
})