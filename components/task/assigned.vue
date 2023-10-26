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
                <span class="text-[#ACB6BE] font-normal text-base">
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
        id: 8,
        name: "Linda Martinez",
        address: "444 Willow Road, Anyplace",
        company: "YZA Enterprises",
        timestamp: "8 Days Ago",
    },
    {
        id: 9,
        name: "Mike Taylor",
        address: "555 Maple Drive, Somewhither",
        company: "BCD Corporation",
        timestamp: "9 Days Ago",
    },
    {
        id: 10,
        name: "Grace Scott",
        address: "666 Oakwood Circle, Elsewhence",
        company: "FGH Ltd.",
        timestamp: "10 Days Ago",
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
    {
        id: 14,
        name: "Sophia Davis",
        address: "111 Willowwood Road, Anywhence",
        company: "RST Enterprises",
        timestamp: "14 Days Ago",
    },
    {
        id: 15,
        name: "William Lee",
        address: "222 Mapleville Drive, Elsewhither",
        company: "UVW Corporation",
        timestamp: "15 Days Ago",
    },
    {
        id: 16,
        name: "Ava Evans",
        address: "333 Oak Lane, Nowhereabouts",
        company: "XYZ Group",
        timestamp: "16 Days Ago",
    },
    {
        id: 17,
        name: "James Hall",
        address: "444 Birch Road, Herehence",
        company: "ABC Industries",
        timestamp: "17 Days Ago",
    },
    {
        id: 18,
        name: "Emma King",
        address: "555 Cedar Circle, Everywhereabouts",
        company: "DEF Ltd.",
        timestamp: "18 Days Ago",
    },
    {
        id: 19,
        name: "Michael Young",
        address: "666 Pine Street, Anywhereabouts",
        company: "GHI Enterprises",
        timestamp: "19 Days Ago",
    },
    {
        id: 20,
        name: "Oliver Turner",
        address: "777 Willow Drive, Someplace",
        company: "JKL Co.",
        timestamp: "20 Days Ago",
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
