interface Rotas {
  nome: string;
  path: string;
}

export default () => {
  const rotas: Rotas[] = [
    { nome: "Home", path: "/" },
    { nome: "Videos", path: "/videos" },
    { nome: "Adicionar Videos", path: "/videos/adicionar" },
    { nome: "Favoritos", path: "/videos/favoritos" },
  ];
  return rotas;
};
