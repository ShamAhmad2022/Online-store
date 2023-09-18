import "./App.css";
import NavBAr from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBAr />
      <div className="container">
        <Main />
      </div>
      <Footer/>
    </>
  );
}

export default App;
