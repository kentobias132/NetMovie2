// Populate dropdown menu with all the available genres
const populateGenreDropdown = (genres) => {
  const select = document.getElementById("genres");

  for (const genre of genres) {
    let option = document.createElement("option");
    option.value = genre.id;
    option.text = genre.name;
    select.appendChild(option);
  }
};

// Returns the current genre selection from the dropdown menu
const getSelectedGenre = () => {
  const selectedGenre = document.getElementById("genres").value;
  return selectedGenre;
};

// Displays the like and dislike buttons on the page
const showBtns = () => {
  const btnDiv = document.getElementById("likeOrDislikeBtns");
  btnDiv.removeAttribute("hidden");
};

// Clear the current movie from the screen
const clearCurrentMovie = () => {
  const moviePosterDiv = document.getElementById("moviePoster");
  const movieTextDiv = document.getElementById("movieText");
  moviePosterDiv.innerHTML = "";
  movieTextDiv.innerHTML = "";
};

// After liking a movie, clears the current movie from the screen and gets another random movie
const likeMovie = () => {
  clearCurrentMovie();
  showRandomMovie();
};

// After disliking a movie, clears the current movie from the screen and gets another random movie
const dislikeMovie = () => {
  clearCurrentMovie();
  showRandomMovie();
};

// Create HTML for movie poster
const createMoviePoster = (videoKey) => {
  // const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;
  // const posterImg = document.createElement("img");
  // posterImg.setAttribute("src", moviePosterUrl);
  // posterImg.setAttribute("id", "moviePoster");

  const videoBox = document.createElement("IFRAME");
  videoBox.setAttribute("width", "600");
  videoBox.setAttribute("height", "400");
  videoBox.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  // videoBox.setAttribute("src", `https://www.youtube.com/watch?v=${videoKey}`);
  videoBox.setAttribute("src", `https://www.youtube.com/embed/${videoKey}`);
  // videoBox.src = `https://www.youtube.com/watch?v=${videoKey}`;
  // videoBox.controls = true;
  // videoBox.autoplay = true;
  // videoBox.muted = true;
  // videoBox.width = 320;
  // videoBox.height = 240;

  return videoBox;
};

// Create HTML for movie title
const createMovieTitle = (title) => {
  const titleHeader = document.createElement("h1");
  titleHeader.setAttribute("id", "movieTitle");
  titleHeader.innerHTML = title;

  return titleHeader;
};

// Create HTML for movie overview
const createMovieOverview = (overview) => {
  const overviewParagraph = document.createElement("p");
  overviewParagraph.setAttribute("id", "movieOverview");
  overviewParagraph.innerHTML = overview;

  return overviewParagraph;
};

// Returns a random movie from the first page of movies
const getRandomMovie = (movies) => {
  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];
  return randomMovie;
};

// Uses the DOM to create HTML to display the movie
const displayMovie = (movieInfo) => {
  console.log(movieInfo);
  // const moviePosterDiv = document.getElementById("moviePoster");
  const moviePosterDiv = document.getElementById("videoPoster");
  const movieTextDiv = document.getElementById("movieText");
  const likeBtn = document.getElementById("likeBtn");
  const dislikeBtn = document.getElementById("dislikeBtn");

  let randomTraler = Math.floor(Math.random() * movieInfo.length);
  console.log(randomTraler);

  // Create HTML content containing movie info
  const moviePoster = createMoviePoster(movieInfo[randomTraler].key);
  const titleHeader = createMovieTitle(movieInfo.title);
  const overviewText = createMovieOverview(movieInfo.overview);

  // Append title, poster, and overview to page
  moviePosterDiv.appendChild(moviePoster);
  movieTextDiv.appendChild(titleHeader);
  movieTextDiv.appendChild(overviewText);

  showBtns();
  likeBtn.onclick = likeMovie;
  dislikeBtn.onclick = dislikeMovie;
};
