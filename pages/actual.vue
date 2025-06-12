<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="grid lg:grid-cols-4 gap-10">
      <div class="lg:col-span-3">
        <LayoutsInquirys />
      </div>

      <LayoutsSidebar />
    </div>
  </main>

  <LayoutsFooter />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const { allNews, fetchAllNews } = useNews();

onMounted(async () => {
  // Fetch news and filter for Colab-related content
  await fetchAllNews({ query: 'Google Colab' }) // Pass query to fetch Colab-related news

})
</script>