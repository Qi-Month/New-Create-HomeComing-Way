ServerEvents.recipes((event) => {
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
})