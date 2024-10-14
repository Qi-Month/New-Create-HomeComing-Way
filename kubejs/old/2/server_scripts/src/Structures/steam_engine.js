MMEvents.createStructures((event) => {
	const MODID = 'new_create:'

	event.create(MODID + 'steam_engine')
		.controllerId('mm:steam_engine')
		.name('蒸汽机')
		.layout((structures) => {
			structures
				.layer(['#III#'])
				.layer(['I###I'])
				.layer(['IS#FI'])
				.layer(['I#C#I'])
				.layer(['#III#'])
				.key('I', { block: 'new_create:cast_iron_block' })
				.key('#', { block: 'minecraft:air' })
				.key('S', { block: 'mm:steam_engine_stress_output' })
				.key('F', { block: 'mm:steam_engine_fluid_input' })
		})
})