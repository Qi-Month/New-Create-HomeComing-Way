ServerEvents.recipes((event) => {
	let { createmetallurgy, kubejs } = event.recipes

	// 金属齿轮
	let metalCogwheelRecipes = [
		"bronze",
		// "cast_iron",
		"steel"
	]
	metalCogwheelRecipes.forEach((metal) => {
		// 小
		kubejs.shapeless(`steampowered:${metal}_cogwheel`, [
			"create:shaft",
			`#forge:plates/${metal}`
		])
		kubejs.shapeless(`steampowered:${metal}_cogwheel`, [
			`new_create:incomplete_${metal}_cogwheel`,
			"create:shaft"
		])
		// 大
		kubejs.shapeless(`steampowered:${metal}_large_cogwheel`, [
			`steampowered:${metal}_cogwheel`,
			`#forge:plates/${metal}`
		])
		kubejs.shapeless(`steampowered:${metal}_large_cogwheel`, [
			"create:shaft",
			`2x #forge:plates/${metal}`
		])
		kubejs.shapeless(`steampowered:${metal}_large_cogwheel`, [
			`new_create:incomplete_${metal}_large_cogwheel`,
			"create:shaft"
		])
	})
	// 小
	kubejs.shapeless(`steampowered:cast_iron_cogwheel`, [
		"create:shaft",
		`#forge:plates/iron`
	])
	kubejs.shapeless(`steampowered:cast_iron_cogwheel`, [
		`new_create:incomplete_cast_iron_cogwheel`,
		"create:shaft"
	])
	// 大
	kubejs.shapeless(`steampowered:cast_iron_large_cogwheel`, [
		`steampowered:cast_iron_cogwheel`,
		`#forge:plates/iron`
	])
	kubejs.shapeless(`steampowered:cast_iron_large_cogwheel`, [
		"create:shaft",
		`2x #forge:plates/iron`
	])
	kubejs.shapeless(`steampowered:cast_iron_large_cogwheel`, [
		`new_create:incomplete_cast_iron_large_cogwheel`,
		"create:shaft"
	])

	// 齿轮
	let cogwheel = [
		"bronze",
		// "cast_iron", 
		"steel"
	]
	cogwheel.forEach((metal) => {
		createmetallurgy.casting_in_table(`new_create:incomplete_${metal}_cogwheel`, [
			Fluid.of(`createmetallurgy:molten_${metal}`, 45),
			"new_create:golden_ball_cast"
		]).mold_consumed(false).processingTime(40)

		createmetallurgy.casting_in_table(`new_create:incomplete_${metal}_large_cogwheel`, [
			Fluid.of(`createmetallurgy:molten_${metal}`, 90),
			"new_create:golden_gear_cast"
		]).mold_consumed(false).processingTime(40)
	})
	createmetallurgy.casting_in_table(`new_create:incomplete_cast_iron_cogwheel`, [
		Fluid.of(`createmetallurgy:molten_iron`, 45),
		"new_create:golden_ball_cast"
	]).mold_consumed(false).processingTime(40)

	createmetallurgy.casting_in_table(`new_create:incomplete_cast_iron_large_cogwheel`, [
		Fluid.of(`createmetallurgy:molten_iron`, 90),
		"new_create:golden_gear_cast"
	]).mold_consumed(false).processingTime(40)
})