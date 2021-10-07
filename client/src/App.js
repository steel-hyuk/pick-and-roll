import React, { useState, useCallback } from 'react'
import api from './api'

function App() {
  const [text, setText] = useState('')

  const onChangeText = useCallback((event) => {
    setText(event.target.value)
  })

  const submitText = async () => {
    await api.post('/text', {
      text: text
    }, {
      'Content-Type': 'application/json'
    })
    .then((res) => console.log('res : ', res))
  }

  return (
    <div>
      <input type='text' value={text} placeholder='입력' onChange={onChangeText} />
      <button onClick={submitText}>버튼</button>
    </div>
  )
}

export default App