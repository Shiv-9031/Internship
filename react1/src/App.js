import { BrowserRouter, Route, Routes } from "react-router-dom";
import { First } from "./question/First";
import "./App.css";
import { Second } from "./question/Second";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/1" element={<Second />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
