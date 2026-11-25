function changeBg(bg, title, trailer){
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    const video = document.querySelector('.trailer video');

    const background = bg.includes('/') ? bg : `./images/movies/${bg}`;
    banner.style.background = `url("${background}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if(content.classList.contains(title)){
            content.classList.add('active');
        }
    });

    if(trailer){
        video.src = `assets/${trailer}`;
        video.load();
    }
}

function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('.trailer video');
    trailer.classList.toggle('active');
    if(trailer.classList.contains('active')){
        video.currentTime = 0;
        video.play();
    } else {
        video.pause();
    }
}