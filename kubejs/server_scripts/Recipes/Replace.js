ServerEvents.recipes((event) => {
	// 物品管道
	event.replaceInput('pipez:item_pipe', 'minecraft:iron_ingot', '#forge:ingots/cast_iron')
	// 流体管道
	event.replaceInput('pipez:fluid_pipe', 'minecraft:iron_ingot', '#forge:ingots/cast_iron')
	// 能量管道
	event.replaceInput('pipez:energy_pipe', 'minecraft:iron_ingot', '#forge:ingots/cast_iron')
	// 通用管道
	event.replaceInput('pipez:universal_pipe', 'minecraft:iron_ingot', '#forge:ingots/cast_iron')
	// 气体管道
	event.replaceInput('pipez:gas_pipe', 'minecraft:iron_ingot', '#forge:ingots/cast_iron')
	// 等离子高炉
	event.replaceInput('ad_astra:etrionic_blast_furnace', '#forge:plates/iron', 'new_create:cast_iron_sheet')
	// 钢锭
	event.replaceOutput({}, 'immersiveengineering:ingot_steel', 'ad_astra:steel_ingot')
	// 钢块
	event.replaceOutput({}, 'createmetallurgy:steel_block', 'ad_astra:steel_block')
	// 硅
	event.replaceInput({}, 'ae2:silicon', 'new_create:silicon_crystal')
	// 传动杆 
	event.replaceInput({}, 'create:shaft', '#create:shaft_add')
	// 铜锭
	event.replaceInput({}, 'minecraft:copper_ingot', '#forge:ingots/copper')
	// 铜板
	event.replaceInput({}, 'create:copper_sheet', '#forge:plates/copper')
	// 存储原件
	let storagePart = [
		'refinedstorage:1k_storage_part',
		'refinedstorage:4k_storage_part',
		'refinedstorage:16k_storage_part',
		'refinedstorage:64k_storage_part',
		'refinedstorage:64k_fluid_storage_part',
		'refinedstorage:256k_fluid_storage_part',
		'refinedstorage:1024k_fluid_storage_part',
		'refinedstorage:4096k_fluid_storage_part'
	]
	storagePart.forEach((input) => {
		event.replaceInput(input, 'new_create:silicon_crystal', '#forge:plates/copper')
	})

	/*
	* BYD我想在这批量换管道的Recipes结果不生效气炸了
	*/
})