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

	// 燃烧室
	kubejs.shaped("create:empty_blaze_burner", [
		" P ",
		"PBP",
		" P "
	], {
		P: '#forge:plates/iron',
		B: "minecraft:basalt"
	}).id("create:crafting/kinetics/empty_blaze_burner")

	// 安山混合物
	create.mixing('new_create:andesite_compound', [
		'4x #forge:andesite/nuggets',
		'4x #forge:clay',
		Fluid.of('minecraft:water', 1000)
	])

	// 手摇曲柄
	kubejs.shaped("create:hand_crank", [
		"K  ",
		"PPP",
		"  F"
	], {
		K: 'new_create:flint_knapp',
		P: '#minecraft:planks',
		F: 'minecraft:flint'
	}).id("create:crafting/kinetics/hand_crank")

	// 铸铁手部零件
	kubejs.shaped('create:brass_hand', [
		'BIB',
		'PPP',
		' P '
	], {
		I: '#forge:ingots/brass',
		P: '#forge:plates/cast_iron',
		B: '#forge:plates/brass'
	}).id('create:crafting/kinetics/brass_hand')
})