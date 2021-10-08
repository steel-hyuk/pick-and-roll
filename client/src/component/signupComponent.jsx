import React from 'react'
import styled from 'styled-components'

const SignupComponent = () => {
  return (
    <Wrapper>
      <TitleArea>
        <Title>Pick & Roll</Title>
        <MainText>
          회원가입 후 맛과 간편성 모두 잡은 레시피들을 확인해보세요
        </MainText>
      </TitleArea>
      <Form>
        <FormGroup>
          <Labal>
            이메일
            <span className="require">*</span>
          </Labal>
          <Input type="text" placeholder="이메일을 입력해주세요" />
          <CheckText></CheckText>
        </FormGroup>
        <FormGroup>
          <Labal>
            비밀번호
            <span className="require">*</span>
          </Labal>
          <Input type="password" placeholder="비밀번호를 입력해주세요" />
          <CheckText></CheckText>
        </FormGroup>
        <FormGroup>
          <Labal>
            비밀번호 확인
            <span className="require">*</span>
          </Labal>
          <Input type="password" placeholder="비밀번호를 다시 입력해주세요" />
          <CheckText></CheckText>
        </FormGroup>
        <FormGroup>
          <Labal>
            닉네임
            <span className="require">*</span>
          </Labal>
          <Input type="text" placeholder="닉네임을 입력해주세요" />
          <CheckText></CheckText>
        </FormGroup>
        <FormGroup>
          <Labal>
            자기소개
            <span className="require">*</span>
          </Labal>
          <Textarea placeholder="ex) 김치찌개와 계란말이를 좋아합니다"></Textarea>
          <CheckText></CheckText>
        </FormGroup>
        <FormGroup>
          <SignupBtn>회원가입</SignupBtn>
        </FormGroup>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  align-items: center;
  text-align: center;
`

const TitleArea = styled.div`
  width: 360px;
  margin: 50px 0px 30px 0px;
  font-size: 30px;
`

const Title = styled.div`
  width: 360px;
  height: 42px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: rgb(77, 77, 77);
`

const MainText = styled.div`
  text-align: center;
  font-size: 12px;
  margin-left: 5px;
  margin-top: 10px;
  color: rgb(255, 162, 0);
`

const Form = styled.div`
  width: 500px;
  height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0px;
`

const FormGroup = styled.div`
  margin-top: 15px;
  text-align: center;
`

const CheckText = styled.div`
  height: 3px;
  text-align: left;
  font-size: 11px;
  margin-left: 5px;
  margin-top: 3px;
  color: rgb(255, 162, 0);
`

const Labal = styled.div`
  text-align: left;
  margin-left: 4px;
  margin-bottom: 3px;
  .require {
    color: rgb(255, 162, 0);
    margin-left: 4px;
    line-height: 2;
  }
`

const Input = styled.input`
  width: 300px;
  height: 15px;
  align-items: center;
  padding: 15px 50px 10px 10px;
  border-radius: 8px;
  border: solid 2px #d2d2d2;
  :focus {
    border: solid 2px rgb(243, 200, 18);
    outline: none;
  }
  ::placeholder {
    font-size: 15px;
    text-align: left;
    line-height: 1.5;
    color: #b5b5b5;
  }
`

const Textarea = styled.textarea`
  width: 341px;
  height: 70px;
  align-items: center;
  padding: 5px 10px 10px 10px;
  border-radius: 8px;
  border: solid 2px #d2d2d2;
  resize: none;
  :focus {
    border: solid 2px rgb(243, 200, 18);
    outline: none;
  }
  ::placeholder {
    font-size: 13px;
    text-align: left;
    line-height: 1.5;
    color: #b5b5b5;
  }
`

const SignupBtn = styled.button`
  width: 366px;
  text-align: center;
  align-items: center;
  padding: 0px 0px;
  background-color: rgb(243, 200, 18);
  height: 50px;
  border: 1px solid transparent;
  border-radius: 13px;
  color: white;
  font-size: 17px;
`

export default SignupComponent
