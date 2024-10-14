Ponder.registry((event) => {
	event.create('immersiveengineering:blast_furnace')
		.scene('immersiveengineering:blast_furnace', '高炉', 'new_create:ie_1', (scene, utils) => {
			// 显示底盘
			scene.showBasePlate()
			scene.idle(20)
			scene.world.setBlocks([4, 1, 4, 6, 3, 6], 'immersiveengineering:blastbrick')
			// 设置坐标数组
			let blocks = [
				[6, 1, 6], [5, 1, 6], [4, 1, 6],
				[6, 1, 5], [5, 1, 5], [4, 1, 5],
				[6, 1, 4], [5, 1, 4], [4, 1, 4],
				//
				[6, 2, 6], [5, 2, 6], [4, 2, 6],
				[6, 2, 5], [5, 2, 5], [4, 2, 5],
				[6, 2, 4], [5, 2, 4], [4, 2, 4],
				//
				[6, 3, 6], [5, 3, 6], [4, 3, 6],
				[6, 3, 5], [5, 3, 5], [4, 3, 5],
				[6, 3, 4], [5, 3, 4], [4, 3, 4],
			]
			for (let block of blocks) {
				scene.world.showSection(block, Direction.DOWN)
				scene.idle(2)
			}
			scene.idle(20)
			// 锤子
			scene.addKeyframe()
			scene.text(30, '§b用工程师锤右击任意一个面')
			// 右键
			scene.showControls(
				30,
				utils.grid.at(5, 2, 4),
				'left'
			).rightClick().withItem('immersiveengineering:hammer')
			scene.overlay.showOutline('green', {}, [5, 2, 4], 30)
			scene.idle(20)
		})
})