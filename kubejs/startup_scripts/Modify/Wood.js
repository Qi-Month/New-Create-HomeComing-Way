BlockEvents.modification((event) => {
	let woodsNameSpace = [
		'dark_oak', 'oak', 'acacia', 'birch', 'jungle',
		'spruce', 'mangrove', 'cherry', 'coconut', 'walnut',
		'azalea', 'flowering_azalea', 'glacian', 'crimson', 'warped',
		'rubberwood', 'rose', 'smoked', 'spirit', 'rubber',
		'walnut', 'fig', 'wolfberry'
	]
	woodsNameSpace.forEach((type) => {
		let logNames = [
			`${type}_log`,
			`${type}_wood`,
			`stripped_${type}_log`,
			`stripped_${type}_wood`
		]
		logNames.forEach((name) => {
			event.modify(`minecraft:${name}`, (modify) => {
				modify.requiresTool = true
			})
		})
	})

	let woods = [
		'crimson_stem', 'stripped_crimson_stem', 'crimson_hyphae', 'stripped_crimson_hyphae',
		'warped_stem', 'stripped_warped_stem', 'warped_hyphae', 'stripped_warped_hyphae'
	]
	woods.forEach((name) => {
		event.modify(`minecraft:${name}`, (modify) => {
			modify.requiresTool = true
		})
	})

	// ModWood
	let modWood = [
		'ecologics:coconut_log', 'ecologics:stripped_coconut_log', 'ecologics:walnut_log',
		'ecologics:stripped_walnut_log', 'ecologics:azalea_log', 'ecologics:stripped_azalea_log',
		'ecologics:flowering_azalea_log', 'caupona:stripped_walnut_log', 'caupona:walnut_log',
		'caupona:wolfberry_log', 'caupona:fig_log', 'ad_astra:glacian_log', 'ad_astra:stripped_glacian_log'
	]
	modWood.forEach((name) => {
		event.modify(name, (modify) => {
			modify.requiresTool = true
		})
	})
})