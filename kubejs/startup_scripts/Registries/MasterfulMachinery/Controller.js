MMEvents.registerControllers((event) => {
	let controllers = [
		["balloon_mushroom_stress_machine", "气球菇应力机"]
	]
	controllers.forEach(([id, name]) => {
		event.create(id)
			.name(name)
			.type("mm:machine")
	})
})