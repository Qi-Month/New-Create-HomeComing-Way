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
		"2x minecraft:andesite",
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

	// 坚固搅拌器
	kubejs.shaped('createmetallurgy:sturdy_whisk', [
		"BBB",
		"SBS",
		"TST"
	], {
		B: '#forge:plates/brass',
		S: '#forge:plates/obsidian',
		T: '#forge:plates/tungsten'
	}).id("createmetallurgy:sturdy_whisk")

	// 熔铸搅拌器
	kubejs.shaped("createmetallurgy:foundry_mixer", [
		" P ",
		"CBC",
		" S "
	], {
		P: "create:piston_extension_pole",
		C: "#create:metal_cogwheel",
		S: 'createmetallurgy:sturdy_whisk',
		B: "create:brass_casing"
	}).id("createmetallurgy:foundry_mixer")

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