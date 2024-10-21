Ponder.registry((event) => {
	event.create("new_create:blast_furnace")
		.scene("new_create:blast_furnace", "高炉(致敬传奇Mod工业长路)", "new_create:blast_furnace", (scene) => {
			scene.showBasePlate()
			scene.idle(20)
			scene.scaleSceneView(0.7)

			//
			scene.addKeyframe()
			let block1 = [
				[3, 1, 3], [2, 1, 3], [1, 1, 3],
				[3, 1, 2], [2, 1, 2], [1, 1, 2],
				[3, 1, 1], [2, 1, 1], [1, 1, 1],
			]
			block1.forEach((pos) => {
				scene.world.showSection(pos, Direction.DOWN)
				scene.idle(2)
			})
			scene.idle(20)

			//
			scene.addKeyframe()
			let block2 = [
				[3, 2, 3], [2, 2, 3], [1, 2, 3],
				[3, 2, 2], [2, 2, 2], [1, 2, 2],
				[3, 2, 1], [2, 2, 1], [1, 2, 1],
			]
			block2.forEach((pos) => {
				scene.world.showSection(pos, Direction.DOWN)
				scene.idle(2)
			})
			scene.idle(20)

			//
			scene.addKeyframe()
			let block3 = [
				[3, 3, 3], [2, 3, 3], [1, 3, 3],
				[3, 3, 2], [2, 3, 2], [1, 3, 2],
				[3, 3, 1], [2, 3, 1], [1, 3, 1],
			]
			block3.forEach((pos) => {
				scene.world.showSection(pos, Direction.DOWN)
				scene.idle(2)
			})
			scene.idle(20)

			//
			scene.addKeyframe()
			let block4 = [
				[3, 4, 3], [2, 4, 3], [1, 4, 3],
				[3, 4, 2], [2, 4, 2], [1, 4, 2],
				[3, 4, 1], [2, 4, 1], [1, 4, 1],
			]
			block4.forEach((pos) => {
				scene.world.showSection(pos, Direction.DOWN)
				scene.idle(2)
			})
			scene.idle(20)

			//
			scene.addKeyframe()
			let block5 = [
				[3, 5, 3], [2, 5, 3], [1, 5, 3],
				[3, 5, 2], [2, 5, 2], [1, 5, 2],
				[3, 5, 1], [2, 5, 1], [1, 5, 1],
			]
			block5.forEach((pos) => {
				scene.world.showSection(pos, Direction.DOWN)
				scene.idle(2)
			})
			scene.idle(20)

			//
			scene.addKeyframe()
			let block6 = [
				[3, 6, 3], [2, 6, 3], [1, 6, 3],
				[3, 6, 2], [2, 6, 2], [1, 6, 2],
				[3, 6, 1], [2, 6, 1], [1, 6, 1],
			]
			block6.forEach((pos) => {
				scene.world.showSection(pos, Direction.DOWN)
				scene.idle(2)
			})
			scene.idle(20)
		})
})