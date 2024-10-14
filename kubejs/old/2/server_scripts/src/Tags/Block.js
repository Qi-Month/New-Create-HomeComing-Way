ServerEvents.tags("block", (event) => {
	// 扳手可拆卸
	event.add("create:wrench_pickup", [
		"new_create:cast_iron_casing",
		"flopper:flopper",
		"#caupona:stew_pot",
		"#caupona:stoves",
		"melter:melter"
	])

	// 木镐
	event.add("minecraft:needs_wooden_tool", [
		"flopper:flopper"
	])
	event.add("minecraft:mineable/pickaxe", [
		"flopper:flopper"
	])

	// 无限燃烧
	event.add("minecraft:infiniburn_end", [
		"new_create:heat_coal_block"
	])
	event.add("minecraft:infiniburn_overworld", [
		"new_create:heat_coal_block"
	])
	event.add("minecraft:infiniburn_nether", [
		"new_create:heat_coal_block"
	])
})