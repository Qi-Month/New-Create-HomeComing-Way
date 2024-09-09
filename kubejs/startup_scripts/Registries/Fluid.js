StartupEvents.registry("fluid", (event) => {
	const MODID = "new_create:"
	const PATH = "block/fluid/"
	const otherFluidRegisters = MODID + PATH

	let fluidRegisters = [
		// 防腐液
		["embalming_fluid", 0x8B4513],
	]
	fluidRegisters.forEach(([name, color]) => {
		event.create(MODID + name)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(otherFluidRegisters + "flowing")
			.stillTexture(otherFluidRegisters + "still")
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
		["raw_iron", 0xB22222],
		// 玫瑰石英
		["rose_quartz", 0xFF1493],
	]
	moltenFluid.forEach(([name, color]) => {
		event.create(MODID + "molten_" + name)
			.thickTexture(color)
			.bucketColor(color)
			.flowingTexture(otherFluidRegisters + "flowing")
			.stillTexture(otherFluidRegisters + "still")
			.tag(`forge:molten_${name}`)
			.tag("forge:molten_materials")
	})
})