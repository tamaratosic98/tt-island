import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  console.log(process.env.PUBLIC_URL);
  return (
    <main className="bg-slate-300/20 h-full">
      <BrowserRouter
        basename={
          process.env.PUBLIC_URL || "https://tamaratosic98.github.io/tt-island"
        }
      >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
