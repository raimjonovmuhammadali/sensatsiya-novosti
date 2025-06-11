<template>
  <!-- Photo Gallery Section -->
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
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
        Photo Galleries
      </h2>
      <button
        class="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
      >
        View All Photos →
      </button>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div
        v-for="(gallery, index) in photoGallery"
        :key="index"
        class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
      >
        <div class="relative">
          <img
            :src="gallery.thumbnail"
            :alt="gallery.title"
            class="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div
            class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <span
            class="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-md"
          >
            {{ gallery.images }} photos
          </span>
        </div>
        <div class="p-5">
          <h3 class="font-semibold text-base">{{ gallery.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const photoGallery = [
  {
    title: "Climate Protests Around the World",
    images: 24,
    thumbnail: "https://avatars.mds.yandex.net/i?id=9a0ea24bfaeed9e190e08c40c9c52596_l-5694541-images-thumbs&n=13",
  },
  {
    title: "Olympic Training Facilities",
    images: 18,
    thumbnail: "https://avatars.mds.yandex.net/i?id=9a0ea24bfaeed9e190e08c40c9c52596_l-5694541-images-thumbs&n=13",
  },
  {
    title: "Tech Conference Highlights",
    images: 32,
    thumbnail: "https://avatars.mds.yandex.net/i?id=9a0ea24bfaeed9e190e08c40c9c52596_l-5694541-images-thumbs&n=13",
  },
]
</script>