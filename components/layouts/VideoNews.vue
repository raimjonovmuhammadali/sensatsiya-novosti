<template>
  <section class="mb-10">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-3xl font-bold text-gray-900 flex items-center">
        <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        Video yangiliklar
      </h2>
      <nuxt-link to="/videonews/" class="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all">
        Barchasi →
      </nuxt-link>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
      <div
        v-for="video in filteredVideos"
        :key="video.id"
        class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
        @click="openModal(video)"
      >
        <div class="relative">
          <!-- YouTube preview -->
          <iframe
            v-if="isYouTubeLink(video.link)"
            :src="getEmbedUrl(video.link)"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-52 object-cover"
          ></iframe>

          <!-- MP4 preview -->
          <video
            v-else
            :src="video.link"
            class="w-full h-52 object-cover"
            muted
            preload="metadata"
          ></video>

          <!-- Overlay play icon -->
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>

          <!-- Duration badge -->
          <div class="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-md">
            {{ video.duration }}
          </div>

          <!-- Labels -->
          <span v-if="video.isLive" class="absolute top-3 left-3 bg-red-700 text-white px-3 py-1 rounded-md text-xs font-bold animate-pulse">
            LIVE
          </span>
          <span v-else-if="video.isBreaking" class="absolute top-3 left-3 bg-red-700 text-white px-3 py-1 rounded-md text-xs font-bold">
            BREAKING
          </span>
        </div>
        <div class="p-5">
          <h3 class="font-semibold text-base mb-2 line-clamp-2">
            {{ video.title }}
          </h3>
          <div class="flex items-center justify-between text-sm text-gray-600">
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {{ video.views }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black/70 flex items-center justify-center z-50" @click.self="closeModal">
      <div class="bg-white rounded-xl max-w-3xl w-full p-6 relative">
        <button class="absolute top-4 right-4 text-gray-600 hover:text-gray-900" @click="closeModal" aria-label="Close modal">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="aspect-w-16 h-[300px]">
          <iframe
            v-if="isYouTubeVideo"
            :src="youTubeEmbedUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-full rounded-lg"
          ></iframe>
          <video
            v-else
            ref="videoPlayer"
            :src="selectedVideo?.link"
            controls
            class="w-full h-full rounded-lg"
            @canplay="isLoading = false"
            @error="handleVideoError"
          ></video>
        </div>

        <div v-if="!errorMessage" class="mt-4">
          <h3 class="text-xl font-semibold text-gray-900">
            {{ selectedVideo?.title }}
          </h3>
          <p class="line-clamp-2 mt-2 text-gray-500">{{ selectedVideo?.text }}</p>
          <div class="flex items-center justify-between text-sm mt-5 bg-blue-900 text-white p-3 rounded-full w-[130px] text-center">
            <nuxt-link :to="`/detail/${selectedVideo?.id}`">
              Maqolani o'qish
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
const isModalOpen = ref(false)
const selectedVideo = ref(null)
const isLoading = ref(false)
const errorMessage = ref('')
const videoPlayer = ref(null)

const { newsData, allNews, fetchAllNews } = useNews()
await fetchAllNews()

const filteredVideos = computed(() => {
  return allNews.value?.filter(video => video && video.link)
})

const openModal = (video) => {
  if (!video?.link) return
  selectedVideo.value = video
  isModalOpen.value = true
  isLoading.value = true
  errorMessage.value = ''
  document.body.classList.add('modal-open')
}

const closeModal = () => {
  isModalOpen.value = false
  selectedVideo.value = null
  isLoading.value = false
  errorMessage.value = ''
  document.body.classList.remove('modal-open')
}

const handleVideoError = () => {
  errorMessage.value = 'Video yuklanmadi. Iltimos boshqa video tanlang.'
}

const isYouTubeLink = (link) => {
  return link?.includes('youtube.com') || link?.includes('youtu.be')
}

const getEmbedUrl = (link) => {
  if (!link) return ''
  const videoIdMatch = link.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)
  const videoId = videoIdMatch ? videoIdMatch[1] : null
  return videoId ? `https://www.youtube.com/embed/${videoId}` : ''
}

const isYouTubeVideo = computed(() =>
  isYouTubeLink(selectedVideo.value?.link)
)

const youTubeEmbedUrl = computed(() => {
  return getEmbedUrl(selectedVideo.value?.link)
})
</script>
