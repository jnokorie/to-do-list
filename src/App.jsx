import AddTask from "./components/addTask/AddTask"
import ToDoList from "./components/ToDoList/ToDoList"
import {useState} from "react"

import './App.css'

function App() {

  const [toDo, setToDo] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    const value = e.target[0].value
    setToDo(prev => ([...prev, value]))
    console.log(toDo)

    e.target.reset()
  }

  return (
  <>
  <h2>My To-dos</h2>
  <AddTask handleSubmit={handleSubmit}/>
  <ToDoList taskList={toDo}/>
  </>
  )
}

export default App
