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

	// 混合桶
	kubejs.shaped("youkaishomecoming:fermentation_tank", [
		"ABA",
		"A A",
		"AAA"
	], {
		A: "new_create:inferior_bricks",
		B: "#minecraft:wooden_trapdoors"
	}).id("youkaishomecoming:fermentation_tank")

	// 石头粉
	let stoneDust = [
		"stone",
		"deepslate",
		"tuff"
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
		C: "minecraft:smooth_stone"
	})

	// 土砖
	kubejs.shaped("new_create:inferior_bricks", [
		"AA",
		"AA"
	], {
		A: "new_create:inferior_brick"
	})

	// 潮湿的土砖
	kubejs.shapeless("new_create:wet_inferior_brick", [
		"2x new_create:black_dirt",
		"2x new_create:mixed_stone_dust"
	])

	// 土法高炉
	kubejs.shaped("new_create:soil_blast_furnace", [
		"AAA",
		"A A",
		"AAA"
	], {
		A: "new_create:inferior_brick"
	})

	// 生石灰
	create.compacting([
		Item.of("new_create:quicklime").withChance(1),
		Item.of("new_create:quicklime").withChance(0.5),
		Item.of("2x new_create:quicklime").withChance(0.25)
	], [
		"4x minecraft:calcite"
	])

	// 高炉
	kubejs.shaped("new_create:blast_furnace", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "new_create:refractory_brick",
		B: "#forge:ingots/iron"
	})

	// 耐火砖墙
	minecraft.stonecutting("new_create:refractory_bricks_wall", [
		"new_create:refractory_bricks"
	])
	kubejs.shaped("6x new_create:refractory_bricks_wall", [
		"AAA",
		"AAA"
	], {
		A: "new_create:refractory_bricks"
	})

	// 污浊铝粉
	create.milling("alltheores:dirty_aluminum_dust", [
		"#forge:raw_materials/aluminum"
	])

	create.crushing("alltheores:dirty_aluminum_dust", [
		"#forge:raw_materials/aluminum"
	])

	// 石英
	create.milling([
		Item.of("new_create:calcite_dust").withChance(1),
		Item.of("minecraft:quartz").withChance(0.5),
	], [
		"minecraft:calcite"
	])

	create.crushing([
		Item.of("new_create:calcite_dust").withChance(1),
		Item.of("minecraft:quartz").withChance(1),
	], [
		"minecraft:calcite"
	])

	// 耐火黏土
	create.mixing("new_create:refractory_clay_ball", [
		"minecraft:clay_ball",
		"4x alltheores:dirty_aluminum_dust",
		"4x #forge:gems/quartz"
	])

	// 耐火砖块
	kubejs.shaped("new_create:refractory_bricks", [
		"ABA",
		"BAB",
		"ABA"
	], {
		A: "new_create:refractory_brick",
		B: "new_create:mortar"
	})

	// 耐火砖
	minecraft.smelting("new_create:refractory_brick", "new_create:refractory_clay_ball")
	minecraft.smoking("new_create:inferior_brick", "new_create:refractory_clay_ball")
	minecraft.blasting("new_create:refractory_brick", "new_create:refractory_clay_ball")

	// 土砖干燥
	minecraft.campfire_cooking("new_create:inferior_brick", "new_create:wet_inferior_brick")
	minecraft.smelting("new_create:inferior_brick", "new_create:wet_inferior_brick")
	minecraft.smoking("new_create:inferior_brick", "new_create:wet_inferior_brick")
	minecraft.blasting("new_create:inferior_brick", "new_create:wet_inferior_brick")

	// 晾干架
	kubejs.shaped("youkaishomecoming:drying_rack", [
		"AAA",
		"A A",
		"AAA"
	], {
		A: "#forge:rods/wooden"
	}).id("youkaishomecoming:drying_rack_from_bamboo_block_stonecutting")
})