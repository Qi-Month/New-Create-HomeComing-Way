const $PatchouliAPI = Java.loadClass('vazkii.patchouli.api.PatchouliAPI')
const $Character = Java.loadClass('java.lang.Character')

// 多方块所需要的方块
// 使用global变量方便游戏里面的调试修改,以下同理
global.blastFurnaceBlock = {
	B: 'minecraft:stone_bricks',
	Y: 'minecraft:lava',
	Z: 'minecraft:blast_furnace'
}
// 声明结构
// 创建结构,注意字符0是必须的，0是中心方块的标识符
global.blastFurnace = () =>
	$PatchouliAPI.get().makeMultiblock([
		['___', '___', '___'],
		['___', 'OO_', '___'],
		['OO_', '0YO', 'OO_'],
	],
		new $Character('_'),
		$PatchouliAPI.get().anyMatcher(),
		new $Character('O'),
		global.blastFurnaceBlock.B,
		new $Character('Y'),
		global.blastFurnaceBlock.Y,
		new $Character('0'),
		global.blastFurnaceBlock.Z,
	)
global.MULTIBLOCK = {
	blastFurnace: global.blastFurnace
}
// 注册结构
StartupEvents.postInit((event) => {
	$PatchouliAPI.get().registerMultiblock(
		ResourceLocation('new_create:blast_furnace'),
		global.blastFurnace()
	)
})