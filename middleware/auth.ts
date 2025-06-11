export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return; // Server tomonda ishlamasin

  try {
    const key = process.client ? localStorage.getItem("access_token") : null;

    // Tizimga kirmagan foydalanuvchilarni `/auth` sahifasiga yo‘naltirish
    if (!key && to.path !== "/panel/") {
      return navigateTo("/panel/login");
    }
  } catch (error) {
    console.error("Middleware xatosi:", error);
    return navigateTo("/");
  }
});
