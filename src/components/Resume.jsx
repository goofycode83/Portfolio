import React from 'react'
import Container from '@mui/material/Container';
import NavBar from './NavBar';
import Paper from '@mui/material/Paper';
import PortfolioResume from '../documents/PortfolioResume.pdf'
import Button from '@mui/material/Button';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css"
import {Document, Page, pdfjs} from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.js'


export default function Resume() {
  return (
    <>
    <Container  maxWidth="sm" >
      <NavBar/>
    </Container>

    <Container maxWidth='sm' style={{marginTop: '100px', textDecoration: 'underline', maxWidth: 'fit-content',
      marginLeft: 'auto',
      marginRight: 'auto'}}>
      <h1>Resume</h1>
    </Container>

    <Container maxWidth="sm" 
    style={{
      marginTop: '100px',  
      maxWidth: 'fit-content',
      marginLeft: 'auto',
      marginRight: 'auto'
      }}>
      <Paper>
        <Button variant="contained">
        <a href = {PortfolioResume} target = "_blank"  style={{color: 'black'
    }}>links here </a>
        </Button>
      <Document
      file={PortfolioResume}
      onLoadError={console.error}>
      <Page pageIndex={0}  scale={2.0} renderTextLayer={false} renderAnnotationLayer={false}/>
      </Document>
      </Paper>
    </Container>
    </>
  )
}