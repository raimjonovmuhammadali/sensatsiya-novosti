<script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '#app';
import { useRouter } from 'vue-router';


// AOS ni CDN orqali head qismiga qo'shamiz
useHead({
  link: [{ rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css' }],
  script: [{ src: 'https://unpkg.com/aos@next/dist/aos.js', defer: true }],
});
definePageMeta({
  layout: 'auth'
})
const router = useRouter();
const username = ref('');
const password = ref('');
const errorMessage = ref('');

onMounted(() => {
  // AOS ni ishga tushirish (client-side faqat)
  if (process.client) {
    import('aos').then(AOS => {
      AOS.default.init({ duration: 800, once: true });
    });
  }
});

const handleLogin = async () => {
  try {
    const payload = {
      username: username.value,
      password: password.value,
    };

    // Form ma'lumotlarini konsolga chiqarish
    console.log('API ga yuborilayotgan ma\'lumotlar:', payload);

    // API so'rovi
    const response = await $fetch(`${BASE_URL}token/`, {
      method: 'POST',
      body: payload,
    });

    // Tokenlarni saqlash
    if (response.access && response.refresh) {
      localStorage.setItem('access_token', response.access);
      localStorage.setItem('refresh_token', response.refresh);
    }

    // Xato xabarini tozalash va yo'naltirish
    errorMessage.value = '';
    router.push('/panel'); // Role asosida yo'naltirish keyinroq qo'shilishi mumkin
  } catch (error) {
    console.error('Login error:', error);
    errorMessage.value = 'Email yoki parol xato! Iltimos, qaytadan urinib ko‘ring.';
  }
};
</script>

<template>
  <div class="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 flex items-center justify-center p-4 md:p-8">
    <div class="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md" data-aos="fade-up">
      <h2 class="text-3xl font-bold text-teal-400 mb-6 text-center">Tizimga kirish</h2>
      
      <!-- Login Form -->
      <div class="space-y-6">
        <div>
          <label for="Username" class="block text-sm font-semibold text-gray-300 mb-2">Email</label>
          <div class="relative">
            <svg class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input 
              v-model="username"
              type="Username" 
              id="Username" 
              class="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
              placeholder="Usernameni kiriting"
            >
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-semibold text-gray-300 mb-2">Parol</label>
          <div class="relative">
            <svg class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823.922-4.016m-1.148 8.38a6.976 6.976 0 001.954-2.304m0 0a6.988 6.988 0 01.926-3.936" />
            </svg>
            <input 
              v-model="password"
              type="password" 
              id="password" 
              class="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
              placeholder="Parolingizni kiriting"
            >
          </div>
        </div>

        <div v-if="errorMessage" class="text-red-400 text-sm">{{ errorMessage }}</div>

        <button 
          @click="handleLogin"
          class="w-full bg-teal-600 text-white py-2 rounded-full hover:bg-teal-500 transition-all transform hover:scale-105 flex items-center justify-center shadow-md"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14" />
          </svg>
          Kirish
        </button>
      </div>

      <!-- Additional Links -->
      <div class="mt-6 text-center">
        <a href="#" class="text-sm text-teal-400 hover:underline">Parolni unuttingizmi?</a>
      </div>
    </div>
  </div>
</template>

<style>
/* Tailwind CSS bilan qo'shimcha stillar */
input:focus {
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.3);
}
</style>