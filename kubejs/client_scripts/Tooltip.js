ItemEvents.tooltip((tip) => {
	let tooltip = [
		// 草绳
		['new_create:grass_string', 'tooltip.nc.grass_string'],
		// 杂草
		['new_create:grass_fiber', 'tooltip.nc.grass_fiber'],
		// 纯净石英
		['new_create:pure_quartz', 'tooltip.nc.pure_quartz'],
		// 手枪
		['immersiveengineering:revolver', 'tooltip.ie.revolver'],
		// 木棍
		['minecraft:stick', 'tooltip.mc.stick'],
		// 熔化锅
		['melter:melter', 'tooltip.mt.melter'],
		// 高炉
		['minecraft:blast_furnace', 'tooltip.mc.blast_furnace'],
		// 高炉核心
		['new_create:furnace_core', 'tooltip.nc.furnace_core'],
		// 熔炉
		['minecraft:furnace', 'tooltip.mc.furnace'],
		// 合成轴承
		['new_create:primary_bearing', 'tooltip.nc.primary_bearing'],
		// 石磨
		['create:millstone', 'tooltip.cr.millstone'],
		// 探矿仗
		['new_create:metal_detector', 'tooltip.nc.metal_detector'],
		// 浇筑台
		['createmetallurgy:casting_table', 'tooltip.ct.info'],
		// 浇筑盆
		['createmetallurgy:casting_basin', 'tooltip.ct.info'],
		// 热煤块
		['new_create:heat_coal_block', 'tooltip.nc.heat_coal_block']
	]
	tooltip.forEach(([name, key]) => {
		tip.add(name, [Text.translate(key)])
	})
})