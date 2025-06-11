<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="grid lg:grid-cols-4 gap-10">
      <div class="lg:col-span-3">
        <!-- Hero Section -->
        <section class="mb-10" v-if="allNews?.length">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Main Featured Article -->
            <div class="md:col-span-1">
              <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div class="relative">
                  <img
                    :src="allNews[0].image"
                    :alt="allNews[0].title"
                    class="w-full h-78 object-cover"
                  />
                  <span v-if="allNews[0].isBreaking" class="absolute top-4 left-4 bg-red-700 text-white px-3 py-1 rounded-md text-xs font-bold">
                    <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    BREAKING
                  </span>
                  <div class="absolute bottom-4 left-4 right-4">
                    <span class="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-bold mb-2 inline-block">
                      {{ getCategoryTitle(allNews[0].category) }}
                    </span>
                    <nuxt-link :to="`/detail/${allNews[0].id}`">
                      <h2 class="text-white text-2xl font-bold leading-tight bg-black/60 p-3 rounded-lg">
                      {{ allNews[0].title }}
                    </h2>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>

            <!-- Secondary Articles -->
            <div class="space-y-6">
              <div
                v-for="article in featuredArticles"
                :key="article.id"
                class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div class="flex">
                  <img
                    :src="article.image"
                    :alt="article.title"
                    class="w-36 h-36 object-cover"
                  />
                  <div class="flex-1 p-5">
                    <span class="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-xs font-medium mb-2 inline-block">
                      {{ getCategoryTitle(article.category) }}
                    </span>
                    <nuxt-link :to="`/detail/${article.id}`" class="font-semibold text-base leading-tight mb-2 line-clamp-2">{{ article.title }}</nuxt-link>
                    <div class="flex items-center text-xs text-gray-600">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {{ new Date(article.created_date).toLocaleString() }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SharedBannerAd />
        <LayoutsInquirys />
        <LayoutsVideoNews />
        <LayoutsGalleryNews />
      </div>

      <LayoutsSidebar />
    </div>
  </main>

  <LayoutsFooter />
</template>


<script setup>
import { ref, onMounted } from 'vue'



const { newsData, allNews, fetchNewsById, fetchAllNews } = useNews();
const { fetchCategoires, categoiresData } = useCategoires()

const isMenuOpen = ref(false)
const searchTerm = ref('')
const email = ref('')
const featuredArticles = computed(() => {
  return sortedNews.value.slice(0, 2) // 1-chi va 2-chi maqolalar (asosiydan tashqari)
})


const getCategoryTitle = (categoryId) => {
  return categoiresData.value?.find(cat => cat.id === categoryId)?.title || 'Nomaʼlum'
}

const sortedNews = computed(() => {
  if (!allNews.value) return []
  return [...allNews.value].sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
})




onMounted(async () => {
  await fetchAllNews()
  await fetchCategoires()

  const today = new Date().toISOString().split('T')[0]
  if (localStorage.getItem('visited_today') !== today) {
    localStorage.setItem('visited_today', today)

    try {
      await fetch(`${BASE_URL}visits/`, {
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
