const isLogged = false;
export default defineNuxtRouteMiddleware((to, from) => {
  if (isLogged) {
    return navigateTo(to.fullPath);
  }
  return navigateTo("/login");
});
