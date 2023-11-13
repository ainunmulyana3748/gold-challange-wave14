// import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "../src/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchCarPage from "./pages/SearchCarPage";
import DetailCard from "./pages/DetailCard";
import NotFound from "../src/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchcarpage" element={<SearchCarPage />} />
        <Route path="/detailcardpage/:id" element={<DetailCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
