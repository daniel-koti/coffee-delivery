export function formatMoney(value: number) {
  const data = new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
  }).format(value)

  return data
}
