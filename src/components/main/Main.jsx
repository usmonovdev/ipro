import React, { useEffect } from 'react'
import { Home, Price, Projects, Social, Staff } from './index'

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
      <Staff />
    </div>
  )
}

export default Main