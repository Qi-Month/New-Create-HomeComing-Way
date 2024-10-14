ServerEvents.recipes((event) => {
	let { custommachinery } = event.recipes

	// 脑电
	custommachinery.custom_machine("new_create:brain_electric_extractor", 300)
		.requireItem("edenring:brain_tree_block_copper")
		.produceEnergy(150)

	custommachinery.custom_machine("new_create:brain_electric_extractor", 300)
		.requireItem("edenring:brain_tree_block_iron")
		.produceEnergy(300)

	custommachinery.custom_machine("new_create:brain_electric_extractor", 300)
		.requireItem("edenring:brain_tree_block_gold")
		.produceEnergy(500)

	// 简易造石机
	custommachinery.custom_machine("new_create:easy_rock_gen", 60)
		.produceItem("minecraft:cobblestone")
		.requireStructure([
			[
				"LmW"
			]
		], {
			L: "minecraft:lava",
			W: "minecraft:water"
		})

	/* 结构造石机 */
	// 安山岩
	custommachinery.custom_machine("new_create:stone_gen", 20)
		.produceItem("minecraft:andesite")
		.chance(0.16)
		.produceItem("minecraft:cobblestone")
		.chance(0.84)
		.requireStructure([
			[
				"AAA",
				"AAA",
				"ABA"
			],
			[
				"CCC",
				"CDC",
				"CmC"
			],
			[
				"AAA",
				"AAA",
				"AAA"
			]
		], {
			A: "create:copper_casing",
			B: "new_create:double_compressed_andesite",
			C: "create:framed_glass",
			D: "minecraft:lava"
		})

	custommachinery.custom_machine("new_create:stone_gen", 20)
		.produceItem("minecraft:andesite")
		.requireStructure([
			[
				"AAA",
				"AAA",
				"ABA"
			],
			[
				"CCC",
				"CDC",
				"CmC"
			],
			[
				"AAA",
				"AAA",
				"AAA"
			]
		], {
			A: "create:copper_casing",
			B: "new_create:triple_compressed_andesite",
			C: "create:framed_glass",
			D: "minecraft:lava"
		})

	// 凝灰岩
	custommachinery.custom_machine("new_create:stone_gen", 20)
		.produceItem("minecraft:tuff")
		.chance(0.16)
		.produceItem("minecraft:cobblestone")
		.chance(0.84)
		.requireStructure([
			[
				"AAA",
				"AAA",
				"ABA"
			],
			[
				"CCC",
				"CDC",
				"CmC"
			],
			[
				"AAA",
				"AAA",
				"AAA"
			]
		], {
			A: "create:copper_casing",
			B: "new_create:double_compressed_tuff",
			C: "create:framed_glass",
			D: "minecraft:lava"
		})

	custommachinery.custom_machine("new_create:stone_gen", 20)
		.produceItem("minecraft:tuff")
		.requireStructure([
			[
				"AAA",
				"AAA",
				"ABA"
			],
			[
				"CCC",
				"CDC",
				"CmC"
			],
			[
				"AAA",
				"AAA",
				"AAA"
			]
		], {
			A: "create:copper_casing",
			B: "new_create:triple_compressed_tuff",
			C: "create:framed_glass",
			D: "minecraft:lava"
		})
})