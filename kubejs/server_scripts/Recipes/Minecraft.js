ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 纸
	kubejs.shapeless("minecraft:paper", [
		"3x new_create:drying_volvox_ball"
	])
})