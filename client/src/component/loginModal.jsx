import React from 'react'

const LoginModal = (props) => {
  return (
    <div>
      <div>
        <div>
          <h3>Login</h3>
          <div>
            <div>
              <input>email</input>
            </div>
            <div>
              <input>password</input>
            </div>
            <button>Login</button>
            <p>회원가입을 원하시나요?</p>
            <div>Sign Up</div>
            <button>kakao</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
