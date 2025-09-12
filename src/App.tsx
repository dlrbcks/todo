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
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
      <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-2xl shadow-2xl w-96">
        {/* 입력창 + 버튼 */}
        <div className="flex w-full gap-2">
          <input
            value={inputValue}
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow border border-gray-300 rounded-xl px-4 py-2 shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 
                       placeholder-gray-400 transition-all duration-200"
            placeholder="✏️ 오늘의 할 일을 입력하세요..."
          />
          <button
            onClick={addItem}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 
                       text-white font-semibold px-5 py-2 rounded-xl shadow-md 
                       hover:from-blue-600 hover:to-indigo-600 
                       active:scale-95 transition-transform duration-150"
          >
            ➕ 추가
          </button>
        </div>

        {/* 할 일 목록 */}
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
