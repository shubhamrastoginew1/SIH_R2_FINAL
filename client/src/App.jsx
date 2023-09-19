import { useState } from "react";
import Faq from "./components/Faq";
import Home from "./components/Home";
import Test from "./components/Test";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar_logout from "./components/NavBar_logout";
import Blog from "./components/Blog";
import Explore from "./components/Explore";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";
// import Test from "./components/Test";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AptitudeTest from "./components/AptitudeTest";
import PersonalityTest from "./components/PersonalityTest";

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
          <Route path="/landing" element={<Landing />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Chatup" element={<Chat />} />

          <Route path="/faq" element={<Faq />} />
          <Route path="/explore/aptitude-test" element={<AptitudeTest />} />
          <Route
            path="/explore/personality-test"
            element={<PersonalityTest />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
