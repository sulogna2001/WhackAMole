const score = document.querySelector(".score span");
    const holes = document.querySelectorAll(".hole");
    const playBtn = document.querySelector(".buttons .play");
    const stopBtn = document.querySelector(".buttons .stop");
    const cursor = document.querySelector(".cursor img");

window.addEventListener("mousemove", (e) => {
   cursor.setAttribute("style","top : "+ (e.pageY -10) + "px; left: " +(e.pageX - 10)+ "px;")

   window.addEventListener("click", () =>{

    cursor.style.animation="hit 0.1s ease";
    setTimeout(() =>{
      cursor.style.removeProperty("animation")
    },100);
   });
})
   playBtn.addEventListener("click",()=>{
     playBtn.style.display ="none";
     stopBtn.style.display="inline-block";

     let hole;
     let points=0;

     const startGame= setInterval(() =>{
       // const array={0,1,2,3,4,5,6,7,8}
       //selecting random no. btw 1 to 9
      let arrayNo= Math.floor (Math.random() * 9);
      hole=holes[arrayNo];

      // creating image tag so it can appear in the random hole
      let image= document.createElement("img");
      image.setAttribute("src","images/mole.png");
      image.setAttribute("class","mole");

      hole.appendChild(image);//insert the mole image on the random hole

      // to stop appearing of mole repeatedly on same hole remove child is given
      setTimeout(()=>{
        hole.removeChild(image);
      },800);
      // both remove child and appear canot be sam then it will give a error
      
     },1000);

     window.addEventListener("click",(e) => {
       // if only the hammer hits the hole the points will increase otherwise won't
       // and once it hits will increase the score
      if(e.target==hole)
          score.innerText=points++;
     });

     stopBtn.addEventListener("click",() =>{
       clearInterval(startGame); //it calls the start fgame function after stopping
       stopBtn.style.display="none";
       playBtn.style.display="inline-block";
       score.innerText=0;// after stopping resetting the score to zero again
     });

   });



