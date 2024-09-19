let displayName = [
	["new_create", "New Create"],
	["kubejs", "New Create"]
]
displayName.forEach(([namespace, displayName]) => {
	Platform.getInfo(namespace).name = displayName
})