import { BrowserRouter, Routes, Route } from "react-router-dom";
import StatusBar from "./components/StatusBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./components/Projects";
import Log from "./components/Log";
import Experience from "./pages/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-void">
        <StatusBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/log" element={<Log />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
