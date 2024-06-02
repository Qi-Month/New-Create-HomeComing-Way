Ponder.registry(e => {
	e.create('immersiveengineering:bottling_machine')
		.scene('immersiveengineering:bottling_machine', '灌装机', 'new_create:ie_1', (scene, utils) => {
			// 钢脚手架
			const steel_scaffolding_standard = 'immersiveengineering:steel_scaffolding_standard'
			// 红石工程块
			const rs_engineering = 'immersiveengineering:rs_engineering'
			// 轻型工程块
			const light_engineering = 'immersiveengineering:light_engineering'
			// 流体泵
			const fluid_pump = 'immersiveengineering:fluid_pump'
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
			// 脚手架
			scene.world.setBlocks([6, 1, 4], steel_scaffolding_standard)
			scene.world.setBlocks([5, 1, 5], steel_scaffolding_standard)
			scene.world.setBlocks([4, 1, 4], steel_scaffolding_standard)
			// 红石
			scene.world.setBlocks([5, 1, 4], rs_engineering)
			// 轻型
			scene.world.setBlocks([4, 1, 5], light_engineering)
			// 铁板
			scene.world.setBlocks([6, 1, 5], sheetmetal_iron)
			// 显示
			let blocks_1 = [
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
			scene.world.setBlocks([6, 2, 5], sheetmetal_iron)
			// 泵
			scene.world.setBlocks([5, 2, 5], fluid_pump)
			scene.world.setBlocks([5, 3, 5], Block
				.id(fluid_pump)
				.with('multiblockslave', 'true')
			)
			// 轻型
			scene.world.setBlocks([4, 2, 5], light_engineering)
			// 传送带
			scene.world.setBlocks([6, 2, 4, 4, 2, 4], Block
				.id(conveyor_basic)
				.with('facing', 'west')
			)
			// 显示
			let blocks_2 = [
				[6, 2, 5], [4, 2, 5],
				[6, 2, 4], [5, 2, 4], [4, 2, 4],
			]
			for (let block of blocks_2) {
				scene.world.showSection(block, Direction.down)
				scene.idle(2)
			}
			scene.world.showSection([5, 2, 5, 5, 3, 5], Direction.down)
			scene.idle(20)
			// 锤子
			scene.addKeyframe()
			scene.text(30, '§b用工程师锤右击正前方的传送带')
			// 右键
			scene.showControls(
				30,
				utils.grid.at(5, 1, 4),
				'up'
			).rightClick().withItem('immersiveengineering:hammer')
			scene.overlay.showOutline('green', {}, [5, 2, 4], 30)
			scene.idle(20)
		})
})