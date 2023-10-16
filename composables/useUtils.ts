export default function () {
  const diferencaEmDias = ref(0);

  const diasPassados = (data: Date) => {
    const dataAtual = new Date().getTime();
    const diferencaEmMilissegundos = dataAtual - data.getTime();

    diferencaEmDias.value = Math.floor(
      diferencaEmMilissegundos / (1000 * 60 * 60 * 24)
    );
  };

  return { diasPassados, diferencaEmDias };
}
