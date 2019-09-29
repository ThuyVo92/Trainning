function initmap() {
    var mapProp = {
        center: new google.maps.LatLng(13.681359, 108.280993),
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), mapProp);
}

initmap();

var openButton = document.getElementById('trailerButton');
var video = document.getElementById('video');

document.onclick = function(e) {
    if(e.target.id !== 'video' && e.target.id !== openButton){
        video.style.display = 'none'; 
    }
    if(e.target === openButton){
        video.style.display = 'block';
    }
};
