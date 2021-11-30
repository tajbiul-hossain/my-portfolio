import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main/Main";
import About from "./pages/About/About";
import Footer from "./pages/Footer/Footer";
import Blog from "./pages/Blog/Blog";
import Explore from "./pages/ExploreProject/Explore";
import "./App.css";
import ScrollToTop from "./pages/ScrollTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/explore/:projectId" element={<Explore />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
