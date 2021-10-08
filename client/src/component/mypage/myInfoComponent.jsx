import React, { useContext, useState } from 'react'

import { UserContext } from '../../context/userContext'
import ShowInfoComponent from '../editMyInfo/showInfoComponent'
import EditMyInfoComponent from '../editMyInfo/editMyInfoComponent'
import ChangePasswordComponent from '../editMyInfo/changePasswordComponent'

const MyInfoComponent = (props) => {
  const { userInfo, setUserInfo } = useContext(UserContext)

  const [page, setPage] = useState('showInfo')

  const changeInfo = () => setPage('showInfo')
  const changeEdit = () => setPage('EditInfo')
  const changePw = () => setPage('changePassword')

  return (
    <div>
      <div>
        <h3 onClick={changeInfo}>나의 정보</h3>
      </div>
      <div>
        {(() => {
          switch (page) {
            case 'showInfo':
              return <ShowInfoComponent userInfo={userInfo} />
            case 'EditInfo':
              return <EditMyInfoComponent userInfo={userInfo} />
            case 'changePassword':
              return <ChangePasswordComponent />
            default:
          }
        })()}
        <div>
          <div>
            <div>
              <p onClick={changeEdit}>사용자정보 수정</p>
            </div>
          </div>
          <div>
            <p onClick={changePw}>비밀번호 수정</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyInfoComponent
