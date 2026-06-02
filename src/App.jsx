import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import IngredientPage from "./pages/IngredientPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/ingredient/:id" element={<IngredientPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
