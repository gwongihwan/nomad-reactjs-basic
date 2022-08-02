import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieHome from "./routes/MovieHome";
import MovieDetail from "./routes/MovieDetail";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route path="/" element={<MovieHome />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
