/*
let $TierSortingRegistry = Java.loadClass("net.minecraftforge.common.TierSortingRegistry")
let $Tiers = Java.loadClass("net.minecraft.world.item.Tiers")
let $ForgeTiers = Java.loadClass("net.minecraftforge.common.ForgeTier")
let $BlockTags = Java.loadClass("net.minecraft.tags.BlockTags")

ItemEvents.toolTierRegistry((event) => {
	event.add("bronze", (tier) => {
		tier.uses = 100
		tier.speed = 2.0
		tier.attackDamageBonus = 1.0
		// 其他值可以随便编辑, 除了"level", 这个必须要是-1才能正常工作
		tier.level = -1
		tier.enchantmentValue = 5.0
		tier.repairIngredient = "#forge:ingots/bronze"
	})
	// "$BlockTags.create()"需要包含您想要用来设置方块材料需求的标签名称, 最好遵循"<modid>:needs_<材料>_tool"这样的命名格式
	// "Ingredient.of()"应该包含您希望在配方中使用的物品或标签

	let BronzeTier = new $ForgeTiers(
		0, 32, 12, 0, 22,
		$BlockTags.create("forge:needs_bronze_tool"),
		() => Ingredient.of("#forge:ingots/bronze")
	)
	$TierSortingRegistry.registerTier(BronzeTier, "bronze", [$Tiers.STONE], [$Tiers.IRON])
})

// 注册工具并调用新等级
StartupEvents.registry("item", (event) => {
	event.create(`${global.namespace}bronze_pickaxe`, "pickaxe")
		.tier("bronze")
})
*/