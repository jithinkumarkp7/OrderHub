import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./index.css";
import Sidebar from "./components/common/Sidebar";
import Header from "./components/common/Header";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex">
          <div className="hidden md:block">
            <Sidebar />
          </div>
          <div className="flex-1 p-10 overflow-y-auto h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
