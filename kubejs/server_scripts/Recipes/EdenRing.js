ServerEvents.recipes((event) => {
	let { kubejs, farmersdelight } = event.recipes

	// 重力水晶簇
	farmersdelight.cutting("4x edenring:gravilite_shards", [
		"edenring:gravilite_block"
	], { type: "farmersdelight:tool_action", action: "pickaxe_dig" })
		.id("edenring:gravilite_shards")
})