import NavBar from "./NavBar"
import React from 'react'
import Container from '@mui/material/Container';

const Pokedex = () => {
    return (
    <>
    <Container  maxWidth="sm" >
          <NavBar/>
        </Container>
    <div style={{textAlign: 'center'}}>Pokedex</div>
    </>
    )}

    export default Pokedex;