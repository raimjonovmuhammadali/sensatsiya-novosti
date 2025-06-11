<script setup>
import { ref, onMounted, computed, nextTick } from "vue";
import { useHead } from "#app";
import {
  Chart,
  LineController,
  DoughnutController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

const { newsData, isLoading, error, fetchNews } = useNews();
const { subscribeData, fetchSubscribes } = useSubscribe();
const {
  visits,
  fetchvisits,
  total,
  today,
  week,
  month,
  weeklyBreakdown,
} = usevisits();

definePageMeta({
  layout: "admin",
  middleware: "auth",
});

Chart.register(
  LineController,
  DoughnutController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

useHead({
  link: [
    { rel: "stylesheet", href: "https://unpkg.com/aos@next/dist/aos.css" },
  ],
  script: [{ src: "https://unpkg.com/aos@next/dist/aos.js", defer: true }],
});

const weekdayLabels = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'];

const weeklyData = computed(() => {
  return {
    labels: weeklyBreakdown.value.map((_, i) => weekdayLabels[i]),
    datasets: [
      {
        label: "Joriy hafta tashriflari",
        data: weeklyBreakdown.value.map((item) => item.count),
        borderColor: "#2dd4bf",
        backgroundColor: "rgba(45, 212, 191, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };
});

const doughnutChartData = ref({
  labels: ["Articles", "Sales", "Users"],
  datasets: [
    {
      data: [178, 190, 12],
      backgroundColor: ["#2dd4bf", "#f43f5e", "#f97316"],
      hoverOffset: 20,
    },
  ],
});

onMounted(async () => {
  fetchNews();
  fetchSubscribes();
  await fetchvisits(); // KUTING — ma'lumotlar yuklanishini
  await nextTick(); // DOM tayyor bo‘lishini kuting

  if (process.client) {
    import("aos").then((AOS) => {
      AOS.default.init({ duration: 800, once: true });
    });

    const lineCanvas = document.getElementById("lineChart");
    const doughnutCanvas = document.getElementById("doughnutChart");

    if (lineCanvas && weeklyBreakdown.value.length > 0) {
      new Chart(lineCanvas, {
        type: "line",
        data: weeklyData.value,
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              labels: { color: "#e5e7eb" },
            },
          },
          scales: {
            x: {
              ticks: { color: "#e5e7eb" },
              grid: { color: "rgba(255,255,255,0.1)" },
            },
            y: {
              ticks: { color: "#e5e7eb" },
              grid: { color: "rgba(255,255,255,0.1)" },
              beginAtZero: true,
            },
          },
        },
      });
    }

    if (doughnutCanvas) {
      new Chart(doughnutCanvas, {
        type: "doughnut",
        data: doughnutChartData.value,
        options: {
          responsive: true,
          plugins: {
            legend: { position: "bottom", labels: { color: "#e5e7eb" } },
          },
        },
      });
    }
  }
});
</script>


<template>
  <div
    class="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-4 md:p-8"
  >
    <!-- Header Section -->
    <div
      class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
      data-aos="fade-down"
    >
      <h2 class="text-3xl font-bold text-teal-400">Sayt tahlili</h2>
    </div>

    <!-- Statistic Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div
        v-for="(card, index) in [
          {
            title: 'Yangiliklar',
            link: '/news',
            value: newsData?.length,
            icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
            color: 'teal',
          },
          {
            title: 'Obunachilar',
            link: '/',
            value: subscribeData?.length,
            icon: 'M5 13l4 4L19 7',
            color: 'blue',
          },
          {
            title: 'Tashriflar(Jami)',
            link: '/',
            value: total,
            icon: 'M3 3h18M3 7h18M3 12h18m-7 7h7',
            color: 'red',
          },
          {
            title: 'App Users',
            link: '/',
            value: 12,
            icon: 'M5.121 17.07A3 3 0 017.879 21H17a3 3 0 003-3V5a3 3 0 00-3-3H7a3 3 0 00-2.879 2.121m0 0A3 3 0 017 6h10a3 3 0 010 6H7a3 3 0 01-2.879-2.121z',
            color: 'orange',
          },
        ]"
        :key="index"
        class="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
        :data-aos="'fade-up'"
        :data-aos-delay="index * 100"
      >
        <div class="flex items-center">
          <svg
            class="w-8 h-8 mr-3"
            :class="'text-' + card.color + '-400'"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="card.icon"
            />
          </svg>
          <nuxt-link
            :to="card.link"
            class="text-sm font-semibold text-gray-300"
            >{{ card.title }}</nuxt-link
          >
        </div>
        <p class="text-4xl font-bold text-white mt-3">{{ card.value }}</p>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div class="bg-gray-800 p-6 rounded-xl shadow-lg" data-aos="fade-right">
        <h3 class="text-lg font-semibold text-gray-300 mb-4">
          Haftalik tashriflar statistikasi
        </h3>
        <canvas id="lineChart" class="w-full h-64"></canvas>
      </div>
      <div class="bg-gray-800 p-6 rounded-xl shadow-lg" data-aos="fade-left">
        <h3 class="text-lg font-semibold text-gray-300 mb-4">Analytics</h3>
        <canvas id="doughnutChart" class="w-full h-64"></canvas>
      </div>
    </div>

    <!-- Recent Activities -->
    <div class="bg-gray-800 p-6 rounded-xl shadow-lg" data-aos="fade-up">
      <h3 class="text-lg font-semibold text-gray-300 mb-4">
        Recent Activities
      </h3>
      <div class="space-y-4">
        <div
          v-for="(activity, index) in [
            {
              text: 'Task Updated by Nikita',
              time: '40 mins ago',
              icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
              color: 'teal',
            },
            {
              text: 'Deal Added',
              time: '1 day ago',
              icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823.922-4.016m-1.148 8.38a6.976 6.976 0 001.954-2.304m0 0a6.988 6.988 0 01.926-3.936',
              color: 'blue',
            },
            {
              text: 'Published Article',
              time: '40 mins ago',
              icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              color: 'green',
            },
          ]"
          :key="index"
          class="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <div class="flex items-center">
            <svg
              class="w-6 h-6 mr-3"
              :class="'text-' + activity.color + '-400'"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="activity.icon"
              />
            </svg>
            <span class="text-sm text-gray-200">{{ activity.text }}</span>
          </div>
          <span class="text-xs text-gray-400">{{ activity.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Tailwind CSS bilan qo'shimcha stillar */
canvas {
  max-height: 300px;
}
</style>
