import Vue3Toastify, {
  Content,
  ToastContainerOptions,
  toast,
} from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(Vue3Toastify, {
    autoClose: 2000,
  } as ToastContainerOptions);

  toast.error = (message: Content) =>
    toast(message, {
      type: "error",
      position: "bottom-right",
      icon: "❌",
      theme: "dark",
    });

  return {
    provide: {
      toast,
    },
  };
});
