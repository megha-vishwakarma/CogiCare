import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home";
import Nav from "./components/nav/Nav";

export default function App() {
    return (
        <Router>
          <Nav />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}
