import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  CpBattle from './pages/CpBattle'
import  Ranking from './pages/Ranking'
import  Result from './pages/Result'
import  Top from './pages/Top'

// import { TypingCountProvider } from "./context/TypingCountContext";

function App() {
  return (
    // <TypingCountProvider>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Top />} />
        <Route path="cpBattle" element={<CpBattle />} />
        <Route path="ranking" element={<Ranking />} />
        <Route path="result" element={<Result />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
    // </TypingCountProvider>
  );
}

export default App;
