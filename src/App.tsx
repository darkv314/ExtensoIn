import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Layout from "./views/layout/Layout";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Feed from "./pages/feed/Feed";

function App() {
    return (
        <Routes >
            <Route element={<Layout />} >
                <Route path="/" element={<Home  />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/feed" element={<Feed />} />
            </Route>
        </Routes>
    );
}

export default App;
