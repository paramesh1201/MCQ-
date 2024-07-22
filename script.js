const option=document.querySelector(".options");

option.addEventListener("click",function(e){
    if(e.target.classList.contains("D")){
        e.target.style.backgroundColor="green";
    }else{
        e.target.style.backgroundColor="red";
        document.querySelector(".D").style.backgroundColor="green";
    }
});