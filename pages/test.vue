<template>
  <div class="space-y-6 p-4">
    <h1 class="text-2xl font-bold">YouTube Videolari</h1>
    <div v-if="videos.length">
      <div
        v-for="video in videos"
        :key="video.id"
        class="border p-4 rounded-xl shadow-sm"
      >
        <h2 class="text-lg font-semibold mb-2">{{ video.title }}</h2>
        <iframe
          class="w-full aspect-video"
          :src="`https://www.youtube.com/embed/${video.id}`"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <p v-else>Videolar yuklanmoqda...</p>
  </div>
</template>

<script setup lang="ts">
const { data: res } = await useFetch('/api/videos')
const videos = res.value?.videos || []
</script>
