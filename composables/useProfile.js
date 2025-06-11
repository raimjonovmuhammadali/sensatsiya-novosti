import { ref } from 'vue'
import { BASE_URL } from './useApi'

export const useProfile = () => {
  const profileData = useState('profile', () => null)
  const error = useState('profileError', () => null)
  const loading = useState('profileLoading', () => false)

  const fetchProfile = async () => {
    if (!process.client) return

    const token = localStorage.getItem('access_token')
    if (!token) {
      error.value = 'Token topilmadi'
      return
    }

    loading.value = true
    try {
      const res = await fetch(`${BASE_URL}profile/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!res.ok) {
        throw new Error('Ma’lumot yuklanmadi')
      }

      const data = await res.json()
      profileData.value = data
    } catch (err) {
      error.value = err.message || 'Xatolik yuz berdi'
    } finally {
      loading.value = false
    }
  }

  return { profileData, error, loading, fetchProfile }
}