ServerEvents.recipes(e => {
	const { shaped } = e.recipes.kubejs

	// 挖掘爪
	shaped('artifacts:digging_claws', [
		'PSS',
		'PDS',
		'PSS'
	], {
		P: '#forge:plates/cast_iron',
		D: '#forge:gems/diamond',
		S: '#forge:string'
	})
})