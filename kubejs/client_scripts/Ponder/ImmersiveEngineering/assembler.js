Ponder.registry(e => {
	e.create('immersiveengineering:assembler')
		.scene('immersiveengineering:assembler', '装配机', 'new_create:ie_1', (scene, utils) => {
			// 铁板块
			const sheetmetal_iron = 'immersiveengineering:sheetmetal_iron'
			// 钢板半砖
			const slab_sheetmetal_iron = 'immersiveengineering:slab_sheetmetal_iron'
			// 钢脚手架
			const steel_scaffolding_standard = 'immersiveengineering:steel_scaffolding_standard'
			// 红石工程块
			const rs_engineering = 'immersiveengineering:rs_engineering'
			// 轻型工程块
			const light_engineering = 'immersiveengineering:light_engineering'
			// 传送带
			const conveyor_basic = 'immersiveengineering:conveyor_basic'

			// 底盘
			scene.showBasePlate()
			scene.idle(20)
			// 第一层
			// 关键帧
			scene.addKeyframe()
			// 脚手架
			scene.world.setBlocks([6, 1, 4, 6, 1, 6], steel_scaffolding_standard)
			scene.world.setBlocks([4, 1, 4, 4, 1, 6], steel_scaffolding_standard)
			// 红石
			scene.world.setBlocks([5, 1, 4], rs_engineering)
			scene.world.setBlocks([5, 1, 6], rs_engineering)
			// 轻型
			scene.world.setBlocks([5, 1, 5], light_engineering)
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
			scene.world.setBlocks([6, 2, 4, 4, 2, 4], sheetmetal_iron)
			scene.world.setBlocks([6, 2, 6, 4, 2, 6], sheetmetal_iron)
			// 传送带
			scene.world.setBlocks([6, 2, 5], Block
				.id(conveyor_basic)
				.with('facing', 'east')
			)
			scene.world.setBlocks([4, 2, 5], Block
				.id(conveyor_basic)
				.with('facing', 'east')
			)
			// 轻型
			scene.world.setBlocks([5, 2, 5], light_engineering)
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
			scene.rotateCameraY(120)
			scene.idle(20)
			// 包边
			scene.overlay.showOutline('red', {}, [6, 2, 5], 30)
			scene.text(30, '§c传送带', [6, 2, 5.5]).placeNearTarget()
			scene.idle(40)
			// 转回去
			scene.rotateCameraY(-120)
			scene.idle(20)

			// 第三层
			// 关键帧
			scene.addKeyframe()
			// 铁板块
			scene.world.setBlocks([6, 3, 5, 4, 3, 5], sheetmetal_iron)
			// 半砖
			scene.world.setBlocks([6, 3, 4, 4, 3, 4], slab_sheetmetal_iron)
			scene.world.setBlocks([6, 3, 6, 4, 3, 6], slab_sheetmetal_iron)
			let blocks_3 = [
				[6, 3, 6], [5, 3, 6], [4, 3, 6],
				[6, 3, 5], [5, 3, 5], [4, 3, 5],
				[6, 3, 4], [5, 3, 4], [4, 3, 4],
			]
			for (let block of blocks_3) {
				scene.world.showSection(block, Direction.down)
				scene.idle(2)
			}
			scene.idle(20)
			// 锤子
			scene.addKeyframe()
			scene.text(30, '§b用工程师锤右击侧边的传送带')
			// 右键
			scene.showControls(
				30,
				utils.grid.at(4, 2, 5),
				'right'
			).rightClick().withItem('immersiveengineering:hammer')
			scene.overlay.showOutline('green', {}, [4, 2, 5], 30)
			scene.idle(30)
		})
})