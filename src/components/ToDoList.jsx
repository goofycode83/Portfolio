import NavBar from "./NavBar"
import React from 'react'
import Container from '@mui/material/Container';
import { useState } from "react";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoList = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      todos.push({text: newTodo.trim(), checked: false})
      // setTodos([...todos, {text: newTodo.trim(), checked: false}])
      setNewTodo("")
}
  }

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)

  }

  const handleToggleTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].checked = !newTodos[index].checked
    setTodos(newTodos)
  } 
 
    return (
    <Container style={{backgroundColor: "lightgreen", height: '100%', width: '100%'}}>
      <Container  maxWidth="sm" >
        <NavBar/>
      </Container>

        <Typography variant='h1'style={{display:'flex', alignContent: 'center', justifyContent: "center", textDecoration:'underline', marginTop: "100px"}}>
          To-Do-List
        </Typography>

        <Container style={{
            display:'flex',
            alignItems: 'center', 
            justifyContent: "center",
            marginTop: '50px'}}>
        <TextField  
          variant="outlined" 
          sx={{
            width: '50ch',
          }}
          spacing={2}
          type="text" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
          placeholder="Enter a item" />
          </Container>

          <Container style={{display:'flex',justifyContent: "center", marginTop: '25px'}}>
          <Button  size="large" variant="contained" onClick={handleAddTodo} >Add</Button>
          </Container>
         
          <Container style={{marginTop: '50px'}}>
        <ul style={{display:'flex', justifyContent: "center", alignContent: "center", alignItems: 'center',flexDirection: 'column'}}>
            {todos.map((todo, index) => (
              <li key={index} style={{display: "flex", marginLeft: "8px", whiteSpace: 'pre-line'}}>
                <Checkbox {...todo.checked}  onChange={() => handleToggleTodo(index)} />
                <Typography variant="h4" style={{marginRight: "10px", textDecoration: todo.checked ? "line-through" : "none"}}>{todo.text}</Typography>
                <Button startIcon={<DeleteIcon />} size="small"  variant="contained" style={{marginTop: "5px", marginBottom: "5px"}} onClick={() => handleDeleteTodo(index)}>Delete</Button>
              </li> 
            ))}
          </ul>
          </Container>
    </Container>
    )
}

export default ToDoList