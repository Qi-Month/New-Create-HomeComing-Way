StartupEvents.registry('item', (event) => {
	const MODID = 'new_create:'
	let tool = [
		// 燧石剑
		['flint_sword', 'sword', 'common', false, 2, 120, 2, 0],
		// 燧石镐
		['flint_pickaxe', 'pickaxe', 'common', false, -2, 120, 2, 0],
		// 燧石斧
		['flint_axe', 'axe', 'common', false, 4, 120, 2, 0],
		// 燧石短柄斧
		['flint_handaxe', 'axe', 'common', false, 2, 50, 1, 0],
		// 燧石锹
		['flint_shovel', 'shovel', 'common', false, -2, 120, 2, 0],
		// 石锤
		['stone_hammer', 'pickaxe', 'common', false, 5, 400, 2, 1],
		// 铁锤
		['iron_hammer', 'pickaxe', 'common', false, 6, 800, 4, 2],
		// 钻石锤
		['diamond_hammer', 'pickaxe', 'common', false, 7, 1600, 6, 3],
		// 燧石锯子
		['flint_saw', 'axe', 'common', false, 5, 200, 2, 0],
		// 铁锯子
		['iron_saw', 'axe', 'common', false, 6, 400, 4, 2],
		// 钻石锯子
		['diamond_saw', 'axe', 'common', false, 7, 1200, 6, 3],
		// 青铜镐
		['bronze_pickaxe', 'pickaxe', 'common', false, 2, 200, 6, 2],
		// 青铜斧
		['bronze_axe', 'axe', 'common', false, 5, 200, 6, 2],
		// 青铜锹
		['bronze_shovel', 'shovel', 'common', false, 1, 200, 6, 2],
		// 光辉刃
		['radiant_sword', 'sword', 'epic', true, 10, 2048, 12, 4],
		// 光辉镐
		['radiant_pickaxe', 'pickaxe', 'epic', true, 7, 2048, 12, 4],
		// 光辉斧
		['radiant_axe', 'axe', 'epic', true, 12, 2048, 12, 4],
		// 光辉锹
		['radiant_shovel', 'shovel', 'epic', true, 7, 2048, 12, 4]
	]
	tool.forEach(([
		name, // ItemId
		type, // 工具类型	
		rarity, // 稀有度
		glow, // 发光
		damage, // 基础伤害(所填数值+3=游戏内面板)
		use, // 耐久
		speed, // 挖掘速度
		setlevel // 工具等级
	]) => {
		event.create(MODID + name, type)
			.attackDamageBaseline(damage)
			.rarity(rarity)
			.glow(glow)
			.unstackable()
			.tag('forge:tools')
			.tag(MODID + 'items')
			.tag(MODID + 'tools')
			.modifyTier((tool) => {
				tool.uses = use
				tool.speed = speed
				tool.setLevel(setlevel)
			})
	})

	// 特殊注册

	// 火绒
	event.create(MODID + 'tinder', 'axe')
		.attackDamageBaseline(-1)
		.rarity('common')
		.glow(false)
		.unstackable()
		.tag('forge:tools')
		.tag(MODID + 'items')
		.tag(MODID + 'tools')
		.modifyTier((tool) => {
			tool.uses = 8
		})
})