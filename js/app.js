const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

// arrow

arrows.forEach((arrow,i)=>{
    const itemnum = movielists[i].querySelectorAll("img").length;
    let clickcounter = 0;
    arrow.addEventListener("click",()=>{
        const ratiio = Math.floor(window.innerWidth / 270) // num of showen images showen
        clickcounter++;
        if(itemnum - (3 + clickcounter) + (4 - ratiio) >= 0){
            // 7 - (3 + 1 ) + (4 - 2) = 1
            movielists[i].style.transform=`translateX(
                ${movielists[i].computedStyleMap().get("transform")[0].x.value
            -300}px)`;
        }
        else{
            movielists[i].style.transform="translateX(0)";
            clickcounter = 0;
        }
    })

})

// dark-ball

const ball = document.querySelector(".dark-ball");
const items = document.querySelectorAll(
    " .movie-list-title , .left-menu-list , .content , .navbar , .sidebar , .darkmo , .content"
    );
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})
