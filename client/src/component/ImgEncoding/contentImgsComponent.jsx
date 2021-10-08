import React, { useState } from 'react'

const ContentImgsComponent = () => {
  const [imgUrl, setImgUrl] = useState([])

  return (
    <div>
      <div>
        <div className="label">
          <p>Drag & Drop</p>
        </div>
        <input
          type="file"
          name="image"
          value=""
          encType="multipart/form-data"
        />
      </div>
      <div className="preview">
        <p className="title">선택파일 목록</p>
        <div>
          <div className="info">
            <img src="" alt="" />
            <p></p>
          </div>
          <span className="delete"></span>
        </div>
      </div>
    </div>
  )
}

export default ContentImgsComponent
