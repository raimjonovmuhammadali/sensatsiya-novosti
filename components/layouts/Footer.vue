<template>
  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-10">
        <div>
          <div class="text-3xl font-extrabold text-blue-400 mb-4">
            Сенсация Новости
          </div>
          <p class="text-gray-300 text-sm mb-4">
            Your trusted source for breaking news, analysis, and in-depth
            reporting from around the world.
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-gray-300 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="text-gray-300 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M22 12h-4l-3 9L9 3l-3 9H2"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="text-gray-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="text-gray-300 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.199 24C19.199 13.467 10.467 4.8 0 4.8V9.6c6.656 0 12 5.344 12 12v1.44c0-1.264.96-2.4 2.313-2.4 1.353 0 2.313 1.136 2.313 2.4v.24c0-4.8 3.977-8.88 9.374-8.88.977 0 1.92.144 2.834.4V3.6C28.834 2.977 27.977 2.4 26.834 2.4c-3.75 0-6.984 2.977-8.635 6.44v-.24c0-1.263-.96-2.4-2.313-2.4-1.353 0-2.313 1.137-2.313 2.4v8.88c0-1.264-.96-2.4-2.313-2.4-1.353 0-2.313 1.136-2.313 2.4 0 6.64 5.344 12 12 12h7.199Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-4">Sahifalar</h4>
          <ul class="space-y-3 text-sm text-gray-300">
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >Politics</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >World News</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >Business</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >Technology</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors">Sports</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-4">Yangiliklar</h4>
          <ul class="space-y-3 text-sm text-gray-300">
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >About Us</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors">Contact</a>
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors">Careers</a>
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-white transition-colors"
                >Terms of Service</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-lg mb-4">Obuna bo'lish</h4>
          <p class="text-gray-300 text-sm mb-4">
            Yangiliklardan habardor bo'lib turing!
          </p>
          <div class="space-y-3">
            <input
              v-model="footerEmail"
              placeholder="Emailingizni ko'ring..."
              class="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              aria-label="Email for newsletter subscription"
            />
            <button
              class="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
            >
              Obuna bo'lish
            </button>
          </div>
        </div>
      </div>

      <div
        class="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-300"
      >
        <p>
          © 2025 Сенсация Новости. Barcha huquqlar himoyalangan!
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup>
const footerEmail = ref('')
</script>