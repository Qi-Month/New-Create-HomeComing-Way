Ponder.registry(e => {
	e.create('immersiveengineering:mixer')
		.scene('immersiveengineering:mixer', '混合器', 'new_create:ie_1', (scene, utils) => {
			// 钢脚手架
			const steel_scaffolding_standard = 'immersiveengineering:steel_scaffolding_standard'
			// 铁板块
			const sheetmetal_iron = 'immersiveengineering:sheetmetal_iron'
			// 红石工程块
			const rs_engineering = 'immersiveengineering:rs_engineering'
			// 轻型工程块
			const light_engineering = 'immersiveengineering:light_engineering'
			// 管道
			const fluid_pipe = 'immersiveengineering:fluid_pipe'
			// 钢栅栏
			const steel_fence = 'immersiveengineering:steel_fence'

			// 底盘
			scene.showBasePlate()
			scene.idle(20)
			// 第一层
			// 关键帧
			scene.addKeyframe()
			// 脚手架
			scene.world.setBlocks([6, 1, 4, 6, 1, 6], steel_scaffolding_standard)
			scene.world.setBlocks([5, 1, 6, 4, 1, 6], steel_scaffolding_standard)
			// 管道
			scene.world.setBlocks([5, 1, 4, 5, 1, 5], fluid_pipe)
			scene.world.setBlocks([4, 1, 5], fluid_pipe)
			// 轻型
			scene.world.setBlocks([4, 1, 4], light_engineering)
			// 显示
			let blocks_1 = [
				[6, 1, 6], [5, 1, 6], [4, 1, 6],
				[6, 1, 5], [5, 1, 5], [4, 1, 5],
				[6, 1, 4], [5, 1, 4], [4, 1, 4],
			]
			for (let block of blocks_1) {
				scene.world.showSection(block, Direction.down)
				scene.idle(2)
			}
			scene.idle(20)

			// 第二层
			// 关键帧
			scene.addKeyframe()
			// 铁板块
			scene.world.setBlocks([6, 2, 5, 5, 2, 6], sheetmetal_iron)
			// 红石
			scene.world.setBlocks([4, 2, 6], rs_engineering)
			// 轻型
			scene.world.setBlocks([5, 2, 4, 4, 2, 4], light_engineering)
			// 显示
			let blocks_2 = [
				[6, 2, 6], [5, 2, 6], [4, 2, 6],
				[6, 2, 5], [5, 2, 5], [4, 2, 5],
				[6, 2, 4], [5, 2, 4], [4, 2, 4],
			]
			for (let block of blocks_2) {
				scene.world.showSection(block, Direction.down)
				scene.idle(2)
			}
			scene.idle(20)

			// 第三层
			// 关键帧
			scene.addKeyframe()
			// 轻型
			scene.world.setBlocks([5, 3, 5], light_engineering)
			// 栅栏
			scene.world.setBlocks([5, 3, 4], steel_fence)
			// 显示
			let blocks_3 = [
				[5, 3, 5],
				[5, 3, 4]
			]
			for (let block of blocks_3) {
				scene.world.showSection(block, Direction.down)
				scene.idle(2)
			}
			scene.idle(20)

			// 关键帧
			scene.addKeyframe()
			scene.rotateCameraY(-45)
			scene.idle(20)
			// 锤子
			scene.text(30, '§b用工程师锤右击中间的铁板块')
			// 右键
			scene.showControls(
				30,
				utils.grid.at(5, 2, 5),
				'down'
			).rightClick().withItem('immersiveengineering:hammer')
			scene.overlay.showOutline('green', {}, [5, 2, 5], 30)
			scene.idle(30)
		})
})