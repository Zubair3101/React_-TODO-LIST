import React, {useState} from 'react'
import Input from "./Components/Input";
import Box from './Components/Box';

function App() {
  const [todos, setToDo] = useState([]);

  const removeToDo = (id) => {
    const newTodos = todos.filter(
       (d,index) => {
          if(index !== id){
            return true;
          }else{
            return false;
          }
       }
    )
    setToDo(newTodos); 
  }

  const addToDoHandler = (item) => {
    setToDo(
      [
        ...todos,
        {
          item,
          time: new Date().toLocaleTimeString()
        }
      ]
    )
  }

  return (
    <div className='bg-blue h-screen p-3 text-white'>
      <div className='rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white text-black'>
        <Input handler={addToDoHandler} />
        <Box data={todos} removeHandler={removeToDo}/> 
      </div>
    </div>
  )
}

export default App

