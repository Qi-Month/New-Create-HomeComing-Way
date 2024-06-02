Ponder.registry(e => {
	e.create(['new_create:log_pile', 'new_create:tinder'])
		.scene('minecraft:stick', '生火', (scene, until) => {
			scene.showBasePlate()
			scene.idle(20)
			scene.world.setBlocks([2, 1, 2], 'new_create:log_pile')
			scene.world.showSection([2, 1, 2], Direction.DOWN)
			scene.addKeyframe()
			scene.idle(10)
			scene.text(30, '§b手持火绒右键', [2, 2, 2])
			scene.idle(20)
			scene.addKeyframe()
			scene.idle(20)
			scene.showControls(
				30,
				until.grid.at(2, 1, 2),
				'left'
			).rightClick().withItem('new_create:tinder')
			scene.idle(20)
			scene.world.setBlocks([2, 1, 2], 'minecraft:fire')
			scene.idle(20)
		})
})