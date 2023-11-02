import React, { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { instance } from "../../axios/instance";
import ImageCard from "../image_card/index";

const image_base_url = import.meta.env.VITE_IMAGE_BASE_URL;

const RowScroll = ({ title, api, bigSize }) => {
  const [movieList, setMovieList] = useState([]);
  const [trailerLink, setTrailerLink] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await instance.get(api);
      setMovieList(response.data.results);
    };

    fetchMovies();
  }, [api]);

  function handleGetTrailer(movie) {
    if (trailerLink) {
      setTrailerLink("");
    } else {
      movieTrailer(movie?.title || movie?.original_title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerLink(urlParams.get("v"));
        })
        .catch((err) => console.log("Error retriving movieTrailer: ", err));
    }
  }

  return (
    <div className="w-full mb-6 px-4 my-6">
      <h1
        className={`pl-2 font-bold ${
          bigSize ? "uppercase" : "capitalize"
        } text-2xl text-white`}
      >
        {title}
      </h1>
      <div className="px-1 flex items-center overflow-x-scroll overflow-y-visible gap-1  no-scrollbar ">
        {movieList?.map((movie, index) => {
          return (
            <ImageCard
              image_url={
                image_base_url +
                (bigSize ? movie.poster_path : movie.backdrop_path)
              }
              image_alt={movie.title}
              onClick={() => handleGetTrailer(movie)}
              bigSize={bigSize}
              key={movie.poster_path}
            />
          );
        })}
      </div>

      {/* Trailer Component */}
      {trailerLink && (
        <YouTube
          videoId={trailerLink}
          opts={{
            height: "250px",
            width: "100%",
            playerVars: { autoplay: 1 },
          }}
        />
      )}
    </div>
  );
};

export default RowScroll;
