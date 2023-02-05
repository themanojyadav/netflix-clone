import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Movie from "./Movie";
import axios from "axios";
import { Link } from "react-router-dom";

function MoviesSlider(props) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [category, setCategory] = useState(props.category);

  useEffect(() => {
    let apiUrl = "";
    const fetchMovies = () => {
      if (category === "movie") {
        apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TBDB_API_KEY}`;
      }
      if (category === "now_playing") {
        apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TBDB_API_KEY}`;
      }
      if (category === "trending") {
        apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TBDB_API_KEY}`;
      }

      if (category === "upcoming") {
        apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TBDB_API_KEY}`;
      }
      axios
        .get(apiUrl)
        .then((response) => {
          setPopularMovies(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchMovies();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {popularMovies.length > 0 &&
          popularMovies.map((movie, index) => {
            return (
              <div className="p-1" key={index + 1}>
                <Link to={`/user/movies/movie?id=${movie.id}`}>
                  <Movie movie={movie} />
                </Link>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default MoviesSlider;
