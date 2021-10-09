import React, { useContext } from 'react'

import AddListContent, {
  AddListingredients,
} from '../component/write/addListComponent'
import DropDownTime, {
  DropDownCategory,
} from '../component/write/dropDownComponent'
import ContentImgComponent from '../component/ImgEncoding/contentImgsComponent'
import MainImgComponent from '../component/ImgEncoding/mainImgComponent'

import { UserContext } from '../context/userContext'

const Write = (props) => {
  const { userInfo, setUserInfo } = useContext(UserContext)

  return (
    <>
      <h2>write</h2>
      <AddListContent />
      <AddListingredients />
      <DropDownTime />
      <DropDownCategory />
      <ContentImgComponent />
      <MainImgComponent />
    </>
  )
}
export default Write
