ServerEvents.tags('fluid', e => {
	// 分茶
	e.add('caupona:boilable', [
		'thermal:latex',
		'new_create:glass',
		'new_create:embalming_fluid'
	])
	
	// 工业燃油
	e.add('forge:industrial_fuel', [
		'new_create:industrial_fuel'
	])

	// 煤油
	e.add('forge:kerosene', [
		'new_create:kerosene'
	])

	// 汽油
	e.add('forge:gasoline', [
		'createdieselgenerators:gasoline'
	])

	// 柴油
	e.add('forge:diesel', [
		'createdieselgenerators:diesel'
	])

	// 混合汽油
	e.add('forge:mixed_gasoline', [
		'new_create:mixed_gasoline'
	])

	// 精炼油
	e.add('thermal:refined_fuel', [
		'thermal:refined_fuel'
	])

	// 高级精炼油
	e.add('forge:high_grade_refined_oil', [
		'new_create:high_grade_refined_oil'
	])

	// 杂酚油
	e.add('forge:creosote', [
		'immersiveengineering:creosote',
		'thermal:creosote',
		'new_create:embalming_fluid'
	])
})