import Login from './pages/Login';
import Home from './Components/Home/Home'
import Organizations from './Components/Organizations/Organizations'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './assets/index.loginpage.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/test' element={<Navigate to='/home' />} />
        <Route path='/organizations' element={<Organizations />} >
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
