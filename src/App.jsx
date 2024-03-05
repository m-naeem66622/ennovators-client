import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

function App() {
  return (
    <main className="light text-foreground bg-[#F2F5F1]">
      <Header />
      <div className="max-w-[1440px] mx-auto">
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
