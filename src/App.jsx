import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2RkNjA4YjJkYzM0NDMyZTlmNTk5M2ZiNzdlMmU1OCIsIm5iZiI6MTczODkzNDE0My42MjUsInN1YiI6IjY3YTYwNzdmZGYzMzZmMzhhYjg1ZTliMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ONsNYG70-VXlF6ywRXcVsuRt1JonP9GXyZ0mJszD65U";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/movie/popular";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: ` Bearer ${API_KEY}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
      })
      .catch((err) => console.error(err));
  }, []);

  function onQuerySearch(query) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: ` Bearer ${API_KEY}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <Header query={onQuerySearch} />
      <div className="content">
        {data.map((movie, index) => {
          return (
            <Card
              key={index}
              title={movie.title}
              poster={movie.poster_path}
              releaseDate={movie.release_date}
              overview={movie.overview}
              backdrop={movie.backdrop_path}
              rating={movie.vote_average}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;

// https://api.themoviedb.org/3/search/movie

// 37dd608b2dc34432e9f5993fb77e2e58
