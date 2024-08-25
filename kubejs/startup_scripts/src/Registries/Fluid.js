StartupEvents.registry("fluid", (event) => {
	const MODID = "new_create:"
	const PATH = "block/fluid/"
	const otherFluidRegistrations = MODID + PATH

	let fluidRegisters = [
		// 防腐液
		["embalming_fluid", 0x8B4513],
		// 加工液
		["working_fluid", 0xF5F5F5],
		// 煤油
		["kerosene", 0xFFD700],
		// 工业燃油
		["industrial_fuel", 0xF4A460],
		// 混合汽油
		["mixed_gasoline", 0xF0E68C],
		// 玫瑰石英溶液
		["rose_quartz_fluid", 0xFF1493],
		// 精炼油
		["high_grade_refined_oil", 0xDAA520],
	]
	fluidRegisters.forEach(([name, color]) => {
		event.create(MODID + name)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(otherFluidRegistrations + "flowing")
			.stillTexture(otherFluidRegistrations + "still")
			.tag(MODID + "fluid")
	})

	// 金属
	let moltenFluid = [
		// 青铜
		["bronze", 0xE08125],
		// 锡
		["tin", 0xADD8E6],
		// 铸铁溶液
		["cast_iron", 0x333333],
		// 玫瑰金
		["rose_gold", 0xFF69B4],
		// 秘银液
		["mithril", 0x2E8B57],
		// 安山合金
		["andesite_alloy", 0x808080],
		// 粗铁
		["raw_iron", 0xB22222]
	]
	moltenFluid.forEach(([name, color]) => {
		event.create(MODID + "molten_" + name)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(otherFluidRegistrations + "flowing")
			.stillTexture(otherFluidRegistrations + "still")
			.tag(MODID + "fluid")
			.tag(MODID + "molten_materials")
			.tag(`forge:molten_${name}`)
			.tag("forge:molten_materials")
	})

	// 特殊注册

	// 液态灵魂
	event.create(MODID + "soul")
		.noBucket()
		.noBlock()
		.flowingTexture(otherFluidRegistrations + "soul_flowing")
		.stillTexture(otherFluidRegistrations + "soul_still")
		.tag(MODID + "fluid")

	// 熔融玻璃
	event.create(MODID + "molten_glass")
		.flowingTexture(otherFluidRegistrations + "glass_flowing")
		.stillTexture(otherFluidRegistrations + "glass_still")
		.noBlock()
		.tag(MODID + "fluid")
		.tag("forge:molten_glass")

	// 鸡蛋混合液
	event.create(MODID + "egg_mixture_fluid")
		.noBlock()
		.flowingTexture(otherFluidRegistrations + "egg_mixture_fluid_flowing")
		.stillTexture(otherFluidRegistrations + "egg_mixture_fluid_stilling")
		.tag(MODID + "fluid")

	// 黑曜石
	event.create(MODID + "molten_obsidian")
		.flowingTexture(otherFluidRegistrations + "obsidian_flowing")
		.stillTexture(otherFluidRegistrations + "obsidian_still")
		.tag("forge:molten_obsidian")
		.tag(MODID + "fluid")

	// 甘蔗汁
	event.create(MODID + "sugarcane_juice")
		.flowingTexture(otherFluidRegistrations + "sugarcane_juice_flow")
		.stillTexture(otherFluidRegistrations + "sugarcane_juice_still")
		.noBlock()
		.tag(MODID + "fluid")
})