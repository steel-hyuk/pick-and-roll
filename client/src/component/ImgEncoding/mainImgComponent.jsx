import React, { useState } from 'react'

const MainImgsComponent = () => {
  return (
    <div>
      <div>
        <div className="label">
          <p>Drag & Drop</p>
        </div>
        <input type="file" name="image" encType="multipart/form-data" />
      </div>
      <div className="preview">
        <p className="title">선택파일 목록</p>
        <div>
          {/* <img src={previewUrl} alt="" /> */}
          <div className="info">
            <p>imgName</p>
          </div>
          <span className="delete"></span>
        </div>
      </div>
    </div>
  )
}

export default MainImgsComponent
