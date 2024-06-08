ServerEvents.tags('item', (event) => {
	let itemTag = [
		// 木质工具
		['forge:tools/wooden', [
			'minecraft:wooden_shovel',
			'minecraft:wooden_pickaxe',
			'minecraft:wooden_axe',
			'minecraft:wooden_hoe',
			'minecraft:wooden_sword',
			'mekanismtools:wood_paxel'
		]],
		// 线
		['forge:string', [
			'new_create:grass_string'
		]],
		// 烧焦圆石
		['forge:cobblestone', [
			'new_create:charred_cobblestone'
		]],
		// 草
		['new_create:grass', [
			'minecraft:grass',
			'minecraft:fern',
			'minecraft:tall_grass',
			'minecraft:large_fern',
			'minecraft:large_fern',
			'minecraft:seagrass'
		]],
		// 锯子
		['new_create:saw', [
			'new_create:flint_saw',
			'new_create:iron_saw',
			'new_create:diamond_saw'
		]]
		// 锤子
		['new_create:hammer', [
			'new_create:stone_hammer',
			'new_create:iron_hammer',
			'new_create:diamond_hammer'
		]]
		// 工具
		['new_create:tools', [
			'#forge:hammer',
			'#forge:saw'
		]],
		//合成轴承
		['create:shaft_add', [
			'new_create:primary_bearing',
			'create:shaft'
		]],
		// 铜工具
		['forge:tools/copper', [
			'create_sa:copper_sword',
			'create_sa:copper_pickaxe',
			'create_sa:copper_axe',
			'create_sa:copper_shovel',
			'create_sa:copper_hoe'
		]],
		// 燧石工具
		['forge:tools/flint', [
			'new_create:flint_sword',
			'new_create:flint_pickaxe',
			'new_create:flint_axe',
			'new_create:flint_handaxe',
			'new_create:flint_shovel'
		]],
		// 安山金属粒
		['forge:andesite/nuggets', [
			'#forge:nuggets/iron',
			'#forge:nuggets/zinc'
		]],
		// 橡胶
		['forge:cured_rubber', [
			'thermal:cured_rubber',
			'create_dd:rubber'
		]],
		// 光辉石
		['forge:ingots/refined_radiance', [
			'create:refined_radiance'
		]],
		// 冲压模具
		['immersiveengineering:mold', [
			'immersiveengineering:mold_unpacking',
			'immersiveengineering:mold_plate',
			'immersiveengineering:mold_gear',
			'immersiveengineering:mold_rod',
			'immersiveengineering:mold_bullet_casing',
			'immersiveengineering:mold_wire',
			'immersiveengineering:mold_packing_4',
			'immersiveengineering:mold_packing_9',
			'new_create:mold_block'
		]],
		// 杂酚油桶
		['forge:creosote_bucket', [
			'thermal:creosote_bucket',
			'immersiveengineering:creosote_bucket',
			'new_create:embalming_fluid_bucket'
		]],
		// 铸铁锭
		['forge:ingots/cast_iron', [
			'new_create:cast_iron_ingot'
		]],
		// 铸铁块
		['forge:storage_blocks/cast_iron', [
			'new_create:cast_iron_block'
		]],
		// 铸铁板
		['forge:plates/cast_iron', [
			'new_create:cast_iron_sheet'
		]],
		// 机壳
		['create:casing', [
			'new_create:cast_iron_casing'
		]],
		// 石英
		['forge:gems/quartz', [
			'new_create:pure_quartz'
		]],
		// 硅
		['forge:silicon', [
			'new_create:silicon_crystal'
		]],
		// 沙子
		['forge:sand', [
			'#minecraft:sand'
		]],
		// 汤锅
		['caupona:stew_pot', [
			'caupona:stew_pot',
			'caupona:lead_stew_pot'
		]],
		// 秘银锭
		['forge:ingots/mithril', [
			'new_create:mithril_ingot'
		]],
		// 秘银板
		['forge:plates/mithril', [
			'new_create:mithril_sheet'
		]],
		// 空气
		['minecraft:air', [
			'minecraft:air'
		]]
	]
	itemTag.forEach(([tag, item]) => {
		e.add(tag, item)
	})
})