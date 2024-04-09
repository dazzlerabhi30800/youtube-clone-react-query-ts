import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import VideoPage from "./Pages/Video/Video";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Resize from "./Utils/Resize";
import { NavMobile } from "./Components/NavMobile";
import LoadingBar from "react-top-loading-bar";
import { useVideoContext } from "./Context/Context";
import Channel from "./Pages/Channel/Channel";

function App() {
  const { resize } = Resize();
  const { progress, setProgress } = useVideoContext();
  return (
    <>
      <LoadingBar
        color="#DB6FFA"
        progress={progress}
        waitingTime={1000}
        onLoaderFinished={() => setProgress(0)}
      />
      <Router>
        <Header />
        <main className="flex">
          {resize < 700 ? <NavMobile /> : <Navbar />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/video/:id" element={<VideoPage />} />
            <Route path="/channel/:id" element={<Channel />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
