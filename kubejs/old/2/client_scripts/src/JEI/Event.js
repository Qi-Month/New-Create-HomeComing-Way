JEIEvents.addItems((event) => {
	let addItem = [
		"create:shadow_steel",
		"create:shadow_steel_casing",
		"create:refined_radiance",
		"create:refined_radiance_casing",
		"createdieselgenerators:pumpjack_hole",
		"thermal:rf_coil"
	]
	addItem.forEach((item) => {
		event.add(item)
	})
})

JEIEvents.hideItems((event) => {
	let hideItem = [
		"createmetallurgy:mechanical_belt_grinder",
		"extendedcrafting:singularity",
		"extendedcrafting:crystaltine_catalyst",
		"extendedcrafting:enhanced_ender_catalyst",
		"extendedcrafting:ender_catalyst",
		"extendedcrafting:enhanced_redstone_catalyst",
		"extendedcrafting:redstone_catalyst",
		"extendedcrafting:ultimate_catalyst",
		"extendedcrafting:elite_catalyst",
		"extendedcrafting:advanced_catalyst",
		"extendedcrafting:basic_catalyst",
		"extendedcrafting:the_ultimate_catalyst",
		"extendedcrafting:basic_component",
		"extendedcrafting:advanced_component",
		"extendedcrafting:elite_component",
		"extendedcrafting:ultimate_component",
		"extendedcrafting:redstone_component",
		"extendedcrafting:enhanced_redstone_component",
		"extendedcrafting:ender_component",
		"extendedcrafting:enhanced_ender_component",
		"extendedcrafting:black_iron_slate",
		"extendedcrafting:crystaltine_component",
		"extendedcrafting:the_ultimate_component",
		"new_create:in_abstruse_mechanism",
		"new_create:in_calculation_mechanism",
		"new_create:in_inductive_mechanism",
		"new_create:in_infernal_mechanism",
		"new_create:in_kinetic_mechanism",
		"new_create:in_sturdy_mechanism",
		"new_create:in_sealed_mechanism",
		"ae2:facade",
		"create_dd:bronze_saw",
		"create_dd:bronze_drill",
		"alltheores:copper_ore_hammer",
		"alltheores:iron_ore_hammer",
		"alltheores:bronze_ore_hammer",
		"alltheores:invar_ore_hammer",
		"alltheores:platinum_ore_hammer",
		"refinedstorage:cover",
		"refinedstorage:hollow_cover"
	]
	hideItem.forEach((item) => {
		event.hide(item)
	})
})