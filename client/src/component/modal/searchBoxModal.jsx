import React, { useContext, useState } from 'react'

import { SearchValueContext } from '../../Context/searchValueContext'
import { AuthContext } from '../../Context/authContext'

const SearchBoxModal = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const { isValue, setIsValue } = useContext(SearchValueContext)
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <div>
        <div></div>
        <div aria-hidden="true">
          <div className="modal-dialog">
            <button aria-hidden="true">&times;</button>
            <div className="modal-body">
              <input
                type="text"
                placeholder="검색"
                name="u"
                size="20"
                value={inputValue}
              />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBoxModal
