ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 铜线圈
	kubejs.shaped("immersiveengineering:coil_lv", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "#forge:spools/copper",
		B: "#forge:ingots/iron"
	})

	// 琥珀金线圈
	kubejs.shaped("immersiveengineering:coil_mv", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "#forge:spools/electrum",
		B: "#forge:ingots/iron"
	})
})