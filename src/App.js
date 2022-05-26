import TodoList from "./component/TodoList";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { useCallback, useState } from "react";
import { v4 } from 'uuid';
function App() {
  const [todoList, setTodoList] = useState([])
  const [textInput, setTextInput] = useState("")

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value)
  }, [])

  const onAddBtnClick = useCallback((e) => {
    // 1
    // setTodoList([{ name: "Item 1" }])
    // 2 
    // setTodoList((prevState) => [])

    setTodoList([...todoList, { id: v4(), name: textInput, isCompleted: false }])
    setTextInput("")
  }, [textInput, todoList])

  const onCheckBtnClick = useCallback((id) => {
    setTodoList(prevState => prevState.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
  }, [])
  return (
    <>
      <h3>List todo</h3>
      <Box
        fullWidth={true}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Fill todo...." variant="outlined" value={textInput} onChange={onTextInputChange} fullWidth={true} InputProps={{
          endAdornment: <InputAdornment position="end"><Button variant="contained" disabled={!textInput} onClick={onAddBtnClick}>
            Add
          </Button>
          </InputAdornment>,
        }} />
      </Box>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} />
    </>
  )
}

export default App;
