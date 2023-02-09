const keys = document.querySelectorAll(".key");
const zAudio = new Audio("notes/C.mp3");
const sAudio = new Audio("notes/Db.mp3");
const xAudio = new Audio("notes/D.mp3");
const dAudio = new Audio("notes/Eb.mp3");
const cAudio = new Audio("notes/E.mp3");
const vAudio = new Audio("notes/F.mp3");
const gAudio = new Audio("notes/Gb.mp3");
const bAudio = new Audio("notes/G.mp3");
const hAudio = new Audio("notes/Ab.mp3");
const nAudio = new Audio("notes/A.mp3");
const jAudio = new Audio("notes/Bb.mp3");
const mAudio = new Audio("notes/B.mp3");

document.addEventListener("keydown", (e) => {
  if (e.repeat) {
    return;
  }
  const key = e.key;
  playNote(key);
  active(key)
});

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const key = e.target.textContent;
    playNote(key);
    active(key)
  });
});

function playNote(key) {
  switch (key) {
    case "z":
      zAudio.play();
      break;
    case "s":
      sAudio.play();
      break;
    case "x":
      xAudio.play();
      break;
    case "d":
      dAudio.play();
      break;
    case "c":
      cAudio.play();
      break;
    case "v":
      vAudio.play();
      break;
    case "g":
      gAudio.play();
      break;
    case "b":
      bAudio.play();
      break;
    case "h":
      hAudio.play();
      break;
    case "n":
      nAudio.play();
      break;
    case "j":
      jAudio.play();
      break;
    case "m":
      mAudio.play();
      break;
      default: return;
  }
}

function active(key) {
  const btns = document.querySelector("."+key)
  btns.classList.add("active");
  // key.addEventListener("ended", () => {
    setTimeout(()=>{
      btns.classList.remove("active");
    },500)
  // });
}

// const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
// const BLACK_KEYS = ["s", "d", "g", "h", "j"];
// const whiteKeys = document.querySelectorAll(".key.white");
// const blackKeys = document.querySelectorAll(".key.black");
// keys.forEach(key => {
//   key.addEventListener('click', () => playNote(a))
// })
// document.addEventListener("keydown", (e) => {
//   if (e.repeat) {
//     return;
//   }
//   const key = e.key;
//   const whiteKeyIndex = WHITE_KEYS.indexOf(key);
//   const blackKeyIndex = BLACK_KEYS.indexOf(key);
//   if (whiteKeyIndex > -1) {
//     playNote(whiteKeys[whiteKeyIndex]);
//   }
//   if (blackKeyIndex > -1) {
//     playNote(blackKeys[blackKeyIndex]);
//   }
// });
// function playNote(key) {
//   const noteAudio = document.getElementById(key.dataset.note);
//   noteAudio.currentTime = 0;
//   noteAudio.play();
//   key.classList.add("active");
//   noteAudio.addEventListener("ended", () => {
//     key.classList.remove("active");
//   });
// }
