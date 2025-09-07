import React from "react"
import TodoItem from "./TodoItem"

function TodoBoard(props) {
    const { todoList, deleteItem, editItem } = props

    return (
        <div className="w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-4">📋 Todo List</h1>
            <div className="space-y-2">
                {todoList.map((item) => (
                    <TodoItem 
                      key={item.id} 
                      item={item} 
                      deleteItem={deleteItem} 
                      editItem={editItem}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoBoard
