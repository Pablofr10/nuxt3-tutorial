export default defineEventHandler((event) => {
  console.log("Acessando: " + getRequestURL(event));
});
