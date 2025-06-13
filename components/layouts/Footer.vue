<template>
  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-10">
        <div>
          <div class="text-3xl font-extrabold text-blue-400 mb-4">
            Сенсация Новости
          </div>
          <p class="text-gray-300 text-sm mb-4">
            Eng so'ng yangiliklar!
          </p>
          <div class="flex items-center space-x-4">
            <a
              href="#"
              class="text-gray-300 hover:text-white transition-colors"
              aria-label="Facebook"
              v-for="item in socialsData" :key="item.id"
            >
              <img :src="item.icon" :alt="item.title" class="w-10">
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-4">Sahifalar</h4>
          <ul class="space-y-3 text-sm text-gray-300">
            <li>
              <a href="/about" class="hover:text-white transition-colors"
                >Biz haqimizda</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-4">Yangiliklar</h4>
          <ul class="space-y-3 text-sm text-gray-300">
            <li v-for="item in categoiresData" :key="item.id">
              <a :href="`/category/${item.id}`" class="hover:text-white transition-colors"
                >{{item.title}}</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-4">Obuna bo'lish</h4>
          <p class="text-gray-300 text-sm mb-4">
            Yangiliklardan habardor bo'lib turing!
          </p>
          <p class="text-green-300 text-sm mb-4">{{ errorMessage }}</p>
          <div class="space-y-3">
            <input
              v-model="footerEmail"
              placeholder="Emailingizni kiriting..."
              class="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              aria-label="Email for newsletter subscription"
            />
            <button
              class="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all" @click="handleSubscribe"
            >
              Obuna bo'lish
            </button>
          </div>
        </div>
      </div>

      <div
        class="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-300 flex flex-col items-center justify-center gap-2"
      >
        <p>
          © 2025 Сенсация Новости. Barcha huquqlar himoyalangan! <br>
        </p>
        <a href="https://t.me/rayimjonovblogs" target="_blank" class="flex items-center gap-2">Разработчик - <img src="/img/rm logo png.png" alt="mrx logo" class="w-[25px] rounded-full"></a>
      </div>
    </div>
  </footer>
</template>
<script setup>
const footerEmail = ref('')
const errorMessage = ref('');
const { fetchsocials, socialsData } = usesocials()
const { categoiresData, fetchCategoires } = useCategoires()
const handleSubscribe = async () => {
  try {
    const payload = {
      email: footerEmail.value,
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
    footerEmail.value = ''
  } catch (error) {
    console.error('Subscribe error:', error);
    errorMessage.value = 'Iltimos, qaytadan urinib ko‘ring.';
  }
};
</script>