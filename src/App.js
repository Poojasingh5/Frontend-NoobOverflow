import Login from './pages/Login';
import Home from './Components/Home/Home'
import Organizations from './Components/Organizations/Organizations'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from './Components/Product/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/organization/home' element={<Home />} />
        <Route path='/organizations' element={<Organizations />} >
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
