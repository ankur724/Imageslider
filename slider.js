const left=document.querySelector(".left")
const right=document.querySelector(".right")
const slider=document.querySelector(".slider")
const images=document.querySelectorAll(".images")
const bottom=document.querySelector(".bottom")
var a=1,b=images.length;




for(let i=0;i<=length;i++){
   const div=document.createElement("div");
   div.className="button";
   bottom.appendChild(div)
}


const resetbn=()=>{
   buttons.forEach((button)=>{
      button.style.backgroundColor="transparent";
   });
};


consts=buttons=document.querySelectorAll(".button")
buttons[0].style.backgroundColor="white"


buttons.forEach((button,i)=>{

   button.addEventListener("click",()=>
   {   
      resetbn() 
      slider.style.transform=`translateY(-${( i*420)}px)`
      button.style.backgroundColor="white"
   
   })
})

right.addEventListener("click",()=>{

   var s=a*420;

   if(a<images.length)
   {

      slider.style.transform= `translateY(-${s}px)`;
      a++;
      resetbn() 
      buttons[a-1].style.backgroundColor="white"
   
   }
   else
   {
      s=0;
      slider.style.transform= `translateY(-${s}px)`;
      a=1;
      resetbn() 
      buttons[a-1].style.backgroundColor="white"
   }
})




left.addEventListener("click",()=>{

   a--;
   var s=(a-1)*420;

   if(a>=1)
   {

      console.log(a) 
      slider.style.transform= `translateY(-${s}px)`;
      resetbn() 
      buttons[a-1].style.backgroundColor="white"

   }

   else
   {
      a=images.length
      slider.style.transform= `translateY(-${(1680)}px)`;
      resetbn() 
      buttons[a-1].style.backgroundColor="white"
     
   }
})
