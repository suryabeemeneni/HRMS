import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notifications from "./Components/Notifications/Notifications";
import BackArrow from "./Components/LandingPage/MenuBar/BackArrow";
import Holidays from "./Components/Services/Holidays/Holidays";
import LandingPage from "./Components/LandingPage/LandingPage";

export const loadingUrl =
  "https://cdn.dribbble.com/users/115601/screenshots/5356365/loading.gif";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route
            path="/notifications/"
            exact
            element={
              <>
                <div
                  style={{ maxWidth: "600px", margin: "auto", padding: "5%" }}
                >
                  <BackArrow name={"Notifications"}/>
                  <Notifications />
                </div>
              </>
            }
          />
            <Route path="/holidays/" exact element={
              <>
              <div
                style={{ maxWidth: "600px", margin: "auto", padding: "5%" }}
              >
                <BackArrow name={"Holidays"}/>
                <Holidays />
              </div>
            </>
            } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
