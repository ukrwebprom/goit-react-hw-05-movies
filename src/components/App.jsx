import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Base } from "./Base/Base";

const Trending = lazy(() => import("./Trending/Trending"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Cast = lazy(() => import("./Cast/Cast"));
const Search = lazy(() => import("./Search/Search"));
const NotFound = lazy(() => import("./NotFound/NotFound"));

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Trending />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="/movies/" element={<Search />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
};
