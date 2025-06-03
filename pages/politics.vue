<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Component -->
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
          </div>
        </div>
        <nav class="hidden md:block border-t border-gray-200">
          <div class="flex space-x-8 py-4">
            <a href="/" class="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Home</a>
            <a href="/politics" class="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-4">Politics</a>
            <a href="/world" class="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">World</a>
            <a href="/business" class="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Business</a>
            <a href="/technology" class="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Technology</a>
            <a href="/sports" class="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Sports</a>
            <a href="/entertainment" class="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Entertainment</a>
            <a href="/health" class="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">Health</a>
          </div>
        </nav>
      </div>
    </header>

    <!-- Politics Page Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <!-- Page Header -->
      <div class="mb-10">
        <h1 class="text-5xl font-extrabold text-gray-900 mb-4 flex items-center">
          <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          Politics
        </h1>
        <p class="text-xl text-gray-600">Latest political news, analysis, and government updates</p>
      </div>

      <div class="grid lg:grid-cols-4 gap-10">
        <!-- Main Content -->
        <div class="lg:col-span-3">
          <!-- Featured Political Story -->
          <section class="mb-10">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1576092768241-dec904eadef3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Senate Passes Historic Climate Legislation"
                class="w-full h-72 object-cover"
              />
              <div class="p-6">
                <span class="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
                  <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  BREAKING
                </span>
                <h2 class="text-3xl font-bold mb-4">Senate Passes Historic Climate Legislation with Bipartisan Support</h2>
                <p class="text-gray-600 text-lg mb-4">In a rare display of bipartisan cooperation, the Senate voted 68-32 to pass comprehensive climate legislation that includes $500 billion in clean energy investments and new emissions standards.</p>
                <div class="flex items-center justify-between text-sm text-gray-600">
                  <div class="flex items-center space-x-4">
                    <span>By Sarah Mitchell</span>
                    <span>•</span>
                    <span>2 hours ago</span>
                    <span>•</span>
                    <span>8 min read</span>
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

          <!-- Political News Grid -->
          <section class="mb-10">
            <h3 class="text-3xl font-bold mb-6">Latest Political News</h3>
            <div class="grid md:grid-cols-2 gap-8">
              <div v-for="article in politicalNews" :key="article.id" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img :src="article.image" :alt="article.title" class="w-full h-52 object-cover" />
                <div class="p-6">
                  <span :class="article.urgent ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'" class="px-2 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                    {{ article.category }}
                  </span>
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

          <!-- Election Coverage -->
          <section class="mb-10">
            <h3 class="text-3xl font-bold mb-6 flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              Election 2024
            </h3>
            <div class="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl p-8">
              <div class="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 class="text-xl font-bold mb-4">Primary Results</h4>
                  <div class="space-y-4">
                    <div class="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                      <span class="font-medium">John Smith (D)</span>
                      <span class="text-blue-600 font-bold">45.2%</span>
                    </div>
                    <div class="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                      <span class="font-medium">Mike Johnson (R)</span>
                      <span class="text-red-600 font-bold">42.8%</span>
                    </div>
                    <div class="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                      <span class="font-medium">Sarah Davis (I)</span>
                      <span class="text-green-600 font-bold">12.0%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 class="text-xl font-bold mb-4">Key Battleground States</h4>
                  <div class="space-y-3">
                    <div class="flex justify-between p-3 bg-white rounded-lg shadow-sm">
                      <span>Pennsylvania</span>
                      <span class="text-purple-600 font-medium">Toss-up</span>
                    </div>
                    <div class="flex justify-between p-3 bg-white rounded-lg shadow-sm">
                      <span>Michigan</span>
                      <span class="text-blue-600 font-medium">Lean D</span>
                    </div>
                    <div class="flex justify-between p-3 bg-white rounded-lg shadow-sm">
                      <span>Arizona</span>
                      <span class="text-red-600 font-medium">Lean R</span>
                    </div>
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

          <!-- Political Calendar -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h4 class="text-xl font-bold mb-4 flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Political Calendar
            </h4>
            <div class="space-y-4">
              <div class="border-l-4 border-blue-500 pl-4 hover:bg-gray-50 transition-colors rounded">
                <div class="font-medium text-sm">State of the Union</div>
                <div class="text-xs text-gray-600">March 15, 2025</div>
              </div>
              <div class="border-l-4 border-red-500 pl-4 hover:bg-gray-50 transition-colors rounded">
                <div class="font-medium text-sm">Primary Elections</div>
                <div class="text-xs text-gray-600">March 19, 2025</div>
              </div>
              <div class="border-l-4 border-green-500 pl-4 hover:bg-gray-50 transition-colors rounded">
                <div class="font-medium text-sm">Budget Deadline</div>
                <div class="text-xs text-gray-600">March 22, 2025</div>
              </div>
            </div>
          </div>

          <!-- Poll Tracker -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h4 class="text-xl font-bold mb-4 flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              Latest Polls
            </h4>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium">Presidential Approval</span>
                  <span class="text-sm font-medium">52%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-blue-600 h-3 rounded-full transition-all duration-500" style="width: 52%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium">Congress Approval</span>
                  <span class="text-sm font-medium">28%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                  <div class="bg-red-600 h-3 rounded-full transition-all duration-500" style="width: 28%"></div>
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

const politicalNews = ref([
  {
    id: 1,
    title: "House Committee Approves Infrastructure Bill Amendment",
    summary: "The House Transportation Committee voted 24-18 to approve a $50 billion amendment to the infrastructure bill, focusing on rural broadband expansion.",
    category: "Congress",
    author: "David Chen",
    time: "3 hours ago",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    urgent: false
  },
  {
    id: 2,
    title: "Supreme Court to Hear Major Voting Rights Case",
    summary: "The Supreme Court announced it will hear arguments in a landmark voting rights case that could reshape election laws nationwide.",
    category: "Supreme Court",
    author: "Maria Rodriguez",
    time: "5 hours ago",
    image: "https://images.unsplash.com/photo-1583521263902-8be492927972?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    urgent: true
  },
  {
    id: 3,
    title: "Governor Signs Executive Order on Climate Action",
    summary: "California Governor signs sweeping executive order mandating carbon neutrality by 2035, setting new national precedent.",
    category: "State Politics",
    author: "Jennifer Kim",
    time: "6 hours ago",
    image: "https://images.unsplash.com/photo-1508514177221-188b645fd5af?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    urgent: false
  },
  {
    id: 4,
    title: "Bipartisan Group Proposes Healthcare Reform",
    summary: "A bipartisan group of senators unveiled a comprehensive healthcare reform proposal aimed at reducing prescription drug costs.",
    category: "Healthcare",
    author: "Robert Taylor",
    time: "8 hours ago",
    image: "https://images.unsplash.com/photo-1576092768241-dec904eadef3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
    urgent: false
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