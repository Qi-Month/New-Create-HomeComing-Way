/*
StartupEvents.registry("block", (event) => {
	const MODID = "new_create:"

	event.create(MODID + "test_render")
		.lightLevel(15)
		.blockEntity((entity) => {
			// 设置同步data
			entity.enableSync()
		})
})

global.inited = false
ClientEvents.init((event) => {
	global.inited = true
	event.registerBlockEntityRenderer(MODID + "test_render", (context) => {
		return RenderJSBlockEntityRenderer
			.create(context)
			.setCustomRender((renderer, context) => {
				let poseStack = context.poseStack
				let light = LevelRenderer.getLightColor(context.blockEntity.level, context.blockEntity.blockPos.above())
				let item = Item.empty
				let data = context.blockEntityJS.data

				if (data.contains("item")) {
					item = Item.of(data.getString("item"))
				}

				if (item !== Item.empty) {
					poseStack.pushPose()
					poseStack.translate(0.5, 1.5, 0.5)
					poseStack.mulPose(Vec3f.XN.rotationDegrees(90))
					renderer.itemRenderer.renderStatic(item, "ground", light, context.packedOverlay, context.poseStack, context.bufferSource, Client.player.getId())
					poseStack.popPose()
				}

				poseStack.pushPose()
				poseStack.translate(0.25, 1, 0.25)
				poseStack.scale(0.5, 0.5, 0.5)
				renderer.blockEntityRenderDispatcher.renderSingBlock(Blocks.FIRE.defaultBlockState(), context.poseStack, context.bufferSource, light, context.packedOverlay)
				poseStack.popPose()
			})
	})
})
*/