import React, {useState} from 'react'
import MyInfoComponent from './mypage/myInfoComponent'
import MyFavoriteComponent from './mypage/myFavoriteComponent'
import MyRecipeComponent from './mypage/myRecipeComponent'

const SideMenuComponent = (props) => {
  const [page, setPage] = useState('myInfo')

  const changeFavorite = () => setPage('favorite')
  const changeMyRecipe = () => setPage('myRecipe')
  const changeMyInfo = () => setPage('myInfo')

  return (
    <div>
      <div>
        <div>Menu</div>
        <div className='favorite' onClick = { changeFavorite }>
          즐겨찾기
        </div>
        <div className='myRecipe' onClick = { changeMyRecipe }>
          나의 레시피
        </div>
        <div className='myInfo' onClick = { changeMyInfo }>
          나의 정보
        </div>
      </div>
      <div>
      { (() => {
          switch (page) {
            case 'favorite':
              return <MyFavoriteComponent />
            case 'myInfo':
              return <MyInfoComponent />
            case 'myRecipe':
              return <MyRecipeComponent />
            default:
          }
        })() }
      </div>
    </div>
  )
}

export default SideMenuComponent
