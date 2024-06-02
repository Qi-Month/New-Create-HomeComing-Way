Ponder.registry(e => {
	e.create('minecraft:blast_furnace')
		.scene('minecraft:blast_furnace', '原版高炉建造', 'new_create:blast_furnace', (scene, utils) => {
			// 底盘
			// scene.configureBasePlate(0, 0, 5)
			scene.showBasePlate()
			scene.idle(20)
			// 
			let blocks = [
				[1, 1, 1], [1, 1, 2], [1, 1, 3],
				[2, 1, 1], [2, 1, 2], [2, 1, 3],
				[3, 1, 1], [3, 1, 2], [3, 1, 3],
				//
				[1, 2, 1], [1, 2, 2], [1, 2, 3],
				[2, 2, 3], [2, 2, 2], [2, 2, 1],
				[3, 2, 1], [3, 2, 2], [3, 2, 3],
				//
				[1, 3, 1], [1, 3, 2], [1, 3, 3],
				[2, 3, 1], [2, 3, 2], [2, 3, 3],
				[3, 3, 1], [3, 3, 2], [3, 3, 3],
			]
			for (let block of blocks) {
				scene.world.showSection(block, Direction.down)
				scene.idle(2)
			}
			scene.addKeyframe()
			scene.text(30, '§b手持工程师锤右键玻璃', [2, 2, 0])
			scene.showControls(
				30,
				utils.grid.at(2, 2, 0),
				'up'
			).rightClick().withItem('immersiveengineering:hammer')
			scene.idle(20)
			scene.world.setBlocks([1, 1, 1, 3, 3, 3,], "minecraft:air")
			scene.idle(5)
			scene.world.createItemEntity([2, 1, 2], Direction.down, "2x minecraft:blast_furnace")
			scene.idle(20)
		})
})