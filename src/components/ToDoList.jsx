import NavBar from "./NavBar"
import React from 'react'
import Container from '@mui/material/Container';

const ToDoList = () => {
    return (
    <>
        <Container  maxWidth="sm" >
          <NavBar/>
        </Container>
        
    <div style={{textAlign: 'center'}}>ToDoList</div>
    </>
    )
}

export default ToDoList