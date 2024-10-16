ServerEvents.recipes((event) => {
	let { botanypots } = event.recipes

	botanypots.crop(
		"new_create:brain_sapling",
		"oak_leaves",
		{ block: "edenring:brain_tree_log" },
		[
			Item.of("edenring:brain_tree_log").withChance(1),
			Item.of("edenring:brain_tree_block_copper").withChance(0.25),
			Item.of("edenring:brain_tree_block_iron").withChance(0.25),
			Item.of("edenring:brain_tree_block_gold").withChance(0.25),
			Item.of("new_create:brain_sapling").withChance(0.05)
		],
		60,
		1
	)

	botanypots.soil(
		"new_create:nutrient_solution_dirt",
		{ block: "new_create:nutrient_solution_dirt" },
		["oak_leaves"],
		100,
		0.5
	)
})

/* Example
ServerEvents.recipes((event) => {
	// 注册一个植物园种植罐的作物配方
	event.recipes.botanypots.crop(
		"minecraft:candle", // 作物种子物品
		["oak_leaves"], // 此作物可以种植的类别
		{ block: "minecraft:candle" }, // 显示的方块
		[
			Item.of("minecraft:candle") // 掉落物品
				.withChance(100) // 此条目的权重与其他条目相比
				.withRolls(1, 2) // 此战利品被选择的时间（最小，最大）
			// 例如，当被选择时，这将给出1到2个蜡烛
		],
		10, // 生长周期
		1, // 可选，生长修饰符 - 在大多数情况下，这可以设置为1
	)

	// 注册一个植物园种植罐的土壤配方
	event.recipes.botanypots.soil(
		"minecraft:oak_leaves", // 此土壤附着到的物品
		{ block: "minecraft:oak_leaves" }, // 显示的方块
		["oak_leaves"], // 此土壤提供的类别
		100, // 此土壤将提供生长周期，设置为-1表示没有修饰符
		0.5 // 可选，生长修饰符，例如：0.5表示所有作物的生长时间减半
	)

	// 注册一个植物园种植罐的肥料配方
	event.recipes.botanypots.fertilizer(
		"minecraft:iron_ingot", // 肥料物品
		10, // 最小生长周期应用
		20 // 最大生长周期应用
		// 例如：将随机给作物提供10到20个生长周期
	)
})

// 每次作物生长时触发
BotanyPotsEvents.onCropGrow(event => {
	// event.random : 与事件关联的随机对象
	// event.crop : 描述生长作物的作物对象
	// event.originalDrops : 此作物掉落的物品数组
	// event.drops : 可写的数组，用于更改作物的掉落物
	console.log([event.random, event.crop, event.originalDrops, event.drops].join(","))
})
*/