ServerEvents.recipes(e => {
	const { shaped, shapeless } = e.recipes.kubejs

	// 挖掘爪
	shaped('artifacts:digging_claws', [
		'CSS',
		'CDS',
		'CSS'
	], {
		C: '#forge:ingots/cast_iron',
		D: '#forge:gems/diamond',
		S: '#forge:string'
	})
})