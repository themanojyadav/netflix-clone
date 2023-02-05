import React from "react";

function Movie({ movie }) {
  return (
    <div className="b_movie">
      <div className="b_movie_img_col">
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt=""
          className="b_movie_img w-100"
        />
      </div>
    </div>
  );
}

export default Movie;
