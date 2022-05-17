
import Home from './Components/Home/Home'
import Login from './pages/Login'
import Register from './Components/RegisterPage/Register'
import Organizations from './Components/Organizations/Organizations'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Register/>}/>
        <Route path='/organization/home' element={<Home />} />
        <Route path='/organizations' element={<Organizations />} >
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
