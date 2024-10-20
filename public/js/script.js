const socket = io();

const username = prompt("Enter your name:");

socket.emit("register-user", username);

const map = L.map("map").setView([0, 0], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const markers = {};

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            console.log(`My location: Latitude ${latitude}, Longitude ${longitude}`);

            socket.emit("send-location", { latitude, longitude });

            if (!markers[socket.id]) {
                markers[socket.id] = L.marker([latitude, longitude], {
                    icon: L.icon({
                        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41]
                    })
                }).addTo(map).bindPopup(`<b>${username} (You)</b>`).openPopup();
            } else {
                markers[socket.id].setLatLng([latitude, longitude]);
            }

            map.panTo([latitude, longitude]);
        },
        (error) => {
            console.error("Geolocation error:", error);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
} else {
    console.log("Geolocation is not supported by this browser.");
}

socket.on("receive-location", (data) => {
    const { id, username, latitude, longitude } = data;

    console.log(`User ${username} (${id}) at Latitude: ${latitude}, Longitude: ${longitude}`);

    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    } else {
        markers[id] = L.marker([latitude, longitude], {
            icon: L.icon({
                iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41]
            })
        }).addTo(map).bindPopup(`<b>${username}</b>`).openPopup();
    }
});

socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        console.log(`Removing marker for user: ${id}`);
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});
