<script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '#app';
import { useNews } from '~/composables/useNews';
import { Chart, LineController, BarController, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend } from 'chart.js';

// Chart.js uchun faqat zarur komponentlarni ro'yxatdan o'tkazamiz
Chart.register(LineController, BarController, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend);

definePageMeta({
  layout: 'admin',
});
const { newsData, isLoading, error, fetchNews } = useNews();


const totalArticles = ref(0);
const subscribers = ref(1500); // Statik ma'lumot (API’da yo‘q)
const dailyVisitors = ref(1200); // Statik ma'lumot (API’da yo‘q)


// Chart ma'lumotlari (statik, API’da tashriflar ma’lumoti yo‘q)
const trafficChartData = ref({
  labels: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'],
  datasets: [{
    label: 'Kunlik Tashriflar',
    data: [1200, 1500, 1300, 1700, 2000, 1800, 1600],
    borderColor: '#2dd4bf',
    backgroundColor: 'rgba(45, 212, 191, 0.2)',
    fill: true,
    tension: 0.4,
  }],
});

const weeklyTrafficChartData = ref({
  labels: ['1-hafta', '2-hafta', '3-hafta', '4-hafta'],
  datasets: [{
    label: 'Haftalik Tashriflar',
    data: [8500, 9200, 7800, 9500],
    backgroundColor: '#2dd4bf',
    borderColor: '#2dd4bf',
    borderWidth: 1,
  }],
});

const monthlyTrafficChartData = ref({
  labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun'],
  datasets: [{
    label: 'Oylik Tashriflar',
    data: [35000, 42000, 38000, 45000, 40000, 47000],
    backgroundColor: '#2dd4bf',
    borderColor: '#2dd4bf',
    borderWidth: 1,
  }],
});

// AOS va Chart.js ni CDN orqali head qismiga qo‘shish
useHead({
  link: [{ rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css' }],
  script: [
    { src: 'https://unpkg.com/aos@next/dist/aos.js', defer: true },
    { src: 'https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js', defer: true },
  ],
});

onMounted(() => {
  // AOS ni ishga tushirish (client-side faqat)
  if (process.client) {
    import('aos').then(AOS => {
      AOS.default.init({ duration: 800, once: true });
    });

    // Kunlik Tashriflar (Line Chart)
    new Chart(document.getElementById('dailyTrafficChart'), {
      type: 'line',
      data: trafficChartData.value,
      options: {
        responsive: true,
        plugins: { legend: { display: true, labels: { color: '#e5e7eb' } } },
        scales: {
          x: { ticks: { color: '#e5e7eb' }, grid: { color: 'rgba(255,255,255,0.1)' } },
          y: { ticks: { color: '#e5e7eb' }, grid: { color: 'rgba(255,255,255,0.1)' } },
        },
      },
    });

    // Haftalik Tashriflar (Bar Chart)
    new Chart(document.getElementById('weeklyTrafficChart'), {
      type: 'bar',
      data: weeklyTrafficChartData.value,
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#e5e7eb' }, grid: { display: false } },
          y: { ticks: { color: '#e5e7eb' }, grid: { color: 'rgba(255,255,255,0.1)' } },
        },
      },
    });

    // Oylik Tashriflar (Bar Chart)
    new Chart(document.getElementById('monthlyTrafficChart'), {
      type: 'bar',
      data: monthlyTrafficChartData.value,
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#e5e7eb' }, grid: { display: false } },
          y: { ticks: { color: '#e5e7eb' }, grid: { color: 'rgba(255,255,255,0.1)' } },
        },
      },
    });
  }
  fetchNews(); // Yangiliklarni yuklash
});
</script>

<template>
  <div class="w-full p-4 md:p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
    <!-- Sarlavha -->
    <div class="mb-8" data-aos="fade-down">
      <h2 class="text-2xl font-bold text-teal-400">Sayt Tahlili</h2>
    </div>

    <!-- Statistik Kartochkalar -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div class="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105" data-aos="fade-up" data-aos-delay="0">
        <div class="flex items-center">
          <svg class="w-8 h-8 mr-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
          <h3 class="text-sm font-semibold text-gray-300">Umumiy Maqolalar</h3>
        </div>
        <p class="text-3xl font-bold text-white mt-3">{{ newsData?.length }}</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
        <div class="flex items-center">
          <svg class="w-8 h-8 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
          <h3 class="text-sm font-semibold text-gray-300">Obunachilar</h3>
        </div>
        <p class="text-3xl font-bold text-white mt-3">{{ subscribers }}</p>
      </div>
      <div class="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
        <div class="flex items-center">
          <svg class="w-8 h-8 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
          <h3 class="text-sm font-semibold text-gray-300">Kunlik Tashriflar</h3>
        </div>
        <p class="text-3xl font-bold text-white mt-3">{{ dailyVisitors }}</p>
      </div>
    </div>

    <!-- Xatolik xabari -->
    <div v-if="error" class="bg-red-600 text-white p-4 rounded-lg mb-6" data-aos="fade-up">
      {{ error }}
    </div>

    <!-- Yangiliklar jadvali -->
    <div class="overflow-x-auto mb-8" data-aos="fade-up">
      <h3 class="text-lg font-semibold text-gray-300 mb-4">So‘nggi Maqolalar</h3>
      <table class="w-full text-left border-collapse bg-gray-800 rounded-lg shadow-lg">
        <thead>
          <tr class="bg-gray-700 text-gray-300">
            <th class="p-4">ID</th>
            <th class="p-4">Sarlavha</th>
            <th class="p-4">Yaratilgan Sana</th>
            <th class="p-4">Ko‘rishlar</th>
            <th class="p-4">Kategoriya</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in newsData" :key="item.id" class="border-b border-gray-700 hover:bg-gray-600 transition-all" :data-aos="'fade-up'" :data-aos-delay="index * 100">
            <td class="p-4">{{ item.id }}</td>
            <td class="p-4">{{ item.title }}</td>
            <td class="p-4">{{ new Date(item.created_date).toLocaleDateString('uz-UZ') }}</td>
            <td class="p-4">{{ item.views }}</td>
            <td class="p-4">{{ item.category }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Chartlar -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-gray-800 p-6 rounded-xl shadow-lg" data-aos="fade-right">
        <h3 class="text-lg font-semibold text-gray-300 mb-4">Kunlik Tashriflar</h3>
        <canvas id="dailyTrafficChart" class="w-full h-64"></canvas>
      </div>
      <div class="bg-gray-800 p-6 rounded-xl shadow-lg" data-aos="fade-left">
        <h3 class="text-lg font-semibold text-gray-300 mb-4">Haftalik Tashriflar</h3>
        <canvas id="weeklyTrafficChart" class="w-full h-64"></canvas>
      </div>
      <div class="bg-gray-800 p-6 rounded-xl shadow-lg lg:col-span-2" data-aos="fade-up">
        <h3 class="text-lg font-semibold text-gray-300 mb-4">Oylik Tashriflar</h3>
        <canvas id="monthlyTrafficChart" class="w-full h-64"></canvas>
      </div>
    </div>

    <!-- Maqolalar topilmaganda -->
    <div v-if="!newsData?.length && !error" class="text-center text-gray-400 mt-8" data-aos="fade-up">
      Hozircha maqolalar mavjud emas
    </div>
  </div>
</template>

<style>
/* Tailwind CSS bilan qo‘shimcha stillar */
table th, table td {
  border-bottom: 1px solid #4b5563;
}
canvas {
  max-height: 300px;
}
</style>