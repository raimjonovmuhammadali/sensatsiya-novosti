import { ref } from 'vue'
import { BASE_URL } from './useApi'

export const useCategoires = () => {
  const categoiresData = useState('category', () => null)
  const error = useState('categoiresError', () => null)
  const loading = useState('categoiresLoading', () => false)

  const fetchCategoires = async () => {

    loading.value = true
    try {
      const res = await fetch(`${BASE_URL}categorys/`)

      if (!res.ok) {
        throw new Error('Ma’lumot yuklanmadi')
      }

      const data = await res.json()
      categoiresData.value = data
    } catch (err) {
      error.value = err.message || 'Xatolik yuz berdi'
    } finally {
      loading.value = false
    }
  }

  return { categoiresData, error, loading, fetchCategoires }
}