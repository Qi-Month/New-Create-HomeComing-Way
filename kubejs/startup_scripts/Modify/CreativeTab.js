StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
	event.setIcon("new_create:brain_electric_extractor")
	event.setDisplayName(Component.translate("itemGroup.new_create.itemTab"))
})

StartupEvents.modifyCreativeTab("flopper:default", (event) => {
	event.remove("flopper:default")
})

StartupEvents.modifyCreativeTab("minecraft:redstone_blocks", (event) => {
	event.addAfter("minecraft:hopper", [
		"flopper:flopper"
	])
})