import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import LandingPage from './Components/LandingPage';

export const loadingUrl = "https://cdn.dribbble.com/users/115601/screenshots/5356365/loading.gif";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' exact element={<LandingPage/>}/>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    </>
  );
}

export default App;
