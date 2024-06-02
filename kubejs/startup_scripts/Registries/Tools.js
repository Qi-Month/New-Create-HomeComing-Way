StartupEvents.registry('item', e => {
	const ModID = 'new_create:'
	let Tool = [
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
	Tool.forEach(([
		Name, // ItemId
		Type, // 工具类型	
		Rarity, // 稀有度
		Glow, // 发光
		Damage, // 基础伤害(所填数值+3=游戏内面板)
		Use, // 耐久
		Speed, // 挖掘速度
		Setlevel // 工具等级
	]) => {
		e.create(ModID + Name, Type)
			.attackDamageBaseline(Damage)
			.rarity(Rarity)
			.glow(Glow)
			.unstackable()
			.tag('forge:tools')
			.tag(ModID + 'items')
			.tag(ModID + 'tools')
			.modifyTier(tool => {
				tool.uses = Use
				tool.speed = Speed
				tool.setLevel(Setlevel)
			})
	})

	// 特殊注册

	// 火绒
	e.create(ModID + 'tinder', 'axe')
		.attackDamageBaseline(-1)
		.rarity('common')
		.glow(false)
		.unstackable()
		.tag('forge:tools')
		.tag(ModID + 'items')
		.tag(ModID + 'tools')
		.modifyTier(tool => { 
			tool.uses = 8
		})
})