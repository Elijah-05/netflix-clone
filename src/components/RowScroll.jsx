import React, { useEffect, useState } from "react";
import { instance } from "../axios/instance";
import ImageCard from "./image_card";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const image_base_url = import.meta.env.VITE_IMAGE_BASE_URL;

const RowScroll = ({ title, api, bigSize }) => {
  const [movieList, setMovieList] = useState([]);
  const [trailerLink, setTrailerLink] = useState("");

  console.log("movieList: ", movieList);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await instance.get(api);
      setMovieList(response.data.results);
    };

    fetchMovies();
  }, [api]);

  function handleGetTrailer(movie) {
    console.log(
      "Handle Get Trailer Triggered!",
      movie?.title,
      movie?.original_title
    );
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

  console.log("movieTrailerLink: ", trailerLink);

  return (
    <div className="w-full mb-2 p-2">
      <h1
        className={` font-bold ${
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
              key={movie.poster_path}
            />
          );
        })}
      </div>
      {trailerLink && (
        <div className="border-2 border-red-500">
          <YouTube
            videoId={trailerLink}
            opts={{
              height: "250px",
              width: "100%",
              playerVars: { autoplay: 1 },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default RowScroll;
