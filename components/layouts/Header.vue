<template>
  <header
    class="bg-white shadow-lg border-b-2 border-blue-600 sticky top-0 z-50 transition-all duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <nuxt-link to="/"
            class="text-3xl font-extrabold text-blue-600 tracking-tight transition-transform duration-300 hover:scale-105"
          >
            Сенсация Новости
          </nuxt-link>
        </div>

        <!-- Search Bar -->
        <div
          class="hidden md:flex items-center flex-1 max-w-md mx-4 lg:mx-8 relative group"
        >
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Izlash"
            class="pl-10 pr-4 py-2.5 w-full border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-all duration-300 group-hover:shadow-md"
            aria-label="Search news articles"
            @focus="searchFocused = true"
            @blur="searchFocused = false"
          />
          <svg
            class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

        <!-- Right Side -->
        <div class="flex items-center space-x-4">
          <!-- Hamburger Menu Button -->
          <button
            @click="toggleMenu"
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              :class="['w-6 h-6 transition-transform duration-300', { 'rotate-90': isMenuOpen }]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Navigation Menu (Desktop) -->
      <nav class="hidden md:block border-t border-gray-200">
        <div
          class="flex space-x-6 py-3 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-100"
        >
          <a
            v-for="item in categoiresData"
            :key="item.text"
            :href="`/category/${item.id}`"
            :class="[
              'text-sm font-medium transition-all duration-300 whitespace-nowrap px-3 py-2 rounded-full',
              item.active
                ? 'text-white bg-blue-600'
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50',
            ]"
          >
            {{ item.title.toUpperCase() }}
          </a>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition ease-in duration-200"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div v-if="isMenuOpen" class="md:hidden border-t border-gray-200 py-4">
          <div class="space-y-1">
            <!-- Mobile Search -->
            <div class="relative mb-4 px-4">
              <input
                v-model="searchTerm"
                type="text"
                placeholder="Izlash"
                class="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                aria-label="Search news articles"
              />
              <svg
                class="absolute left-7 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <a
              v-for="item in categoiresData"
              :key="item.text"
              :href="item.text"
              :class="[
                'block px-4 py-2.5 text-base font-medium rounded-lg transition-all duration-200',
                item.active
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-800 hover:text-blue-600 hover:bg-blue-50',
              ]"
            >
              {{ item.title.toUpperCase() }}
            </a>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue';

const { categoiresData, fetchCategoires } = useCategoires()

onMounted(() => {
  fetchCategoires()
})

const isMenuOpen = ref(false);
const searchTerm = ref('');
const searchFocused = ref(false);

// Toggle mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Custom Scrollbar */
.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: #2563eb #f3f4f6;
}
.scrollbar-thin::-webkit-scrollbar {
  height: 6px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 4px;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #2563eb;
  border-radius: 4px;
}
.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #1d4ed8;
}
</style>