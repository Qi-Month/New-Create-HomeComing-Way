ServerEvents.tags('fluid', (event) => {
	// 分茶
	event.add('caupona:boilable', [
		'thermal:latex',
		'new_create:glass',
		'new_create:embalming_fluid'
	])
	
	// 工业燃油
	event.add('forge:industrial_fuel', [
		'new_create:industrial_fuel'
	])

	// 煤油
	event.add('forge:kerosene', [
		'new_create:kerosene'
	])

	// 汽油
	event.add('forge:gasoline', [
		'createdieselgenerators:gasoline'
	])

	// 柴油
	event.add('forge:diesel', [
		'createdieselgenerators:diesel'
	])

	// 混合汽油
	event.add('forge:mixed_gasoline', [
		'new_create:mixed_gasoline'
	])

	// 精炼油
	event.add('thermal:refined_fuel', [
		'thermal:refined_fuel'
	])

	// 高级精炼油
	event.add('forge:high_grade_refined_oil', [
		'new_create:high_grade_refined_oil'
	])

	// 杂酚油
	event.add('forge:creosote', [
		'immersiveengineering:creosote',
		'thermal:creosote',
		'new_create:embalming_fluid'
	])
})