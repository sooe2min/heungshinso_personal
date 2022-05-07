import React from 'react'

const Article = props => (
	<>
		{props.team ? (
			<>
				<div className="recruit_card">
					<img src={props.team.img} className="recruit_card_img"></img>
					<div className="recruit_card_nav">
						<div className="recruit_card_title">
							<div>{props.team.title}</div>
						</div>
						<div className="recruit_card_info">
							<dl>
								<dt>user</dt>
								<dd>: {props.team.username}</dd>
								<dt>position</dt>
								<dd>: {props.team.team_position}</dd>
								<dt>region</dt>
								<dd>: {props.team.team_region}</dd>
								<dt>date</dt>
								<dd className="date">
									:{' '}
									{props.team.createdAt
										? props.team.createdAt.split('T')[0]
										: ''}
								</dd>
							</dl>
						</div>
					</div>
				</div>
			</>
		) : (
			<>
				<div
					className="apply_card"
					onClick={() => props.modalOn(props.user)}>
					<img src={props.user.url} className="apply_card_img"></img>
					<span className="apply_card_info">
						<dl>
							<dt>user</dt>
							<dd>: {props.user.username}</dd>
							<dt>position</dt>
							<dd>: {props.user.user_position}</dd>
							<dt>region</dt>
							<dd>: {props.user.user_region}</dd>
							<dt>status</dt>
							<dd>: {props.user.user_status}</dd>
						</dl>
					</span>
					<div className="apply_card_desc">{props.user.description}</div>
				</div>
			</>
		)}
	</>
)

export default Article
