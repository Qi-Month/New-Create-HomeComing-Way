let moltenRegisters = [
	// 钛
	["titanium", [6, 7.5], "diamond", 0xb3bdc0]
]
moltenRegisters.forEach(([name, [hardness_1, hardness_2], level, color]) => {
	const MODID = "new_create:"

	StartupEvents.registry("item", (event) => {
		// 锭
		event.create(`${MODID}${name}_ingot`)
			.tag("forge:ingots")
			.tag(`forge:ingots/${name}`)

		// 板
		event.create(`${MODID}${name}_sheet`)
			.tag("forge:plates")
			.tag(`forge:plates/${name}`)

		// 矿
		event.create(`${MODID}raw_${name}`)
			.tag("forge:raw_materials")
			.tag(`forge:raw_materials/${name}`)
	})

	StartupEvents.registry("block", (event) => {
		let pickaxe = "minecraft:mineable/pickaxe"

		// 挖掘等级
		let miningLevel = {
			wooden: "minecraft:needs_wooden_tool",
			stone: "minecraft:needs_stone_tool",
			iron: "minecraft:needs_iron_tool",
			gold: "minecraft:needs_gold_tool",
			diamond: "minecraft:needs_diamond_tool",
			nether: "forge:needs_netherite_tool"
		}

		// 浅层
		event.create(`${MODID}${name}_ore`)
			.textureAll(`${MODID}block/ore/${name}_ore`)
			.soundType(SoundType.STONE)
			.hardness(hardness_1)
			.resistance(hardness_1)
			.tag("forge:ores")
			.tag(`forge:ores/${name}`)
			.tag("forge:ore_rates/dense")
			.tagBlock(pickaxe)
			.tagBlock(miningLevel[level])
			.requiresTool(true)

		// 深层
		event.create(`${MODID}deepslate_${name}_ore`)
			.textureAll(`${MODID}block/ore/deepslate_${name}_ore`)
			.soundType(SoundType.DEEPSLATE)
			.hardness(hardness_2)
			.resistance(hardness_2)
			.tag("forge:ores")
			.tag(`forge:ores/${name}`)
			.tag("forge:ore_rates/deepslate")
			.tagBlock(pickaxe)
			.tagBlock(miningLevel[level])
			.requiresTool(true)

		// 块
		event.create(`${MODID}${name}_block`)
			.soundType(SoundType.METAL)
			// 我这计算方式真的难绷...既然得不到一个好的数值那就干脆直接取浅层和深层两者硬度的平均值再乘1.5(真是无无又脑脑啊)
			.hardness((hardness_1 + hardness_2) / 2 * 1.5)
			.resistance((hardness_1 + hardness_2) / 2 * 1.5)
			.tag("forge:storage_blocks")
			.tag(`forge:storage_blocks/${name}`)
			.tagBlock(pickaxe)
			.tagBlock(miningLevel[level])

		// 其它
		let otherOreBlockRegisters = [
			// 石墨
			["graphite", [3, 4.5], "stone"],
		]
		otherOreBlockRegisters.forEach(([name, [hardness_1, hardness_2], level]) => {
			event.create(`${MODID}${name}_ore`)
				.textureAll(`${MODID}block/ore/${name}_ore`)
				.soundType(SoundType.STONE)
				.hardness(hardness_1)
				.resistance(hardness_1)
				.tagBlock(pickaxe)
				.tagBlock(miningLevel[level])
				.tag("forge:ores")
				.tag(`forge:ores/${name}`)
				.requiresTool(true)

			event.create(`${MODID}deepslate_${name}_ore`)
				.textureAll(`${MODID}block/ore/deepslate_${name}_ore`)
				.soundType(SoundType.DEEPSLATE)
				.hardness(hardness_2)
				.resistance(hardness_2)
				.tagBlock(pickaxe)
				.tagBlock(miningLevel[level])
				.tag("forge:ores")
				.tag(`forge:ores/${name}`)
				.requiresTool(true)
		})
	})

	StartupEvents.registry("fluid", (event) => {
		const PATH = "block/fluid/"
		let moltemFluidRegisters = MODID + PATH

		event.create(`${MODID}molten_${name}`)
			.thickTexture(color)
			.bucketColor(color)
			.flowingTexture(moltemFluidRegisters + "flowing")
			.stillTexture(moltemFluidRegisters + "still")
			.tag(`forge:molten_${name}`)
			.tag("forge:molten_materials")
	})
})