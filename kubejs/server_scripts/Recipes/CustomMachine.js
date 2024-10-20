ServerEvents.recipes((event) => {
	let { custommachinery } = event.recipes

	// 脑电
	custommachinery.custom_machine("new_create:brain_electric_extractor", 1200)
		.produceEnergyPerTick(7.5)
		.requireItem("edenring:brain_tree_block_copper")

	custommachinery.custom_machine("new_create:brain_electric_extractor", 1200)
		.produceEnergyPerTick(15)
		.requireItem("edenring:brain_tree_block_iron")

	custommachinery.custom_machine("new_create:brain_electric_extractor", 1200)
		.produceEnergyPerTick(22.5)
		.requireItem("edenring:brain_tree_block_gold")

	// 土法高炉
	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": "new_create:soil_blast_furnace",
		"time": 1000,
		"hidden": false,
		"requirements": [
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "#forge:ingots/iron",
				"amount": 1
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "#forge:coal",
				"amount": 1
			},
			{
				"type": "custommachinery:item",
				"mode": "output",
				"item": "new_create:cast_iron_ingot",
				"amount": 1
			},
			{
				"type": "custommachinery:structure",
				"pattern": [
					["H"],
					["m"]
				],
				"jei": false,
				"keys": {
					H: "minecraft:lava"
				}
			}
		]
	})

	// 高炉
	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": "new_create:blast_furnace",
		"time": 600,
		"hidden": false,
		"requirements": [
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "#forge:ingots/iron",
				"amount": 4
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "#forge:coal_coke",
				"amount": 2
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "new_create:calcite_dust",
				"amount": 1
			},
			{
				"type": "custommachinery:fluid",
				"mode": "output",
				"fluid": "createmetallurgy:molten_steel",
				"amount": 90
			},
			{
				"type": "custommachinery:structure",
				"pattern": [
					[
						"AAA",
						"AAA",
						"AAA"
					],
					[
						"BAB",
						"A A",
						"BmB"
					],
					[
						"BAB",
						"A A",
						"BAB"
					],
					[
						"BAB",
						"A A",
						"BAB"
					],
					[
						" A ",
						"A A",
						" A "
					],
					[
						" A ",
						"A A",
						" A "
					]
				],
				"jei": true,
				"keys": {
					A: "new_create:refractory_bricks",
					B: "new_create:refractory_bricks_wall"
				}
			}
		]
	})

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

	// 制氧机
	custommachinery.custom_machine("new_create:oxygen_generator", 60)
		.hidden(true)
		.produceFluid(Fluid.of("ad_astra:oxygen", 50), "output")
		.requireFluid(Fluid.of("minecraft:water", 100), "input")
		.requireStructure([
			[
				"AAA",
				"AAA",
				"AmA"
			],
			[
				"BBB",
				"B B",
				"BBB"
			],
			[
				"AAA",
				"ACA",
				"AAA"
			]
		], {
			A: "create:copper_casing",
			B: "immersiveengineering:coil_lv",
			C: "new_create:magnetic_cast_iron_block"
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