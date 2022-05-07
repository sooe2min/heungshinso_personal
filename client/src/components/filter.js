import React from 'react'

class Filter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			filter_check: false
		}
	}

	filterOn(e) {
		this.setState({ [e.target.name]: e.target.value })
		this.setState({ filter_check: !this.state.filter_check })
	}

	filterOff() {}

	render() {
		return (
			<>
				<div className="filter">
					<span className="ft_ic"></span>
					<span className="ft_list">
						지역
						<span className="ft_arrow_down_ic"></span>
						<div className="ft_region">
							<ul
								className="ft_ul"
								onClick={e => this.props.addQuery(e, 'region')}>
								<li>서울특별시</li>
								<li>부산광역시</li>
								<li>인천광역시</li>
								<li>대구광역시</li>
								<li>광주광역시</li>
								<li>대전광역시</li>
								<li>울산광역시</li>
								<li>세종시</li>
								<li>경기도</li>
								<li>강원도</li>
								<li>충청북도</li>
								<li>충청남도</li>
								<li>경상북도</li>
								<li>경상남도</li>
								<li>전라북도</li>
								<li>전라남도</li>
								<li>제주도</li>
							</ul>
						</div>
					</span>
					<span className="ft_list">
						직무
						<span className="ft_arrow_down_ic"></span>
						{this.props.team ? (
							<ul
								className="ft_ul"
								onClick={e => this.props.addQuery(e, 'position')}>
								<li onClick={this.filterOn.bind(this)}>Front-End</li>
								<li onClick={this.filterOn.bind(this)}>Back-End</li>
								<li onClick={this.filterOn.bind(this)}>Full-Stack</li>
								<li onClick={this.filterOn.bind(this)}>Designer</li>
							</ul>
						) : (
							<ul
								className="ft_ul"
								onClick={e => this.props.addQuery(e, 'position')}>
								<li onClick={this.filterOn.bind(this)}>Planner</li>
								<li onClick={this.filterOn.bind(this)}>Designer</li>
								<li onClick={this.filterOn.bind(this)}>Developer</li>
								<li onClick={e => this.filterOn.bind(this)}>ETC</li>
							</ul>
						)}
					</span>

					<span
						className={
							this.props.team ? 'team_state_filter_close' : 'ft_list'
						}>
						상태
						<span className="ft_arrow_down_ic"></span>
						<ul
							className="ft_ul"
							onClick={e => {
								this.props.addQuery(e, 'state')
							}}>
							<li>구직중</li>
							<li>구인중</li>
							<li>재직중</li>
							<li>이직희망</li>
							<li>사이드잡희망</li>
						</ul>
					</span>

					{/* { 필터 아이템이 몇 개 이상 되면 오버 레이아웃으로 이동 */}
					<span
						className={this.props.ft_items.length > 5 ? null : 'ft_items'}>
						{this.props.ft_items.map((item, index) => (
							<span key={index} className="item">
								{item}
								<span
									className="ft_close"
									onClick={e => this.props.replaceQuery(e, item)}></span>
							</span>
						))}
					</span>
				</div>
			</>
		)
	}
}

export default Filter
