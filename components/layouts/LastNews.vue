<template>
    <!-- Last News -->
    <div class="bg-white rounded-xl shadow-lg">
      <div class="p-6">
        <h3 class="text-xl font-bold mb-4 flex items-center">
          <svg
            class="w-6 h-6 mr-2"
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
          So'ngi yangiliklar
        </h3>
        <div class="space-y-4">
          <div
            v-for="(news, index) in featuredArticless"
            :key="index"
            class="border-b border-gray-100 pb-4 last:border-b-0"
          >
            <nuxt-link :to="`/detail/${news.id}`"
              class="font-medium text-base mb-1 hover:text-blue-600 cursor-pointer transition-colors leading-tight line-clamp-2"
            >
              {{ news.title }}
            </nuxt-link>
            <div
              class="flex items-center justify-between text-xs text-gray-600"
            >
              <span>{{ news.time }}</span>
              <span
                class="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-xs"
              >
                {{ getCategoryTitle(news.category) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
const { newsData, allNews, fetchNewsById, fetchAllNews } = useNews();
const { fetchCategoires, categoiresData } = useCategoires()
const featuredArticless = computed(() => {
  return sortedNews.value.slice(0, 4) // 1-chi va 2-chi maqolalar (asosiydan tashqari)
})
const sortedNews = computed(() => {
  if (!allNews.value) return []
  return [...allNews.value].sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
})

const getCategoryTitle = (categoryId) => {
  return categoiresData.value?.find(cat => cat.id === categoryId)?.title || 'Nomaʼlum'
}
</script>