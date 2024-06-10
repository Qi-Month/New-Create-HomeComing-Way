ServerEvents.recipes((event) => {
	const {
		create,
		create_mechanical_extruder,
		immersiveengineering,
		kubejs,
		melter,
		minecraft,
		thermal
	} = event.recipes

	// 硅板
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"middle": { "item": "new_create:silicon_crystal" },
			"top": { "item": "ae2:silicon_press" }
		},
		"mode": "inscribe",
		"result": { "item": "ae2:printed_silicon" }
	}).id('ae2:inscriber/silicon_print')

	// 压印模板
	let processorPressRecipes = [
		'ae2:logic_processor_press',
		'ae2:engineering_processor_press',
		'ae2:silicon_press',
		'ae2:calculation_processor_press',
		'ae2:name_press'
	]
	processorPressRecipes.forEach(Output => {
		immersiveengineering.blueprint(Output, [
			'new_create:processor_press',
			'immersiveengineering:wirecutter'
		], 'processor_press')
	})
})