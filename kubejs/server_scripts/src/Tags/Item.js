ServerEvents.tags("item", (event) => {
	// 线
	event.add("forge:string", [
		"new_create:grass_string"
	])

	//烧焦圆石
	event.add("forge:cobblestone", [
		"new_create:charred_cobblestone"
	])

	// 草
	event.add("new_create:grass", [
		"minecraft:grass",
		"minecraft:fern",
		"minecraft:tall_grass",
		"minecraft:large_fern",
		"minecraft:large_fern",
		"minecraft:seagrass"
	])

	// 锯子
	event.add("new_create:saw", [
		"new_create:flint_saw",
		"new_create:iron_saw",
		"new_create:diamond_saw"
	])

	// 锤子
	event.add("new_create:hammer", [
		"new_create:stone_hammer",
		"new_create:iron_hammer",
		"new_create:diamond_hammer"
	])

	// 工具
	event.add("new_create:tools", [
		"#forge:hammer",
		"#forge:saw"
	])

	event.add("forge:tools", [
		"#new_create:tools"
	])

	//合成轴承
	event.add("create:shaft_add", [
		"new_create:primary_bearing",
		"create:shaft"
	])

	// 铜工具
	event.add("forge:tools/copper", [
		"create_sa:copper_sword",
		"create_sa:copper_pickaxe",
		"create_sa:copper_axe",
		"create_sa:copper_shovel",
		"create_sa:copper_hoe"
	])

	// 燧石工具
	event.add("forge:tools/flint", [
		"new_create:flint_sword",
		"new_create:flint_pickaxe",
		"new_create:flint_axe",
		"new_create:flint_handaxe",
		"new_create:flint_shovel"
	])

	// 安山金属粒
	event.add("forge:andesite/nuggets", [
		"#forge:nuggets/iron",
		"#forge:nuggets/zinc"
	])

	// 橡胶
	event.add("forge:cured_rubber", [
		"thermal:cured_rubber",
		"create_dd:rubber"
	])

	// 光辉石
	event.add("forge:ingots/refined_radiance", [
		"create:refined_radiance"
	])

	// 冲压模具
	event.add("immersiveengineering:mold", [
		"immersiveengineering:mold_unpacking",
		"immersiveengineering:mold_plate",
		"immersiveengineering:mold_gear",
		"immersiveengineering:mold_rod",
		"immersiveengineering:mold_bullet_casing",
		"immersiveengineering:mold_wire",
		"immersiveengineering:mold_packing_4",
		"immersiveengineering:mold_packing_9",
		"new_create:mold_block"
	])

	// 杂酚油桶
	event.add("forge:creosote_bucket", [
		"thermal:creosote_bucket",
		"immersiveengineering:creosote_bucket",
		"new_create:embalming_fluid_bucket"
	])

	// 铸铁锭
	event.add("forge:ingots/cast_iron", [
		"new_create:cast_iron_ingot"
	])

	// 铸铁板
	event.add("forge:plates/cast_iron", [
		"new_create:cast_iron_sheet"
	])

	// 铸铁块
	event.add("forge:storage_blocks/cast_iron", [
		"new_create:cast_iron_block"
	])

	// 机壳
	event.add("create:casing", [
		"new_create:cast_iron_casing"
	])

	// 石英
	event.add("forge:gems/quartz", [
		"new_create:pure_quartz"
	])

	// 钢块
	event.add("forge:storage_blocks/steel", [
		"createmetallurgy:steel_block"
	])

	// 硅
	event.add("forge:silicon", [
		"new_create:silicon_crystal"
	])

	// 沙子
	event.add("forge:sand", [
		"#minecraft:sand"
	])

	// RS存储元件
	event.add("refinedstorage:storage_part", [
		"refinedstorage:1k_storage_part",
		"refinedstorage:4k_storage_part",
		"refinedstorage:16k_storage_part",
		"refinedstorage:64k_storage_part",
		"refinedstorage:64k_fluid_storage_part",
		"refinedstorage:256k_fluid_storage_part",
		"refinedstorage:1024k_fluid_storage_part",
		"refinedstorage:4096k_fluid_storage_part"
	])

	// 铁轨
	event.add("minecraft:rails", [
		"create:controller_rail"
	])

	// 汤锅
	event.add("caupona:stew_pot", [
		"caupona:stew_pot",
		"caupona:lead_stew_pot"
	])

	// 空气
	event.add("minecraft:air", [
		"minecraft:air"
	])

	// Forge锭
	event.add("forge:ingots", [
		"#forge:ingots/cast_iron"
	])

	// Forge板
	event.add("forge:plates", [
		"#forge:plates/cast_iron"
	])

	// 青铜板
	event.add("forge:plates/bronze", [
		"steampowered:bronze_sheet"
	])
})