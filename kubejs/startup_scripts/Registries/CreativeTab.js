StartupEvents.registry("creative_mode_tab", (event) => {
	// NCR工具
	event.create(global.namespace + "tool_group", "basic")
		.icon(() => Item.of("new_create:balloon_mushroom_pickaxe"))
		.content(() => Object.values(CREATIVE_TAB_TOOL_ITEM))
		.displayName(Text.translate("itemGroup.new_create.tool"))

	// 货币
	event.create(global.namespace + "money_group", "basic")
		.icon(() => Item.of("new_create:10000"))
		.content(() => Object.values(CREATIVE_TAB_MONEY_ITEM))
		.displayName(Text.translate("itemGroup.new_create.money"))
})