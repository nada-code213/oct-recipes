import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import SearchAppBar from "./components/appBar";
import Drinks from "./pages/drinks";
import Meals from "./pages/meals";
import Recipe from "./pages/recipe";
import SearchResults from "./pages/searchResults";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/search-result/:query" element={<SearchResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
