import React from 'react'
import styled from 'styled-components'
import Dropdown from './dropdown'

const Category = ({ selected, setSelected, setSelectCateogry }) => {
  return (
    <Wrap>
      <Dropdown selected={selected} setSelected={setSelected} />
      <ListWrap>
        <List onClick={() => {setSelectCateogry('korean')}}>Korean</List>
        <List onClick={() => {setSelectCateogry('Western')}}>Western</List>
        <List onClick={() => {setSelectCateogry('Chinese')}}>Chinese</List>
        <List onClick={() => {setSelectCateogry('Japanese')}}>Japanese</List>
        <List onClick={() => {setSelectCateogry('etc')}}>etc</List>
      </ListWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  border-bottom: solid 1px rgb(243, 200, 18);
`

const ListWrap = styled.div`
  display: flex;
`

const List = styled.li`
  font-size: 20px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  border-bottom: 10px;
  :hover {
    border-bottom: solid 6px rgb(243, 200, 18);
  }
`

export default Category
