<template>
  <!-- World News Content -->
  <main class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-10">
    <div class="mb-8 sm:mb-10">
      <h1 class="text-xs sm:text-sm font-extrabold text-gray-900 mb-4 flex items-center">
        {{ getCategoryTitle(newsData?.category) }}
      </h1>
      <p class="text-lg sm:text-xl text-gray-600">
        {{ newsData?.title }}
      </p>
    </div>

    <div class="grid lg:grid-cols-4 gap-6 sm:gap-10">
      <div class="lg:col-span-3 flex flex-col gap-8 sm:gap-10">
        <!-- Breaking International News -->
        <section class="w-full">
          <div
            class="w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              :src="newsData?.image"
              :alt="newsData?.title"
              class="w-full h-48 sm:h-64 lg:h-72 object-cover"
            />
            <div class="p-4 sm:p-6">
              <span
                class="bg-red-700 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold mb-3 inline-block"
              >
                <svg
                  class="w-4 h-4 inline mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                BREAKING
              </span>
              <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                {{ newsData?.title }}
              </h2>
              <p class="text-gray-600 text-sm sm:text-base lg:text-lg mb-4">
                {{ newsData?.text }}
              </p>
              <div
                class="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm text-gray-600 gap-4"
              >
                <div class="flex flex-wrap items-center space-x-2 sm:space-x-4">
                  <span>{{ getCategoryTitle(newsData?.category) }}</span>
                  <span class="hidden sm:inline">•</span>
                  <span>{{
                    new Date(newsData?.created_date).toLocaleString()
                  }}</span>
                  <span class="hidden sm:inline">•</span>
                  <span>{{ calculateReadTime(newsData?.text) }} o'qiladi</span>
                </div>
                <div class="flex items-center space-x-2">
                  <button
                    class="px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm hover:bg-blue-200 transition-all"
                    aria-label="Share article"
                  >
                    <svg
                      class="w-4 h-4 inline mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      ></path>
                    </svg>
                    Ulashish
                  </button>
                  <button
                    class="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm hover:bg-gray-200 transition-all"
                    aria-label="Save article"
                  >
                    <svg
                      class="w-4 h-4 inline mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      ></path>
                    </svg>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- World News Grid -->
        <section>
          <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Toifadagi yangiliklar</h3>
          <div class="w-full flex flex-wrap gap-6">
            <div v-for="article in allNews" :key="article.id" class="w-[25%]">
              <div
                class="w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                v-if="newsData?.category == article?.category"
              >
                <img
                  :src="article.image"
                  :alt="article.title"
                  class="w-full h-32 sm:h-36 object-cover"
                />
                <div class="p-4 sm:p-6">
                  <nuxt-link :to="`/detail/${article.id}`" class="font-bold text-sm sm:text-md mb-2 line-clamp-2">
                    {{ article.title }}
                  </nuxt-link>
                  <p class="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-3">
                    {{ article.summary }}
                  </p>
                  <div
                    class="flex items-center justify-between text-xs text-gray-600"
                  >
                    <span>{{ article.author }}</span>
                    <span>{{ article.time }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Sidebar -->
      <div class="lg:col-span-1 space-y-6 sm:space-y-8">
        <LayoutsSidebar />

        <!-- Currency Exchange -->
        <div class="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h4 class="text-lg sm:text-xl font-bold mb-4 flex items-center">
            <svg
              class="w-5 sm:w-6 h-5 sm:h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            Currency Exchange
          </h4>
          <div class="space-y-2 sm:space-y-3">
            <div
              class="flex justify-between text-xs sm:text-sm hover:bg-gray-50 transition-colors rounded p-2"
            >
              <span>USD/EUR</span>
              <span class="text-green-600 font-medium">0.85 ↗</span>
            </div>
            <div
              class="flex justify-between text-xs sm:text-sm hover:bg-gray-50 transition-colors rounded p-2"
            >
              <span>USD/GBP</span>
              <span class="text-red-600 font-medium">0.73 ↘</span>
            </div>
            <div
              class="flex justify-between text-xs sm:text-sm hover:bg-gray-50 transition-colors rounded p-2"
            >
              <span>USD/JPY</span>
              <span class="text-green-600 font-medium">110.25 ↗</span>
            </div>
            <div
              class="flex justify-between text-xs sm:text-sm hover:bg-gray-50 transition-colors rounded p-2"
            >
              <span>USD/CNY</span>
              <span class="text-gray-600 font-medium">6.45 →</span>
            </div>
          </div>
        </div>

        <!-- Global Weather -->
        <div class="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h4 class="text-lg sm:text-xl font-bold mb-4 flex items-center">
            <svg
              class="w-5 sm:w-6 h-5 sm:h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              ></path>
            </svg>
            Global Weather
          </h4>
          <div class="space-y-3 sm:space-y-4">
            <div
              class="flex justify-between items-center hover:bg-gray-50 transition-colors rounded p-2"
            >
              <span class="text-xs sm:text-sm font-medium">London</span>
              <div class="text-right">
                <div class="text-xs sm:text-sm font-medium">15°C</div>
                <div class="text-xs text-gray-600">Rainy</div>
              </div>
            </div>
            <div
              class="flex justify-between items-center hover:bg-gray-50 transition-colors rounded p-2"
            >
              <span class="text-xs sm:text-sm font-medium">Paris</span>
              <div class="text-right">
                <div class="text-xs sm:text-sm font-medium">18°C</div>
                <div class="text-xs text-gray-600">Sunny</div>
              </div>
            </div>
            <div
              class="flex justify-between items-center hover:bg-gray-50 transition-colors rounded p-2"
            >
              <span class="text-xs sm:text-sm font-medium">Tokyo</span>
              <div class="text-right">
                <div class="text-xs sm:text-sm font-medium">22°C</div>
                <div class="text-xs text-gray-600">Cloudy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <LayoutsFooter />
</template>

<script setup>
import { ref } from "vue";
const router = useRoute();
const id = router.params.id;

const { newsData, allNews, fetchNewsById, fetchAllNews } = useNews();
const { fetchCategoires, categoiresData } = useCategoires();
const isMenuOpen = ref(false);

const getCategoryTitle = (categoryId) => {
  return (
    categoiresData.value?.find((cat) => cat.id === categoryId)?.title ||
    "Nomaʼlum"
  );
};

const calculateReadTime = (text) => {
  const safeText = text || "";
  const words = safeText.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} daqiqa`;
};

onMounted(async () => {
  if (id) {
    await fetchNewsById(id);
  }
  await fetchAllNews();
});

</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>