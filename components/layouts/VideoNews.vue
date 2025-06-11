<template>
  <!-- Video Section -->
  <section class="mb-10">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-3xl font-bold text-gray-900 flex items-center">
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
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          ></path>
        </svg>
        Video yangiliklar
      </h2>
      <button
        class="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
      >
        Barchasi →
      </button>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
      <div
        v-for="video in videos"
        :key="video.id"
        class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
        @click="openModal(video)"
      >
        <div class="relative">
          <img
            :src="video.thumbnail"
            :alt="video.title"
            class="w-full h-52 object-cover"
          />
          <div
            class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div
              class="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div
            class="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-md"
          >
            {{ video.duration }}
          </div>
          <span
            v-if="video.isLive"
            class="absolute top-3 left-3 bg-red-700 text-white px-3 py-1 rounded-md text-xs font-bold animate-pulse"
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
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 9.143m0 0L17.143 13l6.857 2.286"
              ></path>
            </svg>
            LIVE
          </span>
          <span
            v-else-if="video.isBreaking"
            class="absolute top-3 left-3 bg-red-700 text-white px-3 py-1 rounded-md text-xs font-bold"
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
        </div>
        <div class="p-5">
          <h3 class="font-semibold text-base mb-2 line-clamp-2">
            {{ video.title }}
          </h3>
          <div class="flex items-center justify-between text-sm text-gray-600">
            <span class="flex items-center">
              <svg
                class="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              {{ video.views }} views
            </span>
            <div class="flex items-center space-x-2">
              <button
                class="p-1 hover:bg-gray-100 rounded"
                title="Share"
                aria-label="Share video"
              >
                <svg
                  class="w-5 h-5"
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
              </button>
              <button
                class="p-1 hover:bg-gray-100 rounded"
                title="Bookmark"
                aria-label="Bookmark video"
              >
                <svg
                  class="w-5 h-5"
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for Video Playback -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <div class="bg-white rounded-xl max-w-3xl w-full p-6 relative">
        <!-- Close Button -->
        <button
          class="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          @click="closeModal"
          aria-label="Close modal"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <!-- Video Player -->
        <div class="aspect-w-16 aspect-h-9">
          <!-- YouTube Video -->
          <iframe
            v-if="isYouTubeVideo"
            :src="youTubeEmbedUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-full rounded-lg"
          ></iframe>
          <!-- Native Video -->
          <video
            v-else
            ref="videoPlayer"
            :src="selectedVideo?.link"
            controls
            muted
            class="w-full h-full rounded-lg"
            @error="handleVideoError"
            @canplay="isLoading = false"
          ></video>
        </div>

        <!-- Video Info -->
        <div v-if="!errorMessage" class="mt-4">
          <h3 class="text-xl font-semibold text-gray-900">
            {{ selectedVideo?.title }}
          </h3>
          <div class="flex items-center justify-between text-sm text-gray-600 mt-2">
            <span class="flex items-center">
              <svg
                class="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              {{ selectedVideo?.views }} views
            </span>
            <span>{{ selectedVideo?.duration }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const { data: res } = await useFetch('/api/videos');
const videos = ref(res.value?.videos || []);


// Modal state
const isModalOpen = ref(false);
const selectedVideo = ref(null);
const isLoading = ref(false);
const errorMessage = ref('');

// Open modal with selected video
const openModal = (video) => {
  console.log('Opening video:', video); // Debug log
  selectedVideo.value = video;
  isModalOpen.value = true;
  isLoading.value = true;
  errorMessage.value = '';
  document.body.classList.add('modal-open');
};

// Close modal
const closeModal = () => {
  isModalOpen.value = false;
  selectedVideo.value = null;
  isLoading.value = false;
  errorMessage.value = '';
  document.body.classList.remove('modal-open');
};

// Check if video is a YouTube URL
const isYouTubeVideo = computed(() => {
  if (!selectedVideo.value?.link) return false;
  return /youtube\.com|youtu\.be/.test(selectedVideo.value.link);
});

// Convert YouTube URL to embed URL
const youTubeEmbedUrl = computed(() => {
  if (!isYouTubeVideo.value) return '';
  const url = selectedVideo.value.link;
  let videoId = '';
  if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('v=')[1].split('&')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  }
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
});

// Handle video loading errors
const handleVideoError = (event) => {
  console.error('Video error:', event); // Debug log
  isLoading.value = false;
  errorMessage.value = 'Videoni yuklashda xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.';
};
</script>

<style scoped>
.fixed {
  z-index: 50;
  overflow-y: auto;
}

body.modal-open {
  overflow: hidden;
}

/* Smooth transitions for modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>