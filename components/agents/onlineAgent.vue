<template>
    <div v-for="item in data" :key="item.id"
        class="flex items-center justify-between border  bg-[#FEFEFE] border-[#F1F1F1]  p-3">
        <div class="flex gap-5 items-center">
            <div class="flex flex-col justify-center items-center w-12">
                <img :src="item.picture_url" alt="" class="rounded-full w-20">
            </div>

            <div class="flex flex-col gap-1">
                <span class="text-black font-medium text-md">{{ item.full_name }}</span>
                <span class="text-[#ACB6BE] font-normal text-base">{{ item.number }}</span>
                <span class="text-[#ACB6BE] font-medium text-base">{{ item.state }}</span>
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
        "id": 10,
        "full_name": "Olivia Martin",
        "number": "+9876987698",
        "state": "Benue",
        "picture_url": "/man1.png"
    },
    {
        "id": 11,
        "full_name": "James Anderson",
        "number": "+5555444433",
        "state": "Akwa Ibom",
        "picture_url": "/smiling.png"
    },
    {
        "id": 12,
        "full_name": "Emily Harris",
        "number": "+7777333222",
        "state": "Kaduna",
        "picture_url": "/man2.png"
    },
    {
        "id": 13,
        "full_name": "Liam Wilson",
        "number": "+2222111100",
        "state": "Plateau",
        "picture_url": "/smiling.png"
    },
    {
        "id": 14,
        "full_name": "Ava Johnson",
        "number": "+6666777888",
        "state": "Cross River",
        "picture_url": "/man2.png"
    },
    {
        "id": 15,
        "full_name": "Noah Davis",
        "number": "+1234567890",
        "state": "Imo",
        "picture_url": "/man1.png"
    },
    {
        "id": 16,
        "full_name": "Isabella Lee",
        "number": "+1111222333",
        "state": "Delta",
        "picture_url": "/man2.png"
    },
    {
        "id": 17,
        "full_name": "Oliver Martinez",
        "number": "+5555666777",
        "state": "Kogi",
        "picture_url": "/smiling.png"
    },
    {
        "id": 18,
        "full_name": "Mia Brown",
        "number": "+7777666555",
        "state": "Nasarawa",
        "picture_url": "/man1.png"
    },
    {
        "id": 19,
        "full_name": "Ethan Harris",
        "number": "+5555555555",
        "state": "Taraba",
        "picture_url": "/smiling.png"
    },
    {
        "id": 20,
        "full_name": "Emma Wilson",
        "number": "+9998887777",
        "state": "Yobe",
        "picture_url": "/man2.png"
    }
]
)



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
