StartupEvents.registry('item', (event) => {
	const MODID = 'new_create:'
	let item = [
		['flint_knapp', 'common', false], // 燧石碎片
		['rainbow_ingot', 'epic', false], // 彩虹锭
		['plastic_sheet', 'common', false], // 塑料板
		['mold_block', 'common', false], // 冲压模具-块
		['plating_zinc_ingot', 'common', false], // 电镀锌
		['cast_electron_tube', 'common', false], // 铸铁电子管
		['zinc_electron_tube', 'common', false], // 锌电子管
		['sturdy_mechanism', 'common', false], // 坚固构件
		['sealed_mechanism', 'common', false], // 密封构件
		['kinetic_mechanism', 'common', false], // 动力构件
		['andesite_compound', 'common', false], // 安山混合物
		['grass_string', 'common', false], // 草绳
		['grass_fiber', 'common', false], // 杂草
		['egg_shell', 'common', false], // 蛋壳
		['in_cogwheel', 'common', false], // 齿轮(未完成)
		['in_large_cogwheel', 'common', false], // 大齿轮(未完成)]
		/*
		['rainbow_mooncoin', 'epic', false], // 彩虹月币
		['mooncoin', 'rare', false], // 月币
		['0', 'uncommon', false],
		['1', 'uncommon', false],
		['2', 'uncommon', false],
		['3', 'uncommon', false],
		['4', 'uncommon', false],
		['5', 'uncommon', false],
		['6', 'uncommon', false],
		['7', 'uncommon', false],
		['8', 'uncommon', false],
		['9', 'uncommon', false],
		*/
		['in_chaochi', 'common', false], // 未加工的炒琪
		['cast_iron_ingot', 'common', false], // 铸铁锭
		['primary_bearing', 'common', false], // 合成轴承
		['cast_iron_sheet', 'common', false], // 铸铁板
		['carbon_plate', 'common', false], // 碳板
		['carbon_rod', 'common', false], // 碳棒
		['coking_coal_rod', 'common', false], // 焦煤棒
		['pure_quartz', 'uncommon', false], // 纯净石英
		['abstruse_mechanism', 'common', false], // 幽静构件
		['calculation_mechanism', 'common', false], // 计算构件
		['computer_mechanism', 'common', false], // 电脑构件
		['inductive_mechanism', 'common', false], // 电磁构件
		['infernal_mechanism', 'common', false], // 下界构件
		['saw_silicon', 'common', false], // 粗硅
		['silicon_crystal', 'common', false], // 硅晶
		['white_flour', 'common', false], // 白面
		['processor_press', 'common', false], // 空白压印模板
		['mithril_ingot', 'common', false], // 秘银锭
		['mithril_sheet', 'common', false], // 秘银板
		['lapis_sheet', 'common', false], // 青金石板
		['integrated_circuit', 'common', false], // 集成电路板
		['multi_block_detector', 'epic', true], // 多方块检测器
	]
	item.forEach(([name, rarity, glow]) => {
		event.create(MODID + name)
			.rarity(rarity)
			.glow(glow)
			.tag(MODID + 'items')
	})

	// 半成品注册
	let inItem = [
		'abstruse_mechanism', // 幽静构件(未完成)
		'calculation_mechanism', // 计算构件(未完成)
		'inductive_mechanism', // 电磁构件(未完成)
		'infernal_mechanism', // 下界构件(未完成)
		'kinetic_mechanism', // 动力构件(未完成)
		'sealed_mechanism', // 密封构件(未完成)
		'sturdy_mechanism', // 坚固构件(未完成)
	]
	inItem.forEach(name => {
		event.create(MODID + 'in_' + name, 'create:sequenced_assembly')
			.tag(MODID + 'items')
			.tag(MODID + 'incomplete_items')
	})
})