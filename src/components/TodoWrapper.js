import React, {useState, useEffect} from 'react'
import { TodoForm } from './TodoForm'
// import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
// uuidv4();

export const TodoWrapper = () => {
    const { v4: uuidv4 } = require('uuid');

    const [ todos, setTodos ] = useState( [] );

    useEffect( () => {
        const savedTodos = JSON.parse(localStorage.getItem( 'todos' )) || [];
        setTodos(savedTodos);
    }, [] );

    const addTodo = ( todo ) => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
        const newTodos = [...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const deleteTodo = ( id ) => setTodos( todos.filter(( todo ) => todo.id !== id ));

    const toggleComplete = ( id ) => {
        setTodos(
            todos.map(( todo ) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
        const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const editTodo = ( id ) => {
        setTodos(
            todos.map(( todo ) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = ( task, id ) => {
        setTodos(
            todos.map(( todo ) => 
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
        const newTodos = todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    


    return (
        <div className="TodoWrapper">
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={ addTodo } />
            { todos.map(( todo ) =>
            
                todo.isEditing ? (
                    <EditTodoForm editTodo={ editTask } task={ todo } />
                ) : (
                    <Todo
                        key={ todo.id }
                        task={ todo }
                        deleteTodo={ deleteTodo }
                        editTodo={ editTodo }
                        toggleComplete={ toggleComplete }
                    />
                    
                )
                
            )}
        </div>
    );
};