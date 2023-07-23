import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Search  from './pages/search/Search';
import Details from './pages/detail/Details'

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>    
        <Route path='/details/:id' element={<Details/>}/>  
      </Routes>
    </div>
  );
}

export default App;
