ServerEvents.recipes((event) => {
	let { kubejs, create, minecraft } = event.recipes

	// 流体漏斗
	kubejs.shaped("flopper:flopper", [
		"ACA",
		"ABA",
		" A "
	], {
		A: "#forge:ingots/iron",
		B: "edenring:gravilite_shards",
		C: "#forge:glass_panes"
	}).id("flopper:recipes/flopper")

	kubejs.shaped("flopper:flopper", [
		"ACA",
		"ABA",
		" A "
	], {
		A: "#forge:ingots/iron",
		B: "edenring:gravilite_block",
		C: "#forge:glass_panes"
	}).id("flopper:recipes/flopper_2")

	// 砧板
	kubejs.shaped("farmersdelight:cutting_board", [
		"AA",
		"AA"
	], {
		A: "#minecraft:logs"
	}).id("farmersdelight:cutting_board")

	// 重力水晶锭
	create.sandpaper_polishing("new_create:gravilite_ingot", [
		"edenring:gravilite_shards"
	])

	// 随机两种 石头粉末 不重复 无序合成获得 混合石头粉末
	let itemGroups = [
		"new_create:stone_dust",
		"new_create:deepslate_dust",
		"new_create:tuff_dust",
		"new_create:calcite_dust"
	]
	for (let i = 0; i < itemGroups.length; i++) {
		for (let j = i + 1; j < itemGroups.length; j++) {
			kubejs.shapeless("new_create:mixed_stone_dust", [
				itemGroups[i],
				itemGroups[j]
			])
		}
	}

	// 干巴的藻球
	minecraft.smoking("new_create:drying_volvox_ball", [
		"new_create:volvox_ball"
	])
	minecraft.smelting("new_create:drying_volvox_ball", [
		"new_create:volvox_ball"
	])
})