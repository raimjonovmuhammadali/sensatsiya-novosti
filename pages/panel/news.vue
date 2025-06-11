<script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '#app';
import { useNews } from '~/composables/useNews';

definePageMeta({
  layout: 'admin',
});

const { newsData, isLoading, error, fetchNews } = useNews();

// AOS ni CDN orqali head qismiga qo‘shish
useHead({
  link: [{ rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css' }],
  script: [{ src: 'https://unpkg.com/aos@next/dist/aos.js', defer: true }],
});

onMounted(() => {
  // AOS ni ishga tushirish (client-side faqat)
  if (process.client) {
    import('aos').then(AOS => {
      AOS.default.init({ duration: 800, once: true });
    });
  }
  fetchNews(); // Yangiliklarni yuklash
});
</script>

<template>
  <div class="w-full p-4 md:p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
    <!-- Sarlavha -->
    <div class="mb-8" data-aos="fade-down">
      <h2 class="text-2xl font-bold text-teal-400">So‘nggi Yangiliklar</h2>
    </div>

    <!-- Xatolik xabari -->
    <div v-if="error" class="bg-red-600 text-white p-4 rounded-lg mb-6" data-aos="fade-up">
      {{ error }}
    </div>

    <!-- Yangiliklar jadvali -->
    <div class="overflow-x-auto" data-aos="fade-up">
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

    <!-- Yangiliklar topilmaganda -->
    <div v-if="!newsData?.length && !error" class="text-center text-gray-400 mt-8" data-aos="fade-up">
      Hozircha yangiliklar mavjud emas
    </div>
  </div>
</template>

<style>
/* Tailwind CSS bilan qo‘shimcha stillar */
table th, table td {
  border-bottom: 1px solid #4b5563;
}
</style>