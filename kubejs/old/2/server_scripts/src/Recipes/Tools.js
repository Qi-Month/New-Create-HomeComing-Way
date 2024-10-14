ServerEvents.recipes((event) => {
	const { kubejs } = event.recipes

	// 火绒
	kubejs.shapeless('new_create:tinder', [
		'#forge:flint',
		'new_create:flint_knapp',
		'new_create:hay'
	])

	// 燧石剑
	kubejs.shaped('new_create:flint_sword', [
		'F',
		'G',
		'R'
	], {
		F: '#forge:flint',
		R: '#forge:rods/wooden',
		G: 'new_create:grass_string'
	})

	// 燧石镐
	kubejs.shaped('new_create:flint_pickaxe', [
		'FGF',
		' R ',
		' R '
	], {
		F: '#forge:flint',
		R: '#forge:rods/wooden',
		G: 'new_create:grass_string'
	})

	// 燧石斧
	kubejs.shaped('new_create:flint_axe', [
		'FG',
		'FR',
		' R'
	], {
		F: '#forge:flint',
		R: '#forge:rods/wooden',
		G: 'new_create:grass_string'
	})

	// 燧石短柄斧
	kubejs.shaped('new_create:flint_handaxe', [
		'FS',
		' R'
	], {
		F: 'new_create:flint_knapp',
		S: '#forge:string',
		R: '#forge:rods/wooden'
	})

	// 燧石锹
	kubejs.shaped('new_create:flint_shovel', [
		'GFG',
		' G ',
		' R '
	], {
		F: '#forge:flint',
		R: '#forge:rods/wooden',
		G: 'new_create:grass_string'
	})

	// 青铜镐
	kubejs.shaped('new_create:bronze_pickaxe', [
		'BBB',
		' R ',
		' R '
	], {
		B: '#forge:ingots/bronze',
		R: '#forge:rods/wooden'
	})

	// 青铜斧
	kubejs.shaped('new_create:bronze_axe', [
		'BB',
		'BR',
		' R'
	], {
		B: '#forge:ingots/bronze',
		R: '#forge:rods/wooden'
	})

	// 青铜锹
	kubejs.shaped('new_create:bronze_shovel', [
		'B',
		'R',
		'R'
	], {
		B: '#forge:ingots/bronze',
		R: '#forge:rods/wooden'
	})

	// 铸铁帽子
	kubejs.shaped('new_create:cast_iron_helmet', [
		'CCC',
		'C C'
	], {
		C: '#forge:ingots/cast_iron'
	})

	// 铸铁胸甲
	kubejs.shaped('new_create:cast_iron_chestplate', [
		'C C',
		'CCC',
		'CCC'
	], {
		C: '#forge:ingots/cast_iron'
	})

	// 铸铁裤腿
	kubejs.shaped('new_create:cast_iron_leggings', [
		'CCC',
		'C C',
		'C C'
	], {
		C: '#forge:ingots/cast_iron'
	})

	// 铸铁靴子
	kubejs.shaped('new_create:cast_iron_boots', [
		'C C',
		'C C'
	], {
		C: '#forge:ingots/cast_iron'
	})

	// 铸铁剑
	kubejs.shaped('new_create:cast_iron_sword', [
		'C',
		'C',
		'R'
	], {
		C: '#forge:ingots/cast_iron',
		R: '#forge:rods/wooden'
	})

	// 铸铁镐
	kubejs.shaped('new_create:cast_iron_pickaxe', [
		'CCC',
		' R ',
		' R '
	], {
		C: '#forge:ingots/cast_iron',
		R: '#forge:rods/wooden'
	})

	// 铸铁斧
	kubejs.shaped('new_create:cast_iron_axe', [
		'CC',
		'CR',
		' R'
	], {
		C: '#forge:ingots/cast_iron',
		R: '#forge:rods/wooden'
	})

	// 铸铁锹
	kubejs.shaped('new_create:cast_iron_shovel', [
		'C',
		'R',
		'R'
	], {
		C: '#forge:ingots/cast_iron',
		R: '#forge:rods/wooden'
	})

	// 铸铁锄
	kubejs.shaped('new_create:cast_iron_hoe', [
		'CC',
		' R',
		' R'
	], {
		C: '#forge:ingots/cast_iron',
		R: '#forge:rods/wooden'
	})
})