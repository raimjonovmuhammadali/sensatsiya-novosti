<script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '#app';

definePageMeta({
  layout: 'admin',
});

const { newsData, allNews, error, loading, fetchNewsById, fetchAllNews, deleteNews, updateNews } = useNews();
const { categoiresData, fetchCategoires } = useCategoires();

const showDeleteModal = ref(false);
const showViewModal = ref(false);
const showEditModal = ref(false);
const showCreateModal = ref(false);
const selectedNewsId = ref(null);
const editForm = ref({ title: '', category: '' });
const createForm = ref({ title: '', text: '', image: null, video: null, link: '', category: '' });
const editError = ref(null);
const createError = ref(null);

useHead({
  link: [{ rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css' }],
  script: [{ src: 'https://unpkg.com/aos@next/dist/aos.js', defer: true }],
});

const getCategoryTitle = (categoryId) => {
  return categoiresData.value?.find(cat => cat.id === categoryId)?.title || 'Nomaʼlum';
};

const handleView = async (id) => {
  await fetchNewsById(id);
  if (!error.value) {
    showViewModal.value = true;
  }
};

const handleEdit = async (id) => {
  await fetchNewsById(id);
  if (!error.value && newsData.value) {
    selectedNewsId.value = id;
    editForm.value = {
      title: newsData.value.title,
      category: newsData.value.category,
    };
    showEditModal.value = true;
  }
};

const confirmDelete = (id) => {
  selectedNewsId.value = id;
  showDeleteModal.value = true;
};

const handleDelete = async () => {
  if (!selectedNewsId.value) return;
  await deleteNews(selectedNewsId.value);
  if (!error.value) {
    await fetchAllNews();
    showDeleteModal.value = false;
  }
};

const handleUpdate = async () => {
  if (!selectedNewsId.value) return;
  editError.value = null;
  await updateNews(selectedNewsId.value, editForm.value);
  if (!error.value) {
    await fetchAllNews();
    showEditModal.value = false;
  } else {
    editError.value = error.value;
  }
};

const handleCreate = async () => {
  createError.value = null;
  try {
    const formData = new FormData();
    formData.append('title', createForm.value.title);
    formData.append('text', createForm.value.text);
    if (createForm.value.image) {
      formData.append('image', createForm.value.image);
    }
    if (createForm.value.video) {
      formData.append('video', createForm.value.video);
    }
    formData.append('link', createForm.value.link || '');
    formData.append('category', createForm.value.category);

    const response = await fetch(`${BASE_URL}news/`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      await fetchAllNews();
      showCreateModal.value = false;
      createForm.value = { title: '', text: '', image: null, video: null, link: '', category: '' };
    } else {
      createError.value = 'Yangilik yaratishda xatolik yuz berdi';
    }
  } catch (err) {
    createError.value = 'Server bilan bog‘lanishda xatolik';
  }
};

const dismissError = () => {
  error.value = null;
  editError.value = null;
  createError.value = null;
};

onMounted(() => {
  if (process.client) {
    import('aos').then(AOS => {
      AOS.default.init({ duration: 800, once: true });
    });
  }
  Promise.all([fetchAllNews(), fetchCategoires()]).catch(() => {
    error.value = 'Ma\'lumotlarni yuklashda xatolik yuz berdi';
  });
});
</script>

<template>
  <div class="w-full p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 min-h-screen">
    <!-- Header -->
    <div class="mb-6 sm:mb-8 flex justify-between items-center" data-aos="fade-down">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-teal-400">So‘nggi Yangiliklar</h2>
      <button
        @click="showCreateModal = true"
        class="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-500"
      >
        Yangilik Qo‘shish
      </button>
    </div>

    <!-- Error Alert -->
    <div v-if="error" class="bg-red-600 text-white p-4 rounded-lg mb-6 flex justify-between items-center" data-aos="fade-up">
      <span>{{ error }}</span>
      <button @click="dismissError" class="text-white hover:text-gray-200">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center text-gray-400 mt-8" data-aos="fade-up">
      <svg class="animate-spin h-8 w-8 mx-auto text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
      </svg>
    </div>

    <!-- News Table -->
    <div v-else class="overflow-x-auto" data-aos="fade-up">
      <table class="w-full text-left border-collapse bg-gray-800 rounded-lg shadow-lg">
        <thead>
          <tr class="bg-gray-700 text-gray-300 text-sm sm:text-base">
            <th class="p-3 sm:p-4">ID</th>
            <th class="p-3 sm:p-4">Sarlavha</th>
            <th class="p-3 sm:p-4 hidden md:table-cell">Yaratilgan Sana</th>
            <th class="p-3 sm:p-4 hidden lg:table-cell">Ko‘rishlar</th>
            <th class="p-3 sm:p-4 hidden md:table-cell">Kategoriya</th>
            <th class="p-3 sm:p-4">Amallar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in allNews" :key="item.id" class="border-b border-gray-700 hover:bg-gray-600 transition-all" :data-aos="'fade-up'" :data-aos-delay="index * 100">
            <td class="p-3 sm:p-4">{{ item.id }}</td>
            <td class="p-3 sm:p-4">{{ item.title }}</td>
            <td class="p-3 sm:p-4 hidden md:table-cell">{{ new Date(item.created_date).toLocaleDateString('uz-UZ') }}</td>
            <td class="p-3 sm:p-4 hidden lg:table-cell">{{ item.views }}</td>
            <td class="p-3 sm:p-4 hidden md:table-cell">{{ getCategoryTitle(item.category) }}</td>
            <td class="p-3 sm:p-4 flex space-x-2">
              <!-- View Icon (Eye) -->
              <button @click="handleView(item.id)" class="text-blue-400 hover:text-blue-300" aria-label="Ko‘rish">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
              <!-- Edit Icon (Pencil) -->
              <button @click="handleEdit(item.id)" class="text-yellow-400 hover:text-yellow-300" aria-label="Tahrirlash">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <!-- Delete Icon (Trash) -->
              <button @click="confirmDelete(item.id)" class="text-red-400 hover:text-red-300" aria-label="O‘chirish">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- No News Message -->
    <div v-if="!allNews?.length && !error && !loading" class="text-center text-gray-400 mt-8" data-aos="fade-up">
      Hozircha yangiliklar mavjud emas
    </div>

    <!-- View Modal -->
    <div v-if="showViewModal" class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50" @click="showViewModal = false">
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full" @click.stop>
        <h3 class="text-lg font-semibold text-white mb-4">Yangilik Ma'lumotlari</h3>
        <div v-if="newsData" class="text-gray-300 space-y-2">
          <img :src="newsData.image" alt="" v-if="newsData.image">
          <p><strong>Sarlavha:</strong> {{ newsData.title }}</p>
          <p><strong>Yaratilgan Sana:</strong> {{ new Date(newsData.created_date).toLocaleDateString('uz-UZ') }}</p>
          <p><strong>Ko‘rishlar:</strong> {{ newsData.views }}</p>
          <p><strong>Kategoriya:</strong> {{ getCategoryTitle(newsData.category) }}</p>
          <p class="w-full h-[100px] overflow-auto">{{ newsData.text }}</p>
          <p v-if="newsData.video"><strong>Video:</strong> <a :href="newsData.video" target="_blank" class="text-teal-400 hover:underline">Ko‘rish</a></p>
        </div>
        <div class="flex justify-end mt-6">
          <button @click="showViewModal = false" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500">Yopish</button>
        </div>
      </div>
    </div>

    <!-- Create Modal -->
    <div v-if="showCreateModal" class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50" @click="showCreateModal = false">
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full" @click.stop>
        <h3 class="text-lg font-semibold text-white mb-4">Yangi Yangilik Qo‘shish</h3>
        <div v-if="createError" class="bg-red-600 text-white p-2 rounded mb-4 flex justify-between items-center">
          <span>{{ createError }}</span>
          <button @click="dismissError" class="text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form @submit.prevent="handleCreate" class="space-y-4">
          <div>
            <label for="create-title" class="block text-sm font-medium text-gray-300">Sarlavha</label>
            <input
              v-model="createForm.title"
              type="text"
              id="create-title"
              required
              class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label for="create-text" class="block text-sm font-medium text-gray-300">Matn</label>
            <textarea
              v-model="createForm.text"
              id="create-text"
              required
              class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>
          </div>
          <div>
            <label for="create-image" class="block text-sm font-medium text-gray-300">Rasm (ixtiyoriy)</label>
            <input
              @change="createForm.image = $event.target.files[0]"
              type="file"
              id="create-image"
              accept="image/*"
              class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label for="create-video" class="block text-sm font-medium text-gray-300">Video (ixtiyoriy)</label>
            <input
              @change="createForm.video = $event.target.files[0]"
              type="file"
              id="create-video"
              accept="video/*"
              class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label for="create-link" class="block text-sm font-medium text-gray-300">Havola (ixtiyoriy)</label>
            <input
              v-model="createForm.link"
              type="url"
              id="create-link"
              class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label for="create-category" class="block text-sm font-medium text-gray-300">Kategoriya</label>
            <select
              v-model="createForm.category"
              id="create-category"
              required
              class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option v-for="cat in categoiresData" :key="cat.id" :value="cat.id">{{ cat.title }}</option>
            </select>
          </div>
          <div class="flex justify-end space-x-4">
            <button
              type="button"
              @click="showCreateModal = false"
              class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              :disabled="loading"
              class="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-500 disabled:opacity-50"
            >
              {{ loading ? 'Saqlanmoqda...' : 'Saqlash' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Edit Modal -->
    <div v-if="showEditModal" class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50" @click="showEditModal = false">
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full" @click.stop>
        <h3 class="text-lg font-semibold text-white mb-4">Yangilikni Tahrirlash</h3>
        <div v-if="editError" class="bg-red-600 text-white p-2 rounded mb-4 flex justify-between items-center">
          <span>{{ editError }}</span>
          <button @click="dismissError" class="text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form @submit.prevent="handleUpdate" class="space-y-4">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-300">Sarlavha</label>
            <input
              v-model="editForm.title"
              type="text"
              id="title"
              required
              class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label for="category" class="block text-sm font-medium text-gray-300">Kategoriya</label>
            <select
              v-model="editForm.category"
              id="category"
              required
              class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option v-for="cat in categoiresData" :key="cat.id" :value="cat.id">{{ cat.title }}</option>
            </select>
          </div>
          <div class="flex justify-end space-x-4">
            <button
              type="button"
              @click="showEditModal = false"
              class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              :disabled="loading"
              class="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-500 disabled:opacity-50"
            >
              {{ loading ? 'Saqlanmoqda...' : 'Saqlash' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="showDeleteModal = false">
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full" @click.stop>
        <h3 class="text-lg font-semibold text-white mb-4">Yangilikni o‘chirish</h3>
        <p class="text-gray-300 mb-6">Haqiqatan ham ushbu yangilikni o‘chirmoqchimisiz?</p>
        <div class="flex justify-end space-x-4">
          <button @click="showDeleteModal = false" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500">Bekor qilish</button>
          <button @click="handleDelete" :disabled="loading" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 disabled:opacity-50">
            {{ loading ? 'O‘chirilmoqda...' : 'O‘chirish' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
table th, table td {
  border-bottom: 1px solid #4b5563;
}

/* Responsive table adjustments */
@media (max-width: 768px) {
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}

/* Custom scrollbar for better aesthetics */
::-webkit-scrollbar {
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #1f2937;
}
::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>