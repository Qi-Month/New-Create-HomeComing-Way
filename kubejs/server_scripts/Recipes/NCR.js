ServerEvents.recipes((event) => {
	let { kubejs, create } = event.recipes

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
})        