new Schema('createmetallurgy:casting_in_basin')
	.simpleKey('results', 'outputItemArray')
	.simpleKey('ingredients', 'inputFluidArray')
	.simpleKey('processingTime', 'doubleNumber', 100)

new Schema('createmetallurgy:casting_in_table')
	.simpleKey('results', 'outputItemArray')
	.simpleKey('ingredients', 'inputFluidOrItemArray')
	.simpleKey('processingTime', 'doubleNumber', 100)

new Schema('createmetallurgy:grinding')
	.simpleKey('results', 'outputItemArray')
	.simpleKey('ingredients', 'inputItemArray')
	.simpleKey('processingTime', 'doubleNumber', 100)

new Schema('createmetallurgy:alloying')
	.simpleKey('results', 'outputFluidOrItemArray')
	.simpleKey('ingredients', 'inputFluidOrItemArray')
	.simpleKey('processingTime', 'doubleNumber', 100)