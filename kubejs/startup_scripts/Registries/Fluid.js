StartupEvents.registry('fluid', e => {
	const ModID = 'new_create:'
	let Fluid = [
		// 安山合金溶液
		['andesite_compound_fluid', 0x808080],
		// 防腐液
		['embalming_fluid', 0x8B4513],
		// 加工液
		['working_fluid', 0xF5F5F5],
		// 锌溶液
		['zinc_fluid', 0xB9E9C1],
		// 铸铁溶液
		['cast_iron_fluid', 0x3E3E3E],
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
		['rose_gold_fluid', 0xFF69B4]
	]
	Fluid.forEach(([Name, Color]) => {
		e.create(ModID + Name)
			.tag(ModID + 'fluid')
			.thickTexture(Color)
			.bucketColor(Color)
			.flowingTexture(ModID + 'fluid/flowing')
			.stillTexture(ModID + 'fluid/still')
	})

	
	// 特殊注册

	// 液态灵魂
	e.create(ModID + 'soul')
		.tag(ModID + 'fluid')
		.noBucket()
		.noBlock()
		.flowingTexture(ModID + 'fluid/soul_flowing')
		.stillTexture(ModID + 'fluid/soul_still')

	// 熔融玻璃
	e.create(ModID + 'glass')
		.tag(ModID + 'fluid')
		.noBlock()
		.flowingTexture(ModID + 'fluid/glass_flowing')
		.stillTexture(ModID + 'fluid/glass_still')

	// 鸡蛋混合液
	e.create(ModID + 'egg_mixture_fluid')
		.tag(ModID + 'fluid')
		.noBlock()
		.flowingTexture(ModID + 'fluid/egg_mixture_fluid_flowing')
		.stillTexture(ModID + 'fluid/egg_mixture_fluid_stilling')
})