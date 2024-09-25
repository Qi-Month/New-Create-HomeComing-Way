ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 流体漏斗
	kubejs.shaped("flopper:flopper", [
		"ACA",
		"ABA",
		" A "
	], {
		A: "#forge:ingots/iron",
		B: "edenring:gravilite_shards",
		C: "minecraft:glass_pane"
	}).id("flopper:recipes/flopper")

	kubejs.shaped("flopper:flopper", [
		"ACA",
		"ABA",
		" A "
	], {
		A: "#forge:ingots/iron",
		B: "edenring:gravilite_block",
		C: "minecraft:glass_pane"
	}).id("flopper:recipes/flopper_2")

	// 砧板
	kubejs.shaped("farmersdelight:cutting_board", [
		"AA",
		"AA"
	], {
		A: "#minecraft:logs"
	}).id("farmersdelight:cutting_board")
})