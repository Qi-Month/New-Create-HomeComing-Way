ServerEvents.recipes((event) => {
	const { custommachinery } = event.recipes

	custommachinery.custom_machine("new_create:iron_making_furnace", 300)
		.requireItemTag('#forge:raw_materials/iron')
		.produceFluid(Fluid.of("new_create:molten_raw_iron", 100,), "output")
		.requireFuel()
	/*
	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": "new_create:iron_making_furnace",
		"time": 500,
		"hidden": false,
		"requirements": [
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "#forge:ores/iron",
				"amount": 2
			},
			{
				"type": "custommachinery:fluid",
				"mode": "output",
				"fluid": "createmetallurgy:molten_iron",
				"amount": 90
			},
			{
				"type": "custommachinery:structure",
				"pattern": [
					[
						"m"
					],
					[
						"U"
					]
				],
				"jei": true,
				"keys": {
					"U": "new_create:iron_making_furnace_up"
				}
			}
		]
	})
	*/
})