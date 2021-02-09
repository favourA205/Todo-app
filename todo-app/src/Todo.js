import React from 'react'
import './Todo.css'
import { ACTIONS } from './Todos'

function Todo({ todo,dispatch }) {
    return (
        <div className="todo">
            <div style={{color : todo.complete ? " rgb(7, 245, 7)" : "#fff"}} className="todo__title">{todo.name}</div>
            <div className="todo__buttons">
                <button className="todo__toggle" onClick= {()=> {dispatch({type:ACTIONS.TOGGLE_TODO, payload:{id:todo.id}})}}>
                    Toggle
                </button>
                <button className="todo__delete"onClick= {()=> {dispatch({type:ACTIONS.DELETE_TODO, payload:{id:todo.id}})}}>
                    Delete
                </button>

            </div>

            

            
        </div>
    )
}

export default Todo;
