Ponder.registry(e => {
	e.create('immersiveengineering:refinery')
		.scene('immersiveengineering:refinery', '炼油厂', 'new_create:ie_1', (scene, utils) => {
			// 红石工程块
			const rs_engineering = 'immersiveengineering:rs_engineering'
			// 轻型工程块
			const light_engineering = 'immersiveengineering:light_engineering'
			// 钢脚手架
			const steel_scaffolding_standard = 'immersiveengineering:steel_scaffolding_standard'
			// 管道
			const fluid_pipe = 'immersiveengineering:fluid_pipe'
			// 重型工程块
			const heavy_engineering = 'immersiveengineering:heavy_engineering'
			// 铁板块
			const sheetmetal_iron = 'immersiveengineering:sheetmetal_iron'

			// 显示底盘
			scene.showBasePlate()
			scene.idle(20)

			// 第一层
			// 关键帧
			scene.addKeyframe()
			// 脚手架
			scene.world.setBlocks([7, 1, 6, 6, 1, 6], steel_scaffolding_standard)
			scene.world.setBlocks([4, 1, 6, 3, 1, 6], steel_scaffolding_standard)
			scene.world.setBlocks([7, 1, 4, 6, 1, 4], steel_scaffolding_standard)
			scene.world.setBlocks([4, 1, 4, 3, 1, 4], steel_scaffolding_standard)
			// 管道
			scene.world.setBlocks([7, 1, 5, 3, 1, 5], fluid_pipe)
			// 轻型
			scene.world.setBlocks([5, 1, 6], light_engineering)
			scene.world.setBlocks([5, 1, 4], heavy_engineering)
			// 显示
			let blocks_1 = [
				[7, 1, 6], [6, 1, 6], [5, 1, 6], [4, 1, 6], [3, 1, 6],
				[7, 1, 5], [6, 1, 5], [5, 1, 5], [4, 1, 5], [3, 1, 5],
				[7, 1, 4], [6, 1, 4], [5, 1, 4], [4, 1, 4], [3, 1, 4],
			]
			for (let block of blocks_1) {
				scene.world.showSection(block, Direction.down)
				scene.idle(2)
			}
			scene.idle(20)

			// 第二三层
			// 关键帧
			scene.addKeyframe()
			// 铁板块
			scene.world.setBlocks([7, 2, 5, 6, 3, 6], sheetmetal_iron)
			scene.world.setBlocks([4, 2, 5, 3, 3, 6], sheetmetal_iron)
			// 轻
			scene.world.setBlocks([5, 2, 6], light_engineering)
			// 红石
			scene.world.setBlocks([3, 2, 4], rs_engineering)
			// 重
			scene.world.setBlocks([5, 2, 4], heavy_engineering)
			let blocks_end = [
				[7, 2, 6], [6, 2, 6], [5, 2, 6], [4, 2, 6], [3, 2, 6],
				[7, 2, 5], [6, 2, 5], [5, 2, 5], [4, 2, 5], [3, 2, 5],
				[7, 2, 4], [6, 2, 4], [5, 2, 4], [4, 2, 4], [3, 2, 4],
				//
				[7, 3, 6], [6, 3, 6], [4, 3, 6], [3, 3, 6],
				[7, 3, 5], [6, 3, 5], [4, 3, 5], [3, 3, 5],
			]
			for (let block of blocks_end) {
				scene.world.showSection(block, Direction.down)
				scene.idle(2)
			}
			scene.idle(20)
			// 锤子
			scene.addKeyframe()
			scene.text(30, '§b用工程师锤右击中间的铁板块')
			// 右键
			scene.showControls(
				30,
				utils.grid.at(5, 2, 4),
				'down'
			).rightClick().withItem('immersiveengineering:hammer')
			scene.overlay.showOutline('green', {}, [5, 2, 4], 30)
			scene.idle(30)
		})
})