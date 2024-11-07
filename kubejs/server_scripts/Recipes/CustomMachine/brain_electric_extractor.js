ServerEvents.recipes((event) => {
	let { custommachinery } = event.recipes

	custommachinery.custom_machine("new_create:brain_electric_extractor", 1200)
		.produceEnergyPerTick(7.5)
		.requireItem("edenring:brain_tree_block_copper")

	custommachinery.custom_machine("new_create:brain_electric_extractor", 1200)
		.produceEnergyPerTick(15)
		.requireItem("edenring:brain_tree_block_iron")

	custommachinery.custom_machine("new_create:brain_electric_extractor", 1200)
		.produceEnergyPerTick(22.5)
		.requireItem("edenring:brain_tree_block_gold")
})