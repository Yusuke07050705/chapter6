import { Home } from "./components/Home";
import { Header } from "./components/Home/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostDetail } from "./components/Home/PostDetail";
import Contact from "./components/Home/Contact/Contact";

export default function App({ data }) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}