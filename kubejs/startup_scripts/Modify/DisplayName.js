let displayName = [
	["new_create", "New Create: Reload"],
	["kubejs", "New Create: Reload"]
]
displayName.forEach(([namespace, displayName]) => {
	Platform.getInfo(namespace).name = displayName
})