export default (data: string, tipo: string = "") => {
  const dataFormatada = new Date(data);
  switch (tipo) {
    case "dd/mm/yyyy hh:mm":
      return dataFormatada.toLocaleString("pt-BR");
    case "hh:mm":
      return dataFormatada.toLocaleTimeString("pt-BR");
    default:
      return dataFormatada.toLocaleDateString("pt-BR");
  }
};
