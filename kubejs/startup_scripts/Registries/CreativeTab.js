StartupEvents.registry("creative_mode_tab", (event) => {
	let namespace = "new_create:"

	// NCR工具
	event.create(namespace + "tool_group", "basic")
		.icon(() => Item.of("new_create:balloon_mushroom_pickaxe"))
		.content(() => Object.values(CREATIVE_TAB_TOOL_ITEM))
		.displayName(Component.translate("itemGroup.new_create.toolTab"))
})