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
        <h3 class="text-xl font-bold mb-4">Bizni kuzatib boring!</h3>
        <div class="grid grid-cols-2 gap-3">
          <nuxt-link  
            class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all gap-2" v-for="item in socialsData" :key="item.id" :to="item.link"
          >
            <img :src="item.icon" :alt="item.name">
            {{item.name}}
        </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const email = ref('')
const errorMessage = ref('');
const { fetchsocials, socialsData } = usesocials()

await fetchsocials()
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
