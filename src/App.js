import { HomePage } from "./pages/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/auth";
import { InitialPage } from "./pages/initialPage";
import { AboutMe } from "./pages/aboutMe";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/auth/:name" element={<Auth/>}/>
    <Route path="/initial" element={<InitialPage/>}/>
    <Route path="/about-me" element={<AboutMe/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
