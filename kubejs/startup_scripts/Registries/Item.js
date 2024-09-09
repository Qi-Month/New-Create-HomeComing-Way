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
		event.create(MODID + "in_" + name, "create:sequenced_assembly")
	})
})