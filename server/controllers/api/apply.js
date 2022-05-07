const users = require('../../models').user
const sequelize = require('sequelize')
const Op = sequelize.Op
//지원
module.exports = async (req, res) => {
	const { region, position, user_status } = req.query
	try {
		if (!region && !position && !user_status) {
			await users.findAll().then(output => res.send(output))
		} else if (region && !position && !user_status) {
			await users
				.findAll({ where: { user_region: region } })
				.then(output => res.send(output))
		} else if (!region && position && !user_status) {
			await users
				.findAll({ where: { user_position: [position] } })
				.then(output => res.send(output))
		} else if (!region && !position && user_status) {
			await users
				.findAll({ where: { user_status: user_status } })
				.then(output => res.send(output))
		} else if (region && position && !user_status) {
			await users
				.findAll({
					where: { user_region: region, user_position: position }
				})
				.then(output => res.send(output))
		} else if (!region && position && user_status) {
			await users
				.findAll({
					where: { user_position: position, user_status: user_status }
				})
				.then(output => res.send(output))
		} else if (region && !position && user_status) {
			await users
				.findAll({
					where: { user_region: region, user_status: user_status }
				})
				.then(output => res.send(output))
		} else {
			await users
				.findAll({
					where: {
						user_region: region,
						user_position: position,
						user_status: user_status
					}
				})
				.then(output => res.send(output))
		}
	} catch (error) {
		console.log(error)
	}
}
