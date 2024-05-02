import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Join from "./pages/Join";

function App() {
  return (
    <main className="light text-foreground bg-[#F2F5F1]">
      <ToastContainer />
      <Header />
      <div className="max-w-[1440px] mx-auto">
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
