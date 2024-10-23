let $Rarity = Java.loadClass("net.minecraft.world.item.Rarity")

StartupEvents.registry("item", (event) => {
	let common = "common"
	let uncommon = "uncommon"
	let epic = "epic"
	let rare = "rare"

	let itemRegisters = [
		["initial_item_kit", epic, true], // 初始套件
		["drying_volvox_ball", common, false], // 干燥的藻球
		["wet_inferior_brick", common, false], // 潮湿的土砖
		["inferior_brick", common, false], // 土砖
		["transition_stone", epic, false], // 跃迁石
		["refractory_clay_ball", common, false], // 耐火黏土
		["refractory_brick", common, false], // 
		["quicklime", common, false], // 生石灰
		["mortar", common, false], // 砂浆
		["incomplete_bronze_cogwheel", common, false], // 半成品青铜齿轮
		["incomplete_bronze_large_cogwheel", common, false], // 半成品青铜大齿轮
		["incomplete_cast_iron_cogwheel", common, false], // 半成品铸铁齿轮
		["incomplete_cast_iron_large_cogwheel", common, false], // 半成品铸铁大齿轮
		["incomplete_steel_cogwheel", common, false], // 半成品钢齿轮
		["incomplete_steel_large_cogwheel", common, false], // 半成品钢大齿轮
	]
	itemRegisters.forEach(([name, rarity, glow]) => {
		event.create(global.namespace + name)
			.rarity(rarity)
			.glow(glow)
	})

	// 半成品注册
	let inItemRegisters = [

	]
	inItemRegisters.forEach((name) => {
		event.create(`${global.namespace}incomplete_${name}`, "create:sequenced_assembly")
	})

	// Money
	let moneyRegisters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "20", "50", "100", "500", "1000", "5000", "10000", "rainbow_mooncoin"]
	moneyRegisters.forEach((name) => {
		event.create(global.namespace + name)
			.rarity(epic)
			.texture(`${global.namespace}item/money/${name}`)
	})

	// 模具
	let cast = ["ball", "blank", "gear", "ingot", "nugget", "plate", "rod"]
	cast.forEach((name) => {
		event.create(`${global.namespace}golden_${name}_cast`)
			.texture(`${global.namespace}item/cast/${name}`)
			.rarity($Rarity.UNCOMMON)
			.tag("new_create:cast")
			.tag(`new_create:cast/${name}`)
	})

	// 脑树树苗(?)
	event.create(global.namespace + "brain_sapling")
})