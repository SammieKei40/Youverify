<!-- components/LeafletMap.vue -->
<template>
    <div>
        <div id="map" class="leaflet-map h-screen"></div>
    </div>
</template>

<script setup>
import { onMounted, defineProps } from 'vue';
import L from 'leaflet';



onMounted(() => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
    
             nextTick();
            const map = L.map('map').setView([lat, lng], 13);
            var marker = L.marker([lat, lng]).addTo(map);
            var popup = L.popup()
                .setLatLng([lat, lng])
                .setContent("Thank you for this frontend challenge, it was fun building it")
                .openOn(map);

            // Add a tile layer (e.g., OpenStreetMap)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(marker);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(popup);
            
            // You can now use the `lat` and `lng` values as needed, e.g., set the map center.
         }, (error) => {
            console.error("Error getting location:", error.message);
        });
    } else {
        console.error("Geolocation is not available in this browser.");
    }
   
});
</script>

<style scoped></style>
