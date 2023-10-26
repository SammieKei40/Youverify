<template>
  <div
    class="h-[72px] bg-white flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
  >
    <Header />
    <!-- Hambuger menu -->
    <div
      class="cursor-pointer px-3 md:px-[48px] w-[30px]"
      @click="toggleSidebar"
    >
      <svg
        width="30"
        height="30"
        class="bg-white rounded-full p-1 shadow"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_0_690)">
          <path
            d="M5.82082 10.7525C5.75534 10.911 5.75534 11.089 5.82082 11.2475C5.85244 11.326 5.89915 11.3977 5.95832 11.4583L10.5417 16.0416C10.6632 16.1632 10.8281 16.2315 11 16.2315C11.1719 16.2315 11.3368 16.1632 11.4583 16.0416C11.5799 15.9201 11.6482 15.7552 11.6482 15.5833C11.6482 15.4114 11.5799 15.2465 11.4583 15.125L7.97958 11.6462L15.5833 11.6508C15.6689 11.6511 15.7537 11.6345 15.8328 11.602C15.9119 11.5694 15.9838 11.5215 16.0443 11.4609C16.1048 11.4004 16.1528 11.3286 16.1853 11.2494C16.2179 11.1703 16.2345 11.0855 16.2342 11C16.2345 10.9144 16.2179 10.8296 16.1853 10.7505C16.1528 10.6714 16.1048 10.5995 16.0443 10.539C15.9838 10.4785 15.9119 10.4305 15.8328 10.3979C15.7537 10.3654 15.6689 10.3488 15.5833 10.3491L7.97957 10.3537L11.4583 6.87495C11.5799 6.75339 11.6482 6.58852 11.6482 6.41662C11.6482 6.24471 11.5799 6.07984 11.4583 5.95828C11.3368 5.83672 11.1719 5.76843 11 5.76843C10.8281 5.76843 10.6632 5.83672 10.5417 5.95828L5.95832 10.5416C5.89915 10.6022 5.85244 10.6739 5.82082 10.7525Z"
            fill="#0F808C"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_690">
            <rect
              width="15.5564"
              height="15.5564"
              fill="white"
              transform="translate(11 22) rotate(-135)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
    <!-- Search bar -->

    <div class="flex w-full justify-between">
      <div class="hidden md:grid md:grid-cols-12 justify-center">
        <!-- Search bar -->
        <form class="flex items-center w-[249px] col-span-10">
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 pointer-events-none">
              <div class="relative">
                <button
                  @click="toggleDropdown"
                  class="text-[#999999] flex justify-between border w-20 p-2 rounded"
                >
                  All
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.24106 7.7459C4.53326 7.44784 4.99051 7.42074 5.31272 7.66461L5.40503 7.7459L12 14.4734L18.595 7.7459C18.8872 7.44784 19.3444 7.42074 19.6666 7.66461L19.7589 7.7459C20.0511 8.04396 20.0777 8.51037 19.8386 8.83904L19.7589 8.93321L12.582 16.2541C12.2898 16.5522 11.8325 16.5793 11.5103 16.3354L11.418 16.2541L4.24106 8.93321C3.91965 8.60534 3.91965 8.07376 4.24106 7.7459Z"
                      fill="#999999"
                    />
                  </svg>
                </button>

                <div
                  v-if="isDropdownOpen"
                  class="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow"
                >
                  <!-- Dropdown content -->
                  <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <input
              type="text"
              id="voice-search"
              class="bg-[#F1F1F1] border text-gray-900 text-sm rounded block w-full pl-24 focus:border-[#46B2C8] p-2.5"
              placeholder="Search..."
              required
            />
            <div
              to="/"
              class="flex absolute inset-y-0 right-0 items-center pr-3"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.67627 1.66669C5.25268 1.66669 1.66666 5.17351 1.66666 9.4994C1.66666 13.8253 5.25268 17.3321 9.67627 17.3321C11.5682 17.3321 13.307 16.6906 14.6775 15.6179L17.2809 18.1572L17.3501 18.2155C17.5918 18.3905 17.9345 18.3706 18.1532 18.1561C18.3938 17.9202 18.3933 17.5383 18.1521 17.303L15.5793 14.7936C16.8874 13.3995 17.6859 11.5406 17.6859 9.4994C17.6859 5.17351 14.0999 1.66669 9.67627 1.66669ZM9.67627 2.87313C13.4185 2.87313 16.4522 5.83982 16.4522 9.4994C16.4522 13.159 13.4185 16.1257 9.67627 16.1257C5.93404 16.1257 2.90035 13.159 2.90035 9.4994C2.90035 5.83982 5.93404 2.87313 9.67627 2.87313Z"
                  fill="#999999"
                />
              </svg>
            </div>
          </div>
        </form>
      </div>
      <!-- User login -->
      <div class="ml-6 col-span-2">
        <div
          class="flex items-center justify-start space-x-4"
          @click="toggleDrop"
        >
          <div class="relative border bg-[#C2E2E9] p-2  rounded-full">
            <!-- Notification icon -->
            <div class="relative inline-block">
              <!-- Notification icon itself -->
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0638 12.3696C20.3016 11.4794 19.9552 10.7081 19.9552 9.39756V8.95196C19.9552 7.24421 19.5621 6.1439 18.7076 5.04358C17.3905 3.33478 15.1733 2.30487 13.0027 2.30487H12.9104C10.7854 2.30487 8.63762 3.28748 7.29772 4.92693C6.39651 6.04931 5.95782 7.19692 5.95782 8.95196V9.39756C5.95782 10.7081 5.63426 11.4794 4.84919 12.3696C4.27154 13.0253 4.08694 13.8682 4.08694 14.7804C4.08694 15.6936 4.38666 16.5586 4.98816 17.2616C5.77322 18.1045 6.88186 18.6425 8.01434 18.7361C9.65395 18.9231 11.2936 18.9935 12.957 18.9935C14.6195 18.9935 16.2591 18.8758 17.8997 18.7361C19.0312 18.6425 20.1398 18.1045 20.9249 17.2616C21.5253 16.5586 21.8261 15.6936 21.8261 14.7804C21.8261 13.8682 21.6415 13.0253 21.0638 12.3696Z"
                  fill="#0F808C"
                />
                <path
                  opacity="0.4"
                  d="M15.0525 20.2823C14.5309 20.1709 11.3523 20.1709 10.8306 20.2823C10.3847 20.3853 9.90244 20.6249 9.90244 21.1503C9.92836 21.6516 10.2219 22.0941 10.6284 22.3747L10.6273 22.3757C11.1531 22.7856 11.7702 23.0462 12.4163 23.1397C12.7606 23.187 13.1111 23.1849 13.4679 23.1397C14.113 23.0462 14.73 22.7856 15.2558 22.3757L15.2548 22.3747C15.6613 22.0941 15.9548 21.6516 15.9807 21.1503C15.9807 20.6249 15.4985 20.3853 15.0525 20.2823Z"
                  fill="#0F808C"
                />
              </svg>

              <!-- Notification count -->
              <div
                class="absolute -top-2 -right-1 w-4 h-4 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center"
              >
                2
              </div>
            </div>
          </div>
          <img
            class="w-10 h-10 rounded-full border-2"
            src="/smiling.png"
            alt=""
          />
          <button
            type="button"
            class="flex justify-center items-center gap-4 rounded-md py-2 bg-white text-sm font-medium text-[#0B0A0A]"
            id="options-menu"
            aria-haspopup="listbox"
          >
            <span
              class="flex items-center gap-2 text-[#023A59] whitespace-nowrap text-base font-normal leading-6"
            >
              Solomon
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
        <!-- Drop down -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits();

const toggleSidebar = () => {
  emit("toggle-sidebar");
};

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>
