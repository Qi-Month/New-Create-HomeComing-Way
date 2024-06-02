Ponder.registry(e => {
	e.create('immersiveengineering:alloy_smelter')
		.scene('immersiveengineering:alloy_smelter', '合金窑', 'new_create:ie_2', (scene, utils) => {
			// 显示底盘
			scene.showBasePlate()
			scene.idle(20)
			scene.world.setBlocks([5, 1, 4, 4, 2, 6], 'immersiveengineering:alloybrick')
			// 设置坐标数组
			let blocks = [
				[5, 1, 5], [4, 1, 5],
				[5, 1, 4], [4, 1, 4],
				//
				[5, 2, 5], [4, 2, 5],
				[5, 2, 4], [4, 2, 4],
			]
			for (let block of blocks) {
				scene.world.showSection(block, Direction.down)
				scene.idle(2)
			}
			scene.idle(20)
			// 锤子
			scene.addKeyframe()
			scene.text(30, '§b用工程师锤右击任意一个面')
			// 右键
			scene.showControls(
				30,
				utils.grid.at(4, 2, 4),
				'left'
			).rightClick().withItem('immersiveengineering:hammer')
			scene.overlay.showOutline('green', {}, [4, 2, 4], 30)
			scene.idle(20)
		})
})