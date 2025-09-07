import React, { useState } from "react";

function TodoItem({ item, deleteItem, editItem }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(item.text)

  const handleSave = () => {
    editItem(item.id, editValue)
    setIsEditing(false)
  }

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input 
            value={editValue} 
            onChange={(e) => setEditValue(e.target.value)} 
          />
          <button onClick={handleSave}>저장</button>
          <button onClick={() => setIsEditing(false)}>취소</button>
        </>
      ) : (
        <>
          <span>{item.text}</span>
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button onClick={() => deleteItem(item.id)}>삭제</button>
        </>
      )}
    </div>
  )
}

export default TodoItem
