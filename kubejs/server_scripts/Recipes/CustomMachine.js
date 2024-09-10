ServerEvents.recipes((event) => {
	let { custommachinery } = event.recipes

	custommachinery.custom_machine("new_create:brain_electric_extractor", 300)
		.requireItem("edenring:brain_tree_block_copper")
		.produceEnergy(150)

	custommachinery.custom_machine("new_create:brain_electric_extractor", 300)
		.requireItem("edenring:brain_tree_block_iron")
		.produceEnergy(300)

	custommachinery.custom_machine("new_create:brain_electric_extractor", 300)
		.requireItem("edenring:brain_tree_block_gold")
		.produceEnergy(500)
})