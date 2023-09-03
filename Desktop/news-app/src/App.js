import Navbar from "./Navbar";
import NewsCard from "./NewsCard";
import Footer from "./Footer";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      
        <Routes>

        <Route exact path="/" element={ <NewsCard key={"general"} category="general"/> }></Route>

        <Route path="/business" element={ <NewsCard key={"business"} category="business"/> }></Route>

        <Route path="/entertainment" element={ <NewsCard key={"entertainment"} category="entertainment"/> }></Route>

        <Route path="/health" element={ <NewsCard key={"health"} category="health"/> }></Route>

        <Route path="/science" element={ <NewsCard key={"science"} category="science"/> }></Route>

        <Route path="/sports" element={ <NewsCard key={"sports"} category="sports"/> }></Route>

        <Route path="/technology" element={ <NewsCard key={"technology"} category="technology"/> }></Route>

        </Routes>
      <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
