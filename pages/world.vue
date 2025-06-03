<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-gray-800 text-white py-3">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center text-sm">
          <div class="flex items-center space-x-4">
            <span class="flex items-center">
              <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012-2v-1a2 2 0 012-2h2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Tuesday, May 27, 2025
            </span>
            <span class="hidden md:block">|</span>
            <span class="hidden md:block">New York, NY 72°F</span>
          </div>
          <div class="flex items-center space-x-4">
            <a href="#" class="hover:text-blue-300 transition-colors">Subscribe</a>
            <a href="#" class="hover:text-blue-300 transition-colors">Newsletter</a>
            <a href="#" class="hover:text-blue-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </div>

    <header class="bg-white shadow-lg border-b-2 border-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-5">
          <div class="flex items-center">
            <a href="/" class="text-4xl font-extrabold text-blue-600 tracking-tight">NewsToday</a>
            <div class="ml-3 text-sm text-gray-600 hidden md:block font-medium">Your Trusted News Source</div>
          </div>
          <div class="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div class="relative w-full">
              <input
                type="text"
                placeholder="Search news..."
                class="pl-10 pr-4 py-2.5 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                aria-label="Search news articles"
              />
              <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button class="hidden md:flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              Sign In
            </button>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all">
              Subscribe
            </button>
            <!-- Mobile Menu Button -->
            <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2" aria-label="Toggle menu">
              <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- Navigation Menu -->
        <nav class="hidden md:block border-t border-gray-200">
          <div class="flex space-x-8 py-4">
            <a href="/" class="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Home</a>
            <a href="/politics" class="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Politics</a>
            <a href="/world" class="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-4">World</a>
            <a href="/business" class="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Business</a>
            <a href="/technology" class="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Technology</a>
            <a href="/sports" class="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Sports</a>
            <a href="/entertainment" class="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Entertainment</a>
            <a href="/health" class="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Health</a>
          </div>
        </nav>
        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" class="md:hidden border-t border-gray-200 py-4">
          <div class="space-y-2">
            <a
              v-for="(item, index) in mainMenuItems"
              :key="index"
              :href="item.href"
              class="block px-4 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-100 rounded-lg"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- World News Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="mb-10">
        <h1 class="text-5xl font-extrabold text-gray-900 mb-4 flex items-center">
          <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012-2v-1a2 2 0 012-2h2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          World News
        </h1>
        <p class="text-xl text-gray-600">International news, global affairs, and worldwide developments</p>
      </div>

      <div class="grid lg:grid-cols-4 gap-10">
        <div class="lg:col-span-3">
          <!-- Breaking International News -->
          <section class="mb-10">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf23e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="European Union Trade Agreement"
                class="w-full h-72 object-cover"
              />
              <div class="p-6">
                <span class="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
                  <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  BREAKING
                </span>
                <h2 class="text-3xl font-bold mb-4">European Union Announces Historic Trade Agreement with Asia-Pacific Nations</h2>
                <p class="text-gray-600 text-lg mb-4">The European Union has signed a landmark trade agreement with 15 Asia-Pacific countries, creating the world's largest free trade zone and reshaping global commerce.</p>
                <div class="flex items-center justify-between text-sm text-gray-600">
                  <div class="flex items-center space-x-4">
                    <span>By Emma Thompson</span>
                    <span>•</span>
                    <span>1 hour ago</span>
                    <span>•</span>
                    <span>6 min read</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <button class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition-all" aria-label="Share article">
                      <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                      </svg>
                      Share
                    </button>
                    <button class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-all" aria-label="Save article">
                      <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                      </svg>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Regional News Sections -->
          <section class="mb-10">
            <div class="grid md:grid-cols-2 gap-8">
              <!-- Europe -->
              <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-xl font-bold mb-4 flex items-center">
                  <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  Europe
                </h3>
                <div class="space-y-4">
                  <div v-for="article in europeNews" :key="article.id" class="border-b border-gray-100 pb-4 last:border-b-0 hover:bg-gray-50 transition-colors rounded">
                    <h4 class="font-semibold text-sm mb-1 hover:text-blue-600 cursor-pointer">{{ article.title }}</h4>
                    <p class="text-xs text-gray-600 mb-2">{{ article.summary }}</p>
                    <div class="flex justify-between text-xs text-gray-600">
                      <span>{{ article.country }}</span>
                      <span>{{ article.time }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Asia -->
              <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-xl font-bold mb-4 flex items-center">
                  <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012-2v-1a2 2 0 012-2h2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Asia
                </h3>
                <div class="space-y-4">
                  <div v-for="article in asiaNews" :key="article.id" class="border-b border-gray-100 pb-4 last:border-b-0 hover:bg-gray-50 transition-colors rounded">
                    <h4 class="font-semibold text-sm mb-1 hover:text-blue-600 cursor-pointer">{{ article.title }}</h4>
                    <p class="text-xs text-gray-600 mb-2">{{ article.summary }}</p>
                    <div class="flex justify-between text-xs text-gray-600">
                      <span>{{ article.country }}</span>
                      <span>{{ article.time }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Global Crisis Tracker -->
          <section class="mb-10">
            <h3 class="text-3xl font-bold mb-6 flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3a9 9 0 00-9 9 9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9z"></path>
              </svg>
              Global Crisis Tracker
            </h3>
            <div class="grid md:grid-cols-3 gap-6">
              <div v-for="crisis in globalCrises" :key="crisis.id" class="bg-white rounded-xl shadow-lg p-5 border-l-4 hover:shadow-xl transition-shadow duration-300" :class="crisis.severity === 'high' ? 'border-red-500' : crisis.severity === 'medium' ? 'border-yellow-500' : 'border-green-500'">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-bold text-sm">{{ crisis.location }}</h4>
                  <span :class="crisis.severity === 'high' ? 'bg-red-100 text-red-800' : crisis.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'" class="px-2 py-1 rounded-full text-xs font-medium">
                    {{ crisis.severity.toUpperCase() }}
                  </span>
                </div>
                <p class="text-xs text-gray-600 mb-2">{{ crisis.description }}</p>
                <div class="text-xs text-gray-600">Updated {{ crisis.lastUpdate }}</div>
              </div>
            </div>
          </section>

          <!-- World News Grid -->
          <section class="mb-10">
            <h3 class="text-3xl font-bold mb-6">Latest International News</h3>
            <div class="grid md:grid-cols-2 gap-8">
              <div v-for="article in worldNews" :key="article.id" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img :src="article.image" :alt="article.title" class="w-full h-52 object-cover" />
                <div class="p-6">
                  <div class="flex items-center mb-3">
                    <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">{{ article.region }}</span>
                  </div>
                  <h4 class="font-bold text-lg mb-2 line-clamp-2">{{ article.title }}</h4>
                  <p class="text-gray-600 text-sm mb-3 line-clamp-3">{{ article.summary }}</p>
                  <div class="flex items-center justify-between text-xs text-gray-600">
                    <span>{{ article.author }}</span>
                    <span>{{ article.time }}</span>
                  </div>
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

          <!-- World Clock -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h4 class="text-xl font-bold mb-4 flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              World Clock
            </h4>
            <div class="space-y-4">
              <div class="flex justify-between hover:bg-gray-50 transition-colors rounded p-2">
                <span class="text-sm font-medium">New York</span>
                <span class="text-sm font-medium">2:30 PM</span>
              </div>
              <div class="flex justify-between hover:bg-gray-50 transition-colors rounded p-2">
                <span class="text-sm font-medium">London</span>
                <span class="text-sm font-medium">7:30 PM</span>
              </div>
              <div class="flex justify-between hover:bg-gray-50 transition-colors rounded p-2">
                <span class="text-sm font-medium">Tokyo</span>
                <span class="text-sm font-medium">3:30 AM</span>
              </div>
              <div class="flex justify-between hover:bg-gray-50 transition-colors rounded p-2">
                <span class="text-sm font-medium">Sydney</span>
                <span class="text-sm font-medium">5:30 AM</span>
              </div>
            </div>
          </div>

          <!-- Currency Exchange -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h4 class="text-xl font-bold mb-4 flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Currency Exchange
            </h4>
            <div class="space-y-3">
              <div class="flex justify-between text-sm hover:bg-gray-50 transition-colors rounded p-2">
                <span>USD/EUR</span>
                <span class="text-green-600 font-medium">0.85 ↗</span>
              </div>
              <div class="flex justify-between text-sm hover:bg-gray-50 transition-colors rounded p-2">
                <span>USD/GBP</span>
                <span class="text-red-600 font-medium">0.73 ↘</span>
              </div>
              <div class="flex justify-between text-sm hover:bg-gray-50 transition-colors rounded p-2">
                <span>USD/JPY</span>
                <span class="text-green-600 font-medium">110.25 ↗</span>
              </div>
              <div class="flex justify-between text-sm hover:bg-gray-50 transition-colors rounded p-2">
                <span>USD/CNY</span>
                <span class="text-gray-600 font-medium">6.45 →</span>
              </div>
            </div>
          </div>

          <!-- Global Weather -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h4 class="text-xl font-bold mb-4 flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
              </svg>
              Global Weather
            </h4>
            <div class="space-y-4">
              <div class="flex justify-between items-center hover:bg-gray-50 transition-colors rounded p-2">
                <span class="text-sm font-medium">London</span>
                <div class="text-right">
                  <div class="text-sm font-medium">15°C</div>
                  <div class="text-xs text-gray-600">Rainy</div>
                </div>
              </div>
              <div class="flex justify-between items-center hover:bg-gray-50 transition-colors rounded p-2">
                <span class="text-sm font-medium">Paris</span>
                <div class="text-right">
                  <div class="text-sm font-medium">18°C</div>
                  <div class="text-xs text-gray-600">Sunny</div>
                </div>
              </div>
              <div class="flex justify-between items-center hover:bg-gray-50 transition-colors rounded p-2">
                <span class="text-sm font-medium">Tokyo</span>
                <div class="text-right">
                  <div class="text-sm font-medium">22°C</div>
                  <div class="text-xs text-gray-600">Cloudy</div>
                </div>
              </div>
            </div>
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
            <p class="text-gray-300 text-sm mb-4">Your trusted source for breaking news, analysis, and in-depth reporting from around the world.</p>
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
              <li><a href="/politics" class="hover:text-white transition-colors">Politics</a></li>
              <li><a href="/world" class="hover:text-white transition-colors">World News</a></li>
              <li><a href="/business" class="hover:text-white transition-colors">Business</a></li>
              <li><a href="/technology" class="hover:text-white transition-colors">Technology</a></li>
              <li><a href="/sports" class="hover:text-white transition-colors">Sports</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-lg mb-4">Company</h4>
            <ul class="space-y-3 text-sm text-gray-300">
              <li><a href="/about" class="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-lg mb-4">Subscribe</h4>
            <p class="text-gray-300 text-sm mb-4">Get breaking news alerts and daily newsletters.</p>
            <div class="space-y-3">
              <input
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
          <p>© 2025 NewsToday. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const mainMenuItems = [
  { name: "Home", href: "/" },
  { name: "Politics", href: "/politics" },
  { name: "World", href: "/world", active: true },
  { name: "Business", href: "/business" },
  { name: "Technology", href: "/technology" },
  { name: "Sports", href: "/sports" },
  { name: "Entertainment", href: "/entertainment" },
  { name: "Health", href: "/health" },
]

const europeNews = ref([
  {
    id: 1,
    title: "France Announces New Climate Initiatives",
    summary: "President Macron unveils ambitious carbon reduction targets",
    country: "France",
    time: "2h ago"
  },
  {
    id: 2,
    title: "Germany's Economic Growth Exceeds Expectations",
    summary: "Q4 GDP growth reaches 2.1%, beating forecasts",
    country: "Germany",
    time: "4h ago"
  },
  {
    id: 3,
    title: "UK Parliament Debates New Immigration Bill",
    summary: "Controversial legislation faces strong opposition",
    country: "United Kingdom",
    time: "6h ago"
  }
])

const asiaNews = ref([
  {
    id: 1,
    title: "Japan Launches Advanced Space Mission",
    summary: "New satellite to monitor climate change from orbit",
    country: "Japan",
    time: "3h ago"
  },
  {
    id: 2,
    title: "China Reports Strong Manufacturing Growth",
    summary: "Industrial output rises 5.2% year-over-year",
    country: "China",
    time: "5h ago"
  },
  {
    id: 3,
    title: "India's Tech Sector Sees Record Investment",
    summary: "$12 billion in foreign investment this quarter",
    country: "India",
    time: "7h ago"
  }
])

const globalCrises = ref([
  {
    id: 1,
    location: "Eastern Europe",
    description: "Ongoing conflict affecting regional stability",
    severity: "high",
    lastUpdate: "30 min ago"
  },
  {
    id: 2,
    location: "Middle East",
    description: "Humanitarian crisis requires international aid",
    severity: "high",
    lastUpdate: "1h ago"
  },
  {
    id: 3,
    location: "Southeast Asia",
    description: "Natural disaster recovery efforts continue",
    severity: "medium",
    lastUpdate: "2h ago"
  }
])

const worldNews = ref([
  {
    id: 1,
    title: "Antarctic Ice Sheet Shows Concerning Changes",
    summary: "Scientists report accelerated melting in key regions, raising sea level concerns for coastal cities worldwide.",
    region: "Antarctica",
    author: "Dr. Sarah Wilson",
    time: "4 hours ago",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af592f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
  },
  {
    id: 2,
    title: "Brazil Announces Amazon Protection Initiative",
    summary: "New $2 billion program aims to reduce deforestation by 80% over the next five years.",
    region: "South America",
    author: "Carlos Martinez",
    time: "6 hours ago",
    image: "https://images.unsplash.com/photo-1542601098-8fc114e401e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
  },
  {
    id: 3,
    title: "Australia Faces Severe Drought Conditions",
    summary: "Eastern states declare emergency as water reserves reach critically low levels.",
    region: "Oceania",
    author: "Emily Chen",
    time: "8 hours ago",
    image: "https://images.unsplash.com/photo-1504890000668-23dc22e8e495?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
  },
  {
    id: 4,
    title: "Norway Leads Global Renewable Energy Transition",
    summary: "Country achieves 98% renewable electricity generation, setting new world record.",
    region: "Europe",
    author: "Lars Andersen",
    time: "10 hours ago",
    image: "https://images.unsplash.com/photo-1500993853538-c6b99f2b7f93?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
  }
])
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