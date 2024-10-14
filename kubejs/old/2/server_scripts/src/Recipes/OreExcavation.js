ServerEvents.recipes((event) => {
	const { createoreexcavation } = event.recipes
	let createore = createoreexcavation
	const MODID = "new_create:"

	// 锇
	createore.vein({ "translate": "ore.nc.aluminum" }, "mekanism:raw_osmium")
		.placement(128, 8, 64825185)
		.priority(0)
		.alwaysInfinite()
		.veinSize(3, 8.5)
		.biomeWhitelist("minecraft:is_overworld")
		.id(MODID + "raw_osmium")

	createore.drilling(
		"mekanism:raw_osmium",
		MODID + "mek_osmium",
		600
	)

	// 铝
	createore.vein({ "translate": "ore.nc.aluminium" }, "immersiveengineering:raw_aluminum")
		.placement(128, 8, 64825185)
		.priority(0)
		.alwaysInfinite()
		.veinSize(3, 8.5)
		.biomeWhitelist("minecraft:is_overworld")
		.id(MODID + "raw_aluminium")

	createore.drilling(
		"immersiveengineering:raw_aluminum",
		MODID + "raw_aluminium",
		600
	)
})