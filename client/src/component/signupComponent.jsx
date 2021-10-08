import React from 'react'

const SignupComponent = () => {
  
  return (
    <div>
      <div>
        <div>Pick & Roll</div>
        <div>
          {' '}
          회원가입 후 맛과 간편성 모두 잡은 레시피들을 확인해보세요{' '}
        </div>
      </div>
      <div>
        <div>
          <div>
            이메일
            <span className='require'>*</span>
          </div>
          <input
            type='text'
            placeholder='이메일을 입력해주세요'
            onChange={(e) => {
              // setEmail(e.target.value)
            }}
            // ref={_email}
            // onBlur={checkEmail}
          />
          <div>messageEmail</div>
        </div>
        <div>
          <div>
            비밀번호
            <span className='require'>*</span>
          </div>
          <input
            type='password'
            placeholder='비밀번호를 입력해주세요'
            onChange={(e) => {
              // setPassword(e.target.value)
            }}
            // onBlur={checkPassWord}
            // ref={_pw}
          />
          <div>messagePassword</div>
        </div>
        <div>
          <div>
            비밀번호 확인
            <span className='require'>*</span>
          </div>
          <input
            type='password'
            placeholder='비밀번호를 다시 입력해주세요'
            onChange={(e) => {
              // setPwCheck(e.target.value)
            }}
            // ref={_pwChk}
            // onBlur={doubleCheckPassWord}
          />
          <div>messagePwCheck</div>
        </div>
        <div>
          <div>
            닉네임
            <span className='require'>*</span>
          </div>
          <input
            type='text'
            placeholder='닉네임을 입력해주세요'
            onChange={(e) => {
              // setNickname(e.target.value)
            }}
            // ref={_nick}
            // onBlur={checkNickname}
          />
          <div>messageNickname</div>
        </div>
        <div>
          <div>
            자기소개
            <span className='require'>*</span>
          </div>
          <textarea
            placeholder='ex) 김치찌개와 계란말이를 좋아합니다'
          ></textarea>
          <div>messageDescription</div>
        </div>
        <div>
          <button>회원가입</button>
        </div>
      </div>
    </div>
  )
}

export default SignupComponent
