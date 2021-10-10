import React, { useState } from 'react'
import styled from 'styled-components'
import { BsUpload } from 'react-icons/bs'
import { RiDeleteBinFill } from 'react-icons/ri'

const ContentImgsComponent = ({ contentImgs, setContentImgs }) => {
  const [imgUrl, setImgUrl] = useState([])

  const onImgDrop = async (e) => {
    const newFile = e.target.files[0]
    if (newFile) {
      const reader = new FileReader()
      reader.readAsDataURL(newFile)
      reader.onloadend = () => {
        setImgUrl([...imgUrl, reader.result])
      }
      const updatedList = [...contentImgs, newFile]
      setContentImgs(updatedList)
    }
  }

  const imgRemove = (img, index) => {
    const updatedList = [...contentImgs]
    updatedList.splice(contentImgs.indexOf(img), 1)
    setContentImgs(updatedList)
    const updatedUrl = [...imgUrl]
    updatedUrl.splice(index, 1)
    setImgUrl(updatedUrl)
    console.log(img)
  }

  return (
    <Wrapper>
      <ImgInput>
        <div className="label">
          <BsUpload />
          <p>Drag & Drop</p>
        </div>
        <input
          type="file"
          name="image"
          value=""
          encType="multipart/form-data"
          onChange={onImgDrop}
        />
      </ImgInput>
      {contentImgs.length > 0 ? (
        <div className="preview">
          <p className="title">선택파일 목록</p>
          {contentImgs.map((item, index) => (
            <LoadedList key={index}>
              <div className="info">
                <img src={imgUrl[index]} alt="" />
                <p>{item.name}</p>
              </div>
              <span className="delete" onClick={() => imgRemove(item, index)}>
                <RiDeleteBinFill className="icon" />
              </span>
            </LoadedList>
          ))}
        </div>
      ) : null}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-left: 25%;
`

const ImgInput = styled.div`
  position: relative;
  width: 400px;
  height: 200px;
  border: 2px dashed rgb(243, 200, 18);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(247, 245, 238);
  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  :hover {
    opacity: 0.6;
    background-color: rgb(110, 174, 233);
  }
  .label {
    text-align: center;
    color: rgb(67, 70, 73);
    font-weight: 600;
    padding: 10px;
  }
  .preview {
    background-color: rgb(92, 120, 146);
  }
  .preview p {
    font-weight: 500;
  }
  .title {
    margin-bottom: 20px;
  }
`

const LoadedList = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 10px;
  background-color: #857d7d2f;
  padding: 15px;
  border-radius: 20px;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .img {
    width: 30px;
    height: 15px;
    max-width: 20%;
    max-height: 10%;
  }
  .delete {
    background-color: rgb(110, 174, 233);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    margin-top: 7px;
  }
  .delete:hover {
    background-color: rgba(202, 35, 35, 0.685);
    box-shadow: 3px;
    cursor: pointer;
    transition: 0.3s ease;
  }
`

export default ContentImgsComponent
