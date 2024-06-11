CreateHeatJS.registerHeatEvent((event) => {
	event.registerHeatLevel('melt', 1, 0xFFA500)
	event.registerHeatSource('melt', 'new_create:heat_coal_block')
})