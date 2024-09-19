StartupEvents.registry('fluid', (event) => {
	const namespace = 'new_create:'
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
		event.create(namespace + name)
			.thickTexture(color)
			.bucketColor(color)
			.flowingTexture(namespace + PATH + 'flowing')
			.stillTexture(namespace + PATH + 'still')
			.tag(namespace + 'fluid')
	})

	// 金属
	let moltenFluid = [
		// 青铜
		['bronze', 0xC48C5E],
		// 锡
		['tin', 0xADD8E6],
		// 铸铁溶液
		['cast_iron', 0x3E3E3E],
		// ['cast_iron_fluid', 0x3E3E3E],
	]
	moltenFluid.forEach(([name, color]) => {
		event.create(namespace + 'molten_' + name)
			.thickTexture(color)
			.bucketColor(color)
			.flowingTexture(namespace + PATH + 'flowing')
			.stillTexture(namespace + PATH + 'still')
			.tag(namespace + 'fluid')
			.tag(namespace + 'molten_metal')
	})

	// 特殊注册

	// 液态灵魂
	event.create(namespace + 'soul')
		.tag(namespace + 'fluid')
		.noBucket()
		.noBlock()
		.flowingTexture(namespace + PATH + 'soul_flowing')
		.stillTexture(namespace + PATH + 'soul_still')

	// 熔融玻璃
	event.create(namespace + 'glass')
		.tag(namespace + 'fluid')
		.noBlock()
		.flowingTexture(namespace + PATH + 'glass_flowing')
		.stillTexture(namespace + PATH + 'glass_still')

	// 鸡蛋混合液
	event.create(namespace + 'egg_mixture_fluid')
		.tag(namespace + 'fluid')
		.noBlock()
		.flowingTexture(namespace + PATH + 'egg_mixture_fluid_flowing')
		.stillTexture(namespace + PATH + 'egg_mixture_fluid_stilling')

	// 黑曜石
	event.create(namespace + 'obsidian')
		.flowingTexture(namespace + PATH + 'obsidian_flowing')
		.stillTexture(namespace + PATH + 'obsidian_still')
})