import React from 'react'
import Container from '@mui/material/Container';
import NavBar from './NavBar';
import Paper from '@mui/material/Paper';
import PortfolioResume from '../documents/PortfolioResume.pdf'
import {Document, Page, pdfjs} from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.js'


export default function Resume() {
  return (
    <>
    <Container  maxWidth="sm" >
      <NavBar/>
    </Container>

    <Container maxWidth="sm" style={{textAlign: 'center', marginTop: '100px'}}>
      <Paper>
      <Document
      file={PortfolioResume}
      onLoadError={console.error}
      style={{ width: '100vw', height: 'auto'}}>
      <Page pageIndex={0}/>
      </Document>
      </Paper>
    </Container>
    </>
  )
}
