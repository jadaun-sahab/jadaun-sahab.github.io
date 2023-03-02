let viewmore =document.getElementById("morep");
let na=document.getElementById("more");
viewmore.style.display="none"
function showmore(){
    if(viewmore.style.display=="none"){
       na.innerText="View Less"
        viewmore.style.display="grid";
    }
    else{
        na.innerText="View More"
        viewmore.style.display="none"
    }
}
    // ----------------------------------------dark themee-----------------------------------------

    function theme() {
        document.body.classList.toggle("dark-theme")
    }

// ----------------------------------------dark themee-----------------------------------------





document.getElementById('resume-link-1').addEventListener("click",()=>{
  window.location.assign("https://drive.google.com/file/d/192ndBi1PBzRkMeaumqFobqZ1BF-GIhAM/view?usp=share_link", "_blank");
})

document.getElementById('resume-link-2').addEventListener("click",()=>{
  window.location.assign("https://drive.google.com/file/d/192ndBi1PBzRkMeaumqFobqZ1BF-GIhAM/view?usp=share_link", "_blank");
})
// -------------------------------------------------------------------------------------------


    let arr = ["https://github-readme-stats.vercel.app/api/top-langs?username=jadaun-sahab&show_icons=true&locale=en&layout=compact", "https://github-readme-stats.vercel.app/api?username=jadaun-sahab&show_icons=true&locale=en", "https://github-readme-streak-stats.herokuapp.com?user=jadaun-sahab&theme=vue&border_radius=4.3"];

let j=0;
  function slides2() {
    document.getElementById("image2").src = arr[j];
    if (j < arr.length - 1) j++;
    else j = 0;
  }
  setInterval(slides2, 1500);

