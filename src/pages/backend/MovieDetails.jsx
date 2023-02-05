import axios from "axios";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { BiLoader, BiStar } from "react-icons/bi";
import { useNavigate, useSearchParams } from "react-router-dom";

function MovieDetails() {
  const [param] = useSearchParams();

  const [isLoaded, setIsLoaded] = useState(false);
  const [movieId, setMovieId] = useState(param.get("id"));
  const [movie, setMovie] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);

  //   ======================================
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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

  var crewSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
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

  useEffect(() => {
    const fetchMovieDetails = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TBDB_API_KEY}`
        )
        .then((response) => {
          console.log(response.data);
          setMovie(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const fetchMovieCredits = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TBDB_API_KEY}`
        )
        .then((response) => {
          setMovieCredits(response.data);
          setIsLoaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchMovieCredits();
    fetchMovieDetails();
  }, []);

  return (
    <section className="md_wrapper py-4">
      {isLoaded === true ? (
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="md_img_col">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-md-8 col-12">
              <div className="md_content_col">
                <h3>{movie.original_title}</h3>
                <p className="mb-1">{movie.overview}</p>
                <p className="mb-1">
                  <strong className="custom-text-muted">Rating:</strong>{" "}
                  <span className="text-warning">
                    <BiStar />
                  </span>{" "}
                  {Math.round(movie.vote_average, 2)}
                </p>
                <p className="mb-1">
                  <strong className="custom-text-muted">Release Date:</strong>{" "}
                  {movie.release_date}
                </p>
                <p className="mb-1">
                  <strong className="custom-text-muted">Budget:</strong> $
                  {movie.budget}
                </p>
                <p className="mb-1">
                  <strong className="custom-text-muted">Revenue:</strong> $
                  {movie.revenue}
                </p>
              </div>

              <div className="cast_wrapper">
                <h4 className="casts_header_title mt-3">Movie Casts</h4>
                {movieCredits.cast.length > 0 && (
                  <Slider {...settings}>
                    {movieCredits.cast.map((c) => {
                      return (
                        <div className="cast_crew_col p-2">
                          <div
                            className="d-flex flex-column justify-content-between h-100"
                            style={{
                              minHeight: "320px",
                              backgroundColor: "#d9d9d9",
                            }}
                          >
                            <img
                              src={
                                c.profile_path
                                  ? `https://image.tmdb.org/t/p/w500${c.profile_path}`
                                  : "https://excelautomationinc.com/wp-content/uploads/2021/07/No-Photo-Available.jpg"
                              }
                              alt=""
                              className="w-100"
                            />
                            <div className="py-2 bg-white px-2">
                              <h6
                                className="mb-0 text-dark"
                                style={{ fontSize: "13px" }}
                              >
                                {c.original_name}
                              </h6>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                )}
              </div>
            </div>
          </div>
          <hr />
          <div className="crew_wrapper">
            <h4 className="casts_header_title mt-3">Movie Crew</h4>
            {movieCredits.crew.length > 0 && (
              <Slider {...crewSettings}>
                {movieCredits.cast.map((c) => {
                  return (
                    <div className="cast_crew_col p-2">
                      <div
                        className="d-flex flex-column justify-content-between h-100"
                        style={{
                          minHeight: "273px",
                          backgroundColor: "#d9d9d9",
                        }}
                      >
                        <img
                          src={
                            c.profile_path
                              ? `https://image.tmdb.org/t/p/w500${c.profile_path}`
                              : "https://excelautomationinc.com/wp-content/uploads/2021/07/No-Photo-Available.jpg"
                          }
                          alt=""
                          className="w-100"
                        />
                        <div className="py-2 bg-white px-2">
                          <h6
                            className="mb-0 text-dark text-truncate"
                            style={{ fontSize: "13px" }}
                          >
                            {c.original_name}
                          </h6>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            )}
          </div>
        </div>
      ) : (
        <div className="py-4 text-center">
          <BiLoader /> Loading
        </div>
      )}
    </section>
  );
}

export default MovieDetails;
