import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";

function App() {
  return (
    <main>
      <section>
        <Header />
      </section>
      <section id="detail">
        <Outlet />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
