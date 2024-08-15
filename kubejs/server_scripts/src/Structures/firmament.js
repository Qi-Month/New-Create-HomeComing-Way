MMEvents.createStructures((event) => {
	const MODID = 'new_create:'

	event.create(MODID + "firmament")
		.controllerId("mm:firmament")
		.name("苍穹 - 817型")
		.layout((structures) => {
			structures
				.layer(["ACA"])
				.layer(["BCD"])
				.key("A", { block: "design_decor:diagonal_girder" })
				.key("B", { block: "mm:firmament_item_input" })
				.key("D", { block: "mm:firmament_item_output" })
		})
})