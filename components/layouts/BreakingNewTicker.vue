<script setup>
import { ref, onMounted } from 'vue';

// Initialize breakingNews as an empty array
const breakingNews = ref([]);

// Function to fetch exchange rates from the API
const fetchExchangeRates = async () => {
  try {
    const response = await fetch('https://v6.exchangerate-api.com/v6/a8c6aeea5601cb3f2ee4323f/latest/USD');
    const data = await response.json();
    
    if (data.result === 'success') {
      const uzsRate = data.conversion_rates.UZS; // USD to UZS
      const rubRate = data.conversion_rates.RUB; // USD to RUB
      const eurRate = data.conversion_rates.EUR; // USD to EUR
      
      // Calculate RUB and EUR to UZS rates
      const rubToUzs = uzsRate / rubRate; // 1 RUB = (USD to UZS) / (USD to RUB) UZS
      const eurToUzs = uzsRate / eurRate; // 1 EUR = (USD to UZS) / (USD to EUR) UZS

      // Populate breakingNews with formatted exchange rates
      breakingNews.value = [
        `1 USD = ${uzsRate.toFixed(2)} UZS`,
        `1 RUB = ${rubToUzs.toFixed(2)} UZS`,
        `1 EUR = ${eurToUzs.toFixed(2)} UZS`,
      ];
    } else {
      console.error('API request failed:', data);
      breakingNews.value = ['Error fetching exchange rates'];
    }
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    breakingNews.value = ['Error fetching exchange rates'];
  }
};

// Fetch exchange rates when the component is mounted
onMounted(() => {
  fetchExchangeRates();
});
</script>

<template>
  <div class="bg-red-700 text-white py-3 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center">
        <div class="flex animate-marquee space-x-8 hover:pause-marquee">
          <span v-for="(rate, index) in breakingNews" :key="index" class="whitespace-nowrap">
            {{ rate }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

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

.animate-marquee {
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.pause-marquee:hover {
  animation-play-state: paused;
}
</style>