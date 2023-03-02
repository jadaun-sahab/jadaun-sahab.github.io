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





let prev2 = document.getElementById('previous2');
    let next2 = document.getElementById('next2');

    let arr2 = ["https://github-readme-stats.vercel.app/api/top-langs?username=jadaun-sahab&show_icons=true&locale=en&layout=compact", "https://github-readme-stats.vercel.app/api?username=jadaun-sahab&show_icons=true&locale=en", "https://github-readme-streak-stats.herokuapp.com?user=jadaun-sahab&theme=vue&border_radius=4.3"];

    let j=0;
    
    next2.addEventListener('click', function () {
        
        j++;
        if (j > arr2.length - 1) {
            j = 0;
        }
        document.getElementById('image2').src = arr2[j];
    })

    prev2.addEventListener('click', function () {
        j--;
        if (j < 0) {
            j = arr2.length - 1;
        }
        document.getElementById('image2').src = arr2[j];
    })
  
  function slides2() {
    document.getElementById("image2").src = arr2[j];

    if (j < arr2.length - 1) j++;
    else j = 0;
  }
  setInterval(slides2, 2000);

