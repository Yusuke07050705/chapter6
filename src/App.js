import { Home } from "./components/Home";
import { Header } from "./components/Home/Header";

export default function App({ data }) {
  return (
    <>
      <Header />
      <Home />
    </>
);
}