ServerEvents.tags('block', (event) => {
	let blockTag = [
		// 扳手可拆卸
		['create:wrench_pickup', [
			'new_create:cast_iron_casing',
			'flopper:flopper',
			'#caupona:stew_pot',
			'#caupona:stoves',
			'melter:melter'
		]]
	]
	blockTag.forEach(([tag, block]) => {
		event.add(tag, block)
	})
})