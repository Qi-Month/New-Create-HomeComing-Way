StartupEvents.registry('fluid', (event) => {
	const MODID = 'new_create:'
	const PATH = 'block/fluid/'
	const otherRegistrations = MODID + PATH

	let fluidRegisters = [
		// 防腐液
		['embalming_fluid', 0x8B4513],
		// 加工液
		['working_fluid', 0xF5F5F5],
		// 煤油
		['kerosene', 0xFFD700],
		// 工业燃油
		['industrial_fuel', 0xF4A460],
		// 混合汽油
		['mixed_gasoline', 0xF0E68C],
		// 玫瑰石英溶液
		['rose_quartz_fluid', 0xFF1493],
		// 精炼油
		['high_grade_refined_oil', 0xDAA520],
	]
	fluidRegisters.forEach(([name, color]) => {
		event.create(MODID + name)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(otherRegistrations + 'flowing')
			.stillTexture(otherRegistrations + 'still')
			.tag(MODID + 'fluid')
	})

	// 金属
	let moltenFluid = [
		// 青铜
		['bronze', 0xE08125],
		// 锡
		['tin', 0xADD8E6],
		// 铸铁溶液
		['cast_iron', 0x333333],
		// 玫瑰金
		['rose_gold', 0xFF69B4],
		// 秘银液
		['mithril', 0x2E8B57],
		// 安山合金
		['andesite_alloy', 0x808080],
	]
	moltenFluid.forEach(([name, color]) => {
		event.create(MODID + 'molten_' + name)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(otherRegistrations + 'flowing')
			.stillTexture(otherRegistrations + 'still')
			.tag(MODID + 'fluid')
			.tag(MODID + 'molten_materials')
			.tag(`forge:molten_${name}`)
			.tag('forge:molten_materials')
	})

	// 特殊注册

	// 液态灵魂
	event.create(MODID + 'soul')
		.tag(MODID + 'fluid')
		.noBucket()
		.noBlock()
		.flowingTexture(otherRegistrations + 'soul_flowing')
		.stillTexture(otherRegistrations + 'soul_still')

	// 熔融玻璃
	event.create(MODID + 'molten_glass')
		.tag(MODID + 'fluid')
		.noBlock()
		.flowingTexture(otherRegistrations + 'glass_flowing')
		.stillTexture(otherRegistrations + 'glass_still')

	// 鸡蛋混合液
	event.create(MODID + 'egg_mixture_fluid')
		.tag(MODID + 'fluid')
		.noBlock()
		.flowingTexture(otherRegistrations + 'egg_mixture_fluid_flowing')
		.stillTexture(otherRegistrations + 'egg_mixture_fluid_stilling')

	// 黑曜石
	event.create(MODID + 'molten_obsidian')
		.flowingTexture(otherRegistrations + 'obsidian_flowing')
		.stillTexture(otherRegistrations + 'obsidian_still')
		.tag(MODID + 'fluid')
})