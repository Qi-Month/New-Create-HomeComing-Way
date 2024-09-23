StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
	event.setDisplayName(Component.translate("itemGroup.new_create.itemTab"))
	event.setIcon("new_create:brain_electric_extractor")
})

StartupEvents.modifyCreativeTab("flopper:tab", (event) => {
	event.remove("@flopper")
})