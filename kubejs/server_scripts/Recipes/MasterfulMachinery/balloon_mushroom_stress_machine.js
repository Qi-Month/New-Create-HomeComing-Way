MMEvents.createProcesses((event) => {
	event.create(`${global.namespace}balloon_mushroom_stress_machine`)
		.structureId(`${global.namespace}balloon_mushroom_stress_machine`)
		.ticks(100)
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:item",
				tag: "minecraft:planks",
				count: 1
			}
		})
		.input({
			type: "mm:input/consume",
			ingredient: {
				type: "mm:fluid",
				fluid: "new_create:balloon_mushroom_slurry",
				amount: 100
			}
		})
		.output({
			type: "mm:output/simple",
			ingredient: {
				type: "mm:create/kinetic",
				speed: 64
			}
		})
})