import { Video } from "~/interfaces/video";

export default defineEventHandler(() => {
  const videos: Video[] = [
    {
      id: 1,
      descrição: "01 - Introdução e Instalação",
      url: "https://www.youtube.com/embed/WahQ5AoXpuU?si=F2FrXqWjB1dtJvGw",
      data_postagem: "2023-10-15",
    },
    {
      id: 2,
      descrição: "02 - Configuração",
      url: "https://www.youtube.com/embed/JbbB84bnPog?si=mKtXqUkTKCuNHqjJ",
      data_postagem: "2023-10-20",
    },
    {
      id: 3,
      descrição: "03 - Pages",
      url: "https://www.youtube.com/embed/S99sVicr8NI?si=jR8Y0QLVVLoQA7mX",
      data_postagem: "2023-10-10",
    },
    {
      id: 4,
      descrição: "04 - Components",
      url: "https://www.youtube.com/embed/cCHWanw49l8?si=i7569DvWVVtto-Ja",
      data_postagem: "2023-10-05",
    },
  ];
  return {
    videos: videos,
  };
});
