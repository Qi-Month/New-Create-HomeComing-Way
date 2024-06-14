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