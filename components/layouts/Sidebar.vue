<template>
  <!-- Sidebar -->
  <div class="lg:col-span-1 space-y-8">
    <!-- Ad Space -->
    <SharedSidebarAd/>

    <LayoutsLastNews/>

    <!-- Newsletter Signup -->
    <div class="bg-blue-50 rounded-xl shadow-lg">
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">Obuna bo'ling!</h3>
        <p class="text-sm text-gray-600 mb-4">
          Yangiliklardan habardor bo'lish uchun bizga obuna bo'ling...
        </p>
        <p class="text-sm text-green-600 mb-4" v-if="errorMessage">
          {{ errorMessage }}
        </p>
        <div class="space-y-3">
          <input
            v-model="email"
            placeholder="Emailingizni kiriting..."
            class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            aria-label="Email for newsletter"
          />
          <button
            class="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all" @click="handleSubscribe"
          >
            Obuna bo'lish
          </button>
        </div>
      </div>
    </div>

    <!-- Social Media -->
    <div class="bg-white rounded-xl shadow-lg">
      <div class="p-6">
        <h3 class="text-xl font-bold mb-4">Follow Us</h3>
        <div class="grid grid-cols-2 gap-3">
          <button
            class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              ></path>
            </svg>
            Facebook
          </button>
          <button
            class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M22 12h-4l-3 9L9 3l-3 9H2"
              ></path>
            </svg>
            Twitter
          </button>
          <button
            class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            Instagram
          </button>
          <button
            class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.199 24C19.199 13.467 10.467 4.8 0 4.8V9.6c6.656 0 12 5.344 12 12v1.44c0-1.264.96-2.4 2.313-2.4 1.353 0 2.313 1.136 2.313 2.4v.24c0-4.8 3.977-8.88 9.374-8.88.977 0 1.92.144 2.834.4V3.6C28.834 2.977 27.977 2.4 26.834 2.4c-3.75 0-6.984 2.977-8.635 6.44v-.24c0-1.263-.96-2.4-2.313-2.4-1.353 0-2.313 1.137-2.313 2.4v8.88c0-1.264-.96-2.4-2.313-2.4-1.353 0-2.313 1.136-2.313 2.4 0 6.64 5.344 12 12 12h7.199Z"
              ></path>
            </svg>
            YouTube
          </button>
        </div>
      </div>
    </div>

    <!-- Weather Widget -->
    <div
      class="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl shadow-lg"
    >
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">Weather</h3>
        <div class="text-center">
          <div class="text-4xl font-bold">72°F</div>
          <div class="text-sm opacity-90">New York, NY</div>
          <div class="text-sm opacity-75 mt-2">Partly Cloudy</div>
        </div>
      </div>
    </div>

    <!-- Ad Space -->
    <div
      class="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center"
    >
      <p class="text-gray-600 font-semibold">Advertisement</p>
      <p class="text-sm text-gray-400 mt-2">300 x 600 Skyscraper</p>
    </div>
  </div>
</template>
<script setup>
const email = ref('')
const errorMessage = ref('');
const handleSubscribe = async () => {
  try {
    const payload = {
      email: email.value,
    };

    // Form ma'lumotlarini konsolga chiqarish
    console.log('API ga yuborilayotgan ma\'lumotlar:', payload);

    // API so'rovi
    const response = await $fetch(`${BASE_URL}subscription/`, {
      method: 'POST',
      body: payload,
    });

    // Xato xabarini tozalash va yo'naltirish
    errorMessage.value = 'Obuna bo\'lganingiz uchun raxmat';
    email.value = ''
  } catch (error) {
    console.error('Subscribe error:', error);
    errorMessage.value = 'Iltimos, qaytadan urinib ko‘ring.';
  }
};
</script>
