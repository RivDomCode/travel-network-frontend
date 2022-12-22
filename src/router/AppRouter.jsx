import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";


export const AppRouter = () =>{

    const authStatus = "auth";
    return(
        <BrowserRouter>
        <Routes>
            {
                (authStatus === "non-auth") ? (
                    <>
                        <Route path="/login/*" element={<Login/>} />
                        <Route path="/*" element={ <Navigate to="/login" /> } />
                        <Route path="/register/" element={<Register/>} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Home/>} />
                        <Route path="/*" element={ <Navigate to="/" /> } />
                        <Route path="/Profile/" element={<Profile/>} />
                    </>
                )
            }
        </Routes>
    </BrowserRouter>
    )


}