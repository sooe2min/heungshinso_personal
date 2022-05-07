const teams = require('../../models').team

module.exports = async (req, res) => {
	const { region, position } = req.query
	try {
		if (!region && !position) {
			await teams.findAll().then(output => res.send(output))
		} else if (region && !position) {
			await teams
				.findAll({ where: { team_region: region } })
				.then(output => res.send(output))
		} else if (!region && position) {
			await teams
				.findAll({ where: { team_position: position } })
				.then(output => res.send(output))
		} else {
			await teams
				.findAll({
					where: { team_region: region, team_position: position }
				})
				.then(output => res.send(output))
		}
	} catch (error) {
		console.error()
	}
}
