ServerEvents.recipes((event) => {
	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": "new_create:firmament",
		"time": 300,
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
				"item": "#forge:coal_coke",
				"amount": 1
			},
			{
				"type": "custommachinery:fluid",
				"mode": "output",
				"fluid": "createmetallurgy:molten_steel",
				"amount": 100
			},
			{
				"type": "custommachinery:structure",
				"pattern": [
					[
						"   A   ",
						" AAAAA ",
						" AAAAA ",
						"AAAAAAA",
						" AAAAA ",
						" AAAAA ",
						"   m   "
					],
					[
						"   E   ",
						"   A   ",
						"       ",
						"CA F AD",
						"       ",
						"   A   ",
						"   B   "
					],
					[
						"       ",
						"   G   ",
						"       ",
						" G F G ",
						"       ",
						"   G   ",
						"       "
					],
					[
						"       ",
						"   E   ",
						"  HAH  ",
						" CA AD ",
						"  HAH  ",
						"   B   ",
						"       "
					],
					[
						"       ",
						"       ",
						"  HAH  ",
						"  A A  ",
						"  HAH  ",
						"       ",
						"       "
					],
					[
						"       ",
						"   I   ",
						"       ",
						" J F J ",
						"       ",
						"   I   ",
						"       "
					],
					[
						"       ",
						"   E   ",
						"  HAH  ",
						" CAKAD ",
						"  HAH  ",
						"   B   ",
						"       "
					],
					[
						"       ",
						"       ",
						"   G   ",
						"  GKG  ",
						"   G   ",
						"       ",
						"       "
					],
					[
						"       ",
						"       ",
						"   G   ",
						"  GKG  ",
						"   G   ",
						"       ",
						"       "
					],
					[
						"       ",
						"       ",
						"   G   ",
						"  GLG  ",
						"   G   ",
						"       ",
						"       "
					],
					[
						"       ",
						"       ",
						"   E   ",
						"  CKD  ",
						"   B   ",
						"       ",
						"       "
					],
				],
				"jei": true,
				"keys": {
					"A": "create:industrial_iron_block",
					"B": "design_decor:diagonal_girder[facing=north,facing_up=false,waterlogged=false]",
					"C": "design_decor:diagonal_girder[facing=east,facing_up=false,waterlogged=false]",
					"D": "design_decor:diagonal_girder[facing=west,facing_up=false,waterlogged=false]",
					"E": "design_decor:diagonal_girder[facing=south,facing_up=false,waterlogged=false]",
					"F": "design_decor:industrial_iron_boiler_large",
					"G": "create:metal_girder",
					"H": "new_create:industrial_iron_block_wall",
					"I": "design_decor:metal_support[axis=x,top=true]",
					"J": "design_decor:metal_support[axis=z,top=true]",
					"K": "design_decor:industrial_iron_boiler",
					"L": "railways:smokestack_oilburner"
				}
			}
		]
	})
})