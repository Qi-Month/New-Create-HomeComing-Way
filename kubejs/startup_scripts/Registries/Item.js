StartupEvents.registry("item", (event) => {
	let namespace = "new_create:"
	let common = "common"
	let uncommon = "uncommon"
	let epic = "epic"
	let rare = "rare"

	let itemRegisters = [
		["flint_knapp", common, false], // 燧石碎片
	]
	itemRegisters.forEach(([name, rarity, glow]) => {
		event.create(namespace + name)
			.rarity(rarity)
			.glow(glow)
	})

	// 半成品注册
	let inItemRegisters = [

	]                                                            
	inItemRegisters.forEach((name) => {
		event.create(`${namespace}incomplete_${name}`, "create:sequenced_assembly")
	})

	let moneyRegisters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "rainbow_mooncoin"]
	moneyRegisters.forEach((name) => {
		event.create(namespace + name)
			.rarity(epic)
			.maxStackSize(16)
			.texture(`${namespace}item/money/${name}`)
	})
})