ServerEvents.recipes((event) => {
	// 齿轮
	event.replaceInput({}, "create:cogwheel", "#create:metal_cogwheel")
	event.replaceInput({}, "create:large_cogwheel", "#create:metal_large_cogwheel")

	// 铸模替换
	let cast = ["ball", "blank", "gear", "ingot", "nugget", "plate", "rod"]
	cast.forEach((name) => {
		event.replaceInput(
			{},
			`createmetallurgy:graphite_${name}_mold`,
			`new_create:golden_${name}_cast`
		)
		event.replaceOutput(
			{},
			`createmetallurgy:graphite_${name}_mold`,
			`new_create:golden_${name}_cast`
		)
	})

	// 原木
	event.replaceInput({}, "#forge:stripped_logs", "#minecraft:logs")

	// 铁盔甲
	event.replaceInput("minecraft:iron_helmet", "minecraft:iron_ingot", "#forge:plates/iron")
	event.replaceInput("minecraft:iron_chestplate", "minecraft:iron_ingot", "#forge:plates/iron")
	event.replaceInput("minecraft:iron_leggings", "minecraft:iron_ingot", "#forge:plates/iron")
	event.replaceInput("minecraft:iron_boots", "minecraft:iron_ingot", "#forge:plates/iron")
})