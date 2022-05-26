import React from 'react'
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/system';

const MyStyledButton = styled(Button)({
});
export default function Todo({ todo, onCheckBtnClick }) {
    return (
        <MyStyledButton variant="contained" size="medium" fullWidth={true} endIcon={<span className='check-icon'> <CheckIcon /></span>} onClick={() => onCheckBtnClick(todo.id)}>
            {todo.name} {todo.isCompleted === true ? 'Completed' : 'Doing'}
        </MyStyledButton>

    )
}