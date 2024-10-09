ServerEvents.recipes((event) => {
	let { kubejs, create } = event.recipes

	// 金属齿轮
	let metalCogwheelRecipes = [
		"bronze",
		"cast_iron",
		"steel"
	]
	metalCogwheelRecipes.forEach((metal) => {
		// 小
		kubejs.shapeless(`steampowered:${metal}_cogwheel`, [
			"create:shaft",
			`#forge:plates/${metal}`
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
	})
})