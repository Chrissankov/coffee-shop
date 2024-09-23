import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import MenuPage from "../components/MenuPage";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </main>
    </Router>
  );
}
