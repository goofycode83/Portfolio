import tempImg from '../img/Profile picture.jpg'
import Container from '@mui/material/Container';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import NavBar from './NavBar';

const Dashboard = () => {
    return ( 
    <div>

        <Container  maxWidth="sm" >
          <NavBar/>
        </Container>

        <Container  maxWidth="sm"  style={{textAlign: 'center', marginTop: '100px'}}>
        <h1>Welcome to my page !!</h1>
        </Container>

        <Container  maxWidth="sm" >
        <img  src={tempImg} alt='Profile Picture' 
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

        <Typography variant='h2'
            style={{ 
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '8%',
            marginTop: '50px',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            textDecoration: 'underline'
            }}>
              Description
            </Typography>
       
        <Container  maxWidth="sm">
          <Typography variant="body1"
           style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '8%',
            marginTop: '30px',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
        My first passion was for trading. During this time, I had to take a basic coding class to learn fundamentals that could help me better understand trading software. This is when I realized how useful coding was and that I had an aptitude for coding. This changed my trajectory on what I wanted to do. I found myself enrolling in a boot camp and being obsessed with the amount of freedom and creative control that coding gave me. I look to further my skills and use what I know to have a positive impact on the world.
        </Typography>
        </Container>
    </div>
    )
}

export default Dashboard;