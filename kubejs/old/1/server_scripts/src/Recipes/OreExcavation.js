ServerEvents.recipes((event) => {
	const { createoreexcavation } = event.recipes

	// 锇
	createoreexcavation.vein({ 'translate': 'ore.nc.aluminum' }, 'mekanism:raw_osmium')
		.placement(128, 8, 64825185)
		.priority(0)
		.alwaysInfinite()
		.veinSize(3, 8.5)
		.biomeWhitelist('minecraft:is_overworld')
		.id('new_create:raw_osmium')

	createoreexcavation.drilling(
		'mekanism:raw_osmium',
		'new_create:mek_osmium',
		600
	)

	// 铝
	createoreexcavation.vein({ 'translate': 'ore.nc.aluminium' }, 'immersiveengineering:raw_aluminum')
		.placement(128, 8, 64825185)
		.priority(0)
		.alwaysInfinite()
		.veinSize(3, 8.5)
		.biomeWhitelist('minecraft:is_overworld')
		.id('new_create:raw_aluminium')

	createoreexcavation.drilling(
		'immersiveengineering:raw_aluminum',
		'new_create:raw_aluminium',
		600
	)
})