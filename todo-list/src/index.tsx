import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Skeleton from './components/skeleton/Skeleton'
import { useEffect, useState } from "react"

import './index.css'

const AppContainer = () => {

  const [isLoading, setIsloading] = useState<boolean>(false)


 useEffect(
  () => {
    setTimeout(() => {
      setIsloading(true)
    },1000)
  }
 )

  return (
    <React.StrictMode>
     {isLoading ? <App /> : <Skeleton/>} 
      
    </React.StrictMode>
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('szb-app-root'))
