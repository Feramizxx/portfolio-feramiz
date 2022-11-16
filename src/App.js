import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Layout from "./components/ui/Layout";
function App() {
  return (
    <div className="App">
      <BrowserRouter  basename='/'>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
export default App;