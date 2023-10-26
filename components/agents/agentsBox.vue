<template>
    <div>
        <nav class=" border-b-2 border-[#F1F1F1] ">
            <ul class="flex justify-between">
                <nuxt-link v-for="(item, index) in allItems" :key="index" :to="item.link" @click="setActive(index)"
                    class="flex flex-col justify-between items-center cursor-pointer" :exact="true">
                    <div :class="[
                        `flex items-center justify-between gap-2 py-3 px-2 rounded`,
                        active === index
                            ? 'text-[#023A59] border-b-2 font-medium border-b-[#023A59] '
                            : 'text-[#C4C4C4] font-normal',
                    ]">
                        <h2 class="ml-2 lg:inline-block truncate ">
                             {{ item.text }}
                        </h2>
                    </div>
                </nuxt-link>
            </ul>


        </nav>


        <div class=" max-h-[850px] overflow-y-auto overflow-x-hidden">
            <div v-if="active === 0">


                <all-agents />
            </div>
            <div v-else-if="active === 1">
                <online-agent />
            </div>
            <div v-else-if="active === 2">
                <offline-agent />
                </div>
        </div>
    </div>
</template>

<script setup>
import OfflineAgent from './offlineAgent.vue'
import OnlineAgent from './onlineAgent.vue'
import AllAgents from './allAgents.vue'

const active = ref(parseInt(localStorage.getItem("active")) || 0);

const TotalUnAssignedLength = ref(0);
const TotalCompletedLength = ref(0);
const TotalAssignedLength = ref(0);

const allItems = [
    { text: "All", link: "#", number: `${0}` },
    { text: "Online", link: "#", number: `${0}` },
    { text: "Offline", link: "#", number: `${0}` },
];
const setActive = (index) => {
    active.value = index;
    localStorage.setItem("active", index.toString());
};

onMounted(() => {
    const storedActive = parseInt(localStorage.getItem("active"));
    if (!isNaN(storedActive)) {
        active.value = storedActive;
    }
});



const handleTotalDataLength = (totalLength) => {
    TotalUnAssignedLength.value = totalLength;
};
const handleAssignedLength = (totalLength) => {
    TotalAssignedLength.value = totalLength;
};
const handleCompletedLength = (totalLength) => {
    TotalCompletedLength.value = totalLength;
};


onMounted(async () => {
    // Fetch initial data for TotalUnAssignedLength, TotalAssignedLength, and TotalCompletedLength
    watch(() => {
        // Check if newData is not null or undefined
        if (allItems) {
            // Update the cards array with the new data
            allItems[0].number = `${TotalUnAssignedLength.value || 0}`;
            allItems[1].number = `${TotalAssignedLength.value || 0}`;
            allItems[2].number = `${TotalCompletedLength.value || 0}`;

        }
    });
});


</script>

<style lang="scss" scoped></style>