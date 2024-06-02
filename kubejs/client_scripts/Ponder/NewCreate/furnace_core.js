Ponder.registry(e => {
	e.create('new_create:furnace_core')
		.scene('new_create:furnace_core', '熔炉核心合成', 'new_create:furnace_core', (scene, utils) => {
			scene.showBasePlate()
			scene.idle(20)
			let blocks = [
				//第一层
				[1, 1, 1], [1, 1, 2], [1, 1, 3],
				[2, 1, 1], [2, 1, 2], [2, 1, 3],
				[3, 1, 1], [3, 1, 2], [3, 1, 3],
				//第二层
				[1, 2, 1], [1, 2, 2], [1, 2, 3],
				[2, 2, 1], [2, 2, 2], [2, 2, 3],
				[3, 2, 1], [3, 2, 2], [3, 2, 3],
				//第三层
				[1, 3, 1], [1, 3, 2], [1, 3, 3],
				[2, 3, 1], [2, 3, 2], [2, 3, 3],
				[3, 3, 1], [3, 3, 2], [3, 3, 3],
			]
			for (let block of blocks) {
				scene.world.showSection(block, Direction.DOWN)
				scene.idle(3)
			}
			scene.addKeyframe()
			scene.text(30, '手持工程师锤右键中间的圆石', [2, 2, 0])
			scene.showControls(
				30,
				utils.grid.at(2, 2, 0),
				'down'
			).rightClick().withItem('immersiveengineering:hammer')
			scene.idle(20)
			scene.world.setBlocks([1, 1, 1, 3, 3, 3], "minecraft:air")
			scene.idle(5)
			scene.world.createItemEntity([2, 1, 2], Direction.DOWN, "new_create:furnace_core")
			scene.idle(5)
		})
})