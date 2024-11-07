ServerEvents.recipes((event) => {
	let { custommachinery } = event.recipes

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

	// 方解石
	custommachinery.custom_machine("new_create:stone_gen", 20)
		.produceItem("minecraft:calcite")
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
			B: "new_create:double_compressed_calcite",
			C: "create:framed_glass",
			D: "minecraft:lava"
		})

	custommachinery.custom_machine("new_create:stone_gen", 20)
		.produceItem("minecraft:calcite")
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
			B: "new_create:triple_compressed_calcite",
			C: "create:framed_glass",
			D: "minecraft:lava"
		})
})