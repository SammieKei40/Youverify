<template>
    <div class="h-screen bg-white py-[2px]">
        
        <div class="flex flex-col justify-between space-y-[10px]" >
            <div class="flex flex-col z-10 justify-start w-full mx-auto mb-8 gap-2 py-3 px-6">
                <span class=" font-bold text-[#115766]">Cheta And Daughters Limited</span>
                <span class="text-[#115766] font-normal">RC123456789</span>
                
            </div>
            <!-- Show both icon and text -->
            <nuxt-link v-for="(item, index) in displayedItems" :key="index" :to="item.link" @click="setActive(index)"
                class="py-1  flex justify-between items-center cursor-pointer  rounded-md" :exact="true"
                :active-class="activeIndex === index ? 'bg-pry' : ''">
                <div :class="[
                    `flex items-center justify-start w-full mx-auto gap-2 py-3  px-6`,
                    activeIndex === index
                        ? 'text-white bg-[#46B2C8] border-l-4 border-[#115766]'
                        : 'text-black'
                ]" >
                    <component :is="item.icon" :color="activeIndex === index ? '#fff' : '#46B2C8'" />
                    <h2  :class="[
                        `ml-2 lg:inline-block truncate`
                    ]"  >{{ item.text }}</h2>
                </div>
            </nuxt-link>
        </div>

    </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { GlWork, FaUsers, FlDocumentOnePage, BsShieldFillCheck, PxBuildings, CdSettingsGear } from "@kalimahapps/vue-icons";

const emit = defineEmits();

const toggleSidebar = () => {
  emit("toggle-sidebar");
};

const activeIndex = ref(parseInt(localStorage.getItem("activeIndex")) || 0);

const allItems = [
  { text: "Dashboard", link: "", icon: GlWork },
  { text: "Agents", link: "", icon: FaUsers },
  { text: "Task", link: "", icon: FlDocumentOnePage },
  { text: "Teams", link: "", icon:  BsShieldFillCheck },
  { text: "Users", link: "", icon: PxBuildings },
  { text: "Settings", link: "", icon: CdSettingsGear },
];

const displayedItems = ref([]);

const setActive = (index) => {
  activeIndex.value = index;
  localStorage.setItem("activeIndex", index);

  // Emit a custom event to inform other components about the active page
  const event = new CustomEvent("active-page-changed", {
    detail: displayedItems.value[index].text,
  });
  window.dispatchEvent(event);
};

onMounted(() => {
  const storedIndex = localStorage.getItem("activeIndex");
  if (storedIndex) {
    activeIndex.value = parseInt(storedIndex);
  }
});

onMounted(() => {
  const user = JSON.parse(localStorage.getItem("user")) || "";
  const loginUser = user.role;
  if (loginUser === "Brm" && user.business === "PayMe") {
    displayedItems.value = BRM;
  } else if (loginUser === "Super Admin" && user.business !== "PayMe") {
    displayedItems.value = Business;
  } else if (loginUser === "Aggregator") {
    displayedItems.value = Aggregators;
  } else {
    displayedItems.value = allItems;
  }

  setActive(activeIndex.value);
});
</script>

<style lang="scss" scoped></style>
