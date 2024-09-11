/**
 * @param { Internal.RecipesEventJS_ } event 
 * @param { InputItem_[] } metal // block, ingot, fluid
 * @param { String } heat // heated, superheated
 * @param { number } time 
 * 
 * Example:
 * metalProductionLine(event, [
 *		block,
 *		ingot,
 *		fluid
 * ], heat, time)
*/

function metalProductionLine(event, metal, heat, time) {
	const { create, kubejs, createmetallurgy } = event.recipes

	create.mixing(Fluid.of(`${metal[2]}`, 810), [
		metal[0]
	]).heatRequirement(heat).processingTime(time).id(`createmetallurgy:melting/${metal[0].split(":")[1]}`)

	create.mixing(Fluid.of(`${metal[2]}`, 90), [
		metal[1]
	]).heatRequirement(heat).processingTime(time).id(`createmetallurgy:melting/${metal[1].split(":")[1]}`)

	createmetallurgy.casting_in_basin(metal[0], [
		Fluid.of(`${metal[2]}`, 810)
	]).processingTime(time).id(`createmetallurgy:casting_in_basin/${metal[0].split(":")[1]}`)

	createmetallurgy.casting_in_table(metal[1], [
		Fluid.of(`${metal[2]}`, 90),
		'createmetallurgy:graphite_ingot_mold'
	]).processingTime(time).id(`createmetallurgy:casting_in_table/${metal[1].split(":")[1]}`)

	kubejs.shapeless(`${metal[0]}`, [
		`9x ${metal[1]}`
	]).id(`createmetallurgy:crafting/${metal[1].split(":")[1]}_2_${metal[0].split(":")[1]}`)

	kubejs.shapeless(`9x ${metal[1]}`, [
		`${metal[0]}`
	]).id(`createmetallurgy:crafting/${metal[0].split(":")[1]}_2_${metal[1].split(":")[1]}`)
}