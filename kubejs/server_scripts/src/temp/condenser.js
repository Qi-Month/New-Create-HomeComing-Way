/*
ServerEvents.recipes((event) => {
	//
	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": "dut:condenser",
		"time": 10,
		"requirements": [
			{
				"type": "custommachinery:biome",
				"filter": [
					"minecraft:mushroom_fields",
					"minecraft:deep_frozen_ocean",
					"minecraft:frozen_ocean",
					"minecraft:deep_cold_ocean",
					"minecraft:cold_ocean",
					"minecraft:deep_ocean",
					"minecraft:ocean",
					"minecraft:deep_lukewarm_ocean",
					"minecraft:lukewarm_ocean",
					"minecraft:warm_ocean",
					"minecraft:stony_shore",
					"minecraft:swamp",
					"minecraft:mangrove_swamp",
					"minecraft:snowy_slopes",
					"minecraft:snowy_plains",
					"minecraft:snowy_beach",
					"minecraft:windswept_gravelly_hills",
					"minecraft:grove",
					"minecraft:windswept_hills",
					"minecraft:snowy_taiga",
					"minecraft:windswept_forest",
					"minecraft:taiga",
					"minecraft:plains",
					"minecraft:meadow",
					"minecraft:beach",
					"minecraft:forest",
					"minecraft:old_growth_spruce_taiga",
					"minecraft:flower_forest",
					"minecraft:birch_forest",
					"minecraft:dark_forest",
					"minecraft:savanna_plateau",
					"minecraft:savanna",
					"minecraft:jungle",
					"minecraft:badlands",
					"minecraft:desert",
					"minecraft:wooded_badlands",
					"minecraft:jagged_peaks",
					"minecraft:stony_peaks",
					"minecraft:frozen_river",
					"minecraft:river",
					"minecraft:ice_spikes",
					"minecraft:old_growth_pine_taiga",
					"minecraft:sunflower_plains",
					"minecraft:old_growth_birch_forest",
					"minecraft:sparse_jungle",
					"minecraft:bamboo_jungle",
					"minecraft:eroded_badlands",
					"minecraft:windswept_savanna",
					"minecraft:cherry_grove",
					"minecraft:frozen_peaks",
					"minecraft:dripstone_caves",
					"minecraft:lush_caves",
					"minecraft:deep_dark"
				],
				"blacklist": false
			},
			{
				"type": "custommachinery:command",
				"phase": "crafting_tickable",
				"command": "/particle minecraft:snowflake ~ ~6.5 ~ 0.3 1.5 0.3 0 5",
				"log": false,
				"permissionlevel": 5,
				"amount": 500,
			},
			{
				"type": "custommachinery:command",
				"phase": "crafting_tickable",
				"command": "/particle minecraft:cloud ~ ~7.5 ~ 0.55 1 0.55 0 4",
				"log": false,
				"permissionlevel": 5
			},
			{
				"type": "custommachinery:command",
				"phase": "ending",
				"command": "/playsound create:steam block @a ~ ~3.5 ~ 0.5",
				"log": false,
				"chance": 0.75,
				"permissionlevel": 5
			},
			{
				"type": "custommachinery:fluid",
				"mode": "input",
				"fluid": "kubejs:cryogen",
				"amount": 500
			},
			{
				"type": "custommachinery:structure",
				"pattern":
					[
						[
							"AAAAA",
							"AAAAA",
							"AAAAA",
							"AAAAA",
							"ACCCA",
							" CHC ",
							" CCC "
						],
						[
							"BBBBB",
							"B   B",
							"B   B",
							"B   B",
							"BBDBB",
							" ImI ",
							" NIN "
						],
						[
							"     ",
							"     ",
							"     ",
							"     ",
							"  E  ",
							" EJE ",
							"  E  "
						],
						[
							"     ",
							"     ",
							"     ",
							"     ",
							"  F  ",
							" FKF ",
							"  F  "
						],
						[
							"     ",
							"     ",
							"     ",
							"     ",
							"  G  ",
							" GKG ",
							"  G  "
						],
						[
							"     ",
							"     ",
							"     ",
							"     ",
							"     ",
							"  J  ",
							"     "
						],
						[
							"     ",
							"     ",
							"     ",
							"     ",
							"     ",
							"  L  ",
							"     "
						]
					],
				"jei": true,
				"keys": {
					"K": "design_decor:copper_boiler",
					"D": "create:mechanical_pump",
					"C": "design_decor:brass_boiler_structure",
					"A": "create:copper_casing",
					"H": "design_decor:brass_boiler_large",
					"B": "create:item_drain",
					"L": "vintageimprovements:vacuum_chamber{Mode:1b,Speed:256.0f}",
					"G": "design_decor:andesite_floodlight[facing=up,turned_on=true]",
					"N": "design_decor:stepped_lever",
					"I": "create:smart_fluid_pipe",
					"F": "design_decor:metal_support",
					"E": "design_decor:diagonal_metal_support",
					"J": "design_decor:brass_boiler"
				}
			},
			{
				"type": "custommachinery:block",
				"mode": "output",
				"action": "replace_break",
				"pos": [-1, 0, -2, 1, 0, -4],
				"filter": [
					"minecraft:air",
					"minecraft:void_air",
					"minecraft:cave_air",
					"kubejs:air_fluid[level=1]",
					"kubejs:air_fluid[level=2]",
					"kubejs:air_fluid[level=3]",
					"kubejs:air_fluid[level=4]",
					"kubejs:air_fluid[level=5]",
					"kubejs:air_fluid[level=6]",
					"kubejs:air_fluid[level=7]",
					"kubejs:air_fluid[level=8]",
					"kubejs:air_fluid[level=9]",
					"kubejs:air_fluid[level=10]",
					"kubejs:air_fluid[level=11]",
					"kubejs:air_fluid[level=12]",
					"kubejs:air_fluid[level=13]",
					"kubejs:air_fluid[level=14]",
					"kubejs:air_fluid[level=15]",
					"kubejs:end_air_fluid[level=1]",
					"kubejs:end_air_fluid[level=2]",
					"kubejs:end_air_fluid[level=3]",
					"kubejs:end_air_fluid[level=4]",
					"kubejs:end_air_fluid[level=5]",
					"kubejs:end_air_fluid[level=6]",
					"kubejs:end_air_fluid[level=7]",
					"kubejs:end_air_fluid[level=8]",
					"kubejs:end_air_fluid[level=9]",
					"kubejs:end_air_fluid[level=10]",
					"kubejs:end_air_fluid[level=11]",
					"kubejs:end_air_fluid[level=12]",
					"kubejs:end_air_fluid[level=13]",
					"kubejs:end_air_fluid[level=14]",
					"kubejs:end_air_fluid[level=15]",
					"kubejs:nether_air_fluid[level=1]",
					"kubejs:nether_air_fluid[level=2]",
					"kubejs:nether_air_fluid[level=3]",
					"kubejs:nether_air_fluid[level=4]",
					"kubejs:nether_air_fluid[level=5]",
					"kubejs:nether_air_fluid[level=6]",
					"kubejs:nether_air_fluid[level=7]",
					"kubejs:nether_air_fluid[level=8]",
					"kubejs:nether_air_fluid[level=9]",
					"kubejs:nether_air_fluid[level=10]",
					"kubejs:nether_air_fluid[level=11]",
					"kubejs:nether_air_fluid[level=12]",
					"kubejs:nether_air_fluid[level=13]",
					"kubejs:nether_air_fluid[level=14]",
					"kubejs:nether_air_fluid[level=15]"],
				"whitelist": true,
				"block": "kubejs:air_fluid"
			}
		]
	}).id("dut_create:air_liquefaction")
	
	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": "dut:condenser",
		"time": 10,
		"requirements": [
			{
				"type": "custommachinery:biome",
				"filter": [
					"minecraft:nether_wastes",
					"minecraft:soul_sand_valley",
					"minecraft:crimson_forest",
					"minecraft:warped_forest",
					"minecraft:basalt_deltas"
				],
				"blacklist": false
			},
			{
				"type": "custommachinery:command",
				"phase": "crafting_tickable",
				"command": "/particle minecraft:snowflake ~ ~6.5 ~ 0.3 1.5 0.3 0 5",
				"log": false,
				"permissionlevel": 5
			},
			{
				"type": "custommachinery:command",
				"phase": "crafting_tickable",
				"command": "/particle minecraft:cloud ~ ~7.5 ~ 0.55 1 0.55 0 4",
				"log": false,
				"permissionlevel": 5
			},
			{
				"type": "custommachinery:command",
				"phase": "ending",
				"command": "/playsound create:steam block @a ~ ~3.5 ~ 0.5",
				"log": false,
				"chance": 0.75,
				"permissionlevel": 5
			},
			{
				"type": "custommachinery:fluid",
				"mode": "input",
				"fluid": "kubejs:cryogen",
				"amount": 2000,
			},
			{
				"type": "custommachinery:structure",
				"pattern":
					[
						[
							"AAAAA",
							"AAAAA",
							"AAAAA",
							"AAAAA",
							"ACCCA",
							" CHC ",
							" CCC "
						],
						[
							"BBBBB",
							"B   B",
							"B   B",
							"B   B",
							"BBDBB",
							" ImI ",
							" NIN "
						],
						[
							"     ",
							"     ",
							"     ",
							"     ",
							"  E  ",
							" EJE ",
							"  E  "
						],
						[
							"     ",
							"     ",
							"     ",
							"     ",
							"  F  ",
							" FKF ",
							"  F  "
						],
						[
							"     ",
							"     ",
							"     ",
							"     ",
							"  G  ",
							" GKG ",
							"  G  "
						],
						[
							"     ",
							"     ",
							"     ",
							"     ",
							"     ",
							"  J  ",
							"     "
						],
						[
							"     ",
							"     ",
							"     ",
							"     ",
							"     ",
							"  L  ",
							"     "
						]
					],
				"jei": true,
				"keys": {
					"K": "design_decor:copper_boiler",
					"D": "create:mechanical_pump",
					"C": "design_decor:brass_boiler_structure",
					"A": "create:copper_casing",
					"H": "design_decor:brass_boiler_large",
					"B": "create:item_drain",
					"L": "vintageimprovements:vacuum_chamber{Mode:1b,Speed:256.0f}",
					"G": "design_decor:andesite_floodlight[facing=up,turned_on=true]",
					"N": "design_decor:stepped_lever",
					"I": "create:smart_fluid_pipe",
					"F": "design_decor:metal_support",
					"E": "design_decor:diagonal_metal_support",
					"J": "design_decor:brass_boiler"
				}
			},
			{
				"type": "custommachinery:block",
				"mode": "output",
				"action": "replace_break",
				"pos": [-1, 0, -2, 1, 0, -4],
				"filter": [
					"minecraft:air",
					"minecraft:void_air",
					"minecraft:cave_air",
					"kubejs:air_fluid[level=1]",
					"kubejs:air_fluid[level=2]",
					"kubejs:air_fluid[level=3]",
					"kubejs:air_fluid[level=4]",
					"kubejs:air_fluid[level=5]",
					"kubejs:air_fluid[level=6]",
					"kubejs:air_fluid[level=7]",
					"kubejs:air_fluid[level=8]",
					"kubejs:air_fluid[level=9]",
					"kubejs:air_fluid[level=10]",
					"kubejs:air_fluid[level=11]",
					"kubejs:air_fluid[level=12]",
					"kubejs:air_fluid[level=13]",
					"kubejs:air_fluid[level=14]",
					"kubejs:air_fluid[level=15]",
					"kubejs:end_air_fluid[level=1]",
					"kubejs:end_air_fluid[level=2]",
					"kubejs:end_air_fluid[level=3]",
					"kubejs:end_air_fluid[level=4]",
					"kubejs:end_air_fluid[level=5]",
					"kubejs:end_air_fluid[level=6]",
					"kubejs:end_air_fluid[level=7]",
					"kubejs:end_air_fluid[level=8]",
					"kubejs:end_air_fluid[level=9]",
					"kubejs:end_air_fluid[level=10]",
					"kubejs:end_air_fluid[level=11]",
					"kubejs:end_air_fluid[level=12]",
					"kubejs:end_air_fluid[level=13]",
					"kubejs:end_air_fluid[level=14]",
					"kubejs:end_air_fluid[level=15]",
					"kubejs:nether_air_fluid[level=1]",
					"kubejs:nether_air_fluid[level=2]",
					"kubejs:nether_air_fluid[level=3]",
					"kubejs:nether_air_fluid[level=4]",
					"kubejs:nether_air_fluid[level=5]",
					"kubejs:nether_air_fluid[level=6]",
					"kubejs:nether_air_fluid[level=7]",
					"kubejs:nether_air_fluid[level=8]",
					"kubejs:nether_air_fluid[level=9]",
					"kubejs:nether_air_fluid[level=10]",
					"kubejs:nether_air_fluid[level=11]",
					"kubejs:nether_air_fluid[level=12]",
					"kubejs:nether_air_fluid[level=13]",
					"kubejs:nether_air_fluid[level=14]",
					"kubejs:nether_air_fluid[level=15]"],
				"whitelist": true,
				"block": "kubejs:nether_air_fluid"
			}
		]
	}).id("dut_create:nether_air_liquefaction")
	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": "dut:condenser",
		"time": 10,
		"requirements": [
			{
				"type": "custommachinery:biome",
				"filter": [
					"minecraft:the_end",
					"minecraft:end_highlands",
					"minecraft:end_midlands",
					"minecraft:small_end_islands",
					"minecraft:end_barrens"
				],
				"blacklist": false
			},
			{
				"type": "custommachinery:command",
				"phase": "crafting_tickable",
				"command": "/particle minecraft:snowflake ~ ~6.5 ~ 0.3 1.5 0.3 0 5",
				"log": false,
				"permissionlevel": 5
			},
			{
				"type": "custommachinery:command",
				"phase": "crafting_tickable",
				"command": "/particle minecraft:cloud ~ ~7.5 ~ 0.55 1 0.55 0 4",
				"log": false,
				"permissionlevel": 5
			},
			{
				"type": "custommachinery:command",
				"phase": "ending",
				"command": "/playsound create:steam block @a ~ ~3.5 ~ 0.5",
				"log": false,
				"chance": 0.75,
				"permissionlevel": 5
			},
			{
				"type": "custommachinery:fluid",
				"mode": "input",
				"fluid": "kubejs:cryogen",
				"amount": 500,
			},
			{
				"type": "custommachinery:structure",
				"pattern":
					[
						[
							"AAAAA",
							"AAAAA",
							"AAAAA",
							"AAAAA",
							"ACCCA",
							" CHC ",
							" CCC "
						],
						[
							"BBBBB",
							"B   B",
							"B   B",
							"B   B",
							"BBDBB",
							" ImI ",
							" NIN "
						],
						[
							"     ",
							"     ",
							"     ",
							"     ",
							"  E  ",
							" EJE ",
							"  E  "
						],
						[
							"     ",
							"     ",
							"     ",
							"     ",
							"  F  ",
							" FKF ",
							"  F  "
						],
						[
							"     ",
							"     ",
							"     ",
							"     ",
							"  G  ",
							" GKG ",
							"  G  "
						],
						[
							"     ",
							"     ",
							"     ",
							"     ",
							"     ",
							"  J  ",
							"     "
						],
						[
							"     ",
							"     ",
							"     ",
							"     ",
							"     ",
							"  L  ",
							"     "
						]
					],
				"jei": true,
				"keys": {
					"K": "design_decor:copper_boiler",
					"D": "create:mechanical_pump",
					"C": "design_decor:brass_boiler_structure",
					"A": "create:copper_casing",
					"H": "design_decor:brass_boiler_large",
					"B": "create:item_drain",
					"L": "vintageimprovements:vacuum_chamber{Mode:1b,Speed:256.0f}",
					"G": "design_decor:andesite_floodlight[facing=up,turned_on=true]",
					"N": "design_decor:stepped_lever",
					"I": "create:smart_fluid_pipe",
					"F": "design_decor:metal_support",
					"E": "design_decor:diagonal_metal_support",
					"J": "design_decor:brass_boiler"
				}
			},
			{
				"type": "custommachinery:block",
				"mode": "output",
				"action": "replace_break",
				"pos": [-1, 0, -2, 1, 0, -4],
				"filter": [
					"minecraft:air",
					"minecraft:void_air",
					"minecraft:cave_air",
					"kubejs:air_fluid[level=1]",
					"kubejs:air_fluid[level=2]",
					"kubejs:air_fluid[level=3]",
					"kubejs:air_fluid[level=4]",
					"kubejs:air_fluid[level=5]",
					"kubejs:air_fluid[level=6]",
					"kubejs:air_fluid[level=7]",
					"kubejs:air_fluid[level=8]",
					"kubejs:air_fluid[level=9]",
					"kubejs:air_fluid[level=10]",
					"kubejs:air_fluid[level=11]",
					"kubejs:air_fluid[level=12]",
					"kubejs:air_fluid[level=13]",
					"kubejs:air_fluid[level=14]",
					"kubejs:air_fluid[level=15]",
					"kubejs:end_air_fluid[level=1]",
					"kubejs:end_air_fluid[level=2]",
					"kubejs:end_air_fluid[level=3]",
					"kubejs:end_air_fluid[level=4]",
					"kubejs:end_air_fluid[level=5]",
					"kubejs:end_air_fluid[level=6]",
					"kubejs:end_air_fluid[level=7]",
					"kubejs:end_air_fluid[level=8]",
					"kubejs:end_air_fluid[level=9]",
					"kubejs:end_air_fluid[level=10]",
					"kubejs:end_air_fluid[level=11]",
					"kubejs:end_air_fluid[level=12]",
					"kubejs:end_air_fluid[level=13]",
					"kubejs:end_air_fluid[level=14]",
					"kubejs:end_air_fluid[level=15]",
					"kubejs:nether_air_fluid[level=1]",
					"kubejs:nether_air_fluid[level=2]",
					"kubejs:nether_air_fluid[level=3]",
					"kubejs:nether_air_fluid[level=4]",
					"kubejs:nether_air_fluid[level=5]",
					"kubejs:nether_air_fluid[level=6]",
					"kubejs:nether_air_fluid[level=7]",
					"kubejs:nether_air_fluid[level=8]",
					"kubejs:nether_air_fluid[level=9]",
					"kubejs:nether_air_fluid[level=10]",
					"kubejs:nether_air_fluid[level=11]",
					"kubejs:nether_air_fluid[level=12]",
					"kubejs:nether_air_fluid[level=13]",
					"kubejs:nether_air_fluid[level=14]",
					"kubejs:nether_air_fluid[level=15]"],
				"whitelist": true,
				"block": "kubejs:end_air_fluid"
			}
		]
	}).id("dut_create:end_air_liquefaction")
})
*/