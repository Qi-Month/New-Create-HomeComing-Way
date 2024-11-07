ServerEvents.recipes((event) => {
	let { custommachinery } = event.recipes

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
})