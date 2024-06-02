Ponder.registry(e => {
	e.create('immersiveengineering:auto_workbench')
		.scene('immersiveengineering:auto_workbench', '自动化工程师装配台', 'new_create:ie_1', (scene, utils) => {
			// 防腐木半砖
			const slab_treated_wood_horizontal = 'immersiveengineering:slab_treated_wood_horizontal'
			// 钢脚手架
			const steel_scaffolding_standard = 'immersiveengineering:steel_scaffolding_standard'
			// 红石工程块
			const rs_engineering = 'immersiveengineering:rs_engineering'
			// 轻型工程块
			const light_engineering = 'immersiveengineering:light_engineering'
			// 重型工程块
			const heavy_engineering = 'immersiveengineering:heavy_engineering'
			// 传送带
			const conveyor_basic = 'immersiveengineering:conveyor_basic'

			// 底盘
			scene.showBasePlate()
			scene.idle(20)
			// 第一层
			// 关键帧
			scene.addKeyframe()
			// 脚手架
			scene.world.setBlocks([6, 1, 4, 6, 1, 5], steel_scaffolding_standard)
			scene.world.setBlocks([5, 1, 6, 4, 1, 6], steel_scaffolding_standard)
			scene.world.setBlocks([5, 1, 5], steel_scaffolding_standard)
			// 轻型
			scene.world.setBlocks([5, 1, 4, 4, 1, 4], light_engineering)
			// 重型
			scene.world.setBlocks([6, 1, 6], heavy_engineering)
			// 红石
			scene.world.setBlocks([4, 1, 5], rs_engineering)
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
			// 轻型
			scene.world.setBlocks([5, 2, 4, 4, 2, 4], light_engineering)
			// 重型
			scene.world.setBlocks([6, 2, 6], heavy_engineering)
			// 半砖
			scene.world.setBlocks([4, 2, 5, 4, 2, 6], slab_treated_wood_horizontal)
			// 传送带
			scene.world.setBlocks([6, 2, 4, 6, 2, 5], Block
				.id(conveyor_basic)
				.with('facing', 'west')
			)
			scene.world.setBlocks([5, 2, 5, 5, 2, 6], Block
				.id(conveyor_basic)
				.with('facing', 'west')
			)
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
			// 转弯提醒
			// 关键帧
			scene.addKeyframe()
			scene.rotateCameraY(90)
			scene.idle(40)
			// 转回去
			scene.rotateCameraY(-90)
			scene.idle(20)
			// 锤子
			scene.addKeyframe()
			scene.text(30, '§b用工程师锤右击右侧的防腐木台阶')
			// 右键
			scene.showControls(
				30,
				utils.grid.at(4, 2, 5),
				'down'
			).rightClick().withItem('immersiveengineering:hammer')
			scene.overlay.showOutline('green', {}, [4, 2, 5], 30)
			scene.idle(30)
		})
})