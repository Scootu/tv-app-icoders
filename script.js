let SERIESMOVIESDATA = [
  {
    id: "e1",
    title: "vikings",
    img: "https://i.ibb.co/vV4kPhD/l-intro-1609386609.jpg",
    episode: "Portage S4, Ep8",
    timeLeft: 28,
  },
  {
    id: "e2",
    title: "game of thrones",
    img: "https://i.ibb.co/JsBNz1N/game-of-thrones.jpg",
    episode: "The Red Woman S6, Ep1",
    timeLeft: 13,
  },
  {
    id: "e3",
    title: "john wick",
    img: "https://i.ibb.co/y0KVZ27/john-week.jpg",
    episode: "The Viewing Party S9, Ep12",
    timeLeft: 5,
  },
  {
    id: "e4",
    title: "the boys in the band",
    img: "https://i.ibb.co/9cHZvrh/theboysintheband.jpg",
    episode: "Trust no city S8, Ep2",
    timeLeft: 12,
  },
  {
    id: "e5",
    title: "MR.ROBOT",
    img: "https://i.ibb.co/xhf9HL7/mrrobotr.jpg",
    episode: "WlterOse S1, Ep6",
    timeLeft: 38,
  },
  {
    id: "e6",
    title: "the punisher",
    img: "https://i.ibb.co/4pZ0jyn/punisher.jpg",
    episode: "one kill S2, Ep7",
    timeLeft: 5,
  },
];
let FEATUREDMOVIES = [
  {
    id: "b1",
    title: "UNCLE",
    img: "https://i.ibb.co/tYTYFjz/maxresdefault.jpg",
    stars: "★ ★ ★ ★ ☆",
  },
  {
    id: "b2",
    title: "Star wars",
    img: "https://i.ibb.co/9ZM95gk/star-Warslost.jpg",
    stars: "★ ★ ★ ★ ★",
  },
  {
    id: "b3",
    title: "74",
    img: "https://i.ibb.co/ydgStKC/maxresdefault-1.jpg",
    stars: "★ ★ ★ ★ ☆",
  },
  {
    id: "b4",
    title: "hitman 47",
    img: "https://i.ibb.co/hBFRbPQ/p10854431-v-h8-ag.jpg",
    stars: "★ ★ ★ ★ ☆",
  },
];
const leaderContainer = document.querySelector(".main-lander-content");
const featuredMovie = document.querySelector(".featured-movie");
function renderMovies() {
  let liTagElement = "";
  SERIESMOVIESDATA.forEach((item) => {
    let liTag = `<li class="movie-cart">
    <div class='video-container '>
                    <img class="movie-img" src=${item.img} alt=${item.title} />
                    <div class='contain-play overlay'>
                    <button class='play_btn'><span class="material-symbols-outlined">
play_arrow
</span></button>
</div>
</div>
                    <p class="hed-text">${item.title}</p>
                    <div class="sub-text">
                        <span>${item.episode}</span>
                        <span>${item.timeLeft} min, left</span>
                    </div>
                    <div class="loading-bar-non-complet">
                        <div class="bar-complet" style="width:${
                          ((50 - item.timeLeft) / 50) * 100
                        }%"></div>
                    </div>
                    
                </li>`;
    liTagElement += liTag;
  });
  leaderContainer.innerHTML = liTagElement;
}
function renderFeaturedMovie() {
  let liTagElement = "";
  FEATUREDMOVIES.forEach((item) => {
    let liTag = `<li class="movie-cart">
                   <div class='video-container'>
                    <img class="movie-img" src=${item.img} alt=${item.title} />
                    <div class='contain-play overlay'>
                    <button class='play_btn'><span class="material-symbols-outlined">
play_arrow
</span></button>
</div>
</div>
                    <div class="sub-text">
                    <p class="hed-text">${item.title}</p>
                    <p>${item.stars}</p>
                    </div>
                </li>`;
    liTagElement += liTag;
  });
  featuredMovie.innerHTML = liTagElement;
}

renderMovies();
renderFeaturedMovie();
