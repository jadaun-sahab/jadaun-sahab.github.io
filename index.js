/* --------------------------------------------------PROJECT------------------------------------------------------ */

let viewmore = document.getElementById("morep");
let na = document.getElementById("more");
viewmore.style.display = "none";
function showmore() {
  if (viewmore.style.display == "none") {
    na.innerText = "View Less";
    viewmore.style.display = "grid";
  } else {
    na.innerText = "View More";
    viewmore.style.display = "none";
  }
}

/* --------------------------------------------------PROJECT----------------------------------------------------- */

/* -----------------------------------------------DARK-THEME----------------------------------------------------- */

let sun = document.getElementsByClassName(".fa-sun");
function theme() {
  document.body.classList.toggle("dark-theme");
}

/* -----------------------------------------------DARK-THEME----------------------------------------------------- */

/* ---------------------------------------------RESUME-DOWNLOAD-------------------------------------------------- */

document.getElementById("resume-link-1").addEventListener("click", () => {
  window.location.assign(
    "https://drive.google.com/file/d/192ndBi1PBzRkMeaumqFobqZ1BF-GIhAM/view?usp=share_link",
    "_blank"
  );
});

document.getElementById("resume-link-2").addEventListener("click", () => {
  window.location.assign(
    "https://drive.google.com/file/d/192ndBi1PBzRkMeaumqFobqZ1BF-GIhAM/view?usp=share_link",
    "_blank"
  );
});

/* ---------------------------------------------RESUME-DOWNLOAD-------------------------------------------------- */

/* --------------------------------------------------GITHUB------------------------------------------------------ */

let arr = [
  "https://github-readme-stats.vercel.app/api/top-langs?username=jadaun-sahab&show_icons=true&locale=en&layout=compact",
  "https://github-readme-stats.vercel.app/api?username=jadaun-sahab&show_icons=true&locale=en",
  "https://github-readme-streak-stats.herokuapp.com?user=jadaun-sahab&theme=vue&border_radius=4.3",
];

let j = 0;
function slides2() {
  document.getElementById("image2").src = arr[j];
  if (j < arr.length - 1) j++;
  else j = 0;
}
setInterval(slides2, 2500);

/* --------------------------------------------------GITHUB------------------------------------------------------ */

/* ---------------------------------------------SCROLL-BG-CHANGE------------------------------------------------- */

function scrollValue() {
  var navbar = document.getElementById("nav-menu");
  var scroll = window.scrollY;
  if (scroll < 200) {
    navbar.classList.remove("BgColour");
  } else {
    navbar.classList.add("BgColour");
  }
}

window.addEventListener("scroll", scrollValue);

/* ---------------------------------------------SCROLL-BG-CHANGE------------------------------------------------- */


