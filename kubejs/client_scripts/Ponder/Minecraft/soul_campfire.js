Ponder.registry(e => {
	e.create(['minecraft:soul_campfire', 'new_create:tinder'])
		.scene('minecraft:stick', '生火', (scene, until) => {
			scene.showBasePlate()
			scene.idle(20)
			scene.world.setBlocks([2, 1, 2], 'minecraft:soul_campfire')
			scene.world.modifyBlocks([2, 1, 2], state => state.with('lit', 'false'), false)
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
			scene.world.setBlocks([2, 1, 2], 'minecraft:soul_campfire')
			scene.world.modifyBlocks([2, 1, 2], state => state.with('lit', 'true'), false)
			scene.idle(20)
		})
})