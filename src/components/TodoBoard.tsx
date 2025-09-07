import React from "react"
import TodoItem from "./TodoItem"

function TodoBoard(props) {
    const { todoList, deleteItem, editItem } = props

    return (
        <div>
            <h1>Todo List</h1>
            {todoList.map((item) => (
                <TodoItem 
                  key={item.id} 
                  item={item} 
                  deleteItem={deleteItem} 
                  editItem={editItem}
                />
            ))}
        </div>
    )
}

export default TodoBoard
