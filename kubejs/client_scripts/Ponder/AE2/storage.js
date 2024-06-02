Ponder.registry(e => {
	e.create(['ae2:crafting_terminal', 'ae2:controller', 'ae2:drive'])
		.scene('ae:storage', '简易存储搭建', 'new_create:storage', (scene, utils) => {
			// 
			scene.showBasePlate()
			scene.idleSeconds(1)

			// 
			scene.addKeyframe()
			scene.world.showSection([2, 1, 1, 1, 1, 1], Direction.DOWN)
			scene.text(30, '§b你需要一个ME控制器和ME驱动器')
			scene.idle(30)
			scene.text(20, '§bME控制器', [2.5, 1.5, 1])
			scene.idle(30)
			scene.text(20, '§bME驱动器', [1.5, 1.5, 1])
			scene.idle(30)

			// 
			scene.addKeyframe()
			scene.text(40, '§b然后你还需要准备一些磁盘驱动器\n§b随后放入ME驱动器中')
			scene.idleSeconds(1)
			scene.showControls(
				30,
				utils.grid.at(1, 1, 1),
				'down'
			).withItem('ae2things:disk_drive_1k')

			// 
			scene.text(40, '§b然后我们还要给ME控制器通电')
			scene.idle(40)
			scene.world.setBlocks([3, 1, 1, 4, 1, 1], 'pipez:energy_pipe')
			scene.world.modifyBlocks([3, 1, 1], state => state.with('west', 'true'), false)
			scene.world.showSection([3, 1, 1], Direction.WEST)
			scene.idle(20)
			// 
			scene.world.modifyBlocks([2, 1, 1], state => state.with('state', 'online'), false)
			scene.idle(40)

			//
			scene.addKeyframe()
			scene.idle(20)
			scene.text(60, '§b我们还需要准备一个ME线缆和一个终端\n§b放在控制器或终端上')
			scene.idle(60)
			scene.world.showSection([1, 2, 1], Direction.DOWN)

			// 
			scene.idle(10)
			scene.text(50, '§b随后右键终端面板即可使用\n§b中途要记得给控制器保持通电')
			scene.idle(50)
			scene.showControls(
				30,
				utils.grid.at(1, 2, 1),
				'down'
			).rightClick()
		})
})