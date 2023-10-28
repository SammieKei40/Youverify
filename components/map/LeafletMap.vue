<!-- components/LeafletMap.vue -->
<template>
    <div>
        <div id="map" class="leaflet-map h-screen"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import L from 'leaflet';

onMounted(() => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            const map = L.map('map').setView([lat, lng], 13);
            var marker = L.marker([lat, lng]).addTo(map);
            var popup = L.popup()
                .setLatLng([lat, lng])
                .setContent("We are a B2B company that builds SaaS and PaaS compliance products to help businesses establish economic relationships without compliance worries")
                .openOn(map);

            // Add a tile layer (e.g., OpenStreetMap) to the map, not to marker or popup
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        }, (error) => {
            console.error("Error getting location:", error.message);
        });
    } else {
        console.error("Geolocation is not available in this browser.");
    }
});
</script>

<style scoped></style>
