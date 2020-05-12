    
    var i = 0;
    var images = [];
    var time = 3000;

    images[0] = 'img_1.jpg';
    images[1] = 'img_2.jpg';
    images[2] = 'img_3.jpg';


function slideShow(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("slideShow()", time);
}

window.onload = slideShow;