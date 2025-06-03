<script setup>
const breakingNews = [
  "BREAKING: Global Climate Summit reaches historic agreement",
  "LIVE: Stock markets hit record highs amid economic recovery",
  "UPDATE: New COVID variant detected in multiple countries",
]
</script>
<template>
    <div class="bg-red-700 text-white py-3 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center">
          <span class="bg-white text-red-700 px-3 py-1 rounded-md text-xs font-bold mr-4">BREAKING</span>
          <div class="flex animate-marquee space-x-8 hover:pause-marquee">
            <span v-for="(news, index) in breakingNews" :key="index" class="whitespace-nowrap">
              {{ news }}
            </span>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.pause-marquee:hover {
  animation-play-state: paused;
}
</style>