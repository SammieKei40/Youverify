<template>
    <div v-for="item in data" :key="item.id"
        class="flex items-center justify-between border  bg-[#FEFEFE] border-[#F1F1F1]  p-3">
        <div class="flex gap-5 items-center">
            <div class="flex flex-col justify-center items-center w-12">
                <svg width="30" height="30" class="cursor-pointer" viewBox="0 0 30 30" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#46B2C8" />
                    <path d="M15 9V21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 15H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="text-[#ACB6BE] font-normal text-[14px]"> Assign Agent </span>
            </div>

            <div class="flex flex-col gap-2">
                <span class="text-black font-medium text-md">{{ item.name }}</span>
                <span class="text-[#ACB6BE] font-normal truncate text-base">
                    {{ item.address }}
                </span>
                <span class="text-[#ACB6BE] font-normal text-base">{{ item.company }}</span>
                <span class="text-[#3056D3] font-medium text-base">{{ item.timestamp }}</span>
            </div>
        </div>
        <div class="flex cursor-pointer items-center gap-2">
            <FaAngleRight />
        </div>
    </div>
</template>

<script setup>
import { FaAngleRight } from "@kalimahapps/vue-icons";

const props = defineProps(["totalDataLength"])

const emit = defineEmits();

const data = ref([
    {
        id: 5,
        name: "Bob Williams",
        address: "101 Pine Road, Nowhere",
        company: "PQR Co.",
        timestamp: "5 Days Ago",
    },
    {
        id: 6,
        name: "Eve Adams",
        address: "222 Birch Lane, Here",
        company: "STU Group",
        timestamp: "6 Days Ago",
    },
    
    {
        id: 11,
        name: "Daniel Miller",
        address: "777 Pineville Avenue, Nowhither",
        company: "IJK Co.",
        timestamp: "11 Days Ago",
    },
    {
        id: 12,
        name: "Olivia Brown",
        address: "888 Birchville Lane, Hereabouts",
        company: "LMN Group",
        timestamp: "12 Days Ago",
    },
    {
        id: 13,
        name: "Henry White",
        address: "999 Cedarwood Street, Everyplace",
        company: "OPQ Industries",
        timestamp: "13 Days Ago",
    },

]);

const totalDataLength = ref(data.value.length);

// Emit the totalDataLength to the parent component
onMounted(() => {
    // Emit a custom event
    const emitTotalDataLength = () => {
        const totalLength = totalDataLength.value;
        // Emit the event with the total data length
        emit('totalDataLength', totalLength);
    };
    emitTotalDataLength();
});
</script>

<style lang="scss" scoped></style>
