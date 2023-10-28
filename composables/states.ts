import { Video } from "@/interfaces/video";

export const useFavoritos = () => useState<Video[]>("favoritos", () => []);
