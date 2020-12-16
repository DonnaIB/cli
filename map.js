function initMap() {
  const myLatLng = { lat: 53.31952608924311, lng: -6.2276343192623775 };   
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: myLatLng,
  });


const myMarks = [
    {"lat": 53.298750804089785, "lng": -6.178747830803757, "name": "HQ", "info": "This is our HQ, where we plan all our amazing events and create quizes to help you learn!"},
    {"lat": 53.33821423236237, "lng": -6.237388486160337, "name": "Intercambio", "info": "Here is where our intercambios take place every Monday and Friday"},  
];

var InfoObj = [];

for(let i=0; i < myMarks.length; i++) {
    let contentString = '<h3>' + myMarks[i].name + '</h3>' + '<p>' + myMarks[i].info + '</p>' + '<a href="https://developers.google.com/maps/documentation/javascript/overview">' + 'Click me!' + '</a>';
    const marker = new google.maps.Marker ({
        position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
        map: map,
        title: myMarks[i].name,
        animation: google.maps.Animation.DROP,
    });

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 500
    });

    marker.addListener('click', function() {
        closeOtherInfo();
        infowindow.open(map, marker);
        InfoObj[0] = infowindow;
    })

    function closeOtherInfo() {
        if(InfoObj.length > 0) {
            InfoObj[0].set("marker", null)
            InfoObj[0].close();
            InfoObj[0].length = 0;
        }
    }

}
}

