import "./App.css";
import Header from "./components/Header";
import Home from "./screens/Home";

function App() {
  return (
    <main className="light text-foreground bg-[#F2F5F1]">
      <Header />
      <Home />
    </main>
  );
}

export default App;
