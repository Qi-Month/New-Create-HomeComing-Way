Ponder.registry(e => {
	e.create('immersiveengineering:sawmill')
		.scene('immersiveengineering:sawmill', '锯木机', 'new_create:ie_1', (scene, utils) => {
			// 红石工程块
			const rs_engineering = 'immersiveengineering:rs_engineering'
			// 钢脚手架
			const steel_scaffolding_standard = 'immersiveengineering:steel_scaffolding_standard'
			// 重型工程块
			const heavy_engineering = 'immersiveengineering:heavy_engineering'
			// 轻型工程块
			const light_engineering = 'immersiveengineering:light_engineering'
			// 铁板块
			const sheetmetal_iron = 'immersiveengineering:sheetmetal_iron'
			// 传送带
			const conveyor_basic = 'immersiveengineering:conveyor_basic'

			// 底盘
			scene.showBasePlate()
			scene.idle(20)

			// 第一层
			// 关键帧
			scene.addKeyframe()
			// 铁板块
			scene.world.setBlocks([6, 1, 4, 4, 1, 4], sheetmetal_iron)
			// 两边脚手架
			scene.world.setBlocks([7, 1, 4, 7, 1, 6], steel_scaffolding_standard)
			scene.world.setBlocks([3, 1, 4, 3, 1, 6], steel_scaffolding_standard)
			// 脚手架
			scene.world.setBlocks([6, 1, 5, 5, 1, 5], steel_scaffolding_standard)
			// 重
			scene.world.setBlocks([4, 1, 5], heavy_engineering)
			// 轻
			scene.world.setBlocks([6, 1, 6, 4, 1, 6], light_engineering)
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

			// 第二层
			// 关键帧
			scene.addKeyframe()
			// 轻型
			scene.world.setBlocks([6, 2, 6, 4, 2, 6], light_engineering)
			// 重型
			scene.world.setBlocks([6, 2, 5], heavy_engineering)
			// 红石
			scene.world.setBlocks([7, 2, 4], rs_engineering)
			// 铁板
			scene.world.setBlocks([6, 2, 4], sheetmetal_iron)
			// 传送带
			scene.world.setBlocks([7, 2, 5], Block
				.id(conveyor_basic)
				.with('facing', 'west')
			)
			scene.world.setBlocks([5, 2, 5, 3, 2, 5], Block
				.id(conveyor_basic)
				.with('facing', 'west')
			)
			// 显示
			let blocks_2 = [
				[7, 2, 6], [6, 2, 6], [5, 2, 6], [4, 2, 6], [3, 2, 6],
				[7, 2, 5], [6, 2, 5], [5, 2, 5], [4, 2, 5], [3, 2, 5],
				[7, 2, 4], [6, 2, 4], [5, 2, 4], [4, 2, 4], [3, 2, 4],
			]
			for (let block of blocks_2) {
				scene.world.showSection(block, Direction.down)
				scene.idle(2)
			}
			scene.idle(20)
			// 转弯
			// 关键帧
			scene.addKeyframe()
			scene.rotateCameraY(180)
			scene.idle(20)
			// 包边
			scene.overlay.showOutline('red', {}, [7, 2, 5], 30)
			scene.text(30, '§c传送带', [7, 1.5, 5]).placeNearTarget()
			scene.idle(40)
			// 转回去
			scene.rotateCameraY(-180)
			scene.idle(20)
			// 锤子
			scene.addKeyframe()
			scene.text(30, '§b用工程师锤右击正前方的铁板块')
			// 右键
			scene.showControls(
				30,
				utils.grid.at(5, 1, 3),
				'up'
			).rightClick().withItem('immersiveengineering:hammer')
			scene.overlay.showOutline('green', {}, [5, 1, 4], 30)
			scene.idle(30)
		})
})