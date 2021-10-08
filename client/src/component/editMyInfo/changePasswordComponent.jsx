import React from 'react'

const ChangePasswordComponent = (props) => {
  return (
    <div>
      <div>
        <h3>새로운 비밀번호를 입력하세요.</h3>
        <input />
        <button>확인</button>
      </div>
      <div>
        <h3>비밀번호를 다시 입력해주세요.</h3>
        <input />
        <button>확인</button>
        <button> 변경 완료</button>
      </div>
    </div>
  )
}

export default ChangePasswordComponent
