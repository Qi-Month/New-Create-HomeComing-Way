StartupEvents.registry("item", (event) => {
	let common = "common"
	let uncommon = "uncommon"
	let epic = "epic"
	let rare = "rare"

	let itemRegisters = [
		["initial_item_kit", epic, true], // 初始套件
		["drying_volvox_ball", common, false], // 干燥的藻球
		["inferior_brick", common, false], // 劣质砖
		["transition_stone", epic, false], // 跃迁石
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

	// 脑树树苗(?)
	event.create(global.namespace + "brain_sapling")
})