let slideIndex=0;
let totalCount = document.querySelectorAll('.slide-image').length;
showImage(0)
function showImage(n){
  let allImages = document.querySelectorAll('.slide-image');
  allImages.forEach(i=> i.style.display='none');
  allImages[n].style.display='block';  
  console.log(slideIndex);
}

const slideNextImage = function(){  
   slideIndex = slideIndex === totalCount-1? 0: slideIndex+1
   showImage(slideIndex)
}

const slidePrevImage= function(){
  slideIndex = slideIndex === 0? totalCount-1 : slideIndex-1
  showImage(slideIndex)
}

document.getElementById('next').onclick=slideNextImage;

document.getElementById('prev').onclick=slidePrevImage;

setInterval(()=>{
  slideNextImage()
},3000)
