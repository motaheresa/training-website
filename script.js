let iconheaderele=document.querySelector(".header .header-container .navbar ul li i")
console.log(iconheaderele)
let navele=document.querySelectorAll(".header .header-container .navbar ul li.sp .z a")
let hedercontentele=document.querySelector(".header .header-container .header-content h1")
console.log(hedercontentele)
console.log(navele)
let i=1;

iconheaderele.addEventListener("click",()=>{
            i++
            if(i%2==0){
            navele.forEach((ele)=>{
                        ele.style.display="grid"
            })
            hedercontentele.style.marginTop="180px"
            }else{
            navele.forEach((ele)=>{
            ele.style.display="none"
            })
            hedercontentele.style.marginTop="0"
            }
})
