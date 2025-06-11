import { ref } from 'vue';
import { useApi } from './useApi';

export function useAdvertisements() {
  const { fetch } = useApi();
  const error = ref(null);

  const getAllAdvertisements = async () => {
    const { data, error: fetchError } = await fetch('advertisements/');
    if (fetchError) {
      error.value = 'Reklamalarni yuklashda xatolik yuz berdi';
      return [];
    }
    return data || [];
  };

  const addAdvertisement = async (adData) => {
    const { error: postError } = await fetch('advertisements/', {
      method: 'POST',
      body: JSON.stringify(adData),
    });
    if (postError) {
      error.value = 'Reklama qo‘shishda xatolik yuz berdi';
      return false;
    }
    return true;
  };

  const updateAdvertisement = async (id, adData) => {
    const { error: putError } = await fetch(`advertisements/${id}/`, {
      method: 'PUT',
      body: JSON.stringify(adData),
    });
    if (putError) {
      error.value = 'Reklamani tahrirlashda xatolik yuz berdi';
      return false;
    }
    return true;
  };

  const deleteAdvertisement = async (id) => {
    const { error: deleteError } = await fetch(`advertisements/${id}/`, {
      method: 'DELETE',
    });
    if (deleteError) {
      error.value = 'Reklamani o‘chirishda xatolik yuz berdi';
      return false;
    }
    return true;
  };

  return {
    error,
    getAllAdvertisements,
    addAdvertisement,
    updateAdvertisement,
    deleteAdvertisement,
  };
}