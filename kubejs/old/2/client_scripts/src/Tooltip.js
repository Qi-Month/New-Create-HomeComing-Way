ItemEvents.tooltip((event) => {
	let addTooltip = [
		// 草绳
		"new_create:grass_string",
		// 杂草
		"new_create:grass_fiber",
		// 干草
		"new_create:hay",
		// 纯净石英
		"new_create:pure_quartz",
		// 手枪
		"immersiveengineering:revolver",
		// 木棍
		"minecraft:stick",
		// 熔化锅
		"melter:melter",
		// 高炉
		"minecraft:blast_furnace",
		// 合成轴承
		"new_create:primary_bearing",
		// 石磨
		"create:millstone",
		// 探矿仗
		"new_create:metal_detector",
		// 浇筑台
		"createmetallurgy:casting_table",
		// 浇筑盆
		"createmetallurgy:casting_basin",
		// 晒干架
		"youkaishomecoming:drying_rack",
		// 过滤器
		"pipez:filter_destination_tool",
		// 碳酸钙
		"new_create:calcium_carbonate",
	]
	addTooltip.forEach((name) => {
		event.add(name, Text.translate("tooltip." + name))
	})
})