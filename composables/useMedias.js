// import { ref } from 'vue';
// import { useApi } from './useApi';

// export function useMedias() {
//   const { fetch } = useApi();
//   const error = ref(null);

//   const getAllMedias = async () => {
//     const { data, error: fetchError } = await fetch('medias/');
//     if (fetchError) {
//       error.value = 'Ijtimoiy tarmoqlarni yuklashda xatolik yuz berdi';
//       return [];
//     }
//     return data || [];
//   };

//   const addMedia = async (mediaData) => {
//     const { error: postError } = await fetch('medias/', {
//       method: 'POST',
//       body: JSON.stringify(mediaData),
//     });
//     if (postError) {
//       error.value = 'Ijtimoiy tarmoq qo‘shishda xatolik yuz berdi';
//       return false;
//     }
//     return true;
//   };

//   const updateMedia = async (id, mediaData) => {
//     const { error: putError } = await fetch(`medias/${id}/`, {
//       method: 'PUT',
//       body: JSON.stringify(mediaData),
//     });
//     if (putError) {
//       error.value = 'Ijtimoiy tarmoqni tahrirlashda xatolik yuz berdi';
//       return false;
//     }
//     return true;
//   };

//   const deleteMedia = async (id) => {
//     const { error: deleteError } = await fetch(`medias/${id}/`, {
//       method: 'DELETE',
//     });
//     if (deleteError) {
//       error.value = 'Ijtimoiy tarmoqni o‘chirishda xatolik yuz berdi';
//       return false;
//     }
//     return true;
//   };

//   return {
//     error,
//     getAllMedias,
//     addMedia,
//     updateMedia,
//     deleteMedia,
//   };
// }