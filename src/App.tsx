import React, { useState } from 'react'
import './App.css'
import TodoBoard from './components/TodoBoard'

interface Todo {
  id: number;
  text: string;
}

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState<Todo[]>([])

  const addItem = () => {
    if (inputValue.trim() === "") return
    const newTodo: Todo = {
      id: Date.now(),  // 고유 id
      text: inputValue
    }
    setTodoList([...todoList, newTodo])
    setInputValue("") // 입력창 비우기
  }

  const deleteItem = (id: number) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  const editItem = (id: number, newText: string) => {
    setTodoList(todoList.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  return (
    <>
      <input 
        value={inputValue} 
        type="text" 
        onChange={(event)=>setInputValue(event.target.value)}
      />
      <button onClick={addItem}>추가</button>

      <TodoBoard 
        todoList={todoList} 
        deleteItem={deleteItem} 
        editItem={editItem} 
      />
    </>
  )
}

export default App
