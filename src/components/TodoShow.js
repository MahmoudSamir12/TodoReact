import React, { useState } from 'react'
import TodoEdit from './TodoEdit';
import deleteIcon from  '../delete.svg';
import editIcon from '../edit.svg';

const TodoShow = ({todo, removeTodo, changeTodo}) => {

    const [showEdit, setShowEdit] = useState(false);
    
    const handleDelete = (e) => {
        removeTodo(todo.id);
    };

    const handleEdit = (e) => {
        setShowEdit(true);
    };

    const handleDoubleClick = (e) => {
        changeTodo(todo.id, todo.title, !todo.completed);
    };

    const handleSubmit = (id, title) => {
        changeTodo(id, title);
        setShowEdit(false);
    };

    if(showEdit){
        return(
            <li className='todo'>
                <TodoEdit todo={todo} onSubmit={handleSubmit} />
            </li>
        );
    }

    return (
        <li className='todo' onDoubleClick={handleDoubleClick}>
            <p className={todo.completed && 'completed'} > {todo.title}</p>

            <div className='actions'>
                <button onClick={handleDelete}>
                    <img src={deleteIcon} alt="Delete" />
                </button>
                <button onClick={handleEdit}>
                    <img src={editIcon} alt='Edit' />
                </button>
            </div>
        </li>
    );
}

export default TodoShow