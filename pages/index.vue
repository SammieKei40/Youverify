<template>
    <div class="w-full m-0 p-0 overflow-x-hidden">
        <div class="grid  grid-cols-1 h-screen lg:grid-cols-12">
            <div class="col-span-4 ">
                <header class="bg-[#46B2C8] p-3 font-semibold text-white h-[42px]">
                    Task
                </header>

                <TaskBox />
            </div>
            <div class="col-span-4 bg-blue-600">hey</div>
            <div class="col-span-4 ">
                <header class="bg-[#46B2C8] p-3 font-semibold text-white h-[42px]">
                        Agents
                    </header>

                    <AgentsBox/>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "d-board",
});
</script>

<style lang="scss" scoped>

</style>