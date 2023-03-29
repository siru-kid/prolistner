import { Route,Routes,Link } from 'react-router-dom';
import './App.css';
import AddProducts from './Pages/AddProducts';
import NotFound from './Pages/NotFound';
import HomePage from './Pages/HomePage';
function App() {
  return (
  <>

    <nav>
      <ul>
        
        <li>
          <Link to="/AddProduct">
                AddProduct
          </Link>
        </li>
        <li>
          <Link to="/" >
              Home
          </Link>
        </li>
      </ul>
    </nav>
    <h1 className='App'>My React App</h1>
     <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/AddProduct" element={<AddProducts />}/>
      <Route path='*' element={<NotFound />} />
     </Routes>
    </>
  );
}

export default App;
