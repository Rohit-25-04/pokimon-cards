const input=document.querySelector("#input")
const btn=document.querySelector("#btn")
const info=document.querySelectorAll(".info")
const about=document.querySelector("#about")
const crdbox=document.querySelector("#cards-box")

input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
          srch();
    input.value=""
    }
})
input.addEventListener("input",srch)
function srch(){
const search=input.value.trim().toLowerCase()
info.forEach(item=>{
    const detail=item.textContent.toLowerCase()
    if(detail.includes(search)){
        item.style.display="block"
    }
    else{
        item.style.display="none"
    }
     
})
}
 btn.addEventListener("click",()=>{
    srch();
    input.value=""
 })


 info.forEach(item=>{
    
    item.addEventListener("click",()=>{
 crdbox.classList.add("hidden");
 about.classList.remove("hidden");
            const name=item.querySelector("div").textContent.trim()
             const image=item.querySelector("img"). src
             const type=item.querySelector("#type").textContent
             const height=item.querySelector("#height").textContent
                const weight=item.querySelector("#weight").textContent
                  const BaseExp=item.querySelector("#baseexp").textContent
                    const growth=item.querySelector("#growth").textContent
              
        about.innerHTML=`
        <button id="backbtn" class="ml-7 bg-sky-600 border-2 rounded-2xl w-16">back</button>
        <div class="w-screen flex gap-5 justify-center mt-14">
       <div class="h-auto  "> <img class=" h-80 w-60 object-contain rounded shadow" src="${image}">
         </div>
        <div class="    grid place-content-centre border-2 h-auto w-80">
        <div class="p-6">
         <h1>Name:${name}</h1>
         <h2>type:${type}</h2>
        <h2>height:${height}</h2>
        <h2>weight:${weight}</h2>
        <h2>Base-Exp:${BaseExp}</h2>
        <h2>Growth:${growth}</h2>
        </div>
        </div>
        </div>`;
          const  backbtn=document.querySelector("#backbtn")
          backbtn.addEventListener("click",()=>{
           crdbox.classList.remove("hidden");
about.classList.add("hidden");
  info.forEach(item => {
    item.style.display = "block";
  });
          })
    })
 })