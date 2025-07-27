import { Route, Routes } from "react-router-dom";

import Home from "@/pages/index";
import About from "@/pages/about";
import Trainings from "@/pages/trainings";
import Mentorships from "@/pages/mentorships";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Trainings />} path="/trainings" />
      <Route element={<Mentorships />} path="/mentorships" />
    </Routes>
  );
}

export default App;
