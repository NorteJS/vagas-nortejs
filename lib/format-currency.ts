export function formatCurrency(number: number | undefined): string {
  if(!number) {
    return "R$ 0,00"
  }
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    number,
  )
}
