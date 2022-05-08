import { Component } from 'react'
import { REACT_APP_SERVER_HOST } from '../../../app'
import githubImg from '../../../styles/contents/github.webp'
import kakaoImg from '../../../styles/contents/kakaologin2.png'
import naverImg from '../../../styles/contents/naverlogin.png'
class SignIn extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			errorMessage: ''
		}
	}

	handleInputValue = key => e => {
		this.setState({ [key]: e.target.value })
	}
	handleSignIn = () => {
		if (
			!this.state.email.includes('@') ||
			this.state.email.length <= 6 ||
			this.state.password.length < 8
		) {
			return
		}
		let body = {
			email: this.state.email,
			password: this.state.password
		}

		const url = `${REACT_APP_SERVER_HOST}/users/signin`
		fetch(url, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})
			.then(res => res.json())
			.then(body => {
				if (body.status === 500) {
					this.setState({
						errorMessage: '이메일 또는 비밀번호를 확인해주세요.'
					})
				} else {
					this.setState({ errorMessage: '' })
					let userData = body
					localStorage.setItem('currentUser', JSON.stringify(userData))
					this.props.signInModalHandler()
					this.props.signInAndOutHandler(userData)
					window.history.go('/')
				}
			})
			.catch(err => {
				console.log(err)
				this.setState({ errorMessage: '네트워크에 문제가 있습니다.' })
				throw err
			})
	}

	render() {
		return (
			<div>
				<span
					className="signhandle_modal"
					onClick={this.props.signInModalHandler}></span>

				<div className="sign_in_and_out">
					<div className="signin">
						<div className="signin_container">
							<span className="signin_container_item">이메일 로그인</span>
							<form
								className="signin_container_item"
								onSubmit={e => {
									e.preventDefault()
								}}>
								<input
									className="signin_container_item_input"
									type="email"
									placeholder="email"
									onChange={this.handleInputValue('email')}></input>

								<input
									className="signin_container_item_input"
									type="password"
									placeholder="password"
									onChange={this.handleInputValue('password')}></input>

								{!this.state.email.includes('@') ? (
									<div className="signin_container_item_error">
										이메일을 입력해 주세요
									</div>
								) : this.state.password.length < 8 ? (
									<div className="signin_container_item_error">
										비밀번호를 8자 이상 입력하세요
									</div>
								) : (
									<div> {this.state.errorMessage}</div>
								)}
								<button
									className="signin_container_item_input"
									type="submit"
									onClick={this.handleSignIn}>
									로그인
								</button>
							</form>
						</div>
						<div className="signin_social_login">
							<span className="signin_login_content">
								{/* <a
                  className="signin_login_content_github"
                  href={`https://github.com/login/oauth/authorize?client_id=67284f7fd9e4bc6602f7&redirect_uri=${REACT_APP_SERVER_HOST}/users/signin/callback`}
                > */}
								<img
									alt=""
									className="signin_login_content_img"
									src={githubImg}></img>
								{/* </a> */}
							</span>
							<span className="signin_login_content">
								{/* <a
                  className="signin_login_content_a"
                  href={
                    'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +
                    client_id +
                    '&redirect_uri=' +
                    redirectURI +
                    '&state=' +
                    state
                  }
                > */}

								<img
									alt=""
									className="signin_login_content_img"
									src={naverImg}></img>
								{/* </a> */}
							</span>
							<span className="signin_login_content">
								{/* <a
                  className="signin_login_content_kakao"
                  href={`${REACT_APP_SERVER_HOST}/users/signin/kakaologin`}
                > */}
								<img
									alt=""
									className="signin_login_content_img"
									src={kakaoImg}></img>
								{/* </a> */}
							</span>
						</div>
						<button
							className="signin_to_signup"
							onClick={event => {
								this.props.signUpModalHandler()
								this.props.signInModalHandler()
							}}>
							이메일로 가입하기
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default SignIn
