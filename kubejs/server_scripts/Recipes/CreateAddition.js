ServerEvents.recipes(e => {
	// 充电金锭
	e.custom({
		"type": "createaddition:charging",
		"input": { "item": "minecraft:gold_ingot" },
		"result": { "item": 'create_new_age:overcharged_gold' },
		"energy": 2000,
		"maxChargeRate": 200
	})

	// 充电铁锭
	e.custom({
		"type": "createaddition:charging",
		"input": { "item": "minecraft:iron_ingot" },
		"result": { "item": 'create_new_age:overcharged_iron' },
		"energy": 2500,
		"maxChargeRate": 200
	})

	// 充电钻石
	e.custom({
		"type": "createaddition:charging",
		"input": { "item": "minecraft:diamond" },
		"result": { "item": 'create_new_age:overcharged_diamond' },
		"energy": 3000,
		"maxChargeRate": 200
	})

	// 充电金板
	e.custom({
		"type": "createaddition:charging",
		"input": { "tag": 'forge:plates/gold' },
		"result": { "item": 'create_new_age:overcharged_golden_sheet' },
		"energy": 1500,
		"maxChargeRate": 200
	})

	// 充电铁板
	e.custom({
		"type": "createaddition:charging",
		"input": { "tag": 'forge:plates/iron' },
		"result": { "item": 'create_new_age:overcharged_iron_sheet' },
		"energy": 1500,
		"maxChargeRate": 200
	})

	// 充能赛特斯石英水晶
	e.custom({
		"type": "createaddition:charging",
		"input": { "item": 'ae2:certus_quartz_crystal' },
		"result": { "item": 'ae2:charged_certus_quartz_crystal' },
		"energy": 1500,
		"maxChargeRate": 200
	})

	// 红石工程块
	e.custom({
		"type": "createaddition:charging",
		"input": { "item": 'immersiveengineering:heavy_engineering' },
		"result": { "item": 'immersiveengineering:rs_engineering', "count": 2 },
		"energy": 800,
		"maxChargeRate": 200
	}).id('immersiveengineering:crafting/rs_engineering')

	// 原油蒸馏
	e.custom({
		"type": "createdieselgenerators:distillation",
		"ingredients": [{ "fluidTag": "forge:crude_oil", "amount": 200 }],
		"heatRequirement": "heated",
		"processingTime": 200,
		"results": [
			{ "fluid": "createdieselgenerators:diesel", "amount": 50 },
			{ "fluid": "createdieselgenerators:gasoline", "amount": 50 },
			{ "fluid": 'new_create:kerosene', "amount": 50 },
			{ "fluid": 'new_create:industrial_fuel', "amount": 50 }
		]
	}).id('createdieselgenerators:distillation/crude_oil')
})