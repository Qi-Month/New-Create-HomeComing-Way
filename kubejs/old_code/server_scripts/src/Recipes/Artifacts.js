ServerEvents.recipes((event) => {
	const { shaped } = event.recipes.kubejs

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