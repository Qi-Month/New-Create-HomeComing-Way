ServerEvents.recipes((event) => {
	// 删除Item
	let Output = [
		'#forge:tools/wooden',
		'minecraft:stone_sword',
		'minecraft:stone_pickaxe',
		'minecraft:stone_axe',
		'minecraft:stone_shovel',
		'minecraft:stone_hoe',
		'minecraft:campfire',
		'minecraft:iron_ingot',
		'create:hand_crank',
		'create:andesite_alloy',
		'create:millstone',
		'minecraft:stick',
		'immersiveengineering:hammer',
		'#forge:ingots/copper',
		'notreepunching:flint_axe',
		'notreepunching:flint_pickaxe',
		'notreepunching:flint_hoe',
		'notreepunching:flint_shovel',
		'notreepunching:macuahuitl',
		'#notreepunching:saws',
		'#notreepunching:knives',
		'#notreepunching:h/mattocks',
		'createendertransmission:energy_transmitter',
		'extendedcrafting:crystaltine_catalyst',
		'extendedcrafting:enhanced_ender_catalyst',
		'extendedcrafting:ender_catalyst',
		'extendedcrafting:enhanced_redstone_catalyst',
		'melter:melter',
		'extendedcrafting:redstone_catalyst',
		'extendedcrafting:ultimate_catalyst',
		'extendedcrafting:elite_catalyst',
		'extendedcrafting:advanced_catalyst',
		'extendedcrafting:basic_catalyst',
		'extendedcrafting:the_ultimate_catalyst',
		'extendedcrafting:basic_component',
		'extendedcrafting:advanced_component',
		'extendedcrafting:elite_component',
		'extendedcrafting:ultimate_component',
		'extendedcrafting:redstone_component',
		'extendedcrafting:enhanced_redstone_component',
		'extendedcrafting:ender_component',
		'extendedcrafting:enhanced_ender_component',
		'extendedcrafting:black_iron_slate',
		'extendedcrafting:crystaltine_component',
		'extendedcrafting:the_ultimate_component',
		'extendedcrafting:compressor',
		'#forge:ingots/bronze',
		'#forge:stripped_logs',
		'#forge:ingots/tin',
		'#forge:tools/copper',
		'extendedcrafting:advanced_table',
		'create:mechanical_mixer',
		'create:zinc_ingot',
		'create:mechanical_press',
		'create:encased_fan',
		'create:propeller',
		'create:empty_blaze_burner',
		'create:spout',
		'create:electron_tube',
		'create:brass_casing',
		'create:andesite_casing',
		'create:mechanical_saw',
		'create:brass_ingot',
		'create:windmill_bearing',
		'create:deployer',
		'create:mechanical_crafter',
		'extendedcrafting:elite_table',
		'extendedcrafting:ultimate_table',
		'extendedcrafting:basic_table',
		'create:water_wheel',
		'create:large_water_wheel',
		'create:create.crushing_wheel',
		'create_new_age:generator_coil',
		'immersiveengineering:dust_coke',
		'immersiveengineering:coil_lv',
		'createaddition:spool',
		'createaddition:rolling_mill',
		'minecraft:clock',
		'projecte:transmutation_table',
		'torcherino:blocktorcherino',
		'projecte:condenser_mk1',
		'projecte:condenser_mk2',
		'create_dd:bronze_saw',
		'create_dd:bronze_drill',
		'create_dd:furnace_engine',
		'create_dd:industrial_iron_ingot',
		'create_dd:ember_alloy',
		'minecraft:blast_furnace',
		'createaddition:tesla_coil',
		'createaddition:alternator',
		'create_new_age:carbon_brushes',
		'#forge:ingots/strong_bronze',
		'create_new_age:energiser_t1',
		'createaddition:electric_motor',
		'createaddition:capacitor',
		'immersiveengineering:circuit_board',
		'#forge:ingots/constantan',
		'immersiveengineering:dust_constantan',
		'thermal:constantan_dust',
		'immersiveengineering:ingot_electrum',
		'thermal:electrum_ingot',
		'createdieselgenerators:oil_scanner',
		'createdieselgenerators:pumpjack_crank',
		'create_dd:industrial_casing',
		'thermal:rf_coil',
		'create_dd:steel_casing',
		'immersiveengineering:electron_tube',
		'minecraft:slime_ball',
		'create_dd:mithril_ingot',
		'thermal:emerald_dust',
		'thermal:device_rock_gen',
		'#forge:graphite_molds',
		'thermal:rose_gold_ingot',
		'thermal:fluid_cell_frame',
		'thermal_extra:soul_sand_dust',
		'create:large_cogwheel',
		'minecraft:weeping_vines',
		'minecraft:twisting_vines',
		'ae2:charger',
		'#alltheores:ore_hammers',
		'minecraft:furnace'
	]
	Output.forEach(Item => {
		event.remove({ output: Item })
	})

	// Input
	let Input = [
		'#alltheores:ore_hammers'
	]
	Input.forEach(Item => {
		event.remove({ input: Item })
	})

	// Thermal Mechines
	let ThermalMechines = [
		'thermal:machine_brewer', 'thermal:machine_crystallizer', 'thermal:machine_crafter',
		'thermal:machine_bottler', 'thermal:machine_pyrolyzer', 'thermal:machine_refinery',
		'thermal:machine_furnace', 'thermal:machine_sawmill', 'thermal:machine_pulverizer',
		'thermal:machine_chiller', 'thermal:machine_crucible', 'thermal:machine_press',
		'thermal:machine_centrifuge', 'thermal:machine_insolator', 'thermal:machine_smelter',
	]
	ThermalMechines.forEach(remove => {
		event.remove({ output: remove })
	})

	// 删除id
	let Remove_ID = [
		'create:milling/charcoal',
		'functionalstorage:oak_drawer_alternate_x1',
		'thermal:devices/tree_extractor/tree_extractor_dark_oak',
		'thermal:devices/tree_extractor/tree_extractor_jungle',
		'create:milling/gravel',
		'create_dd:crafting/mechanical_belt_from_rubber',
		'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals',
		'immersiveengineering:blastfurnace/steel',
		'create:deploying/cogwheel',
		'immersiveengineering:crafting/raw_hammercreate.crushing_iron',
		'immersiveengineering:crafting/hammercreate.crushing_iron',
		'thermal:machine_frame',
		'melter:melting/cobble',
		'immersiveengineering:crafting/fluid_pipe',
		'thermal:energy_cell_frame',
		'create:splashing/crushed_raw_iron',
		'immersiveengineering:blastfurnace/steel_block',
		'ratatouille:salt',
		'createdieselgenerators:crafting/engine_piston',
		'create:crafting/kinetics/cogwheel',
		'immersiveengineering:crafting/electrum_mix',
		'create:crushing/iron_ore',
		'create:crushing/mercury_iron_ore',
		'create:crushing/glacio_iron_ore',
		'create:crushing/moon_iron_ore',
		'createmetallurgy:alloying/alloying_brass',
		'create:crushing/deepslate_iron_ore',
		'create:crushing/mars_iron_ore',
		'createmetallurgy:alloying/alloying_steel',
		'createmetallurgy:casting_in_table/casting_gold_plate'
	]
	Remove_ID.forEach(ID => {
		event.remove({ id: ID })
	})

	// Mek
	let MekItem = [

	]
	MekItem.forEach(Item => {
		event.remove({ output: Item })
	})

	// Type
	let RemoveType = [
		'createaddition:charging',
		'minecraft:smelting',
		'create_new_age:energising',
		'createmetallurgy:melting'
	]
	RemoveType.forEach(Type => {
		event.remove({ type: Type })
	})

	// 移除所有工作台合成齿轮配方
	event.remove({ output: '#forge:gears', type: "minecraft:crafting_shaped" })

	// Mod合成表
	let RemoveModsRecipes = [

	]
	RemoveModsRecipes.forEach(Type => {
		event.remove({ mod: Type })
	})
})