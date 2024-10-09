ServerEvents.tags("block", (event) => {
	event.remove("minecraft:needs_wooden_tool", [
		"create:item_vault"
	])

	event.add("minecraft:needs_iron_tool", [
		"create:item_vault"
	])
})