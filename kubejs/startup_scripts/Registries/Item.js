StartupEvents.registry("item", (event) => {
	const MODID = "new_create:"
	let common = "common"
	let uncommon = "uncommon"
	let epic = "epic"
	let rare = "rare"

	let itemRegisters = [
		["flint_knapp", common, false], // 燧石碎片
	]
	itemRegisters.forEach(([name, rarity, glow]) => {
		event.create(MODID + name)
			.rarity(rarity)
			.glow(glow)
	})

	// 半成品注册
	let inItemRegisters = [

	]
	inItemRegisters.forEach((name) => {
		event.create(MODID + "incomplete_" + name, "create:sequenced_assembly")
	})

	const moneyRegisters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	moneyRegisters.forEach((name) => {
		event.create(MODID + name)
			.rarity(epic)
			.maxStackSize(16)
	})
})