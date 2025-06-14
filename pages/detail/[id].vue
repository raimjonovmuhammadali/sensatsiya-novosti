<template>
  <main class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-10">
    <div class="mb-8 sm:mb-10">
      <h1
        class="text-xs sm:text-sm font-extrabold text-gray-900 mb-4 flex items-center"
      >
        <span
          v-if="isLoadingCategories"
          class="w-32 h-4 bg-gray-200 rounded animate-pulse"
        ></span>
        <span v-else>{{ getCategoryTitle(newsData?.category) }}</span>
      </h1>
      <p class="text-lg sm:text-xl text-gray-600">
        <span
          v-if="isLoadingNews"
          class="w-2/3 h-6 bg-gray-200 rounded animate-pulse block"
        ></span>
        <span v-else>{{ newsData?.title }}</span>
      </p>
    </div>

    <div class="grid lg:grid-cols-4 gap-6 sm:gap-10">
      <div class="lg:col-span-3 flex flex-col gap-8 sm:gap-10">
        <!-- News Detail -->
        <section class="w-full">
          <div
            class="w-full bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300"
          >
            <div
              v-if="isLoadingNews"
              class="h-72 bg-gray-200 animate-pulse"
            ></div>
            <template v-else>
              <template v-if="newsData?.link">
                <iframe
                  :src="getYouTubeEmbedUrl(newsData.link)"
                  class="w-full h-48 sm:h-64 lg:h-72"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </template>
              <template v-else-if="newsData?.image">
                <img
                  :src="newsData.image"
                  :alt="newsData.title"
                  class="w-full h-48 sm:h-64 lg:h-72 object-cover"
                />
              </template>
              <template v-else>
                <div
                  class="h-72 bg-gray-100 flex items-center justify-center text-gray-400 text-sm"
                >
                  Media mavjud emas
                </div>
              </template>
            </template>

            <div class="p-4 sm:p-6">
              <div v-if="isLoadingNews">
                <div
                  class="w-20 h-5 bg-red-200 rounded mb-4 animate-pulse"
                ></div>
                <div
                  class="w-full h-6 bg-gray-200 rounded mb-3 animate-pulse"
                ></div>
                <div
                  class="w-full h-24 bg-gray-100 rounded animate-pulse"
                ></div>
              </div>
              <template v-else>
                <span
                  class="bg-red-700 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold mb-3 inline-block"
                >
                  <svg
                    class="w-4 h-4 inline mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                  {{ newsData?.title }}
                </h2>
                <p class="text-gray-600 text-sm sm:text-base lg:text-lg mb-4">
                  {{ newsData?.text }}
                </p>
                <div
                  class="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm text-gray-600 gap-4"
                >
                  <div
                    class="flex flex-wrap items-center space-x-2 sm:space-x-4"
                  >
                    <span class="flex items-center"
                      ><svg
                        class="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        /></svg
                      >{{ newsData?.views }}</span
                    >
                    <span class="hidden sm:inline">•</span>
                    <span>{{
                      new Date(newsData?.created_date).toLocaleString()
                    }}</span>
                    <span class="hidden sm:inline">•</span>
                    <span
                      >{{ calculateReadTime(newsData?.text) }} o'qiladi</span
                    >
                  </div>
                  <div class="flex items-center space-x-2">
                    <button
                      @click="shareArticle"
                      class="px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm hover:bg-blue-200 transition-all"
                    >
                      <svg
                        class="w-4 h-4 inline mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.684 13.342A3 3 0 119.5 12a3 3 0 11-.816 1.342zm0 0l6.632 3.316m-6.632-6l6.632-3.316"
                        ></path>
                      </svg>
                      Ulashish
                    </button>

                    <button
                      class="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm hover:bg-gray-200 transition-all"
                    >
                      <svg
                        class="w-4 h-4 inline mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        ></path>
                      </svg>
                      Saqlash
                    </button>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </section>

        <!-- Related News -->
        <section v-if="!isLoadingAll && filteredRelatedNews.length">
          <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
            Toifadagi maqolalar
          </h3>
          <div class="w-full flex flex-wrap gap-6">
            <div
              v-for="article in filteredRelatedNews"
              :key="article.id"
              class="w-full md:w-[23%]"
            >
              <div
                class="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow duration-300"
              >
                <!-- MEDIA QISMI -->
                <div class="w-full h-36 bg-gray-100 relative">
                  <!-- YouTube Video -->
                  <iframe
                    v-if="isYouTubeLink(article.link)"
                    :src="getYouTubeEmbedUrll(article.link)"
                    class="w-full h-full"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>

                  <!-- Local Video -->
                  <video
                    v-else-if="article.link"
                    :src="article.link"
                    controls
                    class="w-full h-full object-cover"
                  ></video>

                  <!-- Image -->
                  <img
                    v-else-if="article.image"
                    :src="article.image"
                    :alt="article.title"
                    class="w-full h-full object-cover"
                  />

                  <!-- Fallback -->
                  <div
                    v-else
                    class="w-full h-full flex items-center justify-center text-gray-400 text-sm"
                  >
                    Media mavjud emas
                  </div>
                </div>

                <!-- MATN QISMI -->
                <div class="p-4 sm:p-6">
                  <nuxt-link
                    :to="`/detail/${article.id}`"
                    class="font-bold text-sm sm:text-md mb-2 line-clamp-2 block hover:text-blue-600"
                  >
                    {{ article.title }}
                  </nuxt-link>
                  <p class="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-3">
                    {{ article.summary || article.text?.slice(0, 100) + "..." }}
                  </p>
                  <div
                    class="flex items-center justify-between text-xs text-gray-600"
                  >
                    <span>{{
                      new Date(article.created_date).toLocaleDateString()
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Sidebar -->
      <div class="lg:col-span-1 space-y-6 sm:space-y-8">
        <LayoutsSidebar />
      </div>
    </div>
  </main>

  <LayoutsFooter />
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
const router = useRoute();
const id = router.params.id;

const { newsData, allNews, fetchNewsById, fetchAllNews } = useNews();
const { fetchCategoires, categoiresData } = useCategoires();

const isLoadingNews = ref(true);
const isLoadingAll = ref(true);
const isLoadingCategories = ref(true);

const getCategoryTitle = (categoryId) => {
  return (
    categoiresData.value?.find((cat) => cat.id === categoryId)?.title ||
    "Nomaʼlum"
  );
};

const calculateReadTime = (text) => {
  const safeText = text || "";
  const words = safeText.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} daqiqa`;
};

const getYouTubeEmbedUrl = (link) => {
  if (!link) return null;
  const videoId = link.includes("youtube.com")
    ? link.split("v=")[1]?.split("&")[0]
    : link.includes("youtu.be/")
    ? link.split("youtu.be/")[1]
    : null;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};
const isYouTubeLink = (link) => {
  return link?.includes("youtube.com") || link?.includes("youtu.be");
};

const getYouTubeEmbedUrll = (link) => {
  if (!link) return null;
  const videoId = link.includes("youtube.com")
    ? link.split("v=")[1]?.split("&")[0]
    : link.includes("youtu.be/")
    ? link.split("youtu.be/")[1]
    : null;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};
const filteredRelatedNews = computed(() => {
  return allNews.value.filter(
    (article) =>
      article.category === newsData.value?.category &&
      article.id !== newsData.value?.id
  );
});

onMounted(async () => {
  try {
    isLoadingCategories.value = true;
    await fetchCategoires();
  } finally {
    isLoadingCategories.value = false;
  }

  if (id) {
    try {
      isLoadingNews.value = true;
      await fetchNewsById(id);
    } finally {
      isLoadingNews.value = false;
    }
  }

  try {
    isLoadingAll.value = true;
    await fetchAllNews();
  } finally {
    isLoadingAll.value = false;
  }
});

const shareArticle = () => {
  const url = window.location.href;
  const title = newsData.value?.title || "Maqola";

  if (navigator.share) {
    navigator
      .share({
        title,
        text: "Ushbu maqolani o'qib ko'ring:",
        url,
      })
      .then(() => console.log("Ulashildi"))
      .catch((error) => console.error("Ulashishda xatolik:", error));
  } else {
    // Fallback
    copyToClipboard(url);
    alert("Ulashish funksiyasi mavjud emas. Link nusxalandi.");
  }
};

const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => console.log("Link nusxalandi"))
    .catch((err) => console.error("Nusxalashda xatolik:", err));
};

</script>

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
</style>
