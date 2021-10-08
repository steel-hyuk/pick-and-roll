import React, { useState, useCallback } from 'react'
import axios from 'axios'

function App() {
  const [text, setText] = useState('')

  const onChangeText = useCallback((event) => {
    setText(event.target.value)
  }, [])

  const submitText = async () => {
    await axios.post('pickandroll/link/text', {
      text: text
    }, {
      'Content-Type': 'application/json',
      'authority': ''
    })
    .then((res) => console.log('res : ', res))
  }

  return (
    <div>
      <input type='text' value={text} onChange={onChangeText} />
      <button onClick={submitText}>버튼</button>
      <button>그냥버튼</button>
    </div>
  )
}

export default App