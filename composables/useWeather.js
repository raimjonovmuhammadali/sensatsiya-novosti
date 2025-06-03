import { ref } from 'vue';

export function useWeather() {
  const weatherInfo = ref('Ob-havo yuklanmoqda...');

  async function fetchWeather() {
    const apiKey = '3527983cc8324ac0a3362233253005';
    const city = 'Tashkent';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.location && data.current) {
        weatherInfo.value = `${data.location.name}, ${Math.round(data.current.temp_c)}°C`;
      } else {
        weatherInfo.value = 'Ob-havo ma’lumotlari mavjud emas';
      }
    } catch (error) {
      console.error('Ob-havo olishda xato:', error);
      weatherInfo.value = 'Ob-havo ma’lumotlari mavjud emas';
    }
  }

  return {
    weatherInfo,
    fetchWeather,
  };
}