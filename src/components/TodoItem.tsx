import React, { useState } from "react";

function TodoItem({ item, deleteItem, editItem }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(item.text)

  const handleSave = () => {
    editItem(item.id, editValue)
    setIsEditing(false)
  }

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow border">
      {isEditing ? (
        <>
          <input 
            value={editValue} 
            onChange={(e) => setEditValue(e.target.value)} 
            className="border rounded px-2 py-1 flex-grow mr-2"
          />
          <button 
            onClick={handleSave} 
            className="bg-green-500 text-white px-3 py-1 rounded mr-1 hover:bg-green-600"
          >
            저장
          </button>
          <button 
            onClick={() => setIsEditing(false)} 
            className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
          >
            취소
          </button>
        </>
      ) : (
        <>
          <span className="flex-grow">{item.text}</span>
          <button 
            onClick={() => setIsEditing(true)} 
            className="bg-yellow-400 text-white px-3 py-1 rounded mr-1 hover:bg-yellow-500"
          >
            수정
          </button>
          <button 
            onClick={() => deleteItem(item.id)} 
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            삭제
          </button>
        </>
      )}
    </div>
  )
}

export default TodoItem
