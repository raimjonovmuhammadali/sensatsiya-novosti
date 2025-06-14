<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="grid lg:grid-cols-4 gap-10">
      <div class="lg:col-span-3">
        <!-- Hero Section -->
        <section class="mb-10">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="relative">
              <img
                src="/img/banner.jpg"
                alt="About Our Company"
                class="w-full h-78 object-cover"
              />
              <div class="absolute bottom-4 left-4 right-4">
                <h1 class="text-white text-2xl font-bold leading-tight bg-black/60 p-3 rounded-lg">
                  Biz haqimizda
                </h1>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 text-base leading-relaxed font-bold">
                Maqsadim mashhurlik emas xalqning qalbidan joy olish va ishonchini qozonish!..
              </p>
            </div>
          </div>
        </section>

        <!-- Our Story Section -->
        <section class="mb-10">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
              <h2 class="text-xl font-bold mb-4">🔗Hamkorlik uchun</h2>
              <p class="text-gray-600 text-sm leading-relaxed">
                ”Сенсация Новости” kanal raxbari. <a href="https://t.me/Qamchiyev_Sunnatillo" target="_blank">Qamchiyev Sunnatillo</a>
              </p>
            </div>
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
              <h2 class="text-xl font-bold mb-4">Murojaat va takliflar uchun:</h2>
              <p class="text-gray-600 text-sm leading-relaxed flex flex-col gap-1">
                <a href="https://t.me/sensatsiya_novosti_bot" class="p-2 bg-gray-200 rounded-full w-[150px] text-center">Telegram botimiz</a><br>
                <a href="tel:+998339660606">☎️ +998 33 966 06 06</a>
              </p>
            </div>
          </div>
        </section>

        <SharedBannerAd />
        <LayoutsInquirys />
      </div>

      <LayoutsSidebar />
    </div>
  </main>

  <LayoutsFooter />
</template>

<script setup>
import { ref } from 'vue'


onMounted(() => {
  const today = new Date().toISOString().split('T')[0]
  if (localStorage.getItem('visited_today') !== today) {
    localStorage.setItem('visited_today', today)
    try {
      fetch(`${BASE_URL}visits/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ count: 1 })
      })
    } catch (error) {
      console.error('Visit tracking failed:', error)
    }
  }
})
</script>