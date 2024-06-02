Ponder.registry(e => {
	e.create('immersiveengineering:arc_furnace')
		.scene('immersiveengineering:arc_furnace', '电弧炉', 'new_create:ie_1', (scene, utils) => {
			// 炼药锅
			const cauldron = 'minecraft:cauldron'
			// 钢板块
			const sheetmetal_steel = 'immersiveengineering:sheetmetal_steel'
			// 钢板半砖
			const slab_sheetmetal_steel = 'immersiveengineering:slab_sheetmetal_steel'
			// 钢脚手架
			const steel_scaffolding_standard = 'immersiveengineering:steel_scaffolding_standard'
			// 钢块
			const storage_steel = 'immersiveengineering:storage_steel'
			// 重型工程块
			const heavy_engineering = 'immersiveengineering:heavy_engineering'
			// 红石工程块
			const rs_engineering = 'immersiveengineering:rs_engineering'
			// 轻型工程块
			const light_engineering = 'immersiveengineering:light_engineering'
			// 强化高炉砖
			const blastbrick_reinforced = 'immersiveengineering:blastbrick_reinforced'

			// 显示底盘
			scene.showBasePlate()
			scene.idle(20)
			scene.scaleSceneView(0.7)
			// 第一层
			// 关键帧
			scene.addKeyframe()
			// 中间的半砖
			scene.world.setBlocks([6, 1, 4, 4, 1, 6], slab_sheetmetal_steel)
			// 剩余的半砖
			scene.world.setBlocks([4, 1, 3], slab_sheetmetal_steel)
			scene.world.setBlocks([3, 1, 4], slab_sheetmetal_steel)
			scene.world.setBlocks([4, 1, 7, 3, 1, 7], slab_sheetmetal_steel)
			scene.world.setBlocks([3, 1, 6], slab_sheetmetal_steel)
			// 炼药锅
			scene.world.setBlocks([3, 1, 5], cauldron)
			// 钢脚手架
			scene.world.setBlocks([3, 1, 3], steel_scaffolding_standard)
			// 两边的钢块
			scene.world.setBlocks([5, 1, 3], storage_steel)
			scene.world.setBlocks([5, 1, 7], storage_steel)
			// 重型工程块
			scene.world.setBlocks([7, 1, 5], heavy_engineering)
			// 后边的钢板块
			scene.world.setBlocks([7, 1, 3, 6, 1, 3], sheetmetal_steel)
			scene.world.setBlocks([7, 1, 4], sheetmetal_steel)
			scene.world.setBlocks([7, 1, 7, 6, 1, 7], sheetmetal_steel)
			scene.world.setBlocks([7, 1, 6], sheetmetal_steel)
			// 显示
			let blocks_1 = [
				[7, 1, 7], [6, 1, 7], [5, 1, 7], [4, 1, 7], [3, 1, 7],
				[7, 1, 6], [6, 1, 6], [5, 1, 6], [4, 1, 6], [3, 1, 6],
				[7, 1, 5], [6, 1, 5], [5, 1, 5], [4, 1, 5], [3, 1, 5],
				[7, 1, 4], [6, 1, 4], [5, 1, 4], [4, 1, 4], [3, 1, 4],
				[7, 1, 3], [6, 1, 3], [5, 1, 3], [4, 1, 3], [3, 1, 3],
			]
			for (let block of blocks_1) {
				scene.world.showSection(block, Direction.down)
				scene.idle(2)
			}
			scene.idle(20)

			// 第二层
			// 关键帧
			scene.addKeyframe()
			// 强化高炉砖
			scene.world.setBlocks([6, 2, 4, 5, 2, 6], blastbrick_reinforced)
			// 后面的轻型
			scene.world.setBlocks([7, 2, 4, 7, 2, 6], light_engineering)
			// 两边的重型
			scene.world.setBlocks([7, 2, 3, 6, 2, 3], heavy_engineering)
			scene.world.setBlocks([7, 2, 7, 6, 2, 7], heavy_engineering)
			// 两侧的钢块
			scene.world.setBlocks([5, 2, 3], storage_steel)
			scene.world.setBlocks([5, 2, 7], storage_steel)
			// 红石工程块
			scene.world.setBlocks([3, 2, 3], rs_engineering)
			// 显示
			let blocks_2 = [
				[7, 2, 7], [6, 2, 7], [5, 2, 7], [4, 2, 7], [3, 2, 7],
				[7, 2, 6], [6, 2, 6], [5, 2, 6], [4, 2, 6], [3, 2, 6],
				[7, 2, 5], [6, 2, 5], [5, 2, 5], [4, 2, 5], [3, 2, 5],
				[7, 2, 4], [6, 2, 4], [5, 2, 4], [4, 2, 4], [3, 2, 4],
				[7, 2, 3], [6, 2, 3], [5, 2, 3], [4, 2, 3], [3, 2, 3],
			]
			for (let block of blocks_2) {
				scene.world.showSection(block, Direction.down)
				scene.idle(2)
			}
			scene.idle(20)

			// 第三层
			// 关键帧
			scene.addKeyframe()
			// 高炉砖
			scene.world.setBlocks([6, 3, 4, 3, 3, 6], blastbrick_reinforced)
			// 轻
			scene.world.setBlocks([7, 3, 4, 7, 3, 6], light_engineering)
			// 后面钢板块
			scene.world.setBlocks([7, 3, 3], sheetmetal_steel)
			scene.world.setBlocks([7, 3, 7], sheetmetal_steel)
			// 两侧钢块
			scene.world.setBlocks([5, 3, 3], storage_steel)
			scene.world.setBlocks([5, 3, 7], storage_steel)
			// 显示
			let blocks_3 = [
				[7, 3, 7], [6, 3, 7], [5, 3, 7], [4, 3, 7], [3, 3, 7],
				[7, 3, 6], [6, 3, 6], [5, 3, 6], [4, 3, 6], [3, 3, 6],
				[7, 3, 5], [6, 3, 5], [5, 3, 5], [4, 3, 5], [3, 3, 5],
				[7, 3, 4], [6, 3, 4], [5, 3, 4], [4, 3, 4], [3, 3, 4],
				[7, 3, 3], [6, 3, 3], [5, 3, 3], [4, 3, 3], [3, 3, 3],
			]
			for (let block of blocks_3) {
				scene.world.showSection(block, Direction.down)
				scene.idle(2)
			}
			scene.idle(20)

			// 第四五层
			// 关键帧
			scene.addKeyframe()
			// 高炉砖
			scene.world.setBlocks([6, 4, 4, 4, 4, 6], blastbrick_reinforced)
			// 轻型
			scene.world.setBlocks([7, 4, 5, 7, 5, 5], light_engineering)
			scene.world.setBlocks([6, 5, 5, 5, 5, 5], light_engineering)
			// 脚手架
			scene.world.setBlocks([7, 4, 4, 7, 5, 4], steel_scaffolding_standard)
			scene.world.setBlocks([7, 4, 6, 7, 5, 6], steel_scaffolding_standard)
			// 显示
			let blocks_end = [
				[7, 4, 7], [6, 4, 7], [5, 4, 7], [4, 4, 7], [3, 4, 7],
				[7, 4, 6], [6, 4, 6], [5, 4, 6], [4, 4, 6], [3, 4, 6],
				[7, 4, 5], [6, 4, 5], [5, 4, 5], [4, 4, 5], [3, 4, 5],
				[7, 4, 4], [6, 4, 4], [5, 4, 4], [4, 4, 4], [3, 4, 4],
				[7, 4, 3], [6, 4, 3], [5, 4, 3], [4, 4, 3], [3, 4, 3],
				//
				[7, 5, 7], [6, 5, 7], [5, 5, 7], [4, 5, 7], [3, 5, 7],
				[7, 5, 6], [6, 5, 6], [5, 5, 6], [4, 5, 6], [3, 5, 6],
				[7, 5, 5], [6, 5, 5], [5, 5, 5], [4, 5, 5], [3, 5, 5],
				[7, 5, 4], [6, 5, 4], [5, 5, 4], [4, 5, 4], [3, 5, 4],
				[7, 5, 3], [6, 5, 3], [5, 5, 3], [4, 5, 3], [3, 5, 3],
			]
			for (let block of blocks_end) {
				scene.world.showSection(block, Direction.down)
				scene.idle(2)
			}
			// 关键帧
			scene.addKeyframe()
			// 转弯
			scene.rotateCameraY(-90)
			scene.idle(30)
			scene.rotateCameraY(-90)
			scene.idle(30)
			scene.rotateCameraY(-90)
			scene.idle(30)
			scene.rotateCameraY(-90)
			scene.idle(30)
			scene.overlay.showOutline('red', {}, [7, 1, 3, 3, 5, 7], 30)
			scene.idle(20)
			// 锤子
			scene.addKeyframe()
			scene.text(30, '§b用工程师锤右击炼药锅')
			// 右键
			scene.showControls(
				30,
				utils.grid.at(3, 1, 5),
				'left'
			).rightClick().withItem('immersiveengineering:hammer')
			scene.overlay.showOutline('green', {}, [3, 1, 5], 30)
			scene.idle(30)
		})
})