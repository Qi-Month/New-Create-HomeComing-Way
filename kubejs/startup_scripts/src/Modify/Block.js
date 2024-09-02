BlockEvents.modification((event) => {
	// Fix
	event.modify("melter:melter", (modify) => {
		modify.destroySpeed = 1
	})
})

/*
ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickBlock", (event) => {
	let { entity } = event
	let blockPos = event.getLevel().getBlockState(event.getPos()).getBlock()
	let heldItem = entity.getMainHandItem()

	if ((block.defaultBlockState().is(BlockTags.LOGS)
		|| block.defaultBlockState().is(BlockTags.PLANKS))
		// 如果玩家没有使用斧头，则取消破坏方块(并且有添加创造模式判断)
		&& (!player.getAbilities().instabuild) && !(heldItem.getItem() instanceof AxeItem)) {
		event.setCanceled(true)
	}
})
*/