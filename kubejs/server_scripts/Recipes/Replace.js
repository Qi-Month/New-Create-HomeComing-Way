ServerEvents.recipes((event) => {
	// 齿轮
	event.replaceInput({}, "create:cogwheel", "#create:metal_cogwheel")
	event.replaceInput({}, "create:large_cogwheel", "#create:metal_large_cogwheel")

	// 铸模替换
	let cast = ["ball", "blank", "gear", "ingot", "nugget", "plate", "rod"]
	cast.forEach((name) => {
		event.replaceInput(
			{},
			`createmetallurgy:graphite_${name}_mold`,
			`new_create:golden_${name}_cast`
		)
		event.replaceOutput(
			{},
			`createmetallurgy:graphite_${name}_mold`,
			`new_create:golden_${name}_cast`
		)
	})
})