<template>
    <div class="relative md:max-h-screen min-h-screen bg-white md:flex w-full overflow-hidden">
        <!-- Top bar -->
        <div class="flex flex-col flex-1 overflow-hidden">
            <TopBar @toggle-sidebar="toggleSidebar" class="" />

            <!-- Side bar -->
            <!-- Main content -->
            <div class="flex overflow-auto min-h-screen md:min-h-0 md:overflow-y-hidden md:px-auto md:pt-auto text-base">
                <transition name="sidebar-slide" mode="out-in">
                    <div class="h-full z-10 shadow-sm border-r sidebar"
                        :style="{ 'max-width': showSide ? '241px' : '0', opacity: showSide ? 1 : 0 }">
                        <SideBar @toggle-sidebar="toggleSidebar" />
                    </div>
                </transition>
                <slot></slot>
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

<style scoped>
.sidebar {
    transition: max-width 0.9s ease-in-out, opacity 0.9s ease-in-out;
}

.sidebar-slide-enter-active,
.sidebar-slide-leave-active {
    transition: max-width 0.9s ease-in-out, opacity 0.9s ease-in-out;
}

.sidebar-slide-enter,
.sidebar-slide-leave-to {
    max-width: 0;
    opacity: 0;
}

.sidebar-slide-enter-to,
.sidebar-slide-leave {
    max-width: 241px;
    opacity: 1;
}
</style>
