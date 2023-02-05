import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import BackendLayout from "./pages/backend/BackendLayout";
import Dashboard from "./pages/backend/Dashboard";
import TVShows from "./pages/backend/TVShows";
import Movies from "./pages/backend/Movies";
import TopRatedMovies from "./pages/backend/TopRatedMovies";
import MovieDetails from "./pages/backend/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<BackendLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tv-shows" element={<TVShows />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/movie" element={<MovieDetails />} />
          <Route path="movies/top-rated" element={<TopRatedMovies />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
