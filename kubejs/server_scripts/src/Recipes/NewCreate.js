ServerEvents.recipes((event) => {
	const {
		create,
		createsifter,
		createmetallurgy,
		create_bic_bit,
		createaddition,
		createdieselgenerators,
		createoreexcavation,
		create_mechanical_extruder,
		kubejs,
		thermal,
		minecraft,
		immersiveengineering,
		vintageimprovements,
		farmersdelight
	} = event.recipes

	// 打磨石板
	create.sandpaper_polishing("new_create:stone_sheet", [
		"new_create:unpolished_stone_sheet"
	])
	create.sandpaper_polishing("new_create:deepslate_stone_sheet", [
		"new_create:unpolished_deepslate_stone_sheet"
	])

	// 石板
	kubejs.shapeless("new_create:unpolished_stone_sheet", [
		"#forge:cobblestone/normal",
		"#new_create:hammer"
	]).damageIngredient("#new_create:hammer")

	kubejs.shapeless("new_create:unpolished_deepslate_stone_sheet", [
		"#forge:cobblestone/deepslate",
		"#new_create:hammer"
	]).damageIngredient("#new_create:hammer")

	// 晾干网
	kubejs.shaped("new_create:drying_web", [
		"HGH",
		"GGG",
		"HGH"
	], {
		H: "new_create:hay",
		G: "new_create:grass_string"
	})

	// 砧板
	kubejs.shaped("farmersdelight:cutting_board", [
		"AA",
		"AA"
	], {
		A: "#minecraft:logs"
	}).id("farmersdelight:cutting_board")

	// 晾干架
	kubejs.shaped("youkaishomecoming:drying_rack", [
		"PRP",
		"RDR",
		"PRP"
	], {
		P: "#minecraft:planks",
		R: "#forge:rods/wooden",
		D: "new_create:drying_web"
	}).id("youkaishomecoming:drying_rack_from_bamboo_block_stonecutting")

	// 干草
	event.custom({
		"type": "youkaishomecoming:drying_rack",
		"category": "misc",
		"cookingtime": 200,
		"experience": 0.0,
		"ingredient": { "item": "new_create:grass_fiber" },
		"result": { "item": "new_create:hay" }
	})

	// 草绳
	kubejs.shapeless("2x new_create:grass_string", [
		"3x new_create:grass_fiber"
	])

	// 模具
	kubejs.shaped("3x new_create:wooden_blank_mold", [
		"PR",
		"RP"
	], {
		P: "#minecraft:planks",
		R: "#forge:rods/wooden"
	})

	kubejs.shaped("3x new_create:wooden_blank_mold", [
		"RP",
		"PR"
	], {
		P: "#minecraft:planks",
		R: "#forge:rods/wooden"
	})

	let woodenCast = [
		"new_create:wooden_ingot_mold",
		"new_create:wooden_plate_mold",
		"new_create:wooden_nugget_mold"
	]
	woodenCast.forEach((outputItem) => {
		minecraft.stonecutting(outputItem, "new_create:wooden_blank_mold")
	})

	// 热煤
	minecraft.campfire_cooking("new_create:heat_coal_block", [
		"minecraft:coal_block"
	])

	// 甘蔗
	create.compacting([
		"new_create:bagasse",
		Fluid.of("new_create:sugarcane_juice", 50)
	], [
		"minecraft:sugar_cane"
	])

	// 铁
	vintageimprovements.hammering("minecraft:iron_ingot", [
		"new_create:raw_iron_ingot"
	]).hammerBlows(4)

	// 耐火砖块
	kubejs.shaped("new_create:heat_resistant_bricks", [
		"AA",
		"AA"
	], {
		A: "new_create:heat_resistant_brick"
	})

	// 炼铁炉
	create.item_application("new_create:iron_making_furnace", [
		"new_create:iron_making_furnace_under",
		"new_create:iron_making_furnace_up"
	])

	// 炼铁炉 - 上
	kubejs.shaped("new_create:iron_making_furnace_up", [
		"A A",
		"AAA"
	], {
		A: "new_create:heat_resistant_brick"
	})

	// 炼铁炉 - 下
	kubejs.shaped("new_create:iron_making_furnace_under", [
		"A A",
		"ABA",
		"AAA"
	], {
		A: "new_create:heat_resistant_brick",
		B: "#forge:coal"
	})

	// 硅砂
	createsifter.sifting([
		Item.of("new_create:silica_sand").withChance(0.3),
		Item.of("ecologics:seashell").withChance(0.7)
	], [
		"#forge:sand",
		"createsifter:andesite_mesh"
	]).waterlogged()

	// 碳酸钙
	create.milling([
		Item.of("new_create:calcium_carbonate"),
		Item.of("2x new_create:calcium_carbonate").withChance(0.36),
		Item.of("3x new_create:calcium_carbonate").withChance(0.12)
	], [
		"ecologics:seashell"
	])

	create.crushing([
		Item.of("new_create:calcium_carbonate"),
		Item.of("2x new_create:calcium_carbonate").withChance(0.72),
		Item.of("3x new_create:calcium_carbonate").withChance(0.24)
	], [
		"ecologics:seashell"
	])

	// 熔融玻璃
	create.mixing(Fluid.of("new_create:molten_glass", 500), [
		"new_create:calcium_carbonate",
		"2x minecraft:dried_kelp",
		"create:crushed_raw_lead",
		"5x new_create:silica_sand"
	]).heatLevel("melt")

	// 耐热黏土
	create.mixing("3x new_create:heat_resistant_clay_ball", [
		"3x minecraft:clay_ball",
		"2x #forge:graphite",
		Fluid.of("minecraft:water", 500)
	])

	// 耐热砖
	minecraft.smelting("new_create:heat_resistant_brick", ["new_create:heat_resistant_clay_ball"])
	minecraft.blasting("new_create:heat_resistant_brick", ["new_create:heat_resistant_clay_ball"])
})