const navibar = document.querySelector(".navi");

document.addEventListener("scroll", () => {
  if (scrollY > 5) {
    navibar.style.background = "black";
  } else {
    navibar.style.background = "none";
  }
});

//.........................mainslide............................

const data = [
  { img: "./image/mainslide-03-1.jpg" },
  { img: "./image/mainslide-04-1.jpg" },
  { img: "./image/mainslide-01-1.jpg" },
];

const imgElement = document.querySelector("#mainslide-img");

const txt = document.querySelector(".ta");

let count = 0;
timer = setInterval(() => {
  count += 1;
  let si = count % data.length;
  imgElement.src = data[si].img;
  console.log(imgElement);
}, 10 * 1000);

// --------------------------------------------------------------
