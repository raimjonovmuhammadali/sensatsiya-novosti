<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="grid lg:grid-cols-4 gap-10">
      <div class="lg:col-span-3">
        <LayoutsCategory />
      </div>

      <LayoutsSidebar />
    </div>
  </main>

  <LayoutsFooter />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const { allNews, fetchAllNews } = useNews();
const { fetchCategoires, categoiresData } = useCategoires()

const isMenuOpen = ref(false)
const searchTerm = ref('')
const email = ref('')

// Filter for Colab-related articles and select top 2 for secondary articles
const featuredArticles = computed(() => {
  return sortedNews.value
    .filter(article => article.image && article.title.toLowerCase().includes('colab')) // Filter for Colab-related news
    .slice(0, 2) // Limit to 2 articles
})

// Sort news by date, prioritizing Colab-related articles for display
const sortedNews = computed(() => {
  if (!allNews.value) return []
  return [...allNews.value]
    .filter(article => article.title.toLowerCase().includes('colab') || article.content?.toLowerCase().includes('colab')) // Include articles with Colab in title or content
    .sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
})

// Map category IDs to titles
const getCategoryTitle = (categoryId) => {
  return categoiresData.value?.find(cat => cat.id === categoryId)?.title || 'Google Colab'
}

onMounted(async () => {
  // Fetch news and filter for Colab-related content
  await fetchAllNews({ query: 'Google Colab' }) // Pass query to fetch Colab-related news
  await fetchCategoires()

})
</script>