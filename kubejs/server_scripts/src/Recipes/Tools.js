ServerEvents.recipes((event) => {
	const { kubejs } = event.recipes

	// 火绒
	kubejs.shapeless('new_create:tinder', [
		'minecraft:flint',
		'new_create:flint_knapp',
		'new_create:hay'
	])

	// 燧石剑
	kubejs.shaped('new_create:flint_sword', [
		'F',
		'G',
		'R'
	], {
		F: 'minecraft:flint',
		R: '#forge:rods/wooden',
		G: 'new_create:grass_string'
	})

	// 燧石镐
	kubejs.shaped('new_create:flint_pickaxe', [
		'FGF',
		' R ',
		' R '
	], {
		F: 'minecraft:flint',
		R: '#forge:rods/wooden',
		G: 'new_create:grass_string'
	})

	// 燧石斧
	kubejs.shaped('new_create:flint_axe', [
		'FG',
		'FR',
		' R'
	], {
		F: 'minecraft:flint',
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
		F: 'minecraft:flint',
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
})