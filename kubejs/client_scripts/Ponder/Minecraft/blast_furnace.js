Ponder.registry((event) => {
	event.create('minecraft:blast_furnace')
		.scene('minecraft:blast_furnace', '高炉结构', (scene, utils) => {
			scene.showBasePlate()
			scene.idle(20)
			// 
			scene.world.setBlocks([2, 1, 1], 'minecraft:blast_furnace')
			let bricks = [
				[3, 1, 1], [1, 1, 1],
				[3, 1, 2], [1, 1, 2],
				[2, 1, 3],
				// 
				[2, 2, 1], [2, 2, 2]
			]
			for (let block of bricks) {
				scene.world.setBlocks(block, 'minecraft:stone_bricks')
			}

			let showSection = [
				[2, 1, 1],
				//
				[3, 1, 1], [1, 1, 1],
				[3, 1, 2], [1, 1, 2],
				[2, 1, 3],
				// 
				[2, 2, 1], [2, 2, 2],
				//
			]
			for (let block of showSection) {
				scene.world.showSection(block, Direction.DOWN)
				scene.idle(2)
			}
			scene.idle(20)
			//
			scene.addKeyframe()
			scene.showControls(
				30,
				utils.grid.at(2, 1, 1),
				'down'
			).rightClick()
			scene.idle(20)
		})
})