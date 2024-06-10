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
	// 钢锭替换
	event.replaceOutput({}, 'immersiveengineering:ingot_steel', 'ad_astra:steel_ingot')
	// 钢块替换
	event.replaceOutput({}, 'createmetallurgy:steel_block', 'ad_astra:steel_block')
	// 硅
	event.replaceInput({}, 'ae2:silicon', 'new_create:silicon_crystal')
	// 传动杆 
	event.replaceInput({}, 'create:shaft', '#create:shaft_add')
	// 铜锭
	event.replaceInput({}, 'minecraft:copper_ingot', '#forge:ingots/copper')
})