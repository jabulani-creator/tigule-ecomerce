import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import { Container } from "react-bootstrap";
import { Home, SingleProduct } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
