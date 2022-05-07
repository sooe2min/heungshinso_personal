import { Component } from 'react'
import { Helmet } from 'react-helmet'
import '../../styles/signin.css'
import SignIn from './signhandle/signin'
import SignUp from './signhandle/signup'
class SignHandle extends Component {
	render() {
		return (
			<span className="nav_page_item">
				<Helmet>
					<link
						href="https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap"
						rel="stylesheet"></link>
				</Helmet>
				<span onClick={this.props.signInModalHandler}>로그인</span>
				{this.props.isOpenSignIn ? (
					<SignIn
						signInModalHandler={this.props.signInModalHandler}
						currentUser={this.props.currentUser}
						signUpModalHandler={this.props.signUpModalHandler}
						signInAndOutHandler={this.props.signInAndOutHandler}
					/>
				) : this.props.isOpenSignUp ? (
					<SignUp signUpModalHandler={this.props.signUpModalHandler} />
				) : (
					<div></div>
				)}
			</span>
		)
	}
}

export default SignHandle
