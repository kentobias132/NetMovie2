const tmdbKey = "283158bd06dd1684146f37464c01d6d7";

const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");

const getTrending = async () => {
  const trendingEndPoint = "/trending/all/day";
  const requestParams = `?api_key=283158bd06dd1684146f37464c01d6d7`;
  const urlToFetch = `${tmdbBaseUrl}${trendingEndPoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const trendingMovies = jsonResponse.results;
      console.log(trendingMovies);

      return trendingMovies;
    }
  } catch (error) {
    console.log(error);
  }
};

const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=283158bd06dd1684146f37464c01d6d7`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      console.log(genres);
      return genres;
    }
  } catch (error) {
    console.log(error);
  }
};

// populate genres
const populateGenreDropdown = (genres) => {
  const select = document.getElementById("genres");
  console.log(genres);

  for (const genre of genres) {
    let option = document.createElement("option");
    option.value = genre.id;
    option.text = genre.name;
    select.appendChild(option);
  }
};
// let genres = await getGenres();
// populateGenreDropdown(genres);

// const getMovieFullDetail = async (movie) => {
//   const movieId = movie.id;
//   const movieEndpoint = `/movie/${movieId}`;
//   const requestParams = `?api_key=283158bd06dd1684146f37464c01d6d7`;
//   const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;
//   try {
//     const response = await fetch(urlToFetch);
//     if (response.ok) {
//       const movieDetail = await response.json();
//       return movieDetail;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const getRandomMovie = (movies) => {
  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];
  console.log(randomMovie);
  return randomMovie;
};

const getTitle = (movie) => {
  let title = movie.title;
  if (!title) {
    title = movie.name;
  }
  return title;
};

const getReleaseDate = (movie) => {
  let releaseDate = movie.release_date;
  if (!releaseDate) {
    releaseDate = movie.first_air_date;
  }
  return releaseDate;
};

// getTrending();

const handleBanner = (movie) => {
  const bannerContainer = document.getElementById("banner");
  const bg = document.getElementById("bannerBg");
  const releaseY = document.getElementById("rRear");
  const watchTime = document.getElementById("wTime");
  const playBtn = document.getElementById("playBtn");

  console.log(movie);
  const imgSrc = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;

  const title = document.createElement("h2");

  bg.setAttribute("class", "back-g");
  bg.style.backgroundImage = `url(${imgSrc})`;

  const movieTitle = getTitle(movie);
  const rYear = getReleaseDate(movie);
  const wTime = movie.popularity;

  title.textContent = movieTitle;
  releaseY.innerHTML += rYear;
  watchTime.innerHTML += wTime;
  // releaseYear.textContent = rYear;
  // watchTime.textContent = wTime;
  console.log(title);
  // console.log(releaseYear);
  console.log(watchTime);

  bannerContainer.appendChild(title);
  // making title the first child
  const firstChild = bannerContainer.firstElementChild;
  // movieInfo.appendChild(releaseYear);
  // movieInfo.appendChild(watchTime);
  bannerContainer.appendChild(firstChild);
  bannerContainer.appendChild(playBtn);
};

const showBanner = async () => {
  const trendingMovies = await getTrending();
  const randomTrendingMovie = getRandomMovie(trendingMovies);
  // const detailedmovie = await getMovieFullDetail(randomTrendingMovie);
  handleBanner(randomTrendingMovie);
};

showBanner();

// handleBanner(getTrending());

/*
const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=283158bd06dd1684146f37464c01d6d7`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      return genres;
    }
  } catch (error) {
    console.log(error);
  }
};



const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = "/discover/movie";
  const requestParams = `?api_key=283158bd06dd1684146f37464c01d6d7&with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const movie = jsonResponse.results;
      console.log(movie);
      return movie;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = `?api_key=283158bd06dd1684146f37464c01d6d7`;
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const movieInfo = response.json();
      return movieInfo;
    }
  } catch (error) {
    console.log(error);
  }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }

  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info);
};

// getMovies()
getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
*/
