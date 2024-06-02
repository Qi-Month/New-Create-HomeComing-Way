Ponder.registry(e => {
	e.create('melter:melter')
		// 搭建
		.scene('melter:melter', '搭建', 'new_create:melter', (scene, utils) => {
			scene.showBasePlate()
			scene.idle(20)
			scene.scaleSceneView(0.7)

			scene.world.showSection([4, 1, 0, 0, 1, 4], Direction.DOWN)
			scene.idle(20)
			scene.world.showSection([4, 2, 0], Direction.DOWN)
			scene.world.showSection([4, 2, 4], Direction.DOWN)
			scene.world.showSection([0, 2, 0], Direction.DOWN)
			scene.world.showSection([0, 2, 4], Direction.DOWN)
			scene.idle(20)
			scene.world.showSection([3, 2, 1, 1, 2, 3], Direction.DOWN)
			scene.idle(30)

			let blocks = [
				[3, 3, 3], [2, 3, 3], [1, 3, 3],
				[3, 3, 2], [1, 3, 2],
				[3, 3, 1], [2, 3, 1], [1, 3, 1],

				[3, 4, 3], [2, 4, 3], [1, 4, 3],
				[3, 4, 2], [1, 4, 2],
				[3, 4, 1], [2, 4, 1], [1, 4, 1],

				[3, 5, 3], [2, 5, 3], [1, 5, 3],
				[3, 5, 2], [1, 5, 2],
				[3, 5, 1], [2, 5, 1], [1, 5, 1],

				[3, 6, 3], [2, 6, 3], [1, 6, 3],
				[3, 6, 2], [1, 6, 2],
				[3, 6, 1], [2, 6, 1], [1, 6, 1],
			]
			for (let block of blocks) {
				scene.world.showSection(block, Direction.down)
				scene.idle(2)
			}
			scene.idleSeconds(1)

			// 锤子
			scene.addKeyframe()
			scene.text(30, '§b用锤子右击黏土块')
			// 右键
			scene.showControls(
				30,
				utils.grid.at(2, 2, 1),
				'DOWN'
			).rightClick().withItem('new_create:stone_hammer')
			scene.overlay.showOutline('blue', {}, [2, 2, 1], 30)
			scene.idle(30)

			scene.world.setBlocks([4, 1, 0, 0, 6, 4], 'minecraft:air', true)
			scene.world.createItemEntity([2, 2, 2], Direction.DOWN, '2x melter:melter')
			scene.idleSeconds(1)
		})

		// 使用
		.scene('melter:melter_use', '使用', (scene, utils) => {
			scene.showBasePlate()
			scene.idle(20)
			scene.world.setBlocks([2, 2, 2], 'melter:melter')
			scene.world.showSection([2, 2, 2], Direction.DOWN)
			scene.idle(20)
			scene.text(40, '§b熔化锅可以将内部的物品\n§b融化成特定液体', [2, 3, 2])
			scene.idle(40)

			scene.text(20, '§b将物品从\n§b上方投入熔化锅...')
			let sand = scene.world.createItemEntity([2, 5, 2], Direction.DOWN, 'minecraft:sand')
			scene.idle(9)
			scene.world.removeEntity(sand)

			scene.idleSeconds(1)
			scene.world.setBlocks([2, 1, 2], 'minecraft:lava')
			scene.world.setBlocks([2, 1, 3], 'create:framed_glass')
			scene.world.setBlocks([3, 1, 2], 'create:framed_glass')
			scene.world.setBlocks([2, 1, 1], 'create:framed_glass')
			scene.world.setBlocks([1, 1, 2], 'create:framed_glass')
			scene.world.showSection([3, 1, 1, 1, 1, 3], Direction.UP)
			scene.text(20, '§b添加热量', [2, 2, 2])

			scene.idleSeconds(1)
			scene.text(40, '§b等待...')
			scene.idle(20)

			scene.showControls(
				30,
				utils.grid.at(2, 2, 2),
				'down'
			).withItem('new_create:glass_bucket')
			scene.idleSeconds(1)
		})
})