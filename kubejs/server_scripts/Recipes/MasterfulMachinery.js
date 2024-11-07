ServerEvents.recipes((event) => {
	let { stonecutting } = event.recipes.minecraft

	// 气球菇
	let balloon_mushroom = [
		"mm:balloon_mushroom_stress_machine",
		"mm:balloon_mushroom_stress_machine_item_input",
		"mm:balloon_mushroom_stress_machine_item_output",
		"mm:balloon_mushroom_stress_machine_fluid_input",
		"mm:balloon_mushroom_stress_machine_fluid_output",
		"mm:balloon_mushroom_stress_machine_kinetic_input",
		"mm:balloon_mushroom_stress_machine_kinetic_output"
	]
	balloon_mushroom.forEach((output) => [
		stonecutting(output, "new_create:balloon_mushroom_stress_machine_block")
	])
})