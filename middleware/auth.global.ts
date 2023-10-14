export default defineNuxtRouteMiddleware((to, from) => {
  const isLogged = false;
  if (isLogged) {
    return navigateTo(to.fullPath);
  }
  return navigateTo("/login");
});
