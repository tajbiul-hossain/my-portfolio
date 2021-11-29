import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main/Main";
import "./App.css";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
