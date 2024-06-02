ServerEvents.recipes(e => {
	// 物品管道
	e.replaceInput('pipez:item_pipe', 'minecraft:iron_ingot', '#forge:ingots/cast_iron')
	// 流体管道
	e.replaceInput('pipez:fluid_pipe', 'minecraft:iron_ingot', '#forge:ingots/cast_iron')
	// 能量管道
	e.replaceInput('pipez:energy_pipe', 'minecraft:iron_ingot', '#forge:ingots/cast_iron')
	// 通用管道
	e.replaceInput('pipez:universal_pipe', 'minecraft:iron_ingot', '#forge:ingots/cast_iron')
	// 气体管道
	e.replaceInput('pipez:gas_pipe', 'minecraft:iron_ingot', '#forge:ingots/cast_iron')
	// 等离子高炉
	e.replaceInput('ad_astra:etrionic_blast_furnace', '#forge:plates/iron', 'new_create:cast_iron_sheet')
	// 钢锭替换
	e.replaceOutput({}, 'immersiveengineering:ingot_steel', 'ad_astra:steel_ingot')
	// 硅
	e.replaceInput({}, 'ae2:silicon', 'new_create:silicon_crystal')
	// 传动杆 
	e.replaceInput({}, 'create:shaft', '#create:shaft_add')
	// 铜锭
	e.replaceInput({}, 'minecraft:copper_ingot', '#forge:ingots/copper')
})