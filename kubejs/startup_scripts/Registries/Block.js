StartupEvents.registry("block", (event) => {
	// 工具类型
	let toolType = {
		sword: "minecraft:mineable/sword",
		pickaxe: "minecraft:mineable/pickaxe",
		axe: "minecraft:mineable/axe",
		shovel: "minecraft:mineable/shovel",
		hoe: "minecraft:mineable/hoe"
	}

	// 挖掘等级
	let miningLevel = {
		wooden: "minecraft:needs_wooden_tool",
		stone: "minecraft:needs_stone_tool",
		iron: "minecraft:needs_iron_tool",
		gold: "minecraft:needs_gold_tool",
		diamond: "minecraft:needs_diamond_tool",
		nether: "forge:needs_netherite_tool"
	}

	// 定义方块
	let blockRegisters = [
		// 烧焦圆石
		["charred_cobblestone", "stone", 2, "pickaxe", "wooden", true],
	]
	blockRegisters.forEach(([name, soundType, hardness, tool, level, needTool]) => {
		event.create(global.namespace + name)
			.soundType(soundType)
			.hardness(hardness)
			.resistance(hardness)
			.tagBlock(toolType[tool])
			.tagBlock(miningLevel[level])
			.requiresTool(needTool)
	})

	// 太阳能发电板
	event.create(global.namespace + "soler_panel", "cardinal")
		.soundType(SoundType.METAL)
		.hardness(2)
		.resistance(2)
		.defaultCutout()
		.box(3, 0, 3, 13, 9, 13, true)
		.tagBlock(toolType["pickaxe"])
		.tagBlock(miningLevel["stone"])
		.requiresTool(true)
		.blockEntity((entity) => {
			entity.attachCapability(CapabilityBuilder.ENERGY
				.customBlockEntity()
				.canExtract(() => true)
				.getEnergyStored(i => 1000)
				.getMaxEnergyStored(i => 1000)
				.extractEnergy((event) => {
					let { level, blockPos } = event
					let block = level.getBlock(blockPos)
					if (level.day && block.up.canSeeSky) {
						return 120
					}
					return 0
				})
			)
		})
})