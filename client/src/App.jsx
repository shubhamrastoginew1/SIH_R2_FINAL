import { useState } from "react";
import Faq from "./components/Faq";
import Home from "./components/Home";
import Test from "./components/Test";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar_logout from "./components/NavBar_logout";
import Blog from "./components/Blog";
import Explore from "./components/Explore";
// import Test from "./components/Test";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* this navabr will be displayed when user is not logged in */}
          <Route path="/navbar" element={<NavBar_logout />} />

          <Route path="/signup" element={<Register />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
