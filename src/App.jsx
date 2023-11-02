import React, { useEffect, useState } from "react";
import HomeBanner from "./components/banner";
import RowScroll from "./components/horizontal_section/RowScroll";
import Footer from "./components/footer";

const netflix_original_API = import.meta.env.VITE_FETCH_NETFLIX_ORIGINALS;
const netflix_trending_API = import.meta.env.VITE_FETCH_TRENDING;
const top_rated = import.meta.env.VITE_FETCH_TOP_RATED_MOVIES;
const action_movies = import.meta.env.VITE_FETCH_ACTION_MOVIES;
const comedy_movies = import.meta.env.VITE_FETCH_COMEDY_MOVIES;
const horror_movies = import.meta.env.VITE_FETCH_HORROR_MOVIES;
const romantic_movies = import.meta.env.VITE_FETCH_ROMANTIC_MOVIES;
const documentary_movies = import.meta.env.VITE_FETCH_DOCUMENTARY_MOVIES;

const App = () => {
  //Trailer data to show on horizontal scrolling components from the centeral state. If the trailer is playing on "Trending Now" and imediately another movie is clicked from another category ex "Action Movies" the trailer from previously watching "Trending Now" will be closed and the new trailer on "Action Movies" component will be played
  const [trailerData, setTrailerData] = useState({
    category: "", // to track the trailer on which category is currently playing
    link: "", // just the trailer link
  });

  //To cancel the playing trailer by clicking empty are on the window, resets the trailerData
  useEffect(() => {
    const handleMouseClick = () => {
      if (!!trailerData.category) {
        setTrailerData({ category: "", link: "" });
      }
      console.log("Window Clicked!!!");
    };

    window.addEventListener("click", handleMouseClick);
    return () => {
      window.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <main className="">
      <header className="mb-4">
        <HomeBanner api={netflix_original_API} />
      </header>
      <section>
        {/* Big Sized Horizontal Scrolling Netflix Originals category card */}
        <RowScroll
          title={"Netflix Originals"}
          api={netflix_original_API}
          bigSize={true}
        />
      </section>
      <section>
        <RowScroll
          title={"Trending now"}
          api={netflix_trending_API}
          trailerData={trailerData}
          setTrailerData={setTrailerData}
        />
      </section>
      <section>
        <RowScroll
          title={"Top rated"}
          api={top_rated}
          trailerData={trailerData}
          setTrailerData={setTrailerData}
        />
      </section>
      <section>
        <RowScroll
          title={"action movies"}
          api={action_movies}
          trailerData={trailerData}
          setTrailerData={setTrailerData}
        />
      </section>
      <section>
        <RowScroll
          title={"comedy movies"}
          api={comedy_movies}
          trailerData={trailerData}
          setTrailerData={setTrailerData}
        />
      </section>
      <section>
        <RowScroll
          title={"horror movies"}
          api={horror_movies}
          trailerData={trailerData}
          setTrailerData={setTrailerData}
        />
      </section>
      <section>
        <RowScroll
          title={"romance movies"}
          api={romantic_movies}
          trailerData={trailerData}
          setTrailerData={setTrailerData}
        />
      </section>
      <section>
        <RowScroll
          title={"documentary movies"}
          api={documentary_movies}
          trailerData={trailerData}
          setTrailerData={setTrailerData}
        />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default App;
