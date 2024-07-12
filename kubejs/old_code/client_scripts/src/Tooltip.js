ItemEvents.tooltip((tip) => {
	let tooltip = [
		// 草绳
		['new_create:grass_string', 'nc.grass_string'],
		// 杂草
		['new_create:grass_fiber', 'nc.grass_fiber'],
		// 纯净石英
		['new_create:pure_quartz', 'nc.pure_quartz'],
		// 手枪
		['immersiveengineering:revolver', 'ie.revolver'],
		// 木棍
		['minecraft:stick', 'mc.stick'],
		// 熔化锅
		['melter:melter', 'mt.melter'],
		// 高炉
		['minecraft:blast_furnace', 'mc.blast_furnace'],
		// 高炉核心
		['new_create:furnace_core', 'nc.furnace_core'],
		// 合成轴承
		['new_create:primary_bearing', 'nc.primary_bearing'],
		// 石磨
		['create:millstone', 'cr.millstone'],
		// 探矿仗
		['new_create:metal_detector', 'nc.metal_detector'],
		// 浇筑台
		['createmetallurgy:casting_table', 'ct.info'],
		// 浇筑盆
		['createmetallurgy:casting_basin', 'ct.info'],
		// 热煤块
		['new_create:heat_coal_block', 'nc.heat_coal_block']
	]
	tooltip.forEach(([name, key]) => {
		tip.add(name, Text.translate('tooltip.' + key))
	})
})