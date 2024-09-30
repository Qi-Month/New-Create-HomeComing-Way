// Namespace
global.namespace = "new_create:"

// 工具
let NCRTool = {
	balloon_mushroom_sword: global.namespace + "balloon_mushroom_sword",
	balloon_mushroom_pickaxe: global.namespace + "balloon_mushroom_pickaxe",
	balloon_mushroom_axe: global.namespace + "balloon_mushroom_axe",
	balloon_mushroom_shovel: global.namespace + "balloon_mushroom_shovel",
	balloon_mushroom_hoe: global.namespace + "balloon_mushroom_hoe",
}
const CREATIVE_TAB_TOOL_ITEM = Object.assign({}, NCRTool)

// 硬币
let money = {
	zero: global.namespace + "0",
	one: global.namespace + "1",
	two: global.namespace + "2",
	three: global.namespace + "3",
	four: global.namespace + "4",
	fire: global.namespace + "5",
	six: global.namespace + "6",
	seven: global.namespace + "7",
	eight: global.namespace + "8",
	nine: global.namespace + "9",
	ten: global.namespace + "10",
	twenty: global.namespace + "20",
	fifty: global.namespace + "50",
	oneHundred: global.namespace + "100",
	fireHundred: global.namespace + "500",
	oneThousand: global.namespace + "1000",
	fireThousand: global.namespace + "5000",
	tenThousand: global.namespace + "10000"
}
const CREATIVE_TAB_MONEY_ITEM = Object.assign({}, money)