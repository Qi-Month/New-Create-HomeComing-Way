Ponder.registry((event) => {
	event.create("new_create:oxygen_generator")
		.scene("new_create:oxygen_generator", "制氧机搭建", (scene) => {
			let casing = "create:copper_casing"
			let lv = "immersiveengineering:coil_lv"

			scene.showBasePlate()
			scene.idle(20)

			//
			scene.addKeyframe()
			let block1 = [
				[3, 1, 3], [2, 1, 3], [1, 1, 3],
				[3, 1, 2], [2, 1, 2], [1, 1, 2],
				[3, 1, 1], [1, 1, 1]
			]
			block1.forEach((pos) => {
				scene.world.setBlocks(pos, casing)
				scene.world.showSection(pos, Direction.DOWN)
				scene.idle(2)
			})
			scene.idle(20)

			scene.world.setBlocks([2, 1, 1], "new_create:oxygen_generator")
			scene.world.showSection([2, 1, 1], Direction.DOWN)

			scene.idle(20)

			//
			scene.addKeyframe()
			let block2 = [
				[3, 2, 1], [3, 2, 2], [3, 2, 3],
				[2, 2, 3], [1, 2, 3], [1, 2, 2],
				[1, 2, 1], [2, 2, 1]
			]
			block2.forEach((pos) => {
				scene.world.setBlocks(pos, lv)
				scene.world.showSection(pos, Direction.DOWN)
				scene.idle(2)
			})
			scene.idle(20)

			//
			scene.addKeyframe()
			let block3 = [
				[3, 3, 1], [3, 3, 2], [3, 3, 3],
				[2, 3, 3], [1, 3, 3], [1, 3, 2],
				[1, 3, 1], [2, 3, 1]
			]
			block3.forEach((pos) => {
				scene.world.setBlocks(pos, casing)
				scene.world.showSection(pos, Direction.DOWN)
				scene.idle(2)
			})
			scene.world.setBlocks([2, 3, 2], "new_create:magnetic_cast_iron_block")
			scene.world.showSection([2, 3, 2], Direction.DOWN)

			scene.idle(20)
		})
		.scene("new_create:oxygen_generator_2", "制氧机使用", "new_create:oxygen_generator", (scene) => {
			//
			scene.showBasePlate()
			scene.scaleSceneView(0.7)

			//
			scene.world.showSection([6, 2, 4, 4, 4, 6], Direction.DOWN)
			scene.idle(20)

			scene.text(40, "制氧机在结构搭建好后往内泵水可以产生氧气", [5.5, 2.5, 4])
			scene.idle(50)

			//
			scene.addKeyframe()
			scene.world.showSection([3, 1, 1, 1, 3, 5], Direction.DOWN)
			scene.world.showSection([5, 2, 3, 4, 2, 3], Direction.DOWN)
			scene.idle(20)
			scene.text(40, "水泵进去后会在60Tick(即3s)后生产一批氧气", [5.5, 2.5, 4])
			scene.idle(50)
			scene.text(40, "每次消耗100mb水, 生产50mb氧气", [5.5, 2.5, 4])
			scene.idle(50)
			scene.text(40, "而氧气需要另外的一个泵将其泵出来", [5.5, 2.5, 4])
			scene.idle(50)

			//
			scene.addKeyframe()
			scene.rotateCameraY(90)
			scene.idle(20)
			scene.world.showSection([7, 1, 2, 5, 1, 4], Direction.SOUTH)
			scene.idle(20)
		})
})