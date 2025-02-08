import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  function onQuerySearch(query) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2RkNjA4YjJkYzM0NDMyZTlmNTk5M2ZiNzdlMmU1OCIsIm5iZiI6MTczODkzNDE0My42MjUsInN1YiI6IjY3YTYwNzdmZGYzMzZmMzhhYjg1ZTliMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ONsNYG70-VXlF6ywRXcVsuRt1JonP9GXyZ0mJszD65U",
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
      <h1>Movies Recemmendations</h1>
      <SearchBar query={onQuerySearch} />
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
