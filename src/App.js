import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Parent from "./Components/Body/Parent";

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
        <Route path='/' exact element={<Parent/>}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
