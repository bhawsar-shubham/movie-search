import { useState } from "react";
import ListMovies from "./components/ListMovies";
import Search from "./components/Search";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState(null);
  return (
    <div>
      <Search setMovies={setMovies} />
      <ListMovies movies={movies} setSelectedMovies ={setSelectedMovies} selectedMovies={selectedMovies}/>
    </div>
  );
};

export default App;
