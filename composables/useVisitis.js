import { ref } from "vue";
import { BASE_URL } from "./useApi";

export const usevisits = () => {
  const visits = useState("visits", () => []);
  const error = useState("visitsError", () => null);
  const loading = useState("visitsLoading", () => false);

  const fetchvisits = async () => {
    loading.value = true;
    try {
      const res = await fetch(`${BASE_URL}visits/`);
      if (!res.ok) throw new Error("Ma’lumot yuklanmadi");
      const data = await res.json();
      visits.value = data;
    } catch (err) {
      error.value = err.message || "Xatolik yuz berdi";
    } finally {
      loading.value = false;
    }
  };

  const total = computed(() => {
    return Array.isArray(visits.value)
      ? visits.value.reduce((sum, item) => sum + item.count, 0)
      : 0;
  });

  const today = computed(() => {
    const todayStr = new Date().toISOString().split("T")[0];
    return visits.value
      .filter((item) => item.created_date.startsWith(todayStr))
      .reduce((sum, item) => sum + item.count, 0);
  });

  const week = computed(() => {
    const today = new Date();
    const weekAgo = new Date(today);
    weekAgo.setDate(today.getDate() - 6);

    return visits.value
      .filter((item) => {
        const created = new Date(item.created_date);
        return created >= weekAgo && created <= today;
      })
      .reduce((sum, item) => sum + item.count, 0);
  });

  const month = computed(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    return visits.value
      .filter((item) => {
        const date = new Date(item.created_date);
        return (
          date.getMonth() === currentMonth && date.getFullYear() === currentYear
        );
      })
      .reduce((sum, item) => sum + item.count, 0);
  });

  const weeklyBreakdown = computed(() => {
    const result = {};
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (yakshanba) – 6 (shanba)
    const monday = new Date(today);
    monday.setDate(today.getDate() - ((dayOfWeek + 6) % 7)); // Dushanbaga o'tish

    // Haftaning 7 kunini tayyorlab chiqamiz
    for (let i = 0; i < 7; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const key = d.toISOString().split("T")[0];
      result[key] = 0;
    }

    visits.value.forEach((item) => {
      const date = item.created_date.split("T")[0];
      if (result[date] !== undefined) {
        result[date] += item.count;
      }
    });

    return Object.entries(result).map(([date, count]) => ({
      date,
      count,
    }));
  });

  return {
    visits,
    error,
    loading,
    fetchvisits,
    total,
    today,
    week,
    month,
    weeklyBreakdown,
  };
};
