import { ref } from 'vue'
import { BASE_URL } from './useApi'

export const useSubscribe = () => {
  const subscribeData = useState('subscribe', () => null)
  const error = useState('subscribeError', () => null)
  const loading = useState('subscribeLoading', () => false)

  const fetchSubscribes = async () => {

    loading.value = true
    try {
      const res = await fetch(`${BASE_URL}subscription/`)

      if (!res.ok) {
        throw new Error('Ma’lumot yuklanmadi')
      }

      const data = await res.json()
      subscribeData.value = data
    } catch (err) {
      error.value = err.message || 'Xatolik yuz berdi'
    } finally {
      loading.value = false
    }
  }

  return { subscribeData, error, loading, fetchSubscribes }
}