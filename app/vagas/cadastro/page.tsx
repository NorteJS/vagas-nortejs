

// app/vagas/cadastro/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormItem from "@/components/form-items";
import { createJob } from "@/lib/actions/vagas";

export default function Cadastro() {
  return (
    <main>
      <h2 className="font-maven mb-4 text-2xl font-bold">Cadastrar Vaga</h2>
      <Card className="mx-auto w-full max-w-6xl py-8">
        <form action={createJob}>
          <CardContent className="space-y-6">
            <FormItem
              htmlFor="title"
              name="Título da Vaga"
              description="Este será o título da vaga que será exibido na busca. Máximo de 30 caracteres"
            >
              <Input
                className="border-gray-400"
                id="title"
                name="title"
                maxLength={30}
                minLength={3}
                required
              />
            </FormItem>

            <FormItem
              htmlFor="company"
              name="Nome da Empresa"
              description="Nome da empresa que será exibido na busca. Não é necessário colocar a razão social."
            >
              <Input
                className="border-gray-400 focus:border-gray-500"
                id="company"
                name="company"
                minLength={2}
                required
              />
            </FormItem>

            <FormItem
              htmlFor="company_website"
              name="Website da Empresa"
              description="Website - se a vaga trouxer um site próprio, coloque aqui."
            >
              <Input
                className="border-gray-400 focus:border-gray-500"
                id="company_website"
                name="company_website"
                type="url"
                required
              />
            </FormItem>

            <FormItem
              htmlFor="city"
              name="Cidade"
              description="Coloque a cidade em que a vaga é oferecida. Se for remoto, preencha com 'remoto'"
            >
              <Input
                className="border-gray-400 focus:border-gray-500"
                id="city"
                name="city"
                required
              />
            </FormItem>

            <FormItem
              htmlFor="state"
              name="Estado"
              description="Informe a UF (ex: PA, AM). Se for remoto, use 'remoto'"
            >
              <Input
                className="border-gray-400 focus:border-gray-500"
                id="state"
                name="state"
                required
              />
            </FormItem>

            <FormItem
              htmlFor="schedule"
              name="Período"
              description="Escolha entre meio-período ou período integral"
            >
              <select
                className="h-10 w-full border border-gray-400 focus:border-gray-500 bg-transparent px-3 text-sm focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:opacity-50 rounded-md"
                id="schedule"
                name="schedule"
                required
              >
                <option value="full-time">Período Integral</option>
                <option value="part-time">Meio-Período</option>
                <option value="contract">Contrato</option>
                <option value="internship">Estágio</option>
              </select>
            </FormItem>

            <FormItem htmlFor="salary" name="Salário" description="Salário mensal">
              <Input
                className="border-gray-400 focus:border-gray-500"
                id="salary"
                name="salary"
                type="number"
                min={0}
                step={1}
                required
              />
            </FormItem>

            <FormItem
              htmlFor="number_of_positions"
              name="Quantidade de Vagas"
              description="Quantas vagas abertas existem para esta posição"
            >
              <Input
                className="border-gray-400 focus:border-gray-500"
                id="number_of_positions"
                name="number_of_positions"
              />
            </FormItem>

            <FormItem
              htmlFor="description"
              name="Descrição da Vaga"
              description="Coloque em detalhes as principais tarefas esperadas nesta vaga."
            >
              <Textarea
                id="description"
                name="description"
                className="min-h-[100px] border-gray-400 focus:border-gray-500"
                minLength={10}
                required
              />
            </FormItem>

            <FormItem
              htmlFor="requirements"
              name="Requisitos"
              description="O que você espera do seu candidato? Detalhe aqui."
              isHiddenSeparator={true}
            >
              <Textarea
                id="requirements"
                name="requirements"
                className="min-h-[100px] border-gray-400 focus:border-gray-500"
                required
              />
            </FormItem>
          </CardContent>

          <CardFooter>
            <Button
              type="submit"
              className="ml-auto w-full px-10 mt-4 md:w-auto"
            >
              Salvar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}