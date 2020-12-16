function initMap() {
  const myLatLng = { lat: 53.31952608924311, lng: -6.2276343192623775 };   
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: myLatLng,
  });


const myMarks = [
    {"lat": 53.298750804089785, "lng": -6.178747830803757, "name": "HQ"},
    {"lat": 53.33821423236237, "lng": -6.237388486160337, "name": "Intercambio"},  
];

for(let i=0; i < myMarks.length; i++) {
    
    const marker = new google.maps.Marker ({
        position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
        map: map,
        title: myMarks[i].name
    });
    console.log('working');
}
}

