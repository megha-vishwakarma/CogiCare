import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import ColorGame from "./pages/games/color/ColorGame";
import GameMenu from "./pages/games/gameMenu/GameMenu";
import GuessTheColorGame from "./pages/games/guessGames/guess-the-color/GuessTheColorGame";
import PaintGame from "./pages/games/paintGame/PaintGame";

export default function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route
                    exact
                    path="/color-game"
                    element={<GuessTheColorGame />}
                />
                <Route exact path="paint-game" element={<PaintGame />} />
                <Route exact path="/game-menu" element={<GameMenu />} />
            </Routes>
        </Router>
    );
}
