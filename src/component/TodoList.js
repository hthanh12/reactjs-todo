import React from 'react'
import Box from '@mui/material/Box';
import Todo from './Todo';
let sortTodoList = (todoList) => {
    return todoList.sort((a, b) => a.isCompleted - b.isCompleted || a.createdAt - b.createdAt)
}
export default function TodoList({ todoList, onCheckBtnClick }) {
    return (
        <><Box sx={{ '& button': { m: 1 } }}>
            {
                sortTodoList(todoList).map((todo) => <Todo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick} />)
            }
        </Box></>
    )
}