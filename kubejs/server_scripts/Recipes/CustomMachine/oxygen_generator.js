ServerEvents.recipes((event) => {
	let { custommachinery } = event.recipes

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
			C: "new_create:magnetic_iron_block"
		})
})