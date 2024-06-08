ServerEvents.recipes(e => {
	const {
		create,
		create_mechanical_extruder,
		immersiveengineering,
		kubejs,
		melter,
		minecraft,
		thermal
	} = e.recipes

	//手摇曲柄
	kubejs.shaped('create:hand_crank', [
		'A  ',
		'CBC',
		'  D'
	], {
		A: '#new_create:hammer',
		B: '#minecraft:planks',
		C: 'minecraft:flint',
		D: '#forge:stone'
	}).damageIngredient('#new_create:hammer')

	//石磨
	kubejs.shaped('create:millstone', [
		'A A',
		'CBC',
		'DDD'
	], {
		A: '#minecraft:planks',
		B: '#forge:ingots/copper',
		D: 'minecraft:smooth_stone',
		C: '#minecraft:logs',
	})

	// 安山岩
	create_mechanical_extruder.extruding('minecraft:andesite', [
		Fluid.of('new_create:andesite_compound_fluid'),
		Fluid.of('minecraft:lava')
	])

	// 小齿轮(半成品)
	minecraft.stonecutting('2x new_create:in_cogwheel', [
		'#forge:treated_wood'
	]).id('new_create:in_cogwheel_manual_only')
	create.cutting([
		Item.of('new_create:in_cogwheel', 2).withChance(1.0),
		Item.of('new_create:in_cogwheel', 2).withChance(0.15)
	], '#forge:treated_wood')

	// 大齿轮(半成品)
	minecraft.stonecutting('new_create:in_large_cogwheel', [
		'#forge:treated_wood'
	]).id('new_create:in_large_cogwheel_manual_only')
	create.cutting([
		Item.of('new_create:in_large_cogwheel').withChance(1.0),
		Item.of('new_create:in_large_cogwheel').withChance(0.15)
	], '#forge:treated_wood')

	// 小齿轮
	kubejs.shapeless('create:cogwheel', [
		'new_create:in_cogwheel',
		'new_create:primary_bearing',
		'#new_create:hammer'
	]).damageIngredient('#new_create:hammer')
	create.deploying('create:cogwheel', [
		'new_create:in_cogwheel',
		'create:shaft'
	])

	// 大齿轮
	kubejs.shapeless('create:large_cogwheel', [
		'new_create:in_large_cogwheel',
		'new_create:primary_bearing',
		'#new_create:hammer'
	]).damageIngredient('#new_create:hammer')
	create.deploying('create:large_cogwheel', [
		'new_create:in_large_cogwheel',
		'create:shaft'
	])
	create.deploying('create:large_cogwheel', [
		'create:cogwheel',
		'#forge:treated_wood'
	]).id('create:create.deploying/large_cogwheel')

	// 铜板
	kubejs.shapeless('create:copper_sheet', [
		'#forge:ingots/copper',
		'#new_create:hammer'
	]).damageIngredient('#new_create:hammer')

	// 粗锡=>粉碎锡
	create.milling([
		Item.of('2x create:crushed_raw_tin').withCount(1),
		Item.of('create:crushed_raw_tin').withChance(0.15)
	], '#forge:raw_materials/tin')

	// 搅拌器
	kubejs.shaped('create:whisk', [
		' A ',
		'BAB',
		'BBB'
	], {
		A: 'minecraft:flint',
		B: '#forge:plates/bronze'
	}).id('create:crafting/kinetics/whisk')

	// 工作盆
	kubejs.shaped('create:basin', [
		'S S',
		'SCS',
		'SSS'
	], {
		S: 'new_create:charred_cobblestone',
		C: '#forge:ingots/copper'
	})

	// 流体储罐
	kubejs.shaped('create:fluid_tank', [
		'C',
		'G',
		'C'
	], {
		C: '#forge:ingots/copper',
		G: '#forge:glass'
	}).id('create:crafting/kinetics/fluid_tank')

	// 铁锭
	create.mixing('minecraft:iron_ingot', [
		Item.of('create:crushed_raw_iron'),
		Item.of('#forge:dusts/coal'),
		Fluid.of('new_create:working_fluid', 250)
	])

	// 煤粉
	create.milling([
		Item.of('mekanism:dust_coal', 2).withChance(0.6),
		Item.of('mekanism:dust_coal', 3).withChance(0.3),
	], '#minecraft:coals')

	// 加工液
	create.mixing(Fluid.of('new_create:working_fluid', 500), [
		'2x #forge:slag',
		Fluid.of('minecraft:water', 500)
	])

	// 扇叶
	kubejs.shaped('create:propeller', [
		' A ',
		'ABA',
		' A '
	], {
		A: "new_create:cast_iron_sheet",
		B: '#create:shaft_add'
	})

	// 烈焰人燃烧室
	kubejs.shaped('create:empty_blaze_burner', [
		' A ',
		'ABA',
		' A '
	], {
		A: "new_create:cast_iron_sheet",
		B: "minecraft:netherrack"
	})

	// 扳手
	kubejs.shaped('create:wrench', [
		'PP',
		'PC',
		' R'
	], {
		P: '#forge:plates/gold',
		C: 'new_create:in_cogwheel',
		R: '#forge:rods/wooden'
	}).id('create:crafting/kinetics/wrench')

	// 安山混合物
	create.mixing('new_create:andesite_compound', [
		'4x #forge:andesite/nuggets',
		'4x #forge:clay',
		Fluid.of('minecraft:water', 1000)
	])

	// 安山混合液
	create.mixing(Fluid.of('new_create:andesite_compound_fluid', 500), [
		'new_create:andesite_compound',
		Fluid.of('minecraft:water', 1000)
	]).heated()

	// 吸管
	kubejs.shaped('createaddition:straw', [
		'R R',
		'R R',
		'R R'
	], {
		R: '#forge:rods/wooden'
	})

	// 注液器
	kubejs.shaped('create:spout', [
		'BAB',
		'BCB',
		' R '
	], {
		A: "minecraft:copper_ingot",
		B: "new_create:cast_iron_sheet",
		C: 'create:fluid_tank',
		R: '#forge:cured_rubber'
	})

	// 余烬面粉
	create.milling('create:cinder_flour', [
		'#forge:netherrack'
	])

	// 安山合金
	create.filling('create:andesite_alloy', [
		'minecraft:andesite',
		Fluid.of('new_create:andesite_compound_fluid', 50)
	])

	create.mixing('create:andesite_alloy', [
		'minecraft:andesite',
		Fluid.of('new_create:andesite_compound_fluid', 100)
	]).heated()

	// 安山机壳
	create.item_application('create:andesite_casing', [
		'#minecraft:logs',
		'create:andesite_alloy'
	])

	// 动力锯
	kubejs.shaped('create:mechanical_saw', [
		' D ',
		'DED',
		'FSF'
	], {
		D: "new_create:cast_iron_sheet",
		E: "new_create:cast_iron_ingot",
		F: "create:andesite_casing",
		S: '#create:shaft_add'
	})

	// 黄铜锭
	create.mixing('2x create:brass_ingot', [
		'2x thermal:bronze_ingot',
		Fluid.of('new_create:andesite_compound_fluid', 50)
	]).heated()

	// 风车轴承
	kubejs.shaped('create:windmill_bearing', [
		'AAA',
		'BCB',
		'DDD'
	], {
		A: "#minecraft:planks",
		B: "#minecraft:logs",
		C: "create:andesite_casing",
		D: "new_create:charred_cobblestone"
	})

	// 电子管
	kubejs.shaped('create:electron_tube', [
		' A ',
		' B ',
		' C '
	], {
		A: 'create:polished_rose_quartz',
		B: '#forge:plates/iron',
		C: 'minecraft:redstone'
	})

	// 传送带
	kubejs.shaped('2x create:belt_connector', [
		'CCC',
		'DDD'
	], {
		C: '#forge:cured_rubber',
		D: 'minecraft:dried_kelp'
	}).id('create:crafting/kinetics/belt_connector')

	// 黄铜机壳
	kubejs.shapeless('create:brass_casing', [
		'#forge:plates/brass',
		'create:electron_tube',
		'#forge:dusts/redstone',
		'create:andesite_casing'
	]).id('create:create.item_application/brass_casing_from_wood')

	// 精密部件
	create.sequenced_assembly('create:precision_mechanism', '#forge:plates/gold', [
		create.deploying('#forge:plates/gold', ['create:electron_tube', 'create:electron_tube']),
		create.deploying('#forge:plates/gold', ['#forge:nuggets/brass', '#forge:nuggets/brass']),
		create.deploying('#forge:plates/gold', ['minecraft:redstone', 'minecraft:redstone']),
		create.pressing('#forge:plates/gold', '#forge:plates/gold')
	]).loops(1).transitionalItem('create:golden_sheet')

	// 动力合成器
	create.sequenced_assembly('7x create:mechanical_crafter', 'create:brass_casing', [
		create.cutting('create:brass_casing', 'create:brass_casing'),
		create.deploying('create:brass_casing', ['create:cogwheel', 'create:cogwheel']),
		create.deploying('create:brass_casing', ['create:precision_mechanism', 'create:precision_mechanism']),
		create.deploying('create:brass_casing', ['create:electron_tube', 'create:electron_tube']),
		create.deploying('create:brass_casing', ['#forge:ingots/brass', '#forge:ingots/brass']),
		create.pressing('create:brass_casing', 'create:brass_casing')
	]).loops(1).transitionalItem('create:brass_casing')

	// 玫瑰石英
	kubejs.shaped('8x create:rose_quartz', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'minecraft:quartz',
		B: 'minecraft:redstone_block'
	})

	// 水车
	create.item_application('create:water_wheel', [
		'create:andesite_casing',
		'#minecraft:logs'
	])

	// 大水车
	kubejs.shaped('create:large_water_wheel', [
		' A ',
		'ABA',
		' A '
	], {
		B: 'create:water_wheel',
		A: '#minecraft:logs'
	})

	// 蒸汽引擎
	create.sequenced_assembly('create_sa:steam_engine', '#forge:plates/brass', [
		create.deploying('#forge:plates/brass', ['minecraft:piston', 'minecraft:piston']),
		create.deploying('#forge:plates/brass', ['create:fluid_tank', 'create:fluid_tank']),
		create.deploying('#forge:plates/brass', ['#create:shaft_add', '#create:shaft_add']),
		create.pressing('#forge:plates/brass', '#forge:plates/brass')
	]).loops(2).transitionalItem('#forge:plates/brass')

	// 粉碎轮
	create.mechanical_crafting('2x create:crushing_wheel', [
		' AAA ',
		'ABCBA',
		'ACDCA',
		'ABCBA',
		' AAA '
	], {
		A: 'minecraft:smooth_stone',
		B: 'create:andesite_alloy',
		C: '#forge:treated_wood',
		D: 'new_create:kinetic_mechanism'
	}).id('create:mechanical_crafting/crushing_wheel')

	// 碳板
	create.compacting('2x new_create:carbon_plate', [
		'8x #forge:dusts/coal',
		Fluid.of('new_create:working_fluid', 100)
	]).heated()

	// 碳棒
	create.mixing('2x new_create:carbon_rod', [
		'8x new_create:carbon_plate',
		'2x new_create:coking_coal_rod',
		Fluid.of('new_create:working_fluid', 200)
	]).heated()

	// 焦炭
	create.crushing([
		Item.of('immersiveengineering:dust_coke', 2).withChance(0.8),
		Item.of('immersiveengineering:dust_coke', 4).withChance(0.2)
	], 'thermal:coal_coke')

	// 焦炭棒
	create.compacting('new_create:coking_coal_rod', [
		'4x immersiveengineering:dust_coke',
		'#create:shaft_add',
		Fluid.of("minecraft:lava", 25)
	]).heated()

	// 发电机线圈
	create.mechanical_crafting('create_new_age:generator_coil', [
		' ABA ',
		'ABCBA',
		'BCDCB',
		'ABCBA',
		' ABA '
	], {
		A: 'new_create:carbon_plate',
		B: 'immersiveengineering:coil_lv',
		C: 'new_create:carbon_rod',
		D: 'new_create:inductive_mechanism'
	})

	// 空线轴
	kubejs.shaped('createaddition:spool', [
		' A ',
		'DBC',
		' A '
	], {
		A: '#forge:plates/cast_iron',
		B: '#forge:nuggets/iron',
		C: '#new_create:hammer',
		D: '#new_create:saw'
	}).damageIngredient('#new_create:saw').damageIngredient('#new_create:hammer')

	// 电磁构件
	create.sequenced_assembly([
		'new_create:inductive_mechanism'
	], 'immersiveengineering:coil_lv', [
		create.pressing('immersiveengineering:coil_lv', 'immersiveengineering:coil_lv'),
		create.deploying('immersiveengineering:coil_lv', ['new_create:carbon_plate', 'new_create:carbon_plate']),
		create.deploying('immersiveengineering:coil_lv', ['create:electron_tube', 'create:electron_tube']),
		create.deploying('immersiveengineering:coil_lv', ['#forge:ingots/zinc', '#forge:ingots/zinc'])
	]).loops(1).transitionalItem('new_create:in_inductive_mechanism')

	// 动力构件
	create.sequenced_assembly([
		'new_create:kinetic_mechanism'
	], '#minecraft:wooden_slabs', [
		create.deploying('#minecraft:wooden_slabs', ['create:cogwheel', 'create:cogwheel']),
		create.deploying('#minecraft:wooden_slabs', ['#create:shaft_add', '#create:shaft_add']),
		create.deploying('#minecraft:wooden_slabs', ['create:andesite_alloy', 'create:andesite_alloy'])
	]).loops(1).transitionalItem('new_create:in_kinetic_mechanism')

	// 密封构件
	create.sequenced_assembly([
		'new_create:sealed_mechanism'
	], 'new_create:kinetic_mechanism', [
		create.deploying('new_create:sealed_mechanism', ['new_create:sealed_mechanism', '#forge:cured_rubber']),
		create.deploying('new_create:sealed_mechanism', ['new_create:sealed_mechanism', '#forge:nuggets/iron'])
	]).loops(8).transitionalItem('new_create:in_sealed_mechanism')

	// 交流发电机
	create.mechanical_crafting('createaddition:alternator', [
		' AAA ',
		'ABFBA',
		'BCDCB',
		'EBCBE'
	], {
		A: 'new_create:carbon_plate',
		B: '#forge:plates/cast_iron',
		C: 'immersiveengineering:coil_lv',
		D: 'create:shaft',
		E: '#forge:plates/brass',
		F: 'new_create:inductive_mechanism'
	})

	// 碳刷
	kubejs.shaped('create_new_age:carbon_brushes', [
		'AAA',
		'BCB',
		'AAA'
	], {
		A: '#forge:plates/cast_iron',
		B: 'new_create:carbon_plate',
		C: 'new_create:carbon_rod'
	})

	// 普通激发器
	create.item_application('create_new_age:energiser_t1', [
		'create:railway_casing',
		'minecraft:lightning_rod'
	])

	// 黑曜石粉
	create.crushing([
		Item.of('create:powdered_obsidian', 4).withChance(0.4),
		Item.of('create:powdered_obsidian', 3).withChance(0.3),
		Item.of('create:powdered_obsidian', 2).withChance(0.3)
	], '#forge:obsidian')

	// 电动马达
	create.mechanical_crafting('createaddition:electric_motor', [
		'  A  ',
		' BCB ',
		'BDEDB',
		' BFB '
	], {
		A: 'createaddition:gold_spool',
		B: '#forge:plates/brass',
		C: 'create:shaft',
		D: 'createaddition:capacitor',
		E: 'new_create:inductive_mechanism',
		F: 'new_create:zinc_electron_tube'
	})

	// 电镀锌
	e.custom({
		"type": "create_new_age:energising",
		"energy_needed": 1200,
		"ingredients": [{ "tag": "forge:ingots/zinc" }],
		"results": [{ "item": "new_create:plating_zinc_ingot" }]
	})

	// 锌加工液
	create.compacting(Fluid.of('new_create:zinc_fluid', 500), [
		Item.of('new_create:plating_zinc_ingot', 2),
		Fluid.of('new_create:working_fluid', 250)
	]).heated()

	// 锌电子管
	create.filling('new_create:zinc_electron_tube', [
		'#forge:plates/zinc',
		Fluid.of('new_create:zinc_fluid', 100)
	])

	// 康铜粉
	create.mixing('4x immersiveengineering:dust_constantan', [
		'2x immersiveengineering:dust_copper',
		'2x immersiveengineering:dust_nickel',
		Fluid.of('new_create:working_fluid', 50)
	]).heated()

	// 康铜锭
	minecraft.blasting('immersiveengineering:ingot_constantan', [
		'#forge:dusts/constantan'
	])

	// 电路板
	create.sequenced_assembly('immersiveengineering:circuit_board', '#forge:plates/zinc', [
		create.deploying('createaddition:zinc_sheet', ['#forge:wires/copper', '#forge:wires/copper']),
		create.deploying('createaddition:zinc_sheet', ['immersiveengineering:component_electronic', 'immersiveengineering:component_electronic']),
		create.deploying('createaddition:zinc_sheet', ['#forge:nuggets/copper', '#forge:nuggets/copper']),
		create.deploying('createaddition:zinc_sheet', ['create:electron_tube', 'create:electron_tube'])
	]).transitionalItem('createaddition:zinc_sheet').loops(1)

	// 逻辑电路板
	create.sequenced_assembly('immersiveengineering:logic_circuit', 'immersiveengineering:circuit_board', [
		create.deploying('immersiveengineering:circuit_board', ['immersiveengineering:wirecutter', 'immersiveengineering:wirecutter']),
		create.deploying('immersiveengineering:circuit_board', ['#forge:wires/copper', '#forge:wires/copper']),
		create.deploying('immersiveengineering:circuit_board', ['new_create:inductive_mechanism', 'new_create:inductive_mechanism']),
		create.deploying('immersiveengineering:circuit_board', ['new_create:zinc_electron_tube', 'new_create:zinc_electron_tube'])
	]).transitionalItem('immersiveengineering:circuit_board').loops(1).damageIngredient('immersiveengineering:wirecutter')

	// 坚固板
	create.sequenced_assembly([
		Item.of('create:sturdy_sheet').withChance(0.75),
		Item.of('minecraft:gravel').withChance(0.25)
	], '#forge:dusts/obsidian', [
		create.pressing('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet'])
	]).loops(10).transitionalItem('create:unprocessed_obsidian_sheet')

	// 特斯拉线圈
	create.mechanical_crafting('createaddition:tesla_coil', [
		' ABA ',
		'ACBCA',
		'ADEDA',
		'ACFCA',
		'GGGGG'
	], {
		A: '#forge:plates/brass',
		B: '#forge:rods/iron',
		C: 'createaddition:capacitor',
		D: 'new_create:cast_electron_tube',
		E: 'createaddition:electric_motor',
		F: 'create_things_and_misc:vibration_mechanism',
		G: 'create:brass_casing'
	})

	// 铸铁量产
	create.compacting(Fluid.of('new_create:cast_iron_fluid', 500), [
		'2x minecraft:iron_ingot',
		'mekanism:dust_coal'
	]).heated()

	create.filling('new_create:cast_iron_ingot', [
		'#forge:plates/iron',
		Fluid.of('new_create:cast_iron_fluid', 100)
	])

	// 铸铁电子管
	create.filling('new_create:cast_electron_tube', [
		'new_create:zinc_electron_tube',
		Fluid.of('new_create:cast_iron_fluid', 125)
	])

	// 钢粉
	create.mixing('2x immersiveengineering:dust_steel', [
		'2x immersiveengineering:dust_iron',
		'2x mekanism:dust_coal',
		Fluid.of('new_create:working_fluid', 125)
	]).heated()

	// 铁粉
	create.crushing([
		Item.of('immersiveengineering:dust_iron', 4).withChance(0.11),
		Item.of('immersiveengineering:dust_iron', 3).withChance(0.4),
		Item.of('immersiveengineering:dust_iron', 2).withChance(0.5)
	], '#forge:ores/iron')

	// 原油探测器
	kubejs.shaped('createdieselgenerators:oil_scanner', [
		'ABA',
		'DCD',
		' C '
	], {
		A: 'create:andesite_alloy',
		B: 'thermal:silver_gear',
		C: '#forge:rods/iron',
		D: '#forge:plates/iron'
	})

	// 抽油机驴头
	kubejs.shaped('createdieselgenerators:pumpjack_head', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: '#forge:plates/cast_iron',
		B: 'new_create:carbon_plate',
		C: '#forge:ingots/zinc',
		D: 'minecraft:lead'
	}).id('createdieselgenerators:crafting/pumpjack_head')

	// 金属梁
	kubejs.shaped('4x create:metal_girder', [
		'AAA',
		'BBB'
	], {
		A: '#forge:plates/cast_iron',
		B: 'create:andesite_alloy'
	}).id('create:crafting/kinetics/metal_girder')

	// 抽油机曲柄
	create.mechanical_crafting('createdieselgenerators:pumpjack_crank', [
		'ABA',
		' C ',
		'DAD',
		'EFE'
	], {
		A: 'create:shaft',
		B: '#forge:plates/iron',
		C: 'new_create:calculation_mechanism',
		D: 'create:andesite_alloy',
		E: '#forge:plates/zinc',
		F: 'new_create:industrial_casing'
	})

	// 分馏控制器
	kubejs.shaped('4x createdieselgenerators:distillation_controller', [
		'ABA',
		'CDC'
	], {
		A: 'create:fluid_pipe',
		B: 'minecraft:compass',
		C: '#forge:plates/andesite_alloy',
		D: '#forge:gears/invar'
	}).id('createdieselgenerators:crafting/distillation_controller')

	// 红石通量线圈
	create.sequenced_assembly(
		'thermal:rf_coil',
		'create_things_and_misc:rose_quartz_sheet', [
		create.deploying('create_things_and_misc:rose_quartz_sheet', ['minecraft:redstone', 'minecraft:redstone']),
		create.deploying('create_things_and_misc:rose_quartz_sheet', ['#forge:wires/gold', '#forge:wires/gold']),
		create.deploying('create_things_and_misc:rose_quartz_sheet', ['#forge:nuggets/gold', '#forge:nuggets/gold']),
		create.deploying('create_things_and_misc:rose_quartz_sheet', ['immersiveengineering:wirecutter', 'immersiveengineering:wirecutter'])
	]).loops(1).transitionalItem('create_things_and_misc:rose_quartz_sheet').damageIngredient('immersiveengineering:wirecutter')

	// 玫瑰石英量产产线
	create.mixing(Fluid.of('new_create:rose_quartz_fluid', 200), [
		'4x minecraft:redstone',
		'4x minecraft:quartz'
	]).heated()

	create.filling('create:polished_rose_quartz', [
		'minecraft:quartz',
		Fluid.of('new_create:rose_quartz_fluid', 100)
	])

	// 机器框架
	create.item_application('thermal:machine_frame', [
		'new_create:steel_casing',
		'thermal:rf_coil'
	])

	// 智能构建
	create.sequenced_assembly([
		'new_create:calculation_mechanism'
	], '#forge:plates/steel', [
		create.pressing('#forge:plates/steel', '#forge:plates/steel'),
		create.deploying('#forge:plates/steel', ['immersiveengineering:plate_duroplast', 'immersiveengineering:plate_duroplast']),
		create.deploying('#forge:plates/steel', ['create:cogwheel', 'create:cogwheel']),
		create.deploying('#forge:plates/steel', ['#forge:nuggets/brass', '#forge:nuggets/brass']),
		create.pressing('#forge:plates/steel', '#forge:plates/steel')
	]).loops(1).transitionalItem('#forge:plates/steel')

	// 粘液球量产
	create.mixing('minecraft:slime_ball', [
		'create:dough',
		'minecraft:lime_dye',
		Fluid.of('minecraft:water', 200)
	])

	// 计算构件
	create.sequenced_assembly('new_create:calculation_mechanism', '#forge:plates/lumium', [
		create.deploying('#forge:plates/lumium', ['#forge:gears/invar', '#forge:gears/invar']),
		create.deploying('#forge:plates/lumium', ['createaddition:capacitor', 'createaddition:capacitor']),
		create.deploying('#forge:plates/lumium', ['#forge:nuggets/lead', '#forge:nuggets/lead']),
		create.deploying('#forge:plates/lumium', ['immersiveengineering:component_electronic_adv', 'immersiveengineering:component_electronic_adv']),
		create.deploying('#forge:plates/lumium', ['immersiveengineering:wirecutter', 'immersiveengineering:wirecutter']),
		create.pressing('#forge:plates/lumium', '#forge:plates/lumium')
	]).loops(1).transitionalItem('#forge:plates/lumium').damageIngredient('immersiveengineering:wirecutter')

	// 下界构件
	create.sequenced_assembly([
		'new_create:infernal_mechanism'
	], 'create:precision_mechanism', [
		create.filling('new_create:infernal_mechanism', ['new_create:infernal_mechanism', Fluid.of('minecraft:lava', 100)]),
		create.deploying('new_create:infernal_mechanism', ['new_create:infernal_mechanism', '#forge:plates/obsidian']),
		create.filling('new_create:infernal_mechanism', ['new_create:infernal_mechanism', Fluid.of('new_create:soul', 100)])
	]).loops(1).transitionalItem('new_create:in_infernal_mechanism')

	// 加强电子管量产
	create.filling('2x immersiveengineering:toolupgrade_revolver_electro', [
		'immersiveengineering:circuit_board',
		Fluid.of('new_create:high_grade_refined_oil', 200)
	])

	// 振动台
	create.mechanical_crafting('vintageimprovements:vibrating_table', [
		'A   A',
		'AWFWA',
		'HSPSH',
		'ASVSA',
		'ACCCA'
	], {
		A: '#forge:andesite_alloy',
		S: '#vintageimprovements:springs',
		C: 'create:andesite_casing',
		P: 'create:piston_extension_pole',
		F: '#minecraft:wooden_pressure_plates',
		H: '#create:shaft_add',
		V: 'create_things_and_misc:vibration_mechanism',
		W: '#minecraft:wooden_slabs'
	}).id('vintageimprovements:craft/vibrating_table')

	// 铸铁机壳
	create.filling('new_create:cast_iron_casing', [
		Fluid.of('new_create:cast_iron_fluid', 100),
		'#forge:treated_wood'
	])

	// 集成电路板
	e.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"top": { "item": 'new_create:lapis_sheet' },
			"bottom": { "item": 'create_new_age:overcharged_golden_sheet' },
			"middle": { "item": 'ae2:printed_silicon' },
		},
		"mode": "inscribe",
		"result": { "item": 'new_create:integrated_circuit' }
	}).id('create_dd:sequenced_assembly/integrated_circuit')

	// 造石机
	kubejs.shaped('create_mechanical_extruder:mechanical_extruder', [
		' E ',
		'FCF',
		'JBJ'
	], {
		F: 'flopper:flopper',
		E: 'createdieselgenerators:engine_piston',
		B: '#forge:storage_blocks/cast_iron',
		C: 'create:andesite_funnel',
		J: 'create:brass_casing'
	}).id('create_mechanical_extruder:mechanical_extruder')

	// 硅晶
	e.custom({
		"type": "create:sequenced_assembly",
		"ingredient": { "item": "ae2:silicon" },
		"results": [{ "item": "new_create:silicon_crystal" }],
		"sequence": [{
			"type": "vintageimprovements:polishing",
			"ingredients": [{ "item": "ae2:silicon" }],
			"results": [{ "item": "new_create:silicon_crystal" }],
			"speed_limits": 3,
			"processingTime": 20
		}],
		"loops": 5,
		"transitionalItem": { "item": "ae2:silicon" }
	})

	// 砂带
	kubejs.shaped('vintageimprovements:grinder_belt', [
		'SSS',
		'SBS',
		'SSS'
	], {
		S: '#create:sandpaper',
		B: 'create:belt_connector'
	}).id('vintageimprovements:craft/grinder_belt')

	// 秘银板
	create.pressing('new_create:mithril_sheet', [
		'new_create:mithril_ingot'
	])

	// 工作盆盖板 
	kubejs.shaped('createdieselgenerators:basin_lid', [
		'CCC',
		'CIC',
		'CCC'
	], {
		C: 'new_create:charred_cobblestone',
		I: '#forge:ingots/copper'
	})

	// 铸造盆
	kubejs.shaped('2x createmetallurgy:casting_basin', [
		'A A',
		'A A',
		'AAA'
	], {
		A: 'create:andesite_alloy'
	}).id('createmetallurgy:casting_basin')

	kubejs.shaped('createmetallurgy:casting_basin', [
		'C C',
		'C C',
		'CCC'
	], {
		C: 'new_create:charred_cobblestone'
	})

	// 铸造台
	kubejs.shaped('2x createmetallurgy:casting_table', [
		'AAA',
		'A A',
		'A A'
	], {
		A: 'create:andesite_alloy'
	}).id('createmetallurgy:casting_table')

	kubejs.shaped('createmetallurgy:casting_table', [
		'CCC',
		'C C',
		'C C'
	], {
		C: 'new_create:charred_cobblestone'
	})

	// 熔铸盖
	kubejs.shaped('createmetallurgy:glassed_foundry_lid', [
		'C C',
		'CGC',
		'G G'
	], {
		C: 'new_create:charred_cobblestone',
		G: '#forge:glass'
	})

	kubejs.shaped('createmetallurgy:glassed_foundry_lid', [
		'AGA',
		'G G'
	], {
		A: 'create:andesite_alloy',
		G: '#forge:glass'
	}).id('createmetallurgy:glassed_foundry_lid')

	// 砂带磨床
	kubejs.shaped('vintageimprovements:belt_grinder', [
		'GGG',
		'AMA',
		'CSC'
	], {
		G: 'vintageimprovements:grinder_belt',
		A: '#forge:andesite_alloy',
		M: 'create:precision_mechanism',
		C: 'create:andesite_casing',
		S: '#create:shaft_add'
	}).id('vintageimprovements:craft/belt_grinder')

	// 尘土
	create.milling([
		Item.of('minecraft:bone_meal',).withChance(0.2),
		Item.of('minecraft:redstone',).withChance(0.15),
		Item.of('thermal:lapis_dust',).withChance(0.15),
		Item.of('minecraft:glowstone_dust').withChance(0.3)
	], 'new_create:dust')

	create.crushing([
		Item.of('minecraft:bone_meal').withChance(0.4),
		Item.of('minecraft:redstone').withChance(0.3),
		Item.of('thermal:lapis_dust').withChance(0.6),
		Item.of('minecraft:glowstone_dust').withChance(0.5),
		Item.of('minecraft:blaze_powder').withChance(0.2),
		Item.of('ae2:sky_dust').withChance(0.1),
		Item.of('ae2:fluix_dust').withChance(0.12),
		Item.of('ae2:certus_quartz_dust').withChance(0.125),
		Item.of('ae2:ender_dust').withChance(0.125)
	], 'new_create:dust')
})