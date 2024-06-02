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

	// 铜锭
	e.custom({
		"type": "immersiveengineering:alloy",
		"input0": { "tag": "forge:raw_materials/copper" },
		"input1": { "tag": "minecraft:coals" },
		"result": { "base_ingredient": { "tag": "forge:ingots/copper" }, "conut": 1 },
		"time": 300
	})

	// 铸铁
	e.custom({
		"type": "immersiveengineering:alloy",
		"input0": { "tag": "forge:ingots/iron" },
		"input1": { "tag": "forge:ingots/iron" },
		"result": { "base_ingredient": { "item": "new_create:cast_iron_ingot" }, "conut": 1 },
		"time": 150
	})

	// 铸铁板
	e.custom({
		"type": "immersiveengineering:alloy",
		"input0": { "tag": "forge:plates/iron" },
		"input1": { "tag": "forge:plates/iron" },
		"result": { "base_ingredient": { "item": "new_create:cast_iron_sheet" }, "conut": 1 },
		"time": 150
	})

	// 工程师锤
	kubejs.shaped("immersiveengineering:hammer", [
		' AB',
		'ECA',
		'CF '
	], {
		A: "new_create:charred_cobblestone",
		B: "#forge:string",
		C: "#forge:rods/wooden",
		E: '#new_create:hammer',
		F: '#new_create:saw'
	}).damageIngredient('#new_create:tools')

	// 防腐木板
	kubejs.shaped('8x immersiveengineering:treated_wood_horizontal', [
		'PPP',
		'PCP',
		'PPP'
	], {
		P: '#minecraft:planks',
		C: Item.of(
			'ceramicbucket:ceramic_bucket',
			'{Fluid:{Amount:1000,FluidName:"new_create:embalming_fluid"}}'
		).weakNBT()
	}).replaceIngredient(Item.of(
		'ceramicbucket:ceramic_bucket',
		'{Fluid:{Amount:1000,FluidName:"new_create:embalming_fluid"}}'
	).weakNBT(), 'ceramicbucket:ceramic_bucket')

	kubejs.shaped('8x immersiveengineering:treated_wood_horizontal', [
		'PPP',
		'PBP',
		'PPP'
	], {
		P: '#minecraft:planks',
		B: '#forge:creosote_bucket'
	}).replaceIngredient('#forge:creosote_bucket', 'minecraft:bucket')

	create.mixing('8x immersiveengineering:treated_wood_horizontal', [
		'8x #minecraft:planks',
		{ fluidTag: 'forge:creosote', amount: 1000 }
	]).id('immersiveengineering:crafting/treated_wood_horizontal')

	create.mixing('immersiveengineering:treated_wood_horizontal', [
		'#minecraft:planks',
		{ fluidTag: 'forge:creosote', amount: 125 }
	])

	create.filling('immersiveengineering:treated_wood_horizontal', [
		'#minecraft:planks',
		{ fluidTag: "forge:creosote", amount: 125 }
	]).id('createaddition:create.filling/treated_wood_planks')

	// 锡锭
	e.custom({
		"type": "immersiveengineering:alloy",
		"input0": { "item": 'create:crushed_raw_tin' },
		"input1": { "tag": "minecraft:coals" },
		"result": { "base_ingredient": { "tag": 'forge:ingots/tin' }, "count": 1 },
		"time": 300
	})

	// 青铜锭
	e.custom({
		"type": "immersiveengineering:alloy",
		"input0": { "tag": 'forge:ingots/copper', "count": 3 },
		"input1": { "tag": 'forge:ingots/tin' },
		"result": { "item": 'thermal:bronze_ingot', "count": 4 },
		"time": 300
	})

	// 高炉砖
	kubejs.shaped('3x immersiveengineering:blastbrick', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: "minecraft:brick",
		B: '#forge:ingots/copper',
		C: 'immersiveengineering:alloybrick'
	}).id('immersiveengineering:crafting/blastbrick')

	// 焦炉砖
	kubejs.shaped('3x immersiveengineering:cokebrick', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'minecraft:clay_ball',
		B: '#forge:ingots/copper',
		C: 'immersiveengineering:alloybrick'
	}).id('immersiveengineering:crafting/cokebrick')

	// 矿渣
	e.custom({
		"type": "immersiveengineering:blast_furnace",
		"input": { "tag": "minecraft:logs" },
		"result": { "item": "thermal:coal_coke" },
		"slag": { "item": "immersiveengineering:slag" },
		"time": 200
	})

	// 铁板金属
	create.compacting('2x immersiveengineering:sheetmetal_iron', [
		'4x new_create:cast_iron_sheet'
	]).id('immersiveengineering:crafting/sheetmetal_iron')

	// 传送带
	kubejs.shaped('immersiveengineering:conveyor_basic', [
		'AAA',
		'BCB'
	], {
		A: '#forge:leather',
		B: '#forge:ingots/copper',
		C: 'minecraft:redstone'
	}).id('immersiveengineering:crafting/conveyor_basic')

	// 工业机壳
	e.custom({
		"type": "immersiveengineering:metal_press",
		"energy": 2400,
		"input": { "base_ingredient": { "tag": 'forge:plates/industrial_iron' }, "count": 4 },
		"mold": 'new_create:mold_block',
		"result": { "item": 'create_dd:industrial_casing' }
	})

	// 金属模具:块
	e.custom({
		"type": "immersiveengineering:blueprint",
		"category": "molds",
		"inputs": [{ "base_ingredient": { "tag": "forge:plates/steel" }, "count": 3 },
		{ "item": "immersiveengineering:wirecutter" }],
		"result": { "item": 'new_create:mold_block' }
	})

	// 混合汽油
	e.custom({
		"type": "immersiveengineering:refinery",
		"energy": 240,
		"input0": { "tag": "forge:industrial_fuel", "amount": 20 },
		"input1": { "tag": "forge:gasoline", "amount": 20 },
		"result": { "fluid": "new_create:mixed_gasoline", "amount": 40 }
	})

	// 钢机壳
	e.custom({
		"type": "immersiveengineering:metal_press",
		"energy": 2400,
		"input": { "base_ingredient": { "tag": 'forge:ingots/steel' }, "count": 4 },
		"mold": 'new_create:mold_block',
		"result": { "item": 'create_dd:steel_casing' }
	})

	// 真空管
	e.custom({
		"type": "immersiveengineering:blueprint",
		"category": "components",
		"inputs": [
			{ "tag": "forge:glass" },
			{ "tag": "forge:plates/nickel" },
			{ "tag": "forge:wires/copper" },
			{ "item": "new_create:plastic_sheet" }
		],
		"result": { "item": "immersiveengineering:electron_tube", "count": 3 }
	}).id('immersiveengineering:blueprint/electron_tube')

	// 加强电子管
	kubejs.shaped('immersiveengineering:toolupgrade_revolver_electro', [
		'AAA',
		'DED',
		'BCB'
	], {
		A: 'immersiveengineering:electron_tube',
		B: '#forge:rods/copper',
		C: '#forge:wires/copper',
		D: 'new_create:carbon_plate',
		E: 'create_dd:calculation_mechanism'
	}).id('immersiveengineering:crafting/toolupgrade_revolver_electro')

	// 流体管道
	create.compacting('immersiveengineering:fluid_pipe', [
		'4x new_create:cast_iron_sheet',
		'2x minecraft:slime_ball'
	])

	// 铜线圈
	kubejs.shaped('immersiveengineering:coil_lv', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'createaddition:copper_spool',
		B: '#forge:rods/iron'
	})

	// 高级精炼油
	e.custom({
		"type": "immersiveengineering:mixer",
		"energy": 2000,
		"fluid": { "tag": 'thermal:refined_fuel', "amount": 500 },
		"inputs": [{ "tag": 'forge:tar' }],
		"result": { "fluid": 'new_create:high_grade_refined_oil', "amount": 500 }
	})

	// 秘银溶液
	e.custom({
		"type": "immersiveengineering:mixer",
		"energy": 2000,
		"fluid": { "amount": 250, "tag": 'forge:high_grade_refined_oil' },
		"inputs": [{ "item": 'mekanism:dust_emerald' }],
		"result": { "amount": 250, "fluid": 'new_create:mithril_fluid' }
	})

	// 琥珀金
	create.mixing('2x thermal:electrum_ingot', [
		'#forge:ingots/gold',
		'#forge:ingots/silver'
	]).heated()

	// 粗硅
	e.custom({
		"type": "immersiveengineering:arc_furnace",
		"additives": [{ "tag": "forge:dusts/coal_coke" }],
		"input": { "item": "new_create:pure_quartz" },
		"results": [{ "item": "new_create:saw_silicon" }],
		"slag": { "item": "thermal:sulfur_dust" },
		"time": 800,
		"energy": 204800
	})
})