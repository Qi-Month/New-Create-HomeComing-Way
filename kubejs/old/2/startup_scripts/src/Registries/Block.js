StartupEvents.registry("block", (event) => {
	// ModID声明如果选择不更改ModID(默认即"kubejs")直接把ModID这个变量取消
	const MODID = "new_create:"

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
		// 铸铁块
		["cast_iron_block", "metal", 5, "pickaxe", "stone", true],
		// 充电铁块
		["charge_iron_block", "metal", 5, "pickaxe", "stone", true],
		// 铸铁机壳
		["cast_iron_casing", "wood", 1.5, "pickaxe", "wooden", true],
		// 原木堆
		["log_pile", "wood", 2, "axe", "wooden", false],
		// 工业机壳
		["industrial_casing", "metal", 1.5, "pickaxe", "stone", true],
		// 钢机壳
		["steel_casing", "metal", 1.5, "pickaxe", "stone", true],
		// 热煤块
		["heat_coal_block", "stone", 5, "pickaxe", "wooden", false],
		// 耐热砖块
		["heat_resistant_bricks", "stone", 2, "pickaxe", "wooden", true],
		// 硅砂
		["silica_sand", "sand", 0.5, "shovel", "wooden", false]
	]
	blockRegisters.forEach(([name, soundType, hardness, tool, level, needTool]) => {
		event.create(MODID + name)
			.soundType(soundType)
			.hardness(hardness)
			.resistance(hardness)
			.tagBlock(toolType[tool])
			.tagBlock(miningLevel[level])
			.requiresTool(needTool)
	})

	// 工业铁块墙
	event.create(MODID + "industrial_iron_block_wall", "wall")
		.soundType(SoundType.METAL)
		.hardness(3)
		.resistance(3)
		.tagBlock(toolType["pickaxe"])
		.tagBlock(miningLevel["wooden"])
		.requiresTool(true)

	// 炼铁炉(上半)
	event.create(MODID + "iron_making_furnace_up", "cardinal")
		.model("new_create:machine/iron_making_furnace/up")
		.soundType(SoundType.STONE)
		.hardness(2)
		.resistance(2)
		.box(1, 0, 1, 15, 8, 15)
		.defaultCutout()
		.tagBlock(toolType["pickaxe"])
		.tagBlock(miningLevel["wooden"])
		.requiresTool(true)

	// 炼铁炉(下半)
	event.create(MODID + "iron_making_furnace_under", "cardinal")
		.model("new_create:machine/iron_making_furnace/under")
		.soundType(SoundType.STONE)
		.hardness(2)
		.resistance(2)
		.defaultCutout()
		.tagBlock(toolType["pickaxe"])
		.tagBlock(miningLevel["wooden"])
		.requiresTool(true)

	// 太阳能发电板
	event.create(MODID + "soler_panel", "cardinal")
		.soundType(SoundType.METAL)
		.hardness(2)
		.resistance(2)
		.defaultCutout()
		.box(3, 0, 3, 13, 9, 13, true)
		.tagBlock(toolType["pickaxe"])
		.tagBlock(miningLevel["stone"])
		.requiresTool(true)
		.blockEntity((entity) => {
			entity.attachCapability(CapabilityBuilder.ENERGY.customBlockEntity()
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