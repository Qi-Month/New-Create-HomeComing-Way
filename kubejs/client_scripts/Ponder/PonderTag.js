Ponder.tags(e => {
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
	e.createTag(`${ie}structure`, `${ie}hammer`, '结构', '多方块机器', StructuresArray.map(Structures => ie + Structures))

	// New Create
	e.createTag('new_create:ponder', 'new_create:cast_iron_ingot', '思索', '思索', [
		'new_create:furnace_core',
		'minecraft:blast_furnace',
		'melter:melter',
		'minecraft:campfire',
		'new_create:tinder'
	])
})