<template>
    <div v-for="item in data" :key="item.id"
        class="flex items-center justify-between border  bg-[#FEFEFE] border-[#F1F1F1]  p-3">
        <div class="flex gap-5 items-center">
            <div class="flex flex-col justify-center items-center w-12">
                <img src="/smiling.png" alt="" class="rounded-full w-20">
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
        "id": 9,
        "full_name": "David Miller",
        "number": "+5555666677",
        "state": "Ondo",
        "picture_url": "https://example.com/davidmiller.jpg"
    },
    {
        "id": 10,
        "full_name": "Olivia Martin",
        "number": "+9876987698",
        "state": "Benue",
        "picture_url": "https://example.com/oliviamartin.jpg"
    },
    {
        "id": 16,
        "full_name": "Isabella Lee",
        "number": "+1111222333",
        "state": "Delta",
        "picture_url": "https://example.com/isabellalee.jpg"
    },
    {
        "id": 17,
        "full_name": "Oliver Martinez",
        "number": "+5555666777",
        "state": "Kogi",
        "picture_url": "https://example.com/olivermartinez.jpg"
    },
    {
        "id": 18,
        "full_name": "Mia Brown",
        "number": "+7777666555",
        "state": "Nasarawa",
        "picture_url": "https://example.com/miabrown.jpg"
    },
    {
        "id": 19,
        "full_name": "Ethan Harris",
        "number": "+5555555555",
        "state": "Taraba",
        "picture_url": "https://example.com/ethanharris.jpg"
    },
    {
        "id": 20,
        "full_name": "Emma Wilson",
        "number": "+9998887777",
        "state": "Yobe",
        "picture_url": "https://example.com/emmawilson.jpg"
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
