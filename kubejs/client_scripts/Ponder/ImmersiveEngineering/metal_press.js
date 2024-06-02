Ponder.registry(e => {
	e.create('immersiveengineering:metal_press')
		.scene(
			'immersiveengineering:metal_press',
			'金属冲压机',
			'new_create:ie_1',
			(scene, utils) => {
				// 红石工程块
				const rs_engineering = 'immersiveengineering:rs_engineering'
				// 钢脚手架
				const steel_scaffolding_standard = 'immersiveengineering:steel_scaffolding_standard'
				// 重型工程块
				const heavy_engineering = 'immersiveengineering:heavy_engineering'
				// 活塞
				const piston = 'minecraft:piston'
				// 传送带
				const conveyor_basic = 'immersiveengineering:conveyor_basic'

				// 底盘
				scene.showBasePlate()
				scene.idle(20)
				// 脚手架
				scene.world.setBlocks([6, 1, 5], steel_scaffolding_standard)
				scene.world.setBlocks([4, 1, 5], steel_scaffolding_standard)
				// 红石
				scene.world.setBlocks([5, 1, 5], rs_engineering)
				// 活塞
				scene.world.setBlocks([5, 2, 5], Block
					.id(piston)
					.with('facing', 'down')
				)
				// 传送带
				scene.world.setBlocks([6, 2, 5], Block
					.id(conveyor_basic)
					.with('facing', 'west')
				)
				scene.world.setBlocks([4, 2, 5], Block
					.id(conveyor_basic)
					.with('facing', 'west')
				)
				// 工程块
				scene.world.setBlocks([5, 3, 5], heavy_engineering)

				// 显示
				let blocks = [
					[6, 1, 5], [5, 1, 5], [4, 1, 5],
					//
					[6, 2, 5], [5, 2, 5], [4, 2, 5],
					//
					[5, 3, 5],
				]
				for (let block of blocks) {
					scene.world.showSection(block, Direction.down)
					scene.idle(2)
				}
				scene.idle(20)
				// 锤子
				scene.addKeyframe()
				scene.text(30, '§b用工程师锤右击炼药锅')
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