StartupEvents.registry('block', (event) => {
	// ModID声明如果选择不更改ModID(默认即'kubejs')直接把ModID这个变量取消
	const MODID = 'new_create:'

	// 工具类型
	const toolType = {
		sword: 'minecraft:mineable/sword',
		pickaxe: 'minecraft:mineable/pickaxe',
		axe: 'minecraft:mineable/axe',
		shovel: 'minecraft:mineable/shovel',
		hoe: 'minecraft:mineable/hoe'
	}
	
	// 挖掘等级
	const miningLevel = {
		wooden: 'minecraft:needs_wooden_tool',
		stone: 'minecraft:needs_stone_tool',
		iron: 'minecraft:needs_iron_tool',
		gold: 'minecraft:needs_gold_tool',
		diamond: 'minecraft:needs_diamond_tool',
		nether: 'forge:needs_netherite_tool'
	}

	// 定义方块
	let blockRegisters = [
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
		['log_pile', 'wood', 1.5, 1.5, 'axe', 'wooden'],
		// 工业机壳
		['industrial_casing', 'metal', 1.5, 1.5, 'pickaxe', 'stone'],
		// 钢机壳
		['steel_casing', 'metal', 1.5, 1.5, 'pickaxe', 'stone'],
		// 热煤块
		['heat_coal_block', 'stone', 1.5, 1.5, 'pickaxe', 'wooden']
	]
	blockRegisters.forEach(([name, soundType, hardness, resisTance, tool, grade]) => {
		event.create(MODID + name)
			.soundType(soundType)
			.hardness(hardness)
			.resistance(resisTance)
			.tagBlock(toolType[tool])
			.tagBlock(miningLevel[grade])
			.tagItem(MODID + 'items')
			.tagItem(MODID + 'blocks')
			.requiresTool(true)
	})
})