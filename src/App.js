import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Product from "./Components/Product"
import User from "./Components/User"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;


