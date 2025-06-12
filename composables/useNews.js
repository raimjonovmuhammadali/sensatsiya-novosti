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

  // Yangilikni o‘chirish
  const deleteNews = async (id) => {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(`${BASE_URL}news/${id}/`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
      if (!res.ok) throw new Error('Yangilik o‘chirilmadi')
    } catch (err) {
      error.value = err.message || 'O‘chirishda xatolik yuz berdi'
    } finally {
      loading.value = false
    }
  }

  // Yangilikni yangilash
  const updateNews = async (id, data) => {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(`${BASE_URL}news/${id}/`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Yangilik yangilanmadi')
      newsData.value = await res.json()
    } catch (err) {
      error.value = err.message || 'Yangilashda xatolik yuz berdi'
    } finally {
      loading.value = false
    }
  }

  return { newsData, allNews, error, loading, fetchNewsById, fetchAllNews, deleteNews, updateNews }
}