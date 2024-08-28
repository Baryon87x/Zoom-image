const zoomableContener = document.querySelector('.zoomable-container');
const zoomableImg = document.querySelector('.zoomable-img');

 zoomableContener.addEventListener('mousemove',imgZoom);

 function imgZoom(e) {
    const zoomableContenerInfo = zoomableContener.getBoundingClientRect();
    console.log(e);
    const x = e.clientX - zoomableContenerInfo.left;
    const y = e.clientY - zoomableContenerInfo.top
    const percentXInContainer = (x / zoomableContenerInfo.width) * 100;    
    const percentYInContainer = (y / zoomableContenerInfo.height) * 100;
    zoomableImg.style.transformOrigin = `${percentXInContainer}% ${percentYInContainer}%`;    
 }