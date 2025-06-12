<template>
  <div
    v-if="sidebarAd"
    class="bg-gray-100 border-gray-300 rounded-xl text-center"
  >
    <a :href="sidebarAd.link" target="_blank" class="block">
      <img
        v-if="sidebarAd.image"
        :src="sidebarAd.image"
        :alt="sidebarAd.name"
        class="w-full h-auto rounded-xl object-cover"
      />
    </a>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'

const { fetchadd, addData } = useadd()

onMounted(async () => {
  await fetchadd()
})

const sidebarAd = computed(() => {
  const ads = addData.value || [] // null bo‘lsa bo‘sh array
  return ads.find(ad => ad.advertisement_type === 'sidebar' && ad.active)
})
</script>
