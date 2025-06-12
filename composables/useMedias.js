import { ref } from 'vue'
import { BASE_URL } from './useApi'

export const usesocials = () => {
  const socialsData = useState('socials', () => null)
  const error = useState('socialsError', () => null)
  const loading = useState('socialsLoading', () => false)

  const fetchsocials = async () => {

    loading.value = true
    try {
      const res = await fetch(`${BASE_URL}medias/`)

      if (!res.ok) {
        throw new Error('Ma’lumot yuklanmadi')
      }

      const data = await res.json()
      socialsData.value = data
    } catch (err) {
      error.value = err.message || 'Xatolik yuz berdi'
    } finally {
      loading.value = false
    }
  }

  return { socialsData, error, loading, fetchsocials }
}