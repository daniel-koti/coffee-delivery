export function formatMoney(value: number) {
  const data = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

  return data
}
