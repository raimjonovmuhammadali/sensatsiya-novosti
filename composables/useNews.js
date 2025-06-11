import { ref } from 'vue'
import { BASE_URL } from './useApi'

export const useNews = () => {
  const newsData = useState('news', () => null)         // bitta yangilik
  const allNews = useState('allNews', () => [])         // barcha yangiliklar
  const error = useState('newsError', () => null)
  const loading = useState('newsLoading', () => false)

  // ID bo‘yicha bitta yangilikni olish
  const fetchNewsById = async (id) => {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(`${BASE_URL}news/${id}/`)
      if (!res.ok) throw new Error('Yangilik topilmadi')
      newsData.value = await res.json()
    } catch (err) {
      error.value = err.message || 'Xatolik yuz berdi'
    } finally {
      loading.value = false
    }
  }

  // Barcha yangiliklarni olish (optional category bilan)
  const fetchAllNews = async (category = null) => {
    loading.value = true
    error.value = null
    try {
      let url = `${BASE_URL}news/`
      if (category) {
        url += `?category=${category}`
      }
      const res = await fetch(url)
      if (!res.ok) throw new Error('Yangiliklar yuklanmadi')
      allNews.value = await res.json()
    } catch (err) {
      error.value = err.message || 'Xatolik yuz berdi'
    } finally {
      loading.value = false
    }
  }

  return { newsData, allNews, error, loading, fetchNewsById, fetchAllNews }
}
