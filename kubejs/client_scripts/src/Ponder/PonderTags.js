Ponder.tags((event) => {
	const ie = 'immersiveengineering:'
	// IE
	let StructuresArray = [
		'advanced_blast_furnace',
		'alloy_smelter',
		'arc_furnace',
		'assembler',
		'auto_workbench',
		'blast_furnace',
		'bottling_machine',
		'crusher',
		'fermenter',
		'metal_press',
		'mixer',
		'refinery',
		'sawmill',
		'squeezer',
		'coke_oven',
		'diesel_generator'
	]
	event.createTag(`${ie}structure`, `${ie}hammer`, '结构', '多方块机器', StructuresArray.map(Structures => ie + Structures))

	// New Create
	event.createTag('new_create:ponder', 'new_create:cast_iron_ingot', '思索', '思索', [
		'new_create:furnace_core',
		'minecraft:blast_furnace',
		'melter:melter',
		'minecraft:campfire',
		'new_create:tinder'
	])

	// SteamPower
	event.createTag('steampowered:ponder', 'steampowered:cast_iron_steam_engine', '蒸汽动力', '思索', [
		'steampowered:bronze_boiler',
		'steampowered:bronze_burner',
		'steampowered:bronze_steam_engine',
		'steampowered:bronze_flywheel',
		'steampowered:bronze_cogwheel',
		'steampowered:bronze_large_cogwheel',

		'steampowered:cast_iron_boiler',
		'steampowered:cast_iron_burner',
		'steampowered:cast_iron_steam_engine',
		'steampowered:cast_iron_flywheel',
		'steampowered:cast_iron_cogwheel',
		'steampowered:cast_iron_large_cogwheel',

		'steampowered:steel_boiler',
		'steampowered:steel_burner',
		'steampowered:steel_steam_engine',
		'steampowered:steel_flywheel',
		'steampowered:steel_cogwheel',
		'steampowered:steel_large_cogwheel',

		'steampowered:alternator'
	])
})