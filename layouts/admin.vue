<script setup>
import { ref, onMounted } from "vue";
import { useHead } from "#app";
import { useRouter } from 'nuxt/app';
import { useProfile } from "@/composables/useProfile";
const { profileData, isLoading, error, fetchProfile } = useProfile();

const router = useRouter();
// Mobil menyuni boshqarish uchun holat
const isMenuOpen = ref(false);
definePageMeta({
  middleware: "auth",
});
// AOS ni CDN orqali head qismiga qo'shamiz
useHead({
  title: "Сенсация Новости | Admin",
  link: [
    { rel: "stylesheet", href: "https://unpkg.com/aos@next/dist/aos.css" },
    { rel: "icon", type: "image/x-icon", href: "/img/logo.jpg" }
  ],
  script: [{ src: "https://unpkg.com/aos@next/dist/aos.js", defer: true }],
});

onMounted(() => {
  fetchProfile()
  // AOS ni ishga tushirish (client-side faqat)
  if (process.client) {
    import("aos").then((AOS) => {
      AOS.default.init({ duration: 800, once: true });
    });
  }
});

// Hamburger menyuni ochish/yopish
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

//logout
const logout = () => {
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('access_token');
  router.push('/');
};
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans"
  >
    <!-- Top Navigation -->
    <header
      class="bg-gray-900 p-4 shadow-lg flex justify-between items-center sticky top-0 z-50"
      data-aos="fade-down"
    >
      <div class="flex items-center space-x-4">
        <h1 class="text-2xl font-bold text-teal-400">Сенсация Новости</h1>
      </div>
      <div class="flex items-center space-x-4">
        <div class="flex flex-col-reverse">
          <span class="text-sm text-gray-400 flex flex-col gap-3">{{
            new Date().toLocaleDateString()
          }}</span>
          <span class="text-sm text-gray-300 flex flex-col gap-3">
            {{profileData?.first_name}} {{profileData?.last_name}}</span
          >
        </div>
        <button
        @click="logout"
          class="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition-all transform hover:scale-105 shadow-md"
        >
          Chiqish
        </button>
        <!-- Hamburger Menu Button for Mobile -->
        <button
          class="md:hidden p-2 rounded-md hover:bg-gray-700"
          @click="toggleMenu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>

    <!-- Main Content with Sidebar -->
    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside
        :class="[
          'w-full md:w-[15%] bg-gray-800 p-4 shadow-lg transition-transform duration-300',
          isMenuOpen ? 'block' : 'hidden md:block',
        ]"
        data-aos="fade-right"
      >
        <nav class="space-y-2">
          <a
            v-for="item in [
              {
                href: '/panel',
                label: 'Boshqaruv paneli',
                icon: 'M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z',
              },
              {
                href: '/panel/news',
                label: 'Yangiliklar',
                icon: 'M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM3 11a1 1 0 100 2h12a1 1 0 100-2H3z',
              },
              {
                href: '/panel/analytics',
                label: 'Analytics',
                icon: 'M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z',
              },
              {
                href: '/users',
                label: 'Users',
                icon: 'M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z',
              },
              {
                href: '/panel/settings',
                label: 'Sozlamalar',
                icon: 'M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.792.903 1.24.903 2.104a1.532 1.532 0 01-.948 2.286c-1.56.38-1.56 2.6 0 2.98a1.532 1.532 0 01.948 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.948c.38 1.56 2.6 1.56 2.98 0a1.532 1.532 0 012.286-.948c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 01.948-2.287c1.56-.38 1.56-2.6 0-2.98a1.532 1.532 0 01-.948-2.286c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.948zM10 13a3 3 0 100-6 3 3 0 000 6z',
              },
            ]"
            :key="item.href"
            :href="item.href"
            class="flex items-center py-2 px-3 text-white rounded-lg hover:bg-teal-600 transition-all transform hover:scale-105"
            :data-aos="'fade-right'"
            :data-aos-delay="index * 100"
          >
            <svg
              class="w-5 h-5 mr-2 text-teal-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path :d="item.icon" />
            </svg>
            {{ item.label }}
          </a>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="w-full md:w-[85%] p-4 md:p-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
/* Tailwind CSS bilan qo'shimcha stillar */
header {
  backdrop-filter: blur(10px);
  background: rgba(17, 24, 39, 0.9);
}
</style>
