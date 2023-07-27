import React, { useEffect } from 'react'
import { Home, Price, Projects, Social } from './index'

const Main = () => {

  useEffect(() => {
    document.title = "iPro"
  }, [document.title])

  return (
    <div>
      <Home/>
      <Social />
      <Projects />
      <Price />
    </div>
  )
}

export default Main