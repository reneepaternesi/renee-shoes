import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Renée"/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Renée"/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
        </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
