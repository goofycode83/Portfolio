import Dashboard from './components/DashBoard';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import Resume from './components/Resume';
import Pokedex from './components/Pokedex';
import Form from './components/Form';



const App = () => {
  return (
      <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard></Dashboard>}></Route>
          <Route path='/Resume' element={<Resume></Resume>}></Route>
          <Route path='/ToDoList' element={<ToDoList></ToDoList>}></Route>
          <Route path='/Pokedex' element={<Pokedex></Pokedex>}></Route>
          <Route path='/Form' element={<Form></Form>}></Route>
        </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
