import React, { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { instance } from "../../axios/instance";
import ImageCard from "../image_card/index";
import CategoryTitle from "../titles/CategoryTitle";

const image_base_url = import.meta.env.VITE_IMAGE_BASE_URL;

const RowScroll = ({ title, api, bigSize, trailerData, setTrailerData }) => {
  const [movieList, setMovieList] = useState([]);

  //Movies are fetched and set to movieList state as an array, later to map list
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await instance.get(api);
      setMovieList(response.data.results);
    };

    fetchMovies();
  }, [api]);

  function handleGetTrailer(movie) {
    movieTrailer(movie?.title || movie?.original_title)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        trailerData.trailerLink !== urlParams.get("v")
          ? setTrailerData({ category: api, trailerLink: urlParams.get("v") })
          : setTrailerData({ category: "", trailerLink: "" });
      })
      .catch((err) => console.log("Error retriving movieTrailer: ", err));
  }

  return (
    <div className="w-full max-w-[1450px] mx-auto mb-6 px-4 my-6">
      <CategoryTitle title={title} uperCase={bigSize} />
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
      {trailerData?.category === api && (
        <YouTube
          className="mb-10"
          videoId={trailerData?.trailerLink}
          opts={{
            height: "450px",
            width: "100%",
            playerVars: { autoplay: 1 },
          }}
        />
      )}
    </div>
  );
};

export default RowScroll;
