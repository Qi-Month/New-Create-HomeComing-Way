Ponder.registry(e => {
	e.create('thermal:device_tree_extractor')
		.scene('thermal:device_tree_extractor', '树汁提取器使用', 'new_create:device_tree_extractor', scene => {
			// 底盘和整棵树
			scene.showBasePlate()
			scene.world.showSection([3, 1, 3, 3, 2, 3], Direction.down)
			scene.world.showSection([3, 3, 3, 3, 11, 3], Direction.down)
			scene.world.showSection([5, 2, 1, 1, 11, 5], Direction.down)
			scene.idle(20)
			// 显示机器
			scene.addKeyframe()
			scene.world.showSection([3, 1, 2, 3, 1, 2], Direction.south)
			scene.idle(20)
			scene.overlay.showOutline('blue', {}, [3, 1, 2, 3, 1, 2], 40)
			scene.text(40, '§b我们在树下放上机器,\n§b记得注意朝向', [2.5, 2.5, 1])
			scene.idle(40)
			// 文本和剩下的机器
			scene.text(30, '§b↓一棵树有4个面,\n§b所以我们可以在4个面都放上机器↓')
				.attachKeyFrame()
			scene.idle(30)
			scene.world.showSection([4, 1, 3], Direction.west)
			scene.world.showSection([3, 1, 4], Direction.north)
			scene.world.showSection([2, 1, 3], Direction.east)
			scene.idle(20)
		})
})