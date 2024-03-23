import React from "react";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
    return (
        <div className="Todo">
            <p 
                className={ `${ task.completed ? "completed" : "incompleted" }` }
                onClick={ () => toggleComplete( task.id ) }
            >
                { task.task }
            </p>
            <div>
                <i class='bx bxs-edit' onClick={ () => editTodo( task.id )}></i>
                {/* <FontAwesomeIcon className="edit-icon" icon={ faPenToSquare } onClick={ () => editTodo( task.id ) } /> */}
                <i class='bx bx-trash' onClick={ () => deleteTodo( task.id )}></i>
                {/* <FontAwesomeIcon className="delete-icon" icon={ faTrash } onClick={ () => deleteTodo( task.id ) } /> */}
            </div>
        </div>
    );
};