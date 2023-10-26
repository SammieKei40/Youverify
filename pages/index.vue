<template>
    <div class="w-full m-0 p-0 overflow-x-hidden">
        <div class="grid  grid-cols-1 h-screen lg:grid-cols-12">
            <div class="col-span-4 ">
                <header class="bg-[#46B2C8] p-3 font-semibold text-white h-[42px]">
                    Task
                </header>

                <TaskBox />
            </div>
            <div class="col-span-4 bg-white">
                <leaflet-map :center="mapCenter" :zoom="mapZoom"/>
            </div>
            <div class="col-span-4 ">
                <header class="flex items-center justify-between bg-[#46B2C8] p-3 font-semibold text-white h-[42px]">
                        Agents

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70859 1.49988C4.72736 1.49988 1.49994 4.65602 1.49994 8.54932C1.49994 12.4426 4.72736 15.5988 8.70859 15.5988C10.4114 15.5988 11.9762 15.0214 13.2097 14.056L15.5528 16.3414L15.6151 16.3939C15.8327 16.5513 16.141 16.5334 16.3379 16.3404C16.5544 16.1281 16.554 15.7844 16.3369 15.5726L14.0213 13.3141C15.1986 12.0594 15.9172 10.3864 15.9172 8.54932C15.9172 4.65602 12.6898 1.49988 8.70859 1.49988ZM8.70862 2.58562C12.0766 2.58562 14.807 5.25563 14.807 8.54926C14.807 11.8429 12.0766 14.5129 8.70862 14.5129C5.34061 14.5129 2.6103 11.8429 2.6103 8.54926C2.6103 5.25563 5.34061 2.58562 8.70862 2.58562Z" fill="white"/>
    </svg>

                    </header>

                    <AgentsBox/>
            </div>
        </div>
    </div>
</template>

<script setup>
import LeafletMap from '../components/map/LeafletMap.vue'
definePageMeta({
    layout: "d-board",
});


</script>

<style lang="scss" scoped>

</style>