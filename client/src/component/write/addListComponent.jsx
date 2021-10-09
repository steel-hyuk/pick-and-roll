import React from 'react'

const AddListContent = () => {
  return (
    <div>
      <div>
        <div className="number"></div>
        <textarea type="text" onChange={(e) => {}} />
      </div>
      <button className="button">
        +<br />
        항목추가
      </button>
      <button className="button">
        <span>-</span>
        <br />
        항목제거
      </button>
    </div>
  )
}
export default AddListContent
//////
export const AddListingredients = () => {
  return (
    <div>
      <div>
        <div className="number"></div>
        <textarea type="text" placeholder="재료" onChange={(e) => {}} />
        <textarea
          type="text"
          placeholder="20g, 2T(티스푼), 1Cup 등"
          onChange={(e) => {}}
        />
      </div>
      <button className="button">
        +<br />
        항목추가
      </button>
      <button className="button">
        <span>-</span>
        <br />
        항목제거
      </button>
    </div>
  )
}
