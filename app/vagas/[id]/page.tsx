export default async function vagasDetalhePage(
  params: { id: string }
) {
  const { id } = await params
  return (
    <div>
      Rota /vagas/{id}
    </div>
  )
}