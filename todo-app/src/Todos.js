import React, { useState, useReducer } from 'react';
import './Todos.css';
import Todo from './Todo';


export const ACTIONS ={
    ADD_TODO:'add_todo',
    TOGGLE_TODO:'toggle_todo',
    DELETE_TODO:'delete_todo'
}

function reducer(todos, action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return[...todos, newTodo(action.payload.name)]
        
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo=>{
                if(todo.id === action.payload.id){
                    return{...todo, complete: !todo.complete}
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo=> todo.id !== action.payload.id)   
            
        default:
           return todos    
    }
       

}

function newTodo(name){
    return{id:Date.now(), name:name, complete:false }
}

function Todos() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleChange(e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type:ACTIONS.ADD_TODO, payload:{name:name}})
        setName('')
        
    }
    console.log(todos)



    return (
        <div className="todos">
            <div className='todos__content'>
                <h2>My todo app</h2>
                <div className="todos__forms">
                    <form className="todos__form" onSubmit={handleSubmit} >
                        <input  className="todos__input" value={name} placeholder="Add todo" onChange={handleChange} />
                    </form>

                    <button className='todos__add__btn' onClick={handleSubmit} >
                        Create
                    </button>

                </div>
                <div className="todos__todo" data-simplebar>
                    {todos.map(todo =>{
                        return <Todo Key={todo.id} id={todo.id} todo={todo} dispatch={dispatch} /> 
                    })}
                </div>
 
                
                
                {/* <Todo title="beat the dog"/> */}
                {/* <Todo title="feed the dog"/> */}
                {/* <Todo title="bath the dog"/> */}
                

            </div>
            

            

        </div>
    )
}

export default Todos;
