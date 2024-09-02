MMEvents.createProcesses((event) => {
	const MODID = "new_create:"

	event.create(MODID + "aaaaaa")
		.structureId(MODID + "steam_engine")
		.ticks(20)
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:fluid",
				fluid: "minecraft:water",
				amount: 500
			}
		})
		.output({
			type: "mm:output/simple",
			ingredient: {
				type: "mm:create/kinetic",
				speed: 16
			}
		})
})