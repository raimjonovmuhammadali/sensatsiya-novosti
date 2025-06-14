<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h1 class="text-2xl font-bold mb-4">Qidiruv natijalari: "{{ route.query.q }}"</h1>

    <main class="w-full flex flex-wrap gap-6" v-if="filteredResults.length">
      <div
        class="w-full md:w-[23%] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
        v-for="item in filteredResults"
        :key="item.id"
      >
        <div class="relative w-full h-40 bg-gray-100">
          <!-- YouTube video -->
          <iframe
            v-if="isYouTubeLink(item.link)"
            :src="getYouTubeEmbedUrl(item.link)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-full rounded-lg"
          ></iframe>

          <!-- Local video -->
          <video
            v-else-if="item.link"
            :src="item.link"
            controls
            class="w-full h-full rounded-lg"
          ></video>

          <!-- Image fallback -->
          <img
            v-else-if="item.image"
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover"
          />
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

    <p v-else class="text-gray-500">Hech qanday yangilik topilmadi.</p>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'

const route = useRoute()
const { allNews, fetchAllNews } = useNews()

onMounted(() => {
  fetchAllNews()
})

const filteredResults = computed(() => {
  const q = route.query.q?.toLowerCase() || ''
  return allNews.value?.filter((item) =>
    item.title.toLowerCase().includes(q)
  ) || []
})

// YouTube aniqlash
const isYouTubeLink = (link) => {
  return link?.includes('youtube.com') || link?.includes('youtu.be')
}

const getYouTubeEmbedUrl = (link) => {
  if (!link) return ''
  const videoIdMatch = link.match(/(?:youtube\.com.*(?:\?v=|\/embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  const videoId = videoIdMatch ? videoIdMatch[1] : null
  return videoId ? `https://www.youtube.com/embed/${videoId}` : ''
}
</script>
