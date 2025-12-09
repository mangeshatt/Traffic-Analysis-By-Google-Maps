let map;
let trafficLayer;
let trafficVisible = true;

function initMap() {
  const initialCenter = { lat: 18.52043, lng: 73.856743 }; // Pune

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: initialCenter,
    mapTypeId: "roadmap",
  });

  trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

  setupUI();
}

function setupUI() {
  const latInput = document.getElementById("lat");
  const lngInput = document.getElementById("lng");
  const zoomInput = document.getElementById("zoom");
  const updateCenterBtn = document.getElementById("updateCenter");
  const toggleTrafficCheckbox = document.getElementById("toggleTraffic");
  const snapshotBtn = document.getElementById("snapshot");

  updateCenterBtn.addEventListener("click", () => {
    const lat = parseFloat(latInput.value);
    const lng = parseFloat(lngInput.value);
    const zoom = parseInt(zoomInput.value, 10) || 13;

    if (!isFinite(lat) || !isFinite(lng)) {
      alert("Please enter valid coordinates.");
      return;
    }

    const center = { lat, lng };
    map.setCenter(center);
    map.setZoom(zoom);
  });

  toggleTrafficCheckbox.addEventListener("change", (e) => {
    trafficVisible = e.target.checked;
    trafficLayer.setMap(trafficVisible ? map : null);
  });

  snapshotBtn.addEventListener("click", () => {
    addSnapshot();
  });
}

function addSnapshot() {
  const center = map.getCenter();
  const zoom = map.getZoom();

  const item = document.createElement("li");
  const timestamp = new Date().toLocaleString();

  item.textContent = `[${timestamp}] Center: ${center.lat().toFixed(
    5
  )}, ${center.lng().toFixed(5)} | Zoom: ${zoom} | Traffic: ${
    trafficVisible ? "ON" : "OFF"
  }`;

  const list = document.getElementById("snapshotList");
  list.prepend(item);
}

// Make initMap available for the Google Maps callback
window.initMap = initMap;
