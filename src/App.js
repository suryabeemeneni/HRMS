import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notifications from "./Components/Notifications/Notifications";
import BackArrow from "./Components/LandingPage/MenuBar/BackArrow";
import Holidays from "./Components/Services/Holidays/Holidays";
import LandingPage from "./Components/LandingPage/LandingPage";
import EditProfile from "./Components/Profile/EditProfile";
// import Preloader from "./Preloader";
// import { useEffect, useState } from "react";

export const loadingUrl =
  "https://cdn.dribbble.com/users/115601/screenshots/5356365/loading.gif";
  

function App() {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 3500);

  //   return () => clearTimeout(timeout);
  // }, []);


  return (
    <>
     
      <BrowserRouter>
        {/* {loading ? <Preloader /> : */}
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
            <Route path="/editProfile/" exact element={
              <>
              <form
                style={{ maxWidth: "600px", margin: "auto", padding: "5%" }}
              >
                <BackArrow name={"Edit Profile"}/>
                <EditProfile />
              </form>
            </>
            } />
        </Routes>
{/* } */}
      </BrowserRouter>
    </>
  );
}

export default App;
