import axios from 'axios'
import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/흥신소로고.png'
import '../styles/nav.css'
import { REACT_APP_SERVER_HOST } from './constants/index'
import SignHandle from './nav/signhandle'

class Nav extends Component {
	handleSignOut = () => {
		this.props.signInAndOutHandler()
		window.history.go('/')
		localStorage.removeItem('currentUser')

		axios({
			method: 'post',
			url: `${REACT_APP_SERVER_HOST}/users/signout`
		})
			.then(res => {
				return res
			})
			.catch(err => {
				throw err
			})
	}

	render() {
		if (this.props.currentUser.isLogin) {
			return (
				<nav className="nav_container">
					<div className="nav_main">
						<NavLink to="/" className="nav_main_a">
							<img alt="" className="nav_logo" src={logo}></img>
						</NavLink>
					</div>
					<div className="nav_page">
						<NavLink
							to="/recruit"
							activeclassname="active"
							className="nav_page_item">
							모집
						</NavLink>

						<NavLink
							to="/apply"
							activeclassname="active"
							className="nav_page_item">
							찾기
						</NavLink>

						<NavLink
							to="/createTeam"
							activeclassname="active"
							className="nav_page_item">
							팀생성
						</NavLink>

						<NavLink
							className="nav_page_item"
							to="/profile"
							activeclassname="active">
							프로필
						</NavLink>
						<div className="nav_page_div">ㅣ</div>
						<span
							className="nav_page_item"
							onClick={() => {
								this.handleSignOut()
								window.history.go('/')
							}}>
							로그아웃
						</span>
					</div>
				</nav>
			)
		} else {
			return (
				<nav className="nav_container">
					<div className="nav_main">
						<NavLink to="/" className="nav_main_a">
							<img alt="" className="nav_logo" src={logo}></img>
						</NavLink>
					</div>
					<div className="nav_page">
						<NavLink
							to="/recruit"
							activeclassname="active"
							className="nav_page_item">
							모집
						</NavLink>

						<NavLink
							to="/apply"
							activeclassname="active"
							className="nav_page_item">
							찾기
						</NavLink>

						<NavLink
							to="/createTeam"
							activeclassname="active"
							className="nav_page_item">
							<div onClick={this.props.signInModalHandler}>팀생성</div>
						</NavLink>
						<div className="nav_page_div">ㅣ</div>
						<SignHandle
							signInModalHandler={this.props.signInModalHandler}
							isOpenSignIn={this.props.isOpenSignIn}
							currentUser={this.props.currentUser}
							signUpModalHandler={this.props.signUpModalHandler}
							isOpenSignUp={this.props.isOpenSignUp}
							signInAndOutHandler={this.props.signInAndOutHandler}>
							로그인
						</SignHandle>
					</div>
				</nav>
			)
		}
	}
}

export default Nav
