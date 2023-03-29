import { HomePage } from "./pages/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/auth";
import { InitialPage } from "./pages/initialPage";
import { AboutMe } from "./pages/aboutMe";
import { Config } from "./pages/config";
import { Popular } from "./pages/popular";
import { Ranking } from "./pages/ranking";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/auth/:name" element={<Auth/>}/>
    <Route path="/initial" element={<InitialPage/>}/>
    <Route path="/about-me" element={<AboutMe/>}/>
    <Route path="/popular" element={<Popular/>}/>
    <Route path="/popular/ranking/:categoryName" element={<Ranking/>}/>
    <Route path="/config" element={<Config/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
