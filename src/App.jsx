import { Index } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  );
};
