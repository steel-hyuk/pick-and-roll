import React from 'react'

const SideMenuComponent = (props) => {
  const [page, setPage] = useState('myInfo')

  return (
    <div>
      <div>
        <div>Menu</div>
        <div className='favorite' >
          즐겨찾기
        </div>
        <div className='myRecipe' >
          나의 레시피
        </div>
        <div className='myInfo'>
          나의 정보
        </div>
      </div>
      <div>
       컴포넌트 들어오는 부분
      </div>
    </div>
  )
}

export default SideMenuComponent
