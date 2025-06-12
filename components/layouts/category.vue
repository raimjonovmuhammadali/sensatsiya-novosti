<template>
  <div class="mb-6">
    <!-- Header -->
    <header class="flex items-center justify-between py-6">
      <div class="flex items-center space-x-4">
        <h1 class="text-3xl font-bold">{{ categoryTitle }} yangiliklari</h1>
      </div>
    </header>

    <!-- News Grid -->
    <main class="w-full flex flex-wrap gap-6">
      <div
        class="w-full md:w-[23%] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
        v-for="item in filteredNews"
        :key="item.id"
      >
        <div class="relative">
          <!-- YouTube video -->
          <iframe
            v-if="item.link"
            :src="getYouTubeEmbedUrl(item.link)"
            class="w-full h-36"
            frameborder="0"
            allowfullscreen
          ></iframe>

          <!-- Image -->
          <img
            v-else-if="item.image"
            :src="item.image"
            class="w-full h-36 object-cover"
            :alt="item.title"
          />

          <!-- No media -->
          <div v-else class="w-full h-36 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
            Media yo'q
          </div>
        </div>

        <div class="p-5">
          <p class="text-[12px] text-gray-400">
            {{ new Date(item.created_date).toLocaleString() }}
          </p>
          <nuxt-link :to="`/detail/${item.id}`" class="text-md font-semibold mt-2 line-clamp-2">
            {{ item.title }}
          </nuxt-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const categoryId = Number(route.params.id)

const { allNews, fetchAllNews } = useNews()
const { fetchCategoires, categoiresData } = useCategoires()

onMounted(() => {
  fetchAllNews()
  fetchCategoires()
})

// YouTube linkdan video ID olib iframe embed link yasash
const getYouTubeEmbedUrl = (link) => {
  if (!link) return null
  const videoId = link.includes('youtube.com')
    ? link.split('v=')[1]?.split('&')[0]
    : link.includes('youtu.be/')
      ? link.split('youtu.be/')[1]
      : null
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null
}

// Shu kategoriya nomi
const categoryTitle = computed(() => {
  const category = categoiresData.value?.find(c => c.id === categoryId)
  return category?.title || 'Nomaʼlum toifa'
})

// Faqat shu kategoriya bo‘yicha yangiliklar
const filteredNews = computed(() => {
  return allNews.value.filter(item => item.category === categoryId)
})
</script>


<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
img {
  @apply object-cover;
}
img[src="/"] {
  @apply hidden;
}
</style>
