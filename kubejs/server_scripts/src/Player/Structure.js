const $PatchouliAPI = Java.loadClass("vazkii.patchouli.api.PatchouliAPI")
// const { $PatchouliAPI } = require("packages/vazkii/patchouli/api/PatchouliAPI")

BlockEvents.rightClicked((event) => {
	const { level, block, player } = event
	const { pos } = block
	const facing = block.properties.facing

	// 判定结构
	if (block === "minecraft:blast_furnace" && !player.shiftKeyDown) {
		let rotation2 = global.MULTIBLOCK.blastFurnace().validate(level, pos)
		if (rotation2 === null) {
			player.statusMessage = Text.translate("scheme.nc.structure.1")
			event.cancel()
			return
		}
		const expectedRotations = {
			"north": "NONE",
			"east": "CLOCKWISE_90",
			"south": "CLOCKWISE_180",
			"west": "COUNTERCLOCKWISE_90",
		}
		const currentRotation = expectedRotations[facing]
		if (currentRotation !== undefined && rotation2 !== currentRotation && !player.shiftKeyDown) {
			player.statusMessage = Text.translate("scheme.nc.structure.2")
			event.cancel()
			return
		}
	}
})