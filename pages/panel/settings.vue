<script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '#app';

definePageMeta({
  layout: 'admin',
});
const { fetchsocials, socialsData } = usesocials()



useHead({
  link: [{ rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css' }],
  script: [{ src: 'https://unpkg.com/aos@next/dist/aos.js', defer: true }],
});



onMounted(() => {
  if (process.client) {
    import('aos').then(AOS => {
      AOS.default.init({ duration: 800, once: true });
    });
  }

});
</script>

<template>
  <section class="w-full p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 min-h-screen">
    <SharedPanelGetAdd/>
    <SharedPanelGetSocials/>
  </section>
</template>

<style scoped>
table th, table td {
  border-bottom: 1px solid #4b5563;
}

/* Responsive table adjustments */
@media (max-width: 768px) {
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}

/* Custom scrollbar for better aesthetics */
::-webkit-scrollbar {
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #1f2937;
}
::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>