<template>
  <div class="bg-gray-800 text-white py-3">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center text-sm">
        <div class="flex items-center space-x-4">
          <span class="flex items-center">
            <svg
              class="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012-2v-1a2 2 0 012-2h2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            {{ currentDate }}
          </span>
          <span class="hidden md:block">|</span>
          <span class="hidden md:block">{{ weatherInfo }}</span>
        </div>
        <div class="flex items-center space-x-4">
          <a href="#" class="hover:text-blue-300 transition-colors">Obuna bo‘lish</a>
          <a href="#" class="hover:text-blue-300 transition-colors">Yangiliklar</a>
          <a href="#" class="hover:text-blue-300 transition-colors">Bog'lanish</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useWeather } from '~/composables/useWeather';

// Sana uchun reaktiv holat
const currentDate = ref('');

// Ob-havo uchun composable
const { weatherInfo, fetchWeather } = useWeather();

// Sanani yangilash
function updateDate() {
  const days = [
    'Yakshanba',
    'Dushanba',
    'Seshanba',
    'Chorshanba',
    'Payshanba',
    'Juma',
    'Shanba',
  ];
  const months = [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'Iyun',
    'Iyul',
    'Avgust',
    'Sentyabr',
    'Oktyabr',
    'Noyabr',
    'Dekabr',
  ];
  const now = new Date();
  currentDate.value = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}, ${now.getFullYear()}`;
}

// Komponent yuklanganda ishga tushirish
onMounted(() => {
  updateDate();
  fetchWeather();
});
</script>