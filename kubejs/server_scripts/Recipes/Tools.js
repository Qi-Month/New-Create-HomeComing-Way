ServerEvents.recipes(e => {
	const { shaped, shapeless } = e.recipes.kubejs
	const { campfire_cooking } = e.recipes.minecraft

	// 燧石剑
	shaped('new_create:flint_sword', [
		'F',
		'G',
		'R'
	], {
		F: 'minecraft:flint',
		R: '#forge:rods/wooden',
		G: 'new_create:grass_string'
	})

	// 燧石剑(Plus Pro Max Super Update😋)
	campfire_cooking(Item.of('new_create:flint_sword', "{Damage:0,RepairCost:2,display:{Name:'{\"text\":\"§c燧石剑(Plus Pro Max Super Update)\"}'}}").enchant('minecraft:fire_aspect', 1), [
		'new_create:flint_sword'
	]).cookingTime(1200)

	// 燧石镐
	shaped('new_create:flint_pickaxe', [
		'FGF',
		' R ',
		' R '
	], {
		F: 'minecraft:flint',
		R: '#forge:rods/wooden',
		G: 'new_create:grass_string'
	})

	// 燧石斧
	shaped('new_create:flint_axe', [
		'FG',
		'FR',
		' R'
	], {
		F: 'minecraft:flint',
		R: '#forge:rods/wooden',
		G: 'new_create:grass_string'
	})

	// 燧石短柄斧
	shaped('new_create:flint_handaxe', [
		'FS',
		' R'
	], {
		F: 'new_create:flint_knapp',
		S: '#forge:string',
		R: '#forge:rods/wooden'
	})

	// 燧石锹
	shaped('new_create:flint_shovel', [
		'GFG',
		' G ',
		' R '
	], {
		F: 'minecraft:flint',
		R: '#forge:rods/wooden',
		G: 'new_create:grass_string'
	})

	// 青铜镐
	shaped('new_create:bronze_pickaxe', [
		'BBB',
		' R ',
		' R '
	], {
		B: '#forge:ingots/bronze',
		R: '#forge:rods/wooden'
	})

	// 青铜斧
	shaped('new_create:bronze_axe', [
		'BB',
		'BR',
		' R'
	], {
		B: '#forge:ingots/bronze',
		R: '#forge:rods/wooden'
	})

	// 青铜锹
	shaped('new_create:bronze_shovel', [
		'B',
		'R',
		'R'
	], {
		B: '#forge:ingots/bronze',
		R: '#forge:rods/wooden'
	})

	// 燧石小刀
	shaped('farmersdelight:flint_knife', [
		' F',
		'RS'
	], {
		F: 'minecraft:flint',
		R: '#forge:rods/wooden',
		S: '#forge:string'
	}).id('farmersdelight:flint_knife')

	// 石镐
	shaped('minecraft:stone_pickaxe', [
		'ABA',
		'ECD',
		' C '
	], {
		A: 'new_create:charred_cobblestone',
		B: '#forge:string',
		C: '#forge:rods/wooden',
		D: '#new_create:hammer',
		E: '#forge:tools/knives'
	})
		.damageIngredient('#new_create:hammer')
		.damageIngredient('#forge:tools/knives')

	// 石剑
	shaped('minecraft:stone_sword', [
		' A ',
		'BCD',
		' E '
	], {
		A: 'new_create:charred_cobblestone',
		B: '#forge:tools/knives',
		C: '#forge:string',
		D: '#new_create:hammer',
		E: '#forge:rods/wooden'
	})
		.damageIngredient('#new_create:hammer')
		.damageIngredient('#forge:tools/knives')

	// 石斧
	shaped('minecraft:stone_axe', [
		'ABD',
		'ACE',
		' C '
	], {
		A: 'new_create:charred_cobblestone',
		B: '#forge:string',
		C: '#forge:rods/wooden',
		D: '#forge:tools/knives',
		E: '#new_create:hammer'
	})
		.damageIngredient('#new_create:hammer')
		.damageIngredient('#forge:tools/knives')

	// 石锹
	shaped('minecraft:stone_shovel', [
		'ABA',
		'CDE',
		' D '
	], {
		A: '#forge:string',
		B: 'new_create:charred_cobblestone',
		C: '#forge:tools/knives',
		D: '#forge:rods/wooden',
		E: '#new_create:hammer'
	})
		.damageIngredient('#new_create:hammer')
		.damageIngredient('#forge:tools/knives')

	// 石锄
	shaped('minecraft:stone_hoe', [
		'AB ',
		'ECD',
		' C '
	], {
		A: 'new_create:charred_cobblestone',
		B: '#forge:string',
		C: '#forge:rods/wooden',
		D: '#forge:tools/knives',
		E: '#new_create:hammer'
	})
		.damageIngredient('#new_create:hammer')
		.damageIngredient('#forge:tools/knives')

	// 石锤
	shaped('new_create:stone_hammer', [
		'ABA',
		' CD',
		' C '
	], {
		A: '#forge:cobblestone',
		B: '#forge:string',
		C: '#forge:rods/wooden',
		D: '#forge:tools/knives'
	}).damageIngredient('#forge:tools/knives')

	// 铁锤
	shaped('new_create:iron_hammer', [
		' IS',
		' RI',
		'R  '
	], {
		I: '#forge:ingots/iron',
		R: '#forge:rods/wooden',
		S: '#forge:string'
	})

	// 钻石锤
	shaped('new_create:diamond_hammer', [
		' DS',
		' RD',
		'R  '
	], {
		D: '#forge:gems/diamond',
		R: '#forge:rods/wooden',
		S: '#forge:string'
	})

	// 燧石锯子
	shaped('new_create:flint_saw', [
		'AB ',
		'A B',
		' CD'
	], {
		A: 'minecraft:flint',
		B: '#minecraft:planks',
		C: '#minecraft:logs',
		D: '#forge:string'
	})

	// 铁锯子
	shaped('new_create:iron_saw', [
		'AB ',
		'A B',
		' CD'
	], {
		A: '#forge:ingots/iron',
		B: '#minecraft:planks',
		C: '#minecraft:logs',
		D: '#forge:string'
	})

	// 钻石锯子
	shaped('new_create:diamond_saw', [
		'AB ',
		'A B',
		' CD'
	], {
		A: '#forge:gems/diamond',
		B: '#minecraft:planks',
		C: '#minecraft:logs',
		D: '#forge:string'
	})

	// 铸铁帽子
	shaped('minecraft:iron_helmet', [
		'CCC',
		'C C'
	], {
		C: '#forge:ingots/cast_iron'
	}).id('minecraft:iron_helmet')

	// 铸铁胸甲
	shaped('minecraft:iron_chestplate', [
		'C C',
		'CCC',
		'CCC'
	], {
		C: '#forge:ingots/cast_iron'
	}).id('minecraft:iron_chestplate')

	// 铸铁裤腿
	shaped('minecraft:iron_leggings', [
		'CCC',
		'C C',
		'C C'
	], {
		C: '#forge:ingots/cast_iron'
	}).id('minecraft:iron_leggings')

	// 铸铁靴子
	shaped('minecraft:iron_boots', [
		'C C',
		'C C'
	], {
		C: '#forge:ingots/cast_iron'
	}).id('minecraft:iron_boots')

	// 铸铁剑
	shaped('minecraft:iron_sword', [
		'C',
		'C',
		'R'
	], {
		C: '#forge:ingots/cast_iron',
		R: '#forge:rods/wooden'
	}).id('minecraft:iron_sword')

	// 铸铁镐
	shaped('minecraft:iron_pickaxe', [
		'CCC',
		' R ',
		' R '
	], {
		C: '#forge:ingots/cast_iron',
		R: '#forge:rods/wooden'
	}).id('minecraft:iron_pickaxe')

	// 铸铁斧
	shaped('minecraft:iron_axe', [
		'CC',
		'CR',
		' R'
	], {
		C: '#forge:ingots/cast_iron',
		R: '#forge:rods/wooden'
	}).id('minecraft:iron_axe')

	// 铸铁锹
	shaped('minecraft:iron_shovel', [
		'C',
		'R',
		'R'
	], {
		C: '#forge:ingots/cast_iron',
		R: '#forge:rods/wooden'
	}).id('minecraft:iron_shovel')

	// 铸铁锄
	shaped('minecraft:iron_hoe', [
		'CC',
		' R',
		' R'
	], {
		C: '#forge:ingots/cast_iron',
		R: '#forge:rods/wooden'
	}).id('minecraft:iron_hoe')

	// 火绒
	shapeless('new_create:tinder', [
		'new_create:grass_fiber',
		'minecraft:flint',
		'new_create:flint_knapp'
	])
})