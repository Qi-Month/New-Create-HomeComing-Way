// let temp = []
let moltenRegisters = [
	// 钛
	["titanium", 0xD3D3D3, "iron"]
]
moltenRegisters.forEach(([name, color, level]) => {
	StartupEvents.registry("item", (event) => {
		// 锭
		// temp.push(`${global.namespace + name}_ingot`)
		event.create(`${global.namespace + name}_ingot`)
			.texture(`${global.namespace}item/materials/ingot`)
			.color(color)
			.tag("forge:ingots")
			.tag(`forge:ingots/${name}`)

		// 板
		// temp.push(`${global.namespace + name}_sheet`)
		event.create(`${global.namespace + name}_sheet`)
			.texture(`${global.namespace}item/materials/sheet`)
			.color(color)
			.tag("forge:plates")
			.tag(`forge:plates/${name}`)

		// 矿
		// temp.push(`${global.namespace}raw_${name}`)
		event.create(`${global.namespace}raw_${name}`)
			.texture(`${global.namespace}item/materials/raw_ore`)
			.color(color)
			.tag("forge:raw_materials")
			.tag(`forge:raw_materials/${name}`)
	})

	StartupEvents.registry("block", (event) => {
		let pickaxe = "minecraft:mineable/pickaxe"

		// 挖掘等级
		let miningLevel = {
			wooden: "minecraft:needs_wooden_tool",
			stone: "minecraft:needs_stone_tool",
			iron: "minecraft:needs_iron_tool",
			gold: "minecraft:needs_gold_tool",
			diamond: "minecraft:needs_diamond_tool",
			nether: "forge:needs_netherite_tool"
		}

		// 浅层
		// temp.push(`${global.namespace + name}_ore`)
		event.create(`${global.namespace + name}_ore`)
			.model(`${global.namespace}block/ore/ore`)
			.color(0, color)
			.renderType("cutout")
			.soundType(SoundType.STONE)
			.hardness(3)
			.resistance(3)
			.tag("forge:ores")
			.tag(`forge:ores/${name}`)
			.tag("forge:ore_rates/dense")
			.tagBlock(pickaxe)
			.tagBlock(miningLevel[level])
			.requiresTool(true)
			.item((event) => {
				event.color(0, color)
			})

		// 深层
		// temp.push(`${global.namespace}deepslate_${name}_ore`)
		event.create(`${global.namespace}deepslate_${name}_ore`)
			.model(`${global.namespace}block/ore/deepslate_ore`)
			.color(0, color)
			.renderType("cutout")
			.soundType(SoundType.DEEPSLATE)
			.hardness(4.5)
			.resistance(4.5)
			.tag("forge:ores")
			.tag(`forge:ores/${name}`)
			.tag("forge:ore_rates/deepslate")
			.tagBlock(pickaxe)
			.tagBlock(miningLevel[level])
			.requiresTool(true)
			.item((event) => {
				event.color(0, color)
			})

		// 块
		// temp.push(`${global.namespace + name}_block`)
		event.create(`${global.namespace + name}_block`)
			.textureAll(`${global.namespace}block/metal/block`)
			.soundType(SoundType.METAL)
			.color(color)
			.hardness(5)
			.resistance(5)
			.tag("forge:storage_blocks")
			.tag(`forge:storage_blocks/${name}`)
			.tagBlock(pickaxe)
			.tagBlock(miningLevel[level])
			.requiresTool(true)
			.item((item) => {
				item.color(color)
			})
	})

	StartupEvents.registry("fluid", (event) => {
		const PATH = "block/fluid/"

		// 熔融金属
		// temp.push(`${global.namespace}molten_${name}_bucket`)
		event.create(`${global.namespace}molten_${name}`)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(`${global.namespace + PATH}flowing`)
			.stillTexture(`${global.namespace + PATH}still`)
			.tag(`forge:molten_${name}`)
			.tag("forge:molten_materials")
	})
})

let alloyRegisters = [
]
alloyRegisters.forEach(([name, color, level]) => {
	StartupEvents.registry("item", (event) => {
		// 锭
		// temp.push(`${global.namespace + name}_ingot`)
		event.create(`${global.namespace + name}_ingot`)
			.texture(`${global.namespace}item/materials/ingot`)
			.color(color)
			.tag("forge:ingots")
			.tag(`forge:ingots/${name}`)

		// 板
		// temp.push(`${global.namespace + name}_sheet`)
		event.create(`${global.namespace + name}_sheet`)
			.texture(`${global.namespace}item/materials/sheet`)
			.color(color)
			.tag("forge:plates")
			.tag(`forge:plates/${name}`)
	})

	StartupEvents.registry("block", (event) => {
		let pickaxe = "minecraft:mineable/pickaxe"

		// 挖掘等级
		let miningLevel = {
			wooden: "minecraft:needs_wooden_tool",
			stone: "minecraft:needs_stone_tool",
			iron: "minecraft:needs_iron_tool",
			gold: "minecraft:needs_gold_tool",
			diamond: "minecraft:needs_diamond_tool",
			nether: "forge:needs_netherite_tool"
		}

		// 块
		// temp.push(`${global.namespace + name}_block`)
		event.create(`${global.namespace + name}_block`)
			.textureAll(`${global.namespace}block/metal/block`)
			.soundType(SoundType.METAL)
			.color(color)
			.hardness(5)
			.resistance(5)
			.tag("forge:storage_blocks")
			.tag(`forge:storage_blocks/${name}`)
			.tagBlock(pickaxe)
			.tagBlock(miningLevel[level])
			.requiresTool(true)
			.item((item) => {
				item.color(color)
			})
	})

	StartupEvents.registry("fluid", (event) => {
		const PATH = "block/fluid/"

		// 熔融金属
		// temp.push(`${global.namespace}molten_${name}_bucket`)
		event.create(`${global.namespace}molten_${name}`)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(`${global.namespace + PATH}flowing`)
			.stillTexture(`${global.namespace + PATH}still`)
			.tag(`forge:molten_${name}`)
			.tag("forge:molten_materials")
	})
})

StartupEvents.registry("item", (event) => {
	let ingot = [
		// 重力水晶
		["gravilite", 0x5EBEE7]
	]
	ingot.forEach(([name, color]) => {
		event.create(`${global.namespace + name}_ingot`)
			.color(color)
			.texture(`${global.namespace}item/materials/crystal`)
			.tag("forge:ingots")
			.tag(`forge:ingots/${name}`)
	})

	let stoneDust = [
		// 石头
		["stone", 0x7c7c7c],
		// 深板岩
		["deepslate", 0x646464],
		// 凝灰岩
		["tuff", 0x63655f],
		// 方解石
		["calcite", 0xbdbdbc]
	]
	stoneDust.forEach(([name, color]) => {
		event.create(`${global.namespace + name}_dust`)
			.color(color)
			.texture(`${global.namespace}item/materials/stone_dust`)
			.tag("forge:dusts")
			.tag(`forge:dusts/${name}`)
	})

	// 混合石头粉末
	event.create(`${global.namespace}mixed_stone_dust`)
		.tag("forge:dusts")
		.tag("forge:dusts/mixed_stone_dust")
})

/*
StartupEvents.registry("creative_mode_tab", (event) => {
	event.create(`${global.namespace}metal`, "basic")
		.icon(() => Item.of("new_create:titanium_ingot"))
		.content(() => temp)
		.displayName(Text.translate("itemGroup.new_create.metal"))
})
*/