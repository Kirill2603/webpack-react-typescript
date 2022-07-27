import React from 'react'
import './app.css'

const App = () => {
  const unused = "something";

  return (
    <div className='component'>
        <span className='a'>Hello Webpack!{unused}</span>
    </div>
  )
}

export default App