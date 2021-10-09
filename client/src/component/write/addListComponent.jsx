import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

const AddListContent = ({ contents, setContents }) => {
  const addList = () => {
    setContents([...contents, ' '])
  }
  const deletList = () => {
    setContents(contents.slice(0, -1))
  }

  const onChangeContent = useCallback((event, idx) => {
    const newContent = contents
    newContent[idx] = event
    setContents(newContent)
  })

  return (
    <Wrapper>
      {contents.map((content, idx) => (
        <InlineBox key={idx}>
          <div className="number">{idx + 1}.</div>
          <Textarea
            type="text"
            onChange={(e) => {
              onChangeContent(e.target.value, idx)
            }}
          />
        </InlineBox>
      ))}
      <button className="button" onClick={addList}>
        +<br />
        항목추가
      </button>
      <button className="button" onClick={deletList}>
        <span>-</span>
        <br />
        항목제거
      </button>
    </Wrapper>
  )
}
export default AddListContent
//////
export const AddListingredients = ({ ingredients, setIngredients }) => {
  const addList = () => {
    const newIngredients = [
      ...ingredients,
      {
        ingredient: '',
        amount: '',
      },
    ]
    setIngredients(newIngredients)
  }

  const onChangeIngredient = useCallback((value, idx) => {
    let newIngredients = ingredients
    newIngredients[idx].ingredient = value
    setIngredients(newIngredients)
  })

  const onChangeAmount = useCallback((value, idx) => {
    const newIngredients = ingredients.slice()
    newIngredients[idx]['amount'] = value
    setIngredients(newIngredients)
  })

  const deletList = () => {
    setIngredients(ingredients.slice(0, -1))
  }

  return (
    <Wrapper>
      {ingredients.map((obj, idx) => (
        <InlineBox key={idx}>
          <div className="number">{idx + 1}.</div>
          <Textarea
            type="text"
            placeholder="재료"
            onChange={(e) => {
              onChangeIngredient(e.target.value, idx)
            }}
          />
          <Textarea
            type="text"
            placeholder="20g, 2T(티스푼), 1Cup 등"
            onChange={(e) => {
              onChangeAmount(e.target.value, idx)
            }}
          />
        </InlineBox>
      ))}
      <button className="button" onClick={addList}>
        +<br />
        항목추가
      </button>
      <button className="button" onClick={deletList}>
        <span>-</span>
        <br />
        항목제거
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 25%;
  margin-bottom: 30%;
  .button {
    background-color: #b7bbbe;
    color: black;
    margin-right: 20px;
    transition: all 0.6s linear;
    span {
      font-size: 23px;
    }
  }
`

const InlineBox = styled.div`
  display: flex;
  justify-items: flex-start;
  margin-bottom: 20px;
  .number {
    font-size: 20px;
    margin-right: 10px;
  }
`

const Textarea = styled.textarea`
  width: 400px;
  height: 120px;
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
    font-size: 20px;
    text-align: left;
    line-height: 1.5;
    color: #b5b5b5;
  }
`
