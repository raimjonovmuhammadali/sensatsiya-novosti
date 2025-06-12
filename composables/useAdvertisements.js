import { ref } from 'vue'
import { BASE_URL } from './useApi'

export const useadd = () => {
  const addData = useState('add', () => null)
  const error = useState('addError', () => null)
  const loading = useState('addLoading', () => false)

  const fetchadd = async () => {

    loading.value = true
    try {
      const res = await fetch(`${BASE_URL}advertisements/`)

      if (!res.ok) {
        throw new Error('Ma’lumot yuklanmadi')
      }

      const data = await res.json()
      addData.value = data
    } catch (err) {
      error.value = err.message || 'Xatolik yuz berdi'
    } finally {
      loading.value = false
    }
  }

  return { addData, error, loading, fetchadd }
}