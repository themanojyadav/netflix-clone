import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../../components/backend/Movie";

function TVShows() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TBDB_API_KEY}`
        )
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchMovies();
  }, []);

  return (
    <div className="b_common_list_section">
      <div className="container">
        <div className="b_common_list_section_header">
          <h4 className="b_common_list_section_title">TV Shows</h4>
        </div>
        <div className="b_common_list_section_content">
          <div className="row row-cols-5">
            {movies.length > 0
              ? movies.map((movie, index) => {
                  return (
                    <div className="col mb-2 px-1" key={index + 1}>
                      <Movie movie={movie} />
                    </div>
                  );
                })
              : "Loading"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TVShows;
