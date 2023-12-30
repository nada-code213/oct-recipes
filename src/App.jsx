import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import SearchAppBar from "./components/appBar";
import Drinks from "./pages/drinks";
import Meals from "./pages/meals";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/meals" element={<Meals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
