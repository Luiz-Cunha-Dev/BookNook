import { HomePage } from "./pages/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/auth";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/auth/:name" element={<Auth/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
