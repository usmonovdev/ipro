import React, { useEffect } from 'react'
import { Home, Projects, Social } from './index'

const Main = () => {

  useEffect(() => {
    document.title = "iPro"
  }, [document.title])

  return (
    <div>
      <Home/>
      <Social />
      <Projects />
    </div>
  )
}

export default Main