import React, { useState } from 'react'
import TodoBoard from './components/TodoBoard'

interface Todo {
  id: number;
  text: string;
}

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState<Todo[]>([])

  const addItem = () => {
    if (!inputValue.trim()) return
    const newTodo: Todo = { id: Date.now(), text: inputValue }
    setTodoList([...todoList, newTodo])
    setInputValue('')
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
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-2xl shadow-lg w-96">
        <div className="flex w-full gap-2">
          <input
            value={inputValue}
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="할 일을 입력하세요..."
          />
          <button
            onClick={addItem}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
          >
            추가
          </button>
        </div>

        <TodoBoard
          todoList={todoList}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      </div>
    </div>
  )
}

export default App
