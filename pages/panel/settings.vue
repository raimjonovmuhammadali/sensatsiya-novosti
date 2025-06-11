<script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '#app';
import { useAdvertisements } from '~/composables/useAdvertisements';
import { useMedias } from '~/composables/useMedias';
import { useCategories } from '~/composables/useCategories';

definePageMeta({
  layout: 'admin',
});

// Composable'lardan foydalanish
const { error: adError, getAllAdvertisements, addAdvertisement, updateAdvertisement, deleteAdvertisement } = useAdvertisements();
const { error: mediaError, getAllMedias, addMedia, updateMedia, deleteMedia } = useMedias();
const { error: categoryError, getAllCategories, addCategory, updateCategory, deleteCategory } = useCategories();

// Ma'lumotlar
const advertisements = ref([]);
const medias = ref([]);
const categories = ref([]);
const isModalOpen = ref(false);
const modalMode = ref('add'); // 'add' yoki 'edit'
const modalType = ref(''); // 'advertisement', 'media', 'category'
const currentItem = ref({});

// Ma'lumotlarni yuklash
const fetchData = async () => {
  advertisements.value = await getAllAdvertisements();
  medias.value = await getAllMedias();
  categories.value = await getAllCategories();
};

// Modalni ochish
const openModal = (type, mode = 'add', item = null) => {
  modalType.value = type;
  modalMode.value = mode;
  if (mode === 'edit' && item) {
    currentItem.value = { ...item };
  } else {
    currentItem.value = type === 'advertisement' ? { name: '', description: '', link: '', active_time: '' } :
                       type === 'media' ? { name: '', link: '' } :
                       { title: '' };
  }
  isModalOpen.value = true;
};

// Modalni yopish
const closeModal = () => {
  isModalOpen.value = false;
  currentItem.value = {};
};

// Ma'lumotni saqlash
const saveItem = async () => {
  if (modalType.value === 'advertisement') {
    const adData = {
      name: currentItem.value.name,
      description: currentItem.value.description,
      link: currentItem.value.link,
      active_time: currentItem.value.active_time,
    };
    if (modalMode.value === 'add') {
      const success = await addAdvertisement(adData);
      if (success) await fetchData();
    } else {
      const success = await updateAdvertisement(currentItem.value.id, adData);
      if (success) await fetchData();
    }
  } else if (modalType.value === 'media') {
    const mediaData = {
      name: currentItem.value.name,
      link: currentItem.value.link,
    };
    if (modalMode.value === 'add') {
      const success = await addMedia(mediaData);
      if (success) await fetchData();
    } else {
      const success = await updateMedia(currentItem.value.id, mediaData);
      if (success) await fetchData();
    }
  } else if (modalType.value === 'category') {
    const categoryData = {
      title: currentItem.value.title,
    };
    if (modalMode.value === 'add') {
      const success = await addCategory(categoryData);
      if (success) await fetchData();
    } else {
      const success = await updateCategory(currentItem.value.id, categoryData);
      if (success) await fetchData();
    }
  }
  if (!adError.value && !mediaError.value && !categoryError.value) closeModal();
};

// Elementni o‘chirish
const deleteItem = async (type, id) => {
  if (confirm('Haqiqatan ham o‘chirmoqchimisiz?')) {
    let success = false;
    if (type === 'advertisement') success = await deleteAdvertisement(id);
    else if (type === 'media') success = await deleteMedia(id);
    else if (type === 'category') success = await deleteCategory(id);
    if (success) await fetchData();
  }
};

// AOS ni CDN orqali head qismiga qo‘shish
useHead({
  link: [{ rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css' }],
  script: [{ src: 'https://unpkg.com/aos@next/dist/aos.js', defer: true }],
});

onMounted(() => {
  if (process.client) {
    import('aos').then(AOS => {
      AOS.default.init({ duration: 800, once: true });
    });
  }
  fetchData();
});
</script>

<template>
  <div class="w-full p-4 md:p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
    <!-- Sarlavha -->
    <div class="mb-8" data-aos="fade-down">
      <h2 class="text-2xl font-bold text-teal-400">Sozlamalar</h2>
    </div>

    <!-- Xatolik xabari -->
    <div v-if="adError || mediaError || categoryError" class="bg-red-600 text-white p-4 rounded-lg mb-6" data-aos="fade-up">
      {{ adError || mediaError || categoryError }}
    </div>

    <!-- Reklamalar -->
    <div class="mb-12" data-aos="fade-up">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold text-gray-300">Reklamalar</h3>
        <button class="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition-all" @click="openModal('advertisement')">
          <svg class="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
          Reklama Qo‘shish
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse bg-gray-800 rounded-lg shadow-lg">
          <thead>
            <tr class="bg-gray-700 text-gray-300">
              <th class="p-4">ID</th>
              <th class="p-4">Nomi</th>
              <th class="p-4">Tavsif</th>
              <th class="p-4">Link</th>
              <th class="p-4">Faol Vaqti</th>
              <th class="p-4">Amallar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in advertisements" :key="item.id" class="border-b border-gray-700 hover:bg-gray-600 transition-all" :data-aos="'fade-up'" :data-aos-delay="index * 100">
              <td class="p-4">{{ item.id }}</td>
              <td class="p-4">{{ item.name }}</td>
              <td class="p-4">{{ item.description || '-' }}</td>
              <td class="p-4">{{ item.link || '-' }}</td>
              <td class="p-4">{{ item.active_time ? new Date(item.active_time).toLocaleDateString('uz-UZ') : '-' }}</td>
              <td class="p-4 flex space-x-2">
                <button class="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all" @click="openModal('advertisement', 'edit', item)">Tahrirlash</button>
                <button class="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-all" @click="deleteItem('advertisement', item.id)">O‘chirish</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="!advertisements.length && !adError" class="text-center text-gray-400 mt-4">Hozircha reklamalar mavjud emas</div>
    </div>

    <!-- Ijtimoiy Tarmoqlar -->
    <div class="mb-12" data-aos="fade-up">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold text-gray-300">Ijtimoiy Tarmoqlar</h3>
        <button class="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition-all" @click="openModal('media')">
          <svg class="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
          Ijtimoiy Tarmoq Qo‘shish
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse bg-gray-800 rounded-lg shadow-lg">
          <thead>
            <tr class="bg-gray-700 text-gray-300">
              <th class="p-4">ID</th>
              <th class="p-4">Nomi</th>
              <th class="p-4">Link</th>
              <th class="p-4">Amallar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in medias" :key="item.id" class="border-b border-gray-700 hover:bg-gray-600 transition-all" :data-aos="'fade-up'" :data-aos-delay="index * 100">
              <td class="p-4">{{ item.id }}</td>
              <td class="p-4">{{ item.name }}</td>
              <td class="p-4">{{ item.link || '-' }}</td>
              <td class="p-4 flex space-x-2">
                <button class="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all" @click="openModal('media', 'edit', item)">Tahrirlash</button>
                <button class="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-all" @click="deleteItem('media', item.id)">O‘chirish</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="!medias.length && !mediaError" class="text-center text-gray-400 mt-4">Hozircha ijtimoiy tarmoqlar mavjud emas</div>
    </div>

    <!-- Kategoriyalar -->
    <div class="mb-12" data-aos="fade-up">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold text-gray-300">Kategoriyalar</h3>
        <button class="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition-all" @click="openModal('category')">
          <svg class="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
          Kategoriya Qo‘shish
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse bg-gray-800 rounded-lg shadow-lg">
          <thead>
            <tr class="bg-gray-700 text-gray-300">
              <th class="p-4">ID</th>
              <th class="p-4">Sarlavha</th>
              <th class="p-4">Amallar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in categories" :key="item.id" class="border-b border-gray-700 hover:bg-gray-600 transition-all" :data-aos="'fade-up'" :data-aos-delay="index * 100">
              <td class="p-4">{{ item.id }}</td>
              <td class="p-4">{{ item.title }}</td>
              <td class="p-4 flex space-x-2">
                <button class="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all" @click="openModal('category', 'edit', item)">Tahrirlash</button>
                <button class="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-all" @click="deleteItem('category', item.id)">O‘chirish</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="!categories.length && !categoryError" class="text-center text-gray-400 mt-4">Hozircha kategoriyalar mavjud emas</div>
    </div>

    <!-- Modal Oyna -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-aos="fade">
      <div class="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
        <h3 class="text-lg font-semibold text-teal-400 mb-4">
          {{ modalMode === 'add' ? modalType === 'advertisement' ? 'Yangi Reklama Qo‘shish' : modalType === 'media' ? 'Yangi Ijtimoiy Tarmoq Qo‘shish' : 'Yangi Kategoriya Qo‘shish' : 
             modalType === 'advertisement' ? 'Reklamani Tahrirlash' : modalType === 'media' ? 'Ijtimoiy Tarmoqni Tahrirlash' : 'Kategoriyani Tahrirlash' }}
        </h3>
        <form @submit.prevent="saveItem">
          <div v-if="modalType === 'advertisement'" class="space-y-4">
            <div>
              <label class="block text-sm text-gray-300 mb-2">Nomi</label>
              <input v-model="currentItem.name" type="text" class="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" required maxlength="255" minlength="1" />
            </div>
            <div>
              <label class="block text-sm text-gray-300 mb-2">Tavsif</label>
              <textarea v-model="currentItem.description" class="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" rows="4"></textarea>
            </div>
            <div>
              <label class="block text-sm text-gray-300 mb-2">Link</label>
              <input v-model="currentItem.link" type="text" class="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" maxlength="255" />
            </div>
            <div>
              <label class="block text-sm text-gray-300 mb-2">Faol Vaqti</label>
              <input v-model="currentItem.active_time" type="datetime-local" class="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" />
            </div>
          </div>
          <div v-else-if="modalType === 'media'" class="space-y-4">
            <div>
              <label class="block text-sm text-gray-300 mb-2">Nomi</label>
              <input v-model="currentItem.name" type="text" class="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" required maxlength="255" />
            </div>
            <div>
              <label class="block text-sm text-gray-300 mb-2">Link</label>
              <input v-model="currentItem.link" type="text" class="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" maxlength="255" />
            </div>
          </div>
          <div v-else-if="modalType === 'category'" class="space-y-4">
            <div>
              <label class="block text-sm text-gray-300 mb-2">Sarlavha</label>
              <input v-model="currentItem.title" type="text" class="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" required maxlength="255" />
            </div>
          </div>
          <div class="flex justify-end space-x-2 mt-4">
            <button type="button" class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-all" @click="closeModal">Yopish</button>
            <button type="submit" class="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-all">Saqlash</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
/* Tailwind CSS bilan qo‘shimcha stillar */
table th, table td {
  border-bottom: 1px solid #4b5563;
}
</style>