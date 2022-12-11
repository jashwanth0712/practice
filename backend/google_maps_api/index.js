let map;
  // define global array to store markers added
  let markersArray = []; 

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
    map.addListener('click', function(e) {
        console.log(e);
        console.log("maps array is :")
        addMarker(e.latLng);
      });
  }
  
  // define function to add marker at given lat & lng
  function addMarker(latLng) {
    let marker = new google.maps.Marker({
        map: map,
        position: latLng,
        draggable: true
    });

    //store the marker object drawn on map in global array
    markersArray.push(marker);
    
  }
