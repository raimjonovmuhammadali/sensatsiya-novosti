<template>
  <!-- Ad Banner -->
  <div class="mb-10 h-[160px]" v-if="bannerAd">
    <div
      class="bg-gray-100 h-[160px] border-gray-300 rounded-xl text-center"
    >
      <a :href="bannerAd.link" target="_blank" class="w-full h-full">
        <img
          v-if="bannerAd.image"
          :src="bannerAd.image"
          :alt="bannerAd.name"
          class="w-full h-full rounded-xl object-cover"
        />
      </a>
    </div>
  </div>
</template>
<script setup>
const { fetchadd, addData } = useadd();
await fetchadd();

const bannerAd = computed(() =>
  addData.value.find((ad) => ad.advertisement_type === "banner" && ad.active)
);
</script>
