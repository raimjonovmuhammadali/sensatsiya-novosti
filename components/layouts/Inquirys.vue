<template>
  <div class="mb-6">
    <!-- Header -->
    <header class="flex items-center justify-between py-6">
      <div class="flex items-center space-x-4">
        <h1 class="text-3xl font-bold">Dolzarb habarlar</h1>
      </div>
      <a
        href="/actual"
        class="inline-flex items-center px-4 py-2 rounded-md border border-gray-300"
      >
        Barchasi →
      </a>
    </header>

    <!-- News Grid -->
    <main class="w-full flex flex-wrap gap-6">
      <div
        class="w-full md:w-[23%] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
        v-for="item in filteredNews"
        :key="item.id"
      >
        <div class="relative">
          <img
            v-if="item.image"
            :src="item.image"
            class="w-full h-36 object-cover"
            :alt="item.title"
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
  </div>
</template>

<script setup>
const { allNews, fetchAllNews } = useNews()

onMounted(() => {
  fetchAllNews()
})

// Faqat `link` mavjud bo‘lmagan (ya'ni video emas) yangiliklar
const filteredNews = computed(() => {
  return allNews.value.filter((item) => !item.link)
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
