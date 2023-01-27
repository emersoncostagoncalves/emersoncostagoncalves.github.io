import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import Confetti from 'react-confetti'


import { Container } from './styles'
import Header from './components/header/Header'
import ProgressBar from './components/progress-bar/ProgressBar'
import SearchBar from './components/search-bar/SearchBar'
import Tasks from './components/tasks/Tasks'



function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  let [bar, setBar] = useState<number>(0)
  let [tasks, setTasks] = useState<any>([])
  let [filter, setFilter] = useState<string>("todos")
  let [pesquisa, setPesquisa] = useState<string>("")
  let [confete, setConfete] = useState<boolean>(false)
  let [runConte, setRunConfete] = useState<boolean>(false)


  useEffect(() => {
    if (bar === 100) {
      setRunConfete(true)
      setConfete((true))
      setTimeout(() => {
        setConfete(false)
      }, 1000)

    } else { setConfete(false) }

  }, [bar])


  return (

    <Container>
      <Confetti
        width={windowSize.current[0]}
        height={windowSize.current[1]}
        run={runConte}
        recycle={confete}
        confettiSource={{
          w: 10,
          h: 10,
          x: windowSize.current[0] / 2,
          y: windowSize.current[1] / 4,
        }}

      />
      <Header />
      <ProgressBar bar={bar} />
      <SearchBar pesquisa={pesquisa} setPesquisa={setPesquisa} filter={filter} setFilter={setFilter} tasks={tasks} setTasks={setTasks} />
      <Tasks pesquisa={pesquisa} setPesquisa={setPesquisa} filter={filter} setFilter={setFilter} bar={bar} setbar={setBar} tasks={tasks} setTasks={setTasks} />
    </Container>
  )
}

export default App
