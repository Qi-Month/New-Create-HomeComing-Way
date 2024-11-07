MMEvents.registerPorts((event) => {
	// 物品
	event.create("balloon_mushroom_stress_machine_item")
		.name("气球菇应力机-物品")
		.controllerId("mm:balloon_mushroom_stress_machine")
		.config("mm:item", (config) => {
			config.rows(1)
				.columns(1)
		})

	// 流体
	event.create("balloon_mushroom_stress_machine_fluid")
		.name("气球菇应力机-流体")
		.controllerId("mm:balloon_mushroom_stress_machine")
		.config("mm:fluid", (config) => {
			config.rows(1)
				.columns(1)
				.slotCapacity(10000)
		})

	// 应力
	event.create("balloon_mushroom_stress_machine_kinetic")
		.name("气球菇应力机-应力")
		.controllerId("mm:balloon_mushroom_stress_machine")
		.config("mm:create/kinetic", (config) => {
			config.stress(64)
		})
})