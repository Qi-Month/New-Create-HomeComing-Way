// 高炉
BlockCrafting.addMultiblockStructure(
	MultiblockStructureBuilder
		.create('minecraft:blast_furnace')
		.pattern('aaa', 'aaa', 'eee')
		.pattern('aaa', 'bcb', 'ege')
		.pattern('aaa', 'ada', 'eee')
		.where('a', 'minecraft:smooth_stone')
		.where('b', 'new_create:cast_iron_block')
		.where('c', 'new_create:furnace_core')
		.where('e', 'minecraft:stone')
		.where('g', 'minecraft:air')
		.center('d', 'minecraft:glass')
		.craftingItem('immersiveengineering:hammer')
		.resultItem('2x minecraft:blast_furnace')
		.build()
)

// 熔炉核心
BlockCrafting.addMultiblockStructure(
	MultiblockStructureBuilder
		.create('new_create:furnace_core')
		.pattern('aaa', 'aaa', 'aaa')
		.pattern('aaa', 'aba', 'aaa')
		.pattern('aaa', 'aAa', 'aaa')
		.where('a', 'minecraft:cobblestone')
		.where('b', 'minecraft:redstone_block')
		.center('A', 'minecraft:cobblestone')
		.craftingItem('immersiveengineering:hammer')
		.resultItem('new_create:furnace_core')
		.build()
)

// 熔化锅
BlockCrafting.addMultiblockStructure(
	MultiblockStructureFileBuilder
		.create('melter')
		.file('kubejs/assets/new_create/blockcraft/melter.nbt')
		.center('minecraft:clay')
		.resultItem('2x melter:melter')
		.craftingItemTag('new_create:hammer')
		.build()
)