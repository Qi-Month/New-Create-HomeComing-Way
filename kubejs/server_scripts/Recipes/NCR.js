ServerEvents.recipes((event) => {
	let { kubejs, create, minecraft } = event.recipes

	// 意义不明的转换
	kubejs.shapeless("naturescompass:naturescompass", [
		"naturescompass:naturescompass"
	])

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

	// 石头粉
	let stoneDust = [
		"stone",
		"deepslate",
		"tuff",
		"calcite"
	]
	stoneDust.forEach((name) => {
		create.milling(`new_create:${name}_dust`, [
			`minecraft:${name}`
		])
	})

	create.milling("new_create:stone_dust", [
		"minecraft:cobblestone"
	])

	create.milling("new_create:deepslate_dust", [
		"minecraft:cobbled_deepslate"
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

	// 压缩
	let levels = ["compressed", "double_compressed", "triple_compressed"]

	let materials = [
		"minecraft:andesite",
		"minecraft:tuff",
		"minecraft:calcite"
	]
	materials.forEach((material) => {
		kubejs.shapeless(`new_create:compressed_${material.split(':')[1]}`, [
			`9x ${material}`
		])
		kubejs.shapeless(`9x ${material}`, [
			`new_create:compressed_${material.split(':')[1]}`
		])
		levels.forEach((level, index) => {
			if (index > 0) {
				let prevLevel = levels[index - 1]
				kubejs.shapeless(`new_create:${level}_${material.split(':')[1]}`, [
					`9x new_create:${prevLevel}_${material.split(':')[1]}`
				])
				kubejs.shapeless(`9x new_create:${prevLevel}_${material.split(':')[1]}`, [
					`new_create:${level}_${material.split(':')[1]}`
				])
			}
		})
	})

	// 干巴的藻球
	minecraft.smoking("new_create:drying_volvox_ball", [
		"new_create:volvox_ball"
	])
	minecraft.smelting("new_create:drying_volvox_ball", [
		"new_create:volvox_ball"
	])

	// 脑电提取机
	kubejs.shaped("new_create:brain_electric_extractor", [
		" A ",
		"ABA",
		"CCC"
	], {
		A: "#edenring:brain_tree_block",
		B: "#forge:ingots/iron",
		C: "edenring:brain_tree_planks"
	})

	// 土砖
	kubejs.shaped("new_create:inferior_bricks", [
		"AA",
		"AA"
	], {
		A: "new_create:inferior_brick"
	})
})