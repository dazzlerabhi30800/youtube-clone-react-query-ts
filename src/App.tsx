import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import VideoPage from "./Pages/Video/Video";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Resize from "./Utils/Resize";
import { NavMobile } from "./Components/NavMobile";

function App() {
  const { resize } = Resize();
  return (
    <>
      <Header />
      <main className="flex">
        {resize < 700 ? <NavMobile /> : <Navbar />}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/video/:id" element={<VideoPage />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
