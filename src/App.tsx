import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Layout from "./views/layout/Layout";
import Feed from "./pages/feed/Feed";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
      </Route>
    </Routes>
  );
}

export default App;
