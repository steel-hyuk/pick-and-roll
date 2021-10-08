import React from 'react'

const DropDownTime = () => {
  return (
    <div>
      <input type="text" placeholder="조리시간" />
      <select>
        <option value="30분">30분</option>
        <option value="1시간">1시간</option>
        <option value="2시간">2시간</option>
        <option value="3시간 이상">3시간 이상</option>
      </select>
    </div>
  )
}

export const DropDownCategory = () => {
  return (
    <div>
      <input type="text" placeholder="카테고리" />
      <select>
        <option value="한식">한식</option>
        <option value="중식">중식</option>
        <option value="일식">일식</option>
        <option value="양식">양식</option>
        <option value="기타">기타</option>
      </select>
    </div>
  )
}

export default DropDownTime
