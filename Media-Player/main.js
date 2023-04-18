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
    url: "./Songs/Glass_Animals_-_Heat_Waves.mp3.mp3",
    cover: "./Covers/Heat.jpeg",
  },
  {
    title: "Feel Good Inc.",
    artists: "Gorillaz",
    url: "./Songs/Gorillaz_-_Feel_Good_Inc..mp3",
    cover: "./Covers/Gorillaz.jpeg",
  },
  {
    title: "Enemy",
    artists: "Imagine Dragons x J.I.D.",
    url: "./Songs/Imagine Dragons_x_J.I.D_-_Enemy.mp3",
    cover: "./Covers/Enemy.jpeg",
  },
  {
    title: "Bones",
    artists: "Imagine Dragons",
    url: "./Songs/Imagine_Dragons_-_Bones.mp3",
    cover: "./Covers/Bones.jpeg",
  },
  {
    title: "Lil Nas X ft. Jack Harlow",
    artists: "Industry Baby",
    url: "./Songs/Lil_Nas_X_-_Industry_Baby_ft._Jack_Harlow.mp3",
    cover: "./Covers/Industry.jpeg",
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
    cover: "./Covers/Makumba.jpeg",
  },
  {
    title: "Stay",
    artists: "The Kid Laroi ft. Justin Bieber",
    url: "./Songs/The_Kid_LAROI_Justin Bieber_-_STAY.mp3",
    cover: "./Covers/Stay.jpeg",
  },
  {
    title: "Blinding Lights",
    artists: "The Weeknd",
    url: "./Songs/The_Weeknd_-_Blinding_Lights.mp3",
    cover: "./Covers/Weeknd.jpeg",
  },
];
// Container Media Player
let container = document.querySelector("#player");

function createCover() {
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
  <img src="${tracks[0].cover}" alt="cover" class="img-round" />   
  <audio preload="metadata">
    <source
      src="${tracks[0].url}"
      type="audio/mpeg"
    />
  </audio>`;
  container.appendChild(div);
}
// Info traccia
function createTrack() {
  let div = document.createElement("div");
  div.classList.add("col-12", "col-md-6", "mt-5");
  div.innerHTML = `
            <div class="my-4">
              <h2 class="text-center text-warning">${tracks[0].title}</h2>
              <h3 class="text-center text-warning">${tracks[0].artists}</h3>
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
              <button class="btn btn-outline-warning fs-3">
                <i class="fa-solid fa-backward"></i>
              </button>
              <button class="btn btn-outline-warning fs-3">
                <i class="fa-solid fa-play"></i>
              </button>
              <button class="btn btn-outline-warning fs-3">
                <i class="fa-solid fa-forward"></i>
              </button>
            </div>
  `;
  container.appendChild(div);
}
// Invochiamo le funzioni per la creazione del media player completo
createCover();
createTrack();
