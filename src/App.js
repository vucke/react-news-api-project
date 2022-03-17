import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoriesPage from "./pages/StoriesPage";
import BestPage from "./pages/BestPage";
import TopPage from "./pages/TopPage";
import NewPage from "./pages/NewPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/stories" element={<StoriesPage />}></Route>
          <Route path="/best" element={<BestPage />}></Route>
          <Route path="/new" element={<TopPage />}></Route>
          <Route path="/top" element={<NewPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
