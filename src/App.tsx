import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/style.css'
import Contact from './Pages/Contact';
import Detail from './Pages/Detail';
import Home from './Pages/Home';
import New from './Pages/New';
import NotFound from './Pages/NotFound';
const defaultTheme = createTheme();
function App() {


  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/new" element={<New />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
