import { Routes, Route } from "react-router-dom";
import { Base } from "./Base/Base";
import { Trending } from "./Trending/Trending";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Reviews } from "./Reviews/Reviews";
import { Cast } from "./Cast/Cast";
import { Search } from "./Search/Search";

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<Base />}>
        <Route index element={<Trending />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="/movies/" element={<Search />} />
      </Route>
      
    </Routes>
    </>
  );
};
