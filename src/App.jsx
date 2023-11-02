import React, { useState } from "react";
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
  const [trailerData, setTrailerData] = useState({
    category: "",
    trailerLink: "",
  });

  return (
    <main className="">
      <header className="mb-4">
        <HomeBanner api={netflix_original_API} />
      </header>
      <section>
        <RowScroll
          title={"Netflix Originals"}
          api={netflix_original_API}
          bigSize={true}
        />
      </section>
      <section>
        <RowScroll title={"Trending now"} api={netflix_trending_API} />
      </section>
      <section>
        <RowScroll title={"Top rated"} api={top_rated} />
      </section>
      <section>
        <RowScroll title={"action movies"} api={action_movies} />
      </section>
      <section>
        <RowScroll title={"comedy movies"} api={comedy_movies} />
      </section>
      <section>
        <RowScroll title={"horror movies"} api={horror_movies} />
      </section>
      <section>
        <RowScroll title={"romance movies"} api={romantic_movies} />
      </section>
      <section>
        <RowScroll title={"documentary movies"} api={documentary_movies} />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default App;
