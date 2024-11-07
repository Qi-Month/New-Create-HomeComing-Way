MMEvents.createStructures((event) => {
	event.create(`${global.namespace}balloon_mushroom_stress_machine`)
		.controllerId("mm:balloon_mushroom_stress_machine")
		.name("气球菇应力机")
		.layout((s) => {
			s.layer([
				"GGG"
			]).layer([
				"DEF"
			]).layer([
				"ACA"
			]).key("A", {
				block: "edenring:balloon_mushroom_planks"
			}).key("F", {
				block: "mm:balloon_mushroom_stress_machine_fluid_input"
			}).key("E", {
				block: "mm:balloon_mushroom_stress_machine_kinetic_output"
			}).key("D", {
				block: "mm:balloon_mushroom_stress_machine_item_input"
			}).key("G", {
				block: "edenring:balloon_mushroom_block"
			})
		})
})