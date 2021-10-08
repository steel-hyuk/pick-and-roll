import React from 'react'

const ShowInfoComponent = (props) => {
  return (
    <div>
      <div>
        <h3>닉네임</h3>
        <input></input>
      </div>
      <div>
        <h3>자기 소개</h3>
        <textarea></textarea>
      </div>
      <div>
        <div>
          <p>활동 시작일</p>
          <p>2021-07-01</p>
        </div>
        <div>
          <p>이메일</p>
          <p>qwert@abc.com</p>
        </div>
      </div>
    </div>
  )
}

export default ShowInfoComponent