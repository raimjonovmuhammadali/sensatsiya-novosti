<template>
    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid lg:grid-cols-4 gap-10">
        <!-- Main Content Area -->
        <div class="lg:col-span-3">
          <!-- Hero Section -->
          <section class="mb-10">
            <div class="grid md:grid-cols-2 gap-8">
              <!-- Main Featured Article -->
              <div class="md:col-span-1">
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div class="relative">
                    <img
                      :src="featuredArticles[0].image"
                      :alt="featuredArticles[0].title"
                      class="w-full h-78 object-cover"
                    />
                    <span v-if="featuredArticles[0].isBreaking" class="absolute top-4 left-4 bg-red-700 text-white px-3 py-1 rounded-md text-xs font-bold">
                      <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      BREAKING
                    </span>
                    <div class="absolute bottom-4 left-4 right-4">
                      <span class="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-bold mb-2 inline-block">
                        {{ featuredArticles[0].category }}
                      </span>
                      <h2 class="text-white text-2xl font-bold leading-tight bg-black/60 p-3 rounded-lg">
                        {{ featuredArticles[0].title }}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Secondary Articles -->
              <div class="space-y-6">
                <div
                  v-for="article in featuredArticles.slice(1, 3)"
                  :key="article.id"
                  class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div class="flex">
                    <img
                      :src="article.image"
                      :alt="article.title"
                      class="w-36 h-36 object-cover"
                    />
                    <div class="flex-1 p-5">
                      <span class="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text Xs font-medium mb-2 inline-block">
                        {{ article.category }}
                      </span>
                      <h3 class="font-semibold text-base leading-tight mb-2 line-clamp-2">{{ article.title }}</h3>
                      <div class="flex items-center text-xs text-gray-600">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        {{ article.publishedAt }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Ad Banner -->
          <div class="mb-10">
            <div class="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-10 text-center">
              <p class="text-gray-600 font-semibold">Advertisement</p>
              <p class="text-sm text-gray-400 mt-2">728 x 90 Banner Space</p>
            </div>
          </div>

          <!-- Video Section -->
          <section class="mb-10">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-3xl font-bold text-gray-900 flex items-center">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                Video yangiliklar
              </h2>
              <button class="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all">
                Barchasi →
              </button>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div
                v-for="video in videoNews"
                :key="video.id"
                class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div class="relative">
                  <img
                    :src="video.thumbnail"
                    :alt="video.title"
                    class="w-full h-52 object-cover"
                  />
                  <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center">
                      <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-md">
                    {{ video.duration }}
                  </div>
                  <span v-if="video.isLive" class="absolute top-3 left-3 bg-red-700 text-white px-3 py-1 rounded-md text-xs font-bold animate-pulse">
                    <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 9.143m0 0L17.143 13l6.857 2.286"></path>
                    </svg>
                    LIVE
                  </span>
                  <span v-else-if="video.isBreaking" class="absolute top-3 left-3 bg-red-700 text-white px-3 py-1 rounded-md text-xs font-bold">
                    <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    BREAKING
                  </span>
                </div>
                <div class="p-5">
                  <h3 class="font-semibold text-base mb-2 line-clamp-2">{{ video.title }}</h3>
                  <div class="flex items-center justify-between text-sm text-gray-600">
                    <span class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      {{ video.views }} views
                    </span>
                    <div class="flex items-center space-x-2">
                      <button class="p-1 hover:bg-gray-100 rounded" title="Share" aria-label="Share video">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                        </svg>
                      </button>
                      <button class="p-1 hover:bg-gray-100 rounded" title="Bookmark" aria-label="Bookmark video">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Photo Gallery Section -->
          <section class="mb-10">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-3xl font-bold text-gray-900 flex items-center">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Photo Galleries
              </h2>
              <button class="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all">
                View All Photos →
              </button>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
              <div
                v-for="(gallery, index) in photoGallery"
                :key="index"
                class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div class="relative">
                  <img
                    :src="gallery.thumbnail"
                    :alt="gallery.title"
                    class="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <span class="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-md">
                    {{ gallery.images }} photos
                  </span>
                </div>
                <div class="p-5">
                  <h3 class="font-semibold text-base">{{ gallery.title }}</h3>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1 space-y-8">
          <!-- Ad Space -->
          <div class="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
            <p class="text-gray-600 font-semibold">Advertisement</p>
            <p class="text-sm text-gray-400 mt-2">300 x 250 Banner</p>
          </div>

          <!-- Trending News -->
          <div class="bg-white rounded-xl shadow-lg">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4 flex items-center">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                So'ngi yangiliklar
              </h3>
              <div class="space-y-4">
                <div
                  v-for="(news, index) in sidebarNews"
                  :key="index"
                  class="border-b border-gray-100 pb-4 last:border-b-0"
                >
                  <h4 class="font-medium text-base mb-1 hover:text-blue-600 cursor-pointer transition-colors">{{ news.title }}</h4>
                  <div class="flex items-center justify-between text-xs text-gray-600">
                    <span>{{ news.time }}</span>
                    <span class="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-xs">
                      {{ news.category }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Newsletter Signup -->
          <div class="bg-blue-50 rounded-xl shadow-lg">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Stay Informed</h3>
              <p class="text-sm text-gray-600 mb-4">Get the latest news delivered to your inbox daily.</p>
              <div class="space-y-3">
                <input
                  v-model="email"
                  placeholder="Enter your email"
                  class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  aria-label="Email for newsletter"
                />
                <button class="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-white rounded-xl shadow-lg">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-4">Follow Us</h3>
              <div class="grid grid-cols-2 gap-3">
                <button class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                  Facebook
                </button>
                <button class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                  Twitter
                </button>
                <button class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Instagram
                </button>
                <button class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.199 24C19.199 13.467 10.467 4.8 0 4.8V9.6c6.656 0 12 5.344 12 12v1.44c0-1.264.96-2.4 2.313-2.4 1.353 0 2.313 1.136 2.313 2.4v.24c0-4.8 3.977-8.88 9.374-8.88.977 0 1.92.144 2.834.4V3.6C28.834 2.977 27.977 2.4 26.834 2.4c-3.75 0-6.984 2.977-8.635 6.44v-.24c0-1.263-.96-2.4-2.313-2.4-1.353 0-2.313 1.137-2.313 2.4v8.88c0-1.264-.96-2.4-2.313-2.4-1.353 0-2.313 1.136-2.313 2.4 0 6.64 5.344 12 12 12h7.199Z"></path>
                  </svg>
                  YouTube
                </button>
              </div>
            </div>
          </div>

          <!-- Weather Widget -->
          <div class="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl shadow-lg">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Weather</h3>
              <div class="text-center">
                <div class="text-4xl font-bold">72°F</div>
                <div class="text-sm opacity-90">New York, NY</div>
                <div class="text-sm opacity-75 mt-2">Partly Cloudy</div>
              </div>
            </div>
          </div>

          <!-- Ad Space -->
          <div class="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
            <p class="text-gray-600 font-semibold">Advertisement</p>
            <p class="text-sm text-gray-400 mt-2">300 x 600 Skyscraper</p>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-10">
          <div>
            <div class="text-3xl font-extrabold text-blue-400 mb-4">NewsToday</div>
            <p class="text-gray-300 text-sm mb-4">
              Your trusted source for breaking news, analysis, and in-depth reporting from around the world.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-300 hover:text-white transition-colors" aria-label="YouTube">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.199 24C19.199 13.467 10.467 4.8 0 4.8V9.6c6.656 0 12 5.344 12 12v1.44c0-1.264.96-2.4 2.313-2.4 1.353 0 2.313 1.136 2.313 2.4v.24c0-4.8 3.977-8.88 9.374-8.88.977 0 1.92.144 2.834.4V3.6C28.834 2.977 27.977 2.4 26.834 2.4c-3.75 0-6.984 2.977-8.635 6.44v-.24c0-1.263-.96-2.4-2.313-2.4-1.353 0-2.313 1.137-2.313 2.4v8.88c0-1.264-.96-2.4-2.313-2.4-1.353 0-2.313 1.136-2.313 2.4 0 6.64 5.344 12 12 12h7.199Z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 class="font-semibold text-lg mb-4">Sections</h4>
            <ul class="space-y-3 text-sm text-gray-300">
              <li><a href="#" class="hover:text-white transition-colors">Politics</a></li>
              <li><a href="#" class="hover:text-white transition-colors">World News</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Business</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Sports</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-lg mb-4">Company</h4>
            <ul class="space-y-3 text-sm text-gray-300">
              <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-lg mb-4">Subscribe</h4>
            <p class="text-gray-300 text-sm mb-4">Get breaking news alerts and daily newsletters.</p>
            <div class="space-y-3">
              <input
                v-model="footerEmail"
                placeholder="Your email"
                class="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                aria-label="Email for newsletter subscription"
              />
              <button class="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-700 mt-10 pt-8 text-center text-sm text-gray-300">
          <p>© 2025 NewsToday. All rights reserved. | Powered by Professional News Platform</p>
        </div>
      </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const searchTerm = ref('')
const email = ref('')
const footerEmail = ref('')

const mainMenuItems = [
  { name: "Home", href: "#", active: true },
  { name: "Politics", href: "#" },
  { name: "World", href: "#" },
  { name: "Business", href: "#" },
  { name: "Technology", href: "#" },
  { name: "Sports", href: "#" },
  { name: "Entertainment", href: "#" },
  { name: "Health", href: "#" },
  { name: "Opinion", href: "#" },
  { name: "Weather", href: "#" },
]



const featuredArticles = [
  {
    id: 1,
    title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
    summary: "World leaders from 195 countries have agreed on ambitious targets to reduce carbon emissions by 50% within the wrinkled decade, marking a turning point in the fight against climate change.",
    category: "Politics",
    author: "Sarah Johnson",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    image: "https://avatars.mds.yandex.net/i?id=9a0ea24bfaeed9e190e08c40c9c52596_l-5694541-images-thumbs&n=13",
    isBreaking: true,
    views: "125K",
  },
  {
    id: 2,
    title: "Revolutionary AI Technology Transforms Healthcare Diagnostics",
    summary: "New artificial intelligence system developed by researchers can detect diseases with 99% accuracy, potentially revolutionizing medical diagnosis and treatment.",
    category: "Technology",
    author: "Dr. Michael Chen",
    publishedAt: "4 hours ago",
    readTime: "7 min read",
    image: "https://avatars.mds.yandex.net/i?id=9a0ea24bfaeed9e190e08c40c9c52596_l-5694541-images-thumbs&n=13",
    views: "89K",
  },
  {
    id: 3,
    title: "Olympic Games 2024: Athletes Prepare for Historic Competition",
    summary: "Athletes from around the world are making final preparations for what promises to be the most competitive Olympic Games in history.",
    category: "Sports",
    author: "Emma Rodriguez",
    publishedAt: "6 hours ago",
    readTime: "4 min read",
    image: "https://avatars.mds.yandex.net/i?id=9a0ea24bfaeed9e190e08c40c9c52596_l-5694541-images-thumbs&n=13",
    views: "67K",
  },
]

const videoNews = [
  {
    id: 1,
    title: "Live: President's Address on Economic Recovery",
    duration: "45:32",
    views: "2.1M",
    thumbnail: "https://avatars.mds.yandex.net/i?id=9a0ea24bfaeed9e190e08c40c9c52596_l-5694541-images-thumbs&n=13",
    isLive: true,
  },
  {
    id: 2,
    title: "Breaking: Major Earthquake Hits Pacific Region",
    duration: "12:45",
    views: "890K",
    thumbnail: "https://avatars.mds.yandex.net/i?id=9a0ea24bfaeed9e190e08c40c9c52596_l-5694541-images-thumbs&n=13",
    isBreaking: true,
  },
  {
    id: 3,
    title: "Tech Giants Announce New AI Partnership",
    duration: "8:23",
    views: "456K",
    thumbnail: "https://avatars.mds.yandex.net/i?id=9a0ea24bfaeed9e190e08c40c9c52596_l-5694541-images-thumbs&n=13",
  },
  {
    id: 4,
    title: "Sports Highlights: Championship Finals",
    duration: "15:17",
    views: "723K",
    thumbnail: "https://avatars.mds.yandex.net/i?id=9a0ea24bfaeed9e190e08c40c9c52596_l-5694541-images-thumbs&n=13",
  },
]

const sidebarNews = [
  {
    title: "Stock Market Reaches All-Time High",
    time: "1 hour ago",
    category: "Business",
  },
  {
    title: "New Space Mission Launches Successfully",
    time: "3 hours ago",
    category: "Science",
  },
  {
    title: "Celebrity Wedding Announcement",
    time: "5 hours ago",
    category: "Entertainment",
  },
  {
    title: "Major Tech Company Acquisition",
    time: "7 hours ago",
    category: "Technology",
  },
  {
    title: "International Trade Agreement Signed",
    time: "9 hours ago",
    category: "Politics",
  },
]

const photoGallery = [
  {
    title: "Climate Protests Around the World",
    images: 24,
    thumbnail: "https://avatars.mds.yandex.net/i?id=9a0ea24bfaeed9e190e08c40c9c52596_l-5694541-images-thumbs&n=13",
  },
  {
    title: "Olympic Training Facilities",
    images: 18,
    thumbnail: "https://avatars.mds.yandex.net/i?id=9a0ea24bfaeed9e190e08c40c9c52596_l-5694541-images-thumbs&n=13",
  },
  {
    title: "Tech Conference Highlights",
    images: 32,
    thumbnail: "https://avatars.mds.yandex.net/i?id=9a0ea24bfaeed9e190e08c40c9c52596_l-5694541-images-thumbs&n=13",
  },
]
</script>