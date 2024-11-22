import './App.css';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import Footer from "./components/Footer";
import Home from "./components/Home/Home"
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {


  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  
  )
}

export default App
