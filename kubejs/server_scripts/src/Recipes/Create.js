ServerEvents.recipes((event) => {
	const {
		create,
		createmetallurgy,
		create_bic_bit,
		create_new_age,
		createaddition,
		createdieselgenerators,
		createoreexcavation,
		create_mechanical_extruder,
		kubejs,
		thermal,
		immersiveengineering
	} = event.recipes

	// 动力泵
	kubejs.shaped('create:mechanical_pump', [
		' I ',
		'IFI',
		' P '
	], {
		I: '#forge:ingots/bronze',
		P: '#forge:plates/bronze',
		F: 'create:fluid_pipe'
	}).id("create:crafting/kinetics/mechanical_pump")
})