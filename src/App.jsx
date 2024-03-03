import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <main className="light text-foreground bg-[#F2F5F1]">
      <Header />
      <div className="max-w-[1440px] mx-auto">
        <Home />
      </div>
      <Footer />
    </main>
  );
}

export default App;
