import React from 'react'
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/system';
import moment from 'moment';
const MyStyledButton = styled(Button)({
});
export default function Todo({ todo, onCheckBtnClick }) {
    return (
        <MyStyledButton variant="contained" size="medium" fullWidth={true} onClick={() => onCheckBtnClick(todo.id)}
            sx={{ textDecoration: todo.isCompleted === true ? 'line-through' : 'none', border: '1px dashed grey' }}>
            {todo.name} - {todo.isCompleted === true ? 'Completed' : 'Doing'} - Created_At: {moment(todo.createdAt).format('YYYY-MM-DD HH:mm:ss')}
        </MyStyledButton>

    )
}