import React, { useEffect } from 'react'
import { Home, Social } from './index'

const Main = () => {

  useEffect(() => {
    document.title = "iPro"
  }, [document.title])

  return (
    <div>
      <Home/>
      <Social />
    </div>
  )
}

export default Main