const ModID = 'new_create:'
ItemEvents.armorTierRegistry(e => {
	e.add(ModID + 'radiant', armor => {
		armor.durabilityMultiplier = 70 // 耐久系数,具体得上wiki看公式
		armor.slotProtections = [6, 8, 10, 6] // 护甲值,分别对应[鞋子 裤腿 胸甲 头盔]
		armor.toughness = 4  // 韧性
		armor.knockbackResistance = 0.6  // 防击退,钻石0.3,同时代表着每件各0.3(30%)
		armor.enchantmentValue = 12  // 附魔等级
		armor.repairIngredient = '#forge:ingots/refined_radiance'  // 修复材料(填写#Tag)
		armor.equipSound = 'minecraft:item.armor.equip_diamond'  // 穿戴音效
	})
})
// 物品贴图照常放在item
// 身上的贴图要放在assets/new_create/textures/models/armor
// .tier()要在前面跟上ModID
StartupEvents.registry('item', e => {
	let Item = (Name, Type, Rarity, Tire, Glow) => {
		e.create(ModID + Name, Type)
			.tag(ModID + 'items')
			.tag('forge:armor')
			.tag(ModID + 'armor')
			.rarity(Rarity)
			.tier(ModID + Tire)
			.glow(Glow)
	}
	// 光辉套
	Item('radiant_helmet', 'helmet', 'epic', 'radiant', true)
	Item('radiant_chestplate', 'chestplate', 'epic', 'radiant', true)
	Item('radiant_leggings', 'leggings', 'epic', 'radiant', true)
	Item('radiant_boots', 'boots', 'epic', 'radiant', true)
})