Ponder.registry((event) => {
	event.create("new_create:easy_rock_gen")
		.scene("new_create:easy_rock_gen", "简易造石机", (scene) => {
			let glass = "create:framed_glass"

			//
			scene.addKeyframe()
			scene.showBasePlate()
			scene.idle(20)

			//
			scene.addKeyframe()
			scene.world.setBlocks([2, 1, 2], "new_create:easy_rock_gen")
			scene.world.showSection([2, 1, 2], Direction.DOWN)
			scene.idle(20)

			//
			scene.addKeyframe()
			scene.text(40, "简易造石机可以通过接触旁边的水和熔岩来制造圆石")
			scene.idle(45)

			//
			scene.addKeyframe()
			scene.world.setBlocks([3, 1, 1], glass)
			scene.world.setBlocks([4, 1, 2], glass)
			scene.world.setBlocks([3, 1, 3], glass)
			scene.world.setBlocks([1, 1, 3], glass)
			scene.world.setBlocks([0, 1, 2], glass)
			scene.world.setBlocks([1, 1, 1], glass)

			scene.world.setBlocks([3, 1, 2], "minecraft:lava")
			scene.world.setBlocks([1, 1, 2], "minecraft:water")

			scene.world.showSection([4, 1, 1, 3, 1, 3], Direction.DOWN)
			scene.world.showSection([1, 1, 1, 0, 1, 3], Direction.DOWN)
			scene.idle(20)

			//
			scene.addKeyframe()
			scene.overlay.showOutline("blue", {}, [3, 1, 2], 40)
			scene.overlay.showOutline("red", {}, [1, 1, 2], 40)

			scene.text(40, "只需要在两边分别放一桶熔岩和水即可进行工作, 速度为60Tick(即3秒)一个")
			scene.idle(40)

			//
			scene.addKeyframe()
			scene.world.setBlocks([2, 0, 0], "minecraft:air")
			scene.world.setBlocks([2, 0, 1], "minecraft:barrel")
			scene.world.modifyBlock([2, 0, 1],
				(state) => state.with("facing", "up"), false)
			scene.overlay.showOutline("red", {}, [2, 0, 1], 40)
			scene.text(40, "随后用漏斗或管道接上容器方块就可以等待收货了", [2.2, 1.5, 1])
			scene.idle(50)
		})
})