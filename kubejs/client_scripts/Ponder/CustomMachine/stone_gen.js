Ponder.registry((event) => {
	event.create("new_create:stone_gen")
		.scene("new_create:stone_gen", "结构造石机", (scene) => {
			let glass = "create:framed_glass"
			let casing = "create:copper_casing"

			scene.showBasePlate()
			scene.idle(20)

			scene.addKeyframe()
			scene.world.setBlocks([3, 1, 1, 1, 1, 3], casing)
			let block1 = [
				[3, 1, 3], [2, 1, 3], [1, 1, 3],
				[3, 1, 2], [2, 1, 2], [1, 1, 2],
				[3, 1, 1], [2, 1, 1], [1, 1, 1]
			]
			block1.forEach((pos) => {
				scene.world.showSection(pos, Direction.DOWN)
				scene.idle(2)
			})
			scene.idle(20)

			//
			scene.addKeyframe()
			let block2 = [
				[3, 2, 1], [3, 2, 2], [3, 2, 3],
				[2, 2, 3], [1, 2, 3], [1, 2, 2],
				[1, 2, 1]
			]
			block2.forEach((pos) => {
				scene.world.setBlocks(pos, glass)
				scene.world.showSection(pos, Direction.DOWN)
				scene.idle(2)
			})

			scene.idle(20)
			scene.world.setBlocks([2, 2, 1], "new_create:stone_gen")
			scene.world.showSection([2, 2, 1], Direction.DOWN)
			scene.idle(10)
			scene.world.setBlocks([2, 2, 2], "minecraft:lava")
			scene.world.showSection([2, 2, 2], Direction.DOWN)
			scene.idle(20)

			// 
			scene.addKeyframe()
			scene.world.setBlocks([3, 3, 1, 1, 3, 3], casing)
			let block3 = [
				[3, 3, 3], [2, 3, 3], [1, 3, 3],
				[3, 3, 2], [2, 3, 2], [1, 3, 2],
				[3, 3, 1], [2, 3, 1], [1, 3, 1]
			]
			block3.forEach((pos) => {
				scene.world.showSection(pos, Direction.DOWN)
				scene.idle(2)
			})
			scene.idle(20)

			//
			scene.addKeyframe()
			scene.text(40, "结构造石机可以在结构完成后根据自身下方的压缩石头来决定制造什么石头", [2.5, 2.5, 1])
			scene.idle(45)
			scene.text(40, "如果下方的压缩石头等级为二重压缩, 则有16%的概率生成未压缩过的材料, 有84%的概率生成圆石", [2.5, 2.5, 1])
			scene.idle(45)
			scene.text(40, "如果下方的压缩石头等级为三重压缩, 则100%生成未压缩过的材料", [2.5, 2.5, 1])
			scene.idle(45)

			//
			scene.addKeyframe()
			scene.world.setBlocks([2, 1, 1], "new_create:triple_compressed_andesite")
			scene.idle(20)
			scene.showControls(20, [2.5, 2.5, 1], "down")
				.withItem("minecraft:andesite")
			scene.idle(30)

			scene.addKeyframe()
			scene.world.setBlocks([2, 1, 1], "new_create:triple_compressed_tuff")
			scene.idle(20)
			scene.showControls(20, [2.5, 2.5, 1], "down")
				.withItem("minecraft:tuff")
			scene.idle(30)

			scene.addKeyframe()
			scene.world.setBlocks([2, 1, 1], "new_create:triple_compressed_calcite")
			scene.idle(20)
			scene.showControls(20, [2.5, 2.5, 1], "down")
				.withItem("minecraft:calcite")
			scene.idle(30)
		})
})