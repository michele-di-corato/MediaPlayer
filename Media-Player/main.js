let tracks = [
  {
    title: "Mi fai impazzire",
    artists: "Blanco, Sfera Ebbasta",
    url: "./Songs/BLANCO_Sfera Ebbasta_-_MI_FAI_IMPAZZIRE.mp3",
    cover: "./Covers/Blanco.jpeg",
  },
  {
    title: "Heat Waves",
    artists: "Glass Animals",
    url: "./Songs/Glass_Animals_-_Heat_Waves.mp3",
    cover: "./Covers/Heat.jpeg",
  },
  {
    title: "Feel Good Inc.",
    artists: "Gorillaz",
    url: "./Songs/Gorillaz_-_Feel_Good_Inc..mp3",
    cover: "./Covers/Gorillaz.jpg",
  },
  {
    title: "Enemy",
    artists: "Imagine Dragons x J.I.D.",
    url: "./Songs/Imagine Dragons_x_J.I.D_-_Enemy.mp3",
    cover: "./Covers/Enemy.jpg",
  },
  {
    title: "Bones",
    artists: "Imagine Dragons",
    url: "./Songs/Imagine_Dragons_-_Bones.mp3",
    cover: "./Covers/Bones.jpg",
  },
  {
    title: "Lil Nas X ft. Jack Harlow",
    artists: "Industry Baby",
    url: "./Songs/Lil_Nas_X_-_Industry_Baby_ft._Jack_Harlow.mp3",
    cover: "./Covers/Industry.jpg",
  },
  {
    title: "MONTERO",
    artists: "Lil Nas X",
    url: "./Songs/Lil_Nas_X_-_MONTERO.mp3",
    cover: "./Covers/Montero.jpeg",
  },
  {
    title: "MAKUMBA",
    artists: "Noemi ft. Carl Brave",
    url: "./Songs/Noemi_Carl_Brave_-_MAKUMBA.mp3",
    cover: "./Covers/Makumba.jpg",
  },
  {
    title: "Stay",
    artists: "The Kid Laroi ft. Justin Bieber",
    url: "./Songs/The_Kid_LAROI_Justin Bieber_-_STAY.mp3",
    cover: "./Covers/Stay.jpg",
  },
  {
    title: "Blinding Lights",
    artists: "The Weeknd",
    url: "./Songs/The_Weeknd_-_Blinding_Lights.mp3",
    cover: "./Covers/Weeknd.jpg",
  },
];
// Container Media Player
let container = document.querySelector("#player");
// Inizializzazione file audio
let audio = null;
// Contatore tracce
let counter = 0;
function createCover() {
  // Reset della traccia
  container.innerHTML = "";
  // Creazione della traccia
  let div = document.createElement("div");
  div.classList.add(
    "col-12",
    "col-md-4",
    "d-flex",
    "justify-content-center",
    "my-5"
  );
  //   Cover e traccia audio
  div.innerHTML = `
  <img src="${tracks[counter].cover}" alt="cover" class="img-round" />   
  <audio preload="metadata">
    <source
      src="${tracks[counter].url}"
      type="audio/mpeg"
    />
  </audio>`;
  container.appendChild(div);
  audio = document.querySelector("audio");
}
// Info traccia
function createTrack() {
  let div = document.createElement("div");
  div.classList.add("col-12", "col-md-6", "mt-5");
  div.innerHTML = `
            <div class="my-4">
              <h2 class="text-center text-warning">${tracks[counter].title}</h2>
              <h3 class="text-center text-warning">${tracks[counter].artists}</h3>
            </div>
            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar w-75"></div>
            </div>
            <!-- Tempi -->
            <div class="d-flex justify-content-between">
              <p class="text-warning">0:00</p>
              <p class="text-warning">5:00</p>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <button id="prev" class="btn btn-outline-warning fs-3">
                <i class="fa-solid fa-backward"></i>
              </button>
              <button id="play" class="btn btn-outline-warning fs-3">
                <i class="fa-solid fa-play"></i>
              </button>
              <button id="next" class="btn btn-outline-warning fs-3">
                <i class="fa-solid fa-forward"></i>
              </button>
            </div>
  `;
  container.appendChild(div);
  //   Funzionalità bottoni
  // Richiamo bottoni del player
  let prev = document.querySelector("#prev");
  let next = document.querySelector("#next");
  let play = document.querySelector("#play");

  //   Funzione Play-Pause
  play.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    } else {
      audio.pause();
      play.innerHTML = `<i class="fa-solid fa-play"></i>`;
    }
  });
  // Funzione Next
  next.addEventListener("click", () => {
    if (counter < tracks.length - 1) {
      counter++;
      createCover();
      createTrack();
    } else {
      counter = 0;
      createCover();
      createTrack();
    }
  });
  prev.addEventListener("click", () => {
    if (counter > 0) {
      counter--;
      createCover();
      createTrack();
    } else {
      counter = tracks.length - 1;
      createCover();
      createTrack();
    }
  });
}
// Invochiamo le funzioni per la creazione del media player completo
createCover();
createTrack();
