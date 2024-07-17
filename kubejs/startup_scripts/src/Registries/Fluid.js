StartupEvents.registry('fluid', (event) => {
	const MODID = 'new_create:'
	const PATH = 'block/fluid/'
	
	let fluid = [
		// 安山合金溶液
		['andesite_compound_fluid', 0x808080],
		// 防腐液
		['embalming_fluid', 0x8B4513],
		// 加工液
		['working_fluid', 0xF5F5F5],
		// 锌溶液
		['zinc_fluid', 0xB9E9C1],
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
		// 秘银液
		['mithril_fluid', 0x2E8B57],
		// 玫瑰金溶液
		['rose_gold_fluid', 0xFF69B4],
	]
	fluid.forEach(([name, color]) => {
		event.create(MODID + name)
			.thickTexture(color)
			.bucketColor(color)
			.flowingTexture(MODID + PATH + 'flowing')
			.stillTexture(MODID + PATH + 'still')
			.tag(MODID + 'fluid')
	})

	// 金属
	let moltenFluid = [
		// 青铜
		['bronze', 0xC48C5E],
		// 锡
		['tin', 0xADD8E6],
		// 铸铁溶液
		['cast_iron', 0x3E3E3E],
	]
	moltenFluid.forEach(([name, color]) => {
		event.create(MODID + 'molten_' + name)
			.thickTexture(color)
			.bucketColor(color)
			.flowingTexture(MODID + PATH + 'flowing')
			.stillTexture(MODID + PATH + 'still')
			.tag(MODID + 'fluid')
			.tag(MODID + 'molten_metal')
	})

	// 特殊注册

	// 液态灵魂
	event.create(MODID + 'soul')
		.tag(MODID + 'fluid')
		.noBucket()
		.noBlock()
		.flowingTexture(MODID + PATH + 'soul_flowing')
		.stillTexture(MODID + PATH + 'soul_still')

	// 熔融玻璃
	event.create(MODID + 'glass')
		.tag(MODID + 'fluid')
		.noBlock()
		.flowingTexture(MODID + PATH + 'glass_flowing')
		.stillTexture(MODID + PATH + 'glass_still')

	// 鸡蛋混合液
	event.create(MODID + 'egg_mixture_fluid')
		.tag(MODID + 'fluid')
		.noBlock()
		.flowingTexture(MODID + PATH + 'egg_mixture_fluid_flowing')
		.stillTexture(MODID + PATH + 'egg_mixture_fluid_stilling')

	// 黑曜石
	event.create(MODID + 'obsidian')
		.flowingTexture(MODID + PATH + 'obsidian_flowing')
		.stillTexture(MODID + PATH + 'obsidian_still')
})