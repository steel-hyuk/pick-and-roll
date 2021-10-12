import React from 'react'
import styled from 'styled-components'
import DropdownStar from '../component/posts/dropdownPosts'

const Posts = () => {

  return (
    <>
      <div>메인 사진</div>
      <div>평균 4.5점</div>
      <div>몇명 참여</div>
      <div>평균 4.2점</div>
      <div>몇명 참여</div>
      <DropdownStar className="taste" color="blue" />
      <button>맛별점주기</button>
      <DropdownStar className="simple" color="red" />
      <button>간편성별점주기</button>
      
      <div>title</div>
      <div>작성자</div>
      <button>즐겨찾기</button>
      <button>수정</button>
      <button>삭제</button>
      <div>
        <div>총 소요시간</div>
        <div>몇 분</div>
      </div>
      <div>카테고리</div> 
      <div>한식</div>
      <div>요리설명</div>
      <div>굉장히 간략한 100자 미만의 요리설명굉장히 간략한 100자 미만의 요리설명굉장히 간략한 100자 미만의 요리설명굉장히 간략한 100자 미만의 요리설명굉장히 간략한 100자 미만의 요리설명굉장히 간략한 100자 미만의 요리설명</div>
      
      <div>재료</div>
      <ul>
        <li>뭐시기</li>
        <li>재료다</li>
      </ul>
      <div>요리 방법</div>
      <ol>
        <li>어느 정도 간략한 길이의 요리 순서 이것보단 좀더 길어야 좋겠지 음으음</li>
        <li>어느 정도 간략한 길이의 요리 순서 이것보단 좀더 길어야 좋겠지 음으음</li>
        <li>어느 정도 간략한 길이의 요리 순서 이것보단 좀더 길어야 좋겠지 음으음</li>
        <li>어느 정도 간략한 길이의 요리 순서 이것보단 좀더 길어야 좋겠지 음으음</li>
        <li>어느 정도 간략한 길이의 요리 순서 이것보단 좀더 길어야 좋겠지 음으음</li>
      </ol>
      
      <ul>
        <li><div>사진1</div></li>
        <li><div>사진2</div></li>
        <li><div>사진3</div></li>
      </ul>
    </>
  )
}

export default Posts