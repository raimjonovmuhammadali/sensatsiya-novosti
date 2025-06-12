<script setup>
import { ref, onMounted } from "vue";

const {
  socialsData,
  error: addError,
  loading: addLoading,
  fetchsocials,
  createAd,
} = usesocials();

const token = process.client ? localStorage.getItem("access_token") : null;

console.log(token);

const modalVisible = ref(false);
const addModalVisible = ref(false);

// Reklama tahrirlash
const editedItem = ref({
  id: null,
  name: "",
  advertisement_type: "",
  description: "",
  image: "",
  link: "",
  active_time: "",
  active: true,
});

// Yangi reklama qo‘shish
const newItem = ref({
  name: "",
  advertisement_type: "",
  description: "",
  image: null,
  link: "",
  active_time: "",
  active: true,
});

// Reklamalarni yuklash
onMounted(async () => {
  await fetchsocials();
  if (process.client) {
    import("aos").then((AOS) => {
      AOS.default.init({ duration: 800, once: true });
    });
  }
});

// 🔁 Holatni faollashtirish
const updateActive = async (item) => {
  const token = process.client ? localStorage.getItem("access_token") : null;
  if (!token) {
    alert("Token topilmadi.");
    return;
  }

  // Joriy active qiymatini saqlaymiz
  const originalActive = item.active;

  // Yangi qiymat tayyorlaymiz (qarama-qarshi)
  const newActive = !originalActive;
  

  // PUT uchun to‘liq ma’lumot yuboramiz
  const updatedData = {
    name: item.name || '',
    link: item.link || '',
  };

  const { error, data } = await useFetch(`https://news111.pythonanywhere.com/medias/${item.id}/`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  if (!error.value) {
    console.log("Holat yangilandi:", data.value);
    item.active = newActive; // frontendda ham yangilaymiz
  } else {
    console.error("Xatolik:", error.value);
    alert("Holatni yangilashda xatolik.");
  }
};



// ✏️ Modalni ochish
const openModal = (item) => {
  editedItem.value = { ...item };
  modalVisible.value = true;
};

// ➕ Yangi qo‘shish modalini ochish
const openAddModal = () => {
  newItem.value = {
    name: "",
    image: null,
  };
  addModalVisible.value = true;
};

// 💾 Tahrirlangan reklamani saqlash
const saveChanges = async () => {
  const {
    id,
    name,
    link,
  } = editedItem.value;

  const { error } = await useFetch(
    `https://news111.pythonanywhere.com/medias/${id}/`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    }
  );

  if (!error.value) {
    const index = addData.value.findIndex((ad) => ad.id === id);
    if (index !== -1) addData.value[index] = { ...editedItem.value };
    modalVisible.value = false;
  } else {
    alert("Saqlashda xatolik.");
  }
};

// 🆕 Yangi reklama yaratish
const createNewAd = async () => {
  const formData = new FormData();
  formData.append("name", newItem.value.name);
  formData.append("link", newItem.value.link);
  if (newItem.value.image) {
    formData.append("icon", newItem.value.image);
  }

  const { error } = await useFetch(
    `https://news111.pythonanywhere.com/medias/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );

  if (!error.value) {
    await fetchsocials();
    addModalVisible.value = false;
  } else {
    alert("Reklama qo‘shishda xatolik.");
  }
};

// 🗑️ Reklamani o‘chirish
const deleteAd = async (id) => {
  if (confirm("Haqiqatan ham o‘chirmoqchimisiz?")) {
    const { error } = await useFetch(
      `https://news111.pythonanywhere.com/medias/${id}/`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!error.value) {
     socialsData.value =socialsData.value.filter((ad) => ad.id !== id);
    } else {
      alert("O‘chirishda xatolik.");
    }
  }
};

// 🖼️ Rasmni tanlash
const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) newItem.value.image = file;
};
</script>

<template>
  <div
    class="w-full text-gray-100 mb-10"
  >
    <!-- Header -->
    <div
      class="mb-6 sm:mb-8 flex justify-between items-center"
      data-aos="fade-down"
    >
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-teal-400">
        Tarmoqlar
      </h2>
      <button
        @click="openAddModal"
        class="flex items-center px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-500"
        aria-label="Yangi reklama qo‘shish"
      >
        <svg
          class="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Yangi Qo‘shish
      </button>
    </div>

    <!-- Error Alert -->
    <div
      v-if="addError"
      class="bg-red-600 text-white p-4 rounded-lg mb-6 flex justify-between items-center"
      data-aos="fade-up"
    >
      <span>{{ addError }}</span>
      <button
        @click="addError = null"
        class="text-white hover:text-gray-200"
        aria-label="Xato xabarni yopish"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Loading State -->
    <div
      v-if="addLoading"
      class="text-center text-gray-400 mt-8"
      data-aos="fade-up"
    >
      <svg
        class="animate-spin h-8 w-8 mx-auto text-teal-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8z"
        ></path>
      </svg>
    </div>

    <!-- Ads Table -->
    <div v-else class="overflow-x-auto" data-aos="fade-up">
      <table
        class="w-full text-left border-collapse bg-gray-800 rounded-lg shadow-lg"
      >
        <thead>
          <tr class="bg-gray-700 text-gray-300 text-sm sm:text-base">
            <th class="p-3 sm:p-4">Rasm</th>
            <th class="p-3 sm:p-4">ID</th>
            <th class="p-3 sm:p-4">Sarlavha</th>
            <th class="p-3 sm:p-4 hidden md:table-cell">Yaratilgan Sana</th>
            <th class="p-3 sm:p-4 hidden lg:table-cell">Havola</th>
            <th class="p-3 sm:p-4">Amallar</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in socialsData"
            :key="item.id"
            class="border-b border-gray-700 hover:bg-gray-600 transition-all"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
          >
            <td class="p-3 sm:p-4">
              <img
                :src="item.icon || 'https://via.placeholder.com/40'"
                alt="Ad Image"
                class="w-15 rounded object-cover"
              />
            </td>
            <td class="p-3 sm:p-4">{{ item.id }}</td>
            <td class="p-3 sm:p-4">{{ item.name }}</td>
            <td class="p-3 sm:p-4 hidden md:table-cell">
              {{ new Date(item.created_date).toLocaleDateString("uz-UZ") }}
            </td>
            <td class="p-3 sm:p-4 hidden lg:table-cell">
              {{ item.link }}
            </td>
            <td class="p-3 sm:p-4 flex space-x-2">
              <!-- View/Edit Icon (Eye) -->
              <button
                @click="openModal(item)"
                class="text-blue-400 hover:text-blue-300"
                aria-label="Ko‘rish va tahrirlash"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
                  />
                </svg>
              </button>
              <!-- Delete Icon (Trash) -->
              <button
                @click="deleteAd(item.id)"
                class="text-red-400 hover:text-red-300"
                aria-label="O‘chirish"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- No Ads Message -->
    <div
      v-if="!addData?.length && !addError && !addLoading"
      class="text-center text-gray-400 mt-8"
      data-aos="fade-up"
    >
      Hozircha reklamalar mavjud emas
    </div>

    <!-- Edit Modal -->
    <div
      v-if="modalVisible"
      class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50"
      @click="modalVisible = false"
    >
      <div
        class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full max-h-[80vh] overflow-y-auto"
        @click.stop
        data-aos="zoom-in"
      >
        <h3 class="text-lg font-semibold text-white mb-4">
          Tahrirlash
        </h3>
        <form @submit.prevent="saveChanges" class="space-y-4">
          <div>
            <label
              for="edit-name"
              class="block text-sm font-medium text-gray-300"
              >Sarlavha</label
            >
            <input
              v-model="editedItem.name"
              type="text"
              id="edit-name"
              required
              class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label
              for="edit-name"
              class="block text-sm font-medium text-gray-300"
              >Havola</label
            >
            <input
              v-model="editedItem.link"
              type="text"
              id="edit-name"
              required
              class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div class="flex justify-end space-x-4">
            <button
              type="button"
              @click="modalVisible = false"
              class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-500"
            >
              Saqlash
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Add Modal -->
    <div
      v-if="addModalVisible"
      class="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50"
      @click="addModalVisible = false"
    >
      <div
        class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full max-h-[80vh] overflow-y-auto"
        @click.stop
        data-aos="zoom-in"
      >
        <h3 class="text-lg font-semibold text-white mb-4">
           Qo‘shish
        </h3>
        <form @submit.prevent="createNewAd" class="space-y-4">
          <div>
            <label
              for="new-name"
              class="block text-sm font-medium text-gray-300"
              >Sarlavha</label
            >
            <input
              v-model="newItem.name"
              type="text"
              id="new-name"
              required
              class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label
              for="new-image"
              class="block text-sm font-medium text-gray-300"
              >Rasm</label
            >
            <input
              type="file"
              id="new-image"
              accept="image/*"
              required
              @change="handleImageChange"
              class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div>
            <label
              for="new-link"
              class="block text-sm font-medium text-gray-300"
              >Havola</label
            >
            <input
              v-model="newItem.link"
              type="url"
              id="new-link"
              class="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div class="flex justify-end space-x-4">
            <button
              type="button"
              @click="addModalVisible = false"
              class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              :disabled="addLoading"
              class="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-500 disabled:opacity-50"
            >
              {{ addLoading ? "Yuklanmoqda..." : "Qo‘shish" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
table th,
table td {
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

/* Custom scrollbar */
::-webkit-scrollbar {
  height: 8px;
  width: 8px;
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

/* File input styling */
input[type="file"] {
  display: block;
  width: 100%;
}
input[type="file"]::-webkit-file-upload-button {
  background: #4b5563;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
}
input[type="file"]::-webkit-file-upload-button:hover {
  background: #6b7280;
}
</style>
