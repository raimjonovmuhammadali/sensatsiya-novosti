<template>
  <div class="mb-6">
    <!-- Header -->
    <header class="flex items-center justify-between py-6">
      <div class="flex items-center space-x-4">
        <h1 class="text-3xl font-bold">Dolzarb habarlar</h1>
      </div>
      <a
        href="#"
        class="inline-flex items-center px-4 py-2 rounded-md border border-gray-300"
      >
        Barchasi →
      </a>
    </header>

    <!-- News Grid -->
    <main class="w-full flex flex-wrap gap-6">
      <!-- Card 1 -->
      <div class="w-[23%] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group" v-for="item in allNews" :key="item.id">
        <div class="relative">
          <img
            :src="item.image"
            class="w-full h-36 object-cover"
          />
        </div>
        <div class="p-5">
          <p class="text-[12px] text-gray-400">{{ new Date(item.created_date).toLocaleString() }}</p>
          <nuxt-link :to="`/detail/${item.id}`" class="text-md font-semibold mt-2 line-clamp-2 ">
            {{item.title}}
          </nuxt-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const { newsData, allNews, fetchNewsById, fetchAllNews } = useNews();

</script>

<style scoped>
/* Custom styles for image loading fallback */
img {
  @apply object-cover;
}
img[src="/"] {
  @apply hidden;
}
</style>