import React from 'react'
import Box from '@mui/material/Box';
import Todo from './Todo';

export default function TodoList({ todoList, onCheckBtnClick }) {
    return (
        <><Box sx={{ '& button': { m: 1 } }}>
            {
                todoList.map((todo) => <Todo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick} />)
            }
        </Box></>
    )
}