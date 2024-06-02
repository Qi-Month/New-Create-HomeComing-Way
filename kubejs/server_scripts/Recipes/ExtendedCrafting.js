ServerEvents.recipes(e => {
	const { shaped_table, shapeless_table } = e.recipes.extendedcrafting

	// 动力搅拌机
	shaped_table('create:mechanical_mixer', [
		'  A  ',
		'BCACB',
		'DDEDD',
		'BCECB',
		'  F  '
	], {
		A: '#forge:ingots/bronze',
		B: '#forge:plates/bronze',
		C: '#minecraft:logs',
		D: 'create:cogwheel',
		E: '#create:shaft_add',
		F: 'create:whisk'
	})

	// 动力锟压机
	shaped_table('create:mechanical_press', [
		'  A  ',
		'BBABB',
		'FCDCF',
		'BGEGB',
		' GGG '
	], {
		A: '#create:shaft_add',
		B: '#minecraft:logs',
		C: 'create:cogwheel',
		D: 'create:large_cogwheel',
		E: 'new_create:cast_iron_block',
		F: '#minecraft:planks',
		G: '#forge:ingots/iron'
	})

	// 鼓风机
	shaped_table('2x create:encased_fan', [
		'ABBBA',
		'BCDCB',
		'BDEDB',
		'BCDCB',
		'ABBBA'
	], {
		A: 'create:andesite_casing',
		B: '#minecraft:planks',
		C: 'create:cogwheel',
		D: '#create:shaft_add',
		E: 'create:propeller'
	})

	//机械手
	shaped_table('create:deployer', [
		' A ',
		'BCB',
		'FEF',
		'BFB',
		' D '
	], {
		A: '#create:shaft_add',
		B: 'create:andesite_casing',
		C: '#forge:ingots/brass',
		D: 'create:brass_hand',
		E: '#minecraft:planks',
		F: '#forge:ingots/andesite_alloy'
	})

	// 轧机
	shaped_table('createaddition:rolling_mill', [
		'AABAA',
		'ED DE',
		'EDBDE',
		'CCCCC'
	], {
		A: 'new_create:cast_iron_sheet',
		B: 'create:shaft',
		C: 'create:andesite_casing',
		D: 'new_create:carbon_plate',
		E: '#forge:ingots/andesite_alloy'
	})

	// 电容
	shaped_table('12x createaddition:capacitor', [
		' AAA ',
		' ABA ',
		' ACA ',
		'ADEDA',
		'AFAFA'
	], {
		A: '#forge:plates/aluminum',
		B: 'immersiveengineering:wirecoil_copper',
		C: 'immersiveengineering:component_electronic',
		D: 'immersiveengineering:logic_circuit',
		E: 'new_create:inductive_mechanism',
		F: '#forge:wires/iron'
	})

	// 红石通量单元框架
	shaped_table('thermal:energy_cell_frame', [
		'ABABA',
		'BCDCB',
		'ADEDA',
		'BCDCB',
		'ABABA'
	], {
		A: '#forge:plates/lumium',
		B: '#forge:plates/lead',
		C: 'immersiveengineering:toolupgrade_revolver_electro',
		D: 'thermal:rf_coil',
		E: 'new_create:calculation_mechanism'
	})

	// 离心机
	shaped_table('vintageimprovements:centrifuge', [
		'  M  ',
		' GCG ',
		'MCSCM',
		' GCG ',
		'  M  '
	], {
		M: '#forge:ingots/mithril',
		G: '#forge:gears/rose_gold',
		C: 'new_create:cast_iron_casing',
		S: '#create:shaft_add'
	}).id('vintageimprovements:craft/centrifuge')

	// 熔炉
	shaped_table('minecraft:furnace', [
		'BBBBB',
		'BSSSB',
		'BSCSB',
		'BSSSB',
		'BBBBB'
	], {
		B: 'minecraft:blackstone',
		S: '#minecraft:soul_fire_base_blocks',
		C: '#forge:coal_coke'
	}).id('minecraft:furnace')

	// 压印机
	shaped_table('ae2:inscriber', [
		'CCFCC',
		'CGIGC',
		'FIOIF',
		'CGIGC',
		'CCFCC'
	], {
		F: '#forge:gems/fluix',
		C: 'create:brass_casing',
		O: 'create_new_age:overcharged_diamond',
		I: 'create_dd:integrated_circuit',
		G: 'create_new_age:overcharged_golden_sheet'
	}).id('ae2:network/blocks/inscribers')
})