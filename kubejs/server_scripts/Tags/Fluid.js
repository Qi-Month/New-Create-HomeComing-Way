ServerEvents.tags('fluid', (event) => {
	let fluidTag = [
		// 分茶
		['caupona:boilable', [
			'thermal:latex',
			'new_create:glass',
			'new_create:embalming_fluid'
		]],
		// 工业燃油
		['forge:industrial_fuel', [
			'new_create:industrial_fuel'
		]],
		// 煤油
		['forge:kerosene', [
			'new_create:kerosene'
		]],
		// 汽油
		['forge:gasoline', [
			'createdieselgenerators:gasoline'
		]],
		// 柴油
		['forge:diesel', [
			'createdieselgenerators:diesel'
		]],
		// 混合汽油
		['forge:mixed_gasoline', [
			'new_create:mixed_gasoline'
		]],
		// 精炼油
		['thermal:refined_fuel', [
			'thermal:refined_fuel'
		]],
		// 高级精炼油
		['forge:high_grade_refined_oil', [
			'new_create:high_grade_refined_oil'
		]],
		// 杂酚油
		['forge:creosote', [
			'immersiveengineering:creosote',
			'thermal:creosote',
			'new_create:embalming_fluid'
		]]
	]
	fluidTag.forEach(([tag, fluid]) => {
		event.add(tag, fluid)
	})
})