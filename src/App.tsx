import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";

function App() {
  return (
    <main className="w-full h-full ">
      <Header />
      <main className="relative">
        <div className="pt-[69px]" />
        <section id="detail">
          <Outlet />
        </section>
      </main>
      <Footer />
    </main>
  );
}

export default App;
