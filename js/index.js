document.addEventListener('DOMContentLoaded', function () {
    var slider_img = document.querySelector('#slide-1');
    var images = ['slide1.jpeg', 'slide2.jpeg', 'slide3.jpeg'];
    var i = 0;

    function prev(){
        if(i <= 0) i = images.length;	
        i--;
        console.log('213123')
        return setImg();			 
    }
    
    function next(){
        if(i >= images.length-1) i = -1;
        i++;
        return setImg();			 
    }
    
    function setImg(){
        return slider_img.setAttribute('src', '/img/index/'+images[i]);
        
    }

    document.querySelector('.prev')||[].addEventListener('click', prev);
    document.querySelector('.next')||[].addEventListener('click', next);
});

