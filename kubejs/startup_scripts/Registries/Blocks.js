StartupEvents.registry('block', e => {
	const ModID = 'new_create:'
	// 工具类型
	const ToolType = {
		sword: 'minecraft:mineable/sword',
		pickaxe: 'minecraft:mineable/pickaxe',
		axe: 'minecraft:mineable/axe',
		shovel: 'minecraft:mineable/shovel',
		hoe: 'minecraft:mineable/hoe'
	}
	// 挖掘等级
	const MininGlevel = {
		wooden: 'minecraft:needs_wooden_tool',
		stone: 'minecraft:needs_stone_tool',
		iron: 'minecraft:needs_iron_tool',
		golded: 'minecraft:needs_gold_tool',
		diamond: 'minecraft:needs_diamond_tool',
		nether: 'forge:needs_netherite_tool'
	}

	// 定义方块
	let Block = [
		// 烧焦圆石
		['charred_cobblestone', 'stone', 3, 3, 'pickaxe', 'wooden'],
		// 铸铁块
		['cast_iron_block', 'metal', 5, 5, 'pickaxe', 'stone'],
		// 熔炉核心
		['furnace_core', 'stone', 3, 3, 'pickaxe', 'wooden'],
		// 充电铁块
		['charge_iron_block', 'metal', 5, 5, 'pickaxe', 'stone'],
		// 铸铁机壳
		['cast_iron_casing', 'wood', 5, 5, 'pickaxe', 'wooden'],
		// 尘土
		['dust', 'sand', 1, 1, 'shovel', 'wooden'],
		// 原木堆
		['log_pile', 'wood', 1.5, 1.5, 'axe', 'wooden']
	]
	Block.forEach(([Name, SoundType, Hardness, ResisTance, Tool, Grade]) => {
		e.create(ModID + Name)
			.soundType(SoundType)
			.hardness(Hardness)
			.resistance(ResisTance)
			.tagBlock(ToolType[Tool])
			.tagBlock(MininGlevel[Grade])
			.tagItem(ModID + 'items')
			.tagItem(ModID + 'blocks')
			.requiresTool(true)
	})

	// 特殊注册
	e.create('create_dd:striated_ores_ocean')
})