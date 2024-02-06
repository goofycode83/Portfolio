import tempImg from './img/Profile picture.jpg'
import Container from '@mui/material/Container';
import NavBar from './components/NavBar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';


function App() {
  return (
    <div style={{}}>
        <Container fixed >
            <NavBar/>
        </Container>

        <Container fixed className='h1' style={{textAlign: 'center', marginTop: '100px'}}>
        <h1>Welcome to my page !!</h1>
        </Container>

        <Container fixed >
        <img className='pic' src={tempImg} alt='Profile Picture' 
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: '50%',
          width: '200px',
          height: '200px',
          marginTop: '100px'
        }} />
        </Container>
       
        <Container fixed className='desc'>
          <Typography variant='body1'
           style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '8%',
            marginTop: '100px',
            fontFamily: 'sans-serif'
          }}
          >
            <h2>Description</h2>
        <p>My first passion was for trading. During this time, I had to take a basic coding class to learn fundamentals that could help me better understand trading software. This is when I realized how useful coding was and that I had an aptitude for coding. This changed my trajectory on what I wanted to do. I found myself enrolling in a boot camp and being obsessed with the amount of freedom and creative control that coding gave me. I look to further my skills and use what I know to have a positive impact on the world.</p>
        </Typography>
        </Container>
    </div>
  )
}

export default App
