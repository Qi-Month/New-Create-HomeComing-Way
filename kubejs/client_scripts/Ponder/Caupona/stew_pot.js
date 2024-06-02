Ponder.registry(e => {
	e.create([
		'caupona:mud_kitchen_stove',
		'caupona:stone_brick_kitchen_stove',
		'caupona:brick_kitchen_stove',
		'caupona:opus_incertum_kitchen_stove',
		'caupona:opus_latericium_kitchen_stove',
		'caupona:stew_pot',
		'caupona:lead_stew_pot'
	]).scene('caupona:stew_pot', '搭建', scene => {
		scene.showBasePlate()
		scene.idle(20)
		scene.world.setBlocks([2, 1, 2], 'caupona:mud_kitchen_stove')
		scene.world.setBlocks([2, 2, 2], 'caupona:stew_pot')
		scene.world.showSection([2, 1, 2], Direction.DOWN)
		scene.idle(5)
		scene.world.showSection([2, 2, 2], Direction.DOWN)
		scene.idle(5)
		scene.overlay.showOutline('red', {}, [2, 2, 2], 20)
		scene.idle(20)
		scene.addKeyframe()
		scene.overlay.showOutline('blue', {}, [2, 1, 2], 20)
		scene.text(15, '§b向内部添加燃料', [2, 2, 2])
		scene.idle(20)
	})
})