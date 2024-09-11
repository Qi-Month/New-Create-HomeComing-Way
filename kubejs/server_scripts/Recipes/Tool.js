ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 气球菇
	kubejs.shaped("new_create:balloon_mushroom_sword", [
		"A",
		"A",
		"B"
	], {
		A: "edenring:balloon_mushroom_planks",
		B: "#forge:rods/wooden"
	})

	kubejs.shaped("new_create:balloon_mushroom_pickaxe", [
		"AAA",
		" B ",
		" B "
	], {
		A: "edenring:balloon_mushroom_planks",
		B: "#forge:rods/wooden"
	})

	kubejs.shaped("new_create:balloon_mushroom_axe", [
		"AA",
		"AB",
		" B"
	], {
		A: "edenring:balloon_mushroom_planks",
		B: "#forge:rods/wooden"
	})

	kubejs.shaped("new_create:balloon_mushroom_shovel", [
		"A",
		"B",
		"B"
	], {
		A: "edenring:balloon_mushroom_planks",
		B: "#forge:rods/wooden"
	})

	kubejs.shaped("new_create:balloon_mushroom_hoe", [
		"AA",
		" B",
		" B"
	], {
		A: "edenring:balloon_mushroom_planks",
		B: "#forge:rods/wooden"
	})
})