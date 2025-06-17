<template>
  <div>
    <!-- Loader: Ma'lumotlar yuklanmoqda -->
    <div v-if="isLoading" class="flex items-center justify-center min-h-[60vh]">
      <svg
        class="animate-spin h-10 w-10 text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8z"
        />
      </svg>
    </div>

    <!-- Asosiy sahifa mazmuni -->
    <main v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid lg:grid-cols-4 gap-10">
        <div class="lg:col-span-3">
          <LayoutsHero />
          <SharedBannerAd />
          <LayoutsInquirys />
          <LayoutsVidesNewsLimited />
        </div>
        <LayoutsSidebar />
      </div>
    </main>

    <LayoutsFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const { newsData, allNews, fetchNewsById, fetchAllNews } = useNews()
const { fetchCategoires, categoiresData } = useCategoires()

const isLoading = ref(true)
const isMenuOpen = ref(false)
const searchTerm = ref('')
const email = ref('')

const sortedNews = computed(() => {
  if (!allNews.value) return []
  return [...allNews.value].sort(
    (a, b) => new Date(b.created_date) - new Date(a.created_date)
  )
})

const featuredArticles = computed(() => {
  return sortedNews.value
    .filter(article => article.image)
    .slice(0, 2)
})

const getCategoryTitle = (categoryId) => {
  return (
    categoiresData.value?.find((cat) => cat.id === categoryId)?.title ||
    'Nomaʼlum'
  )
}

onMounted(async () => {
  try {
    await fetchAllNews()
    await fetchCategoires()

    const today = new Date().toISOString().split('T')[0]
    if (localStorage.getItem('visited_today') !== today) {
      localStorage.setItem('visited_today', today)

      await fetch(`${BASE_URL}visits/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ count: 1 })
      })
    }
  } catch (error) {
    console.error('Maʼlumotlarni yuklashda xatolik:', error)
  } finally {
    isLoading.value = false
  }
})
</script>
