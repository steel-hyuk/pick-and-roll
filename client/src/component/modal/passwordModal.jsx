import React from 'react'
import styled from 'styled-components'

const PasswordModal = ({ setPwModal, setPage }) => {
  return (
    <Modal>
      <Left />
      <Form>
        <Wrapper>
          <Pwcheck>현재 비밀번호</Pwcheck>
          <PwcheckC>
            <Input type="password"></Input>
            <CheckBtn
              onClick={() => {
                setPwModal(false)
                setPage('changePassword')
              }}
            >
              확인
            </CheckBtn>
          </PwcheckC>
        </Wrapper>
      </Form>
      <Right />
    </Modal>
  )
}

const Modal = styled.div`
  z-index: 999;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(72, 72, 66, 0.5);
  display: flex;
`

const Left = styled.div`
  width: 35%;
`

const Right = styled.div`
  width: 35%;
`

const Form = styled.div`
  width: auto;
  padding-top: 200px;
  margin-bottom: 180px;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  width: 450px;
  height: 200px;
  background: white;
  border-radius: 30px;
`

const PwcheckC = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px auto;
  align-items: center;
`

const Pwcheck = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 30px;
`

const Input = styled.input`
  width: 200px;
  height: 15px;
  align-items: center;
  padding: 15px 50px 10px 10px;
  border-radius: 8px;
  border: 2px solid #d2d2d2;
  :focus {
    border: 2px solid rgb(243, 200, 18);
    outline: none;
  }
  ::placeholder {
    font-size: 15px;
    text-align: left;
    line-height: 1.5;
    color: #b5b5b5;
  }
`

const CheckBtn = styled.button`
  width: 70px;
  height: 30px;
  text-align: center;
  align-items: center;
  padding: 0;
  margin-top: 15px;
  background-color: rgb(243, 200, 18);
  border: 1px solid transparent;
  border-radius: 13px;
  color: white;
  font-size: 17px;
`

export default PasswordModal
