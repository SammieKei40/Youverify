<template>
    <div
        class="relative md:max-h-screen min-h-screen bg-white flex flex-col items-stretch w-full overflow-hidden @container">
        <!-- Top bar -->
        <TopBar @toggle-sidebar="toggleSidebar" />

        <div class="flex">
            <!-- Side bar -->
            <transition name="sidebar" mode="out-in">

                <div :class="[
                    `h-full z-10 shadow-sm border-r  sidebar`,
                    showSide ? 'w-[241px]' : 'hidden  md:w-[50px]' 
                ]"  >
                    <SideBar  @toggle-sidebar="toggleSidebar"/>
                </div>
            </transition>

            <!-- Main content -->
            <div class="w-full h-full bg-gray-400">
                <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
                    <div class="border border-gray-300 rounded-md p-[20px] h-full">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showSide = ref(true);

const toggleSidebar = () => {
    showSide.value = !showSide.value;
};
</script>

<style>

.sidebar {
    transition: width 0.9s ease-in-out;
}

.sidebar-enter,
.sidebar-leave-to {
    width: 241px;
    /* Original sidebar width */
    /* Adjust the width as per your design */
}

.showSide {
    width: 50px;
    /* Adjust the width as per your design */
}</style>
