import aboutImage from "@/public/background/about.svg"
import Image from "next/image"

export default function Sobre() {
  return (
    <section className="flex max-lg:flex-col max-xl:px-6 max-md:px-4 items-center justify-between gap-4">
      <div>
        <h1 className="font-display mb-16 lg:max-w-3xl max-lg:text-4xl text-5xl font-black">
          <span className="text-blue-400 lg:text-nowrap">Encontre a vaga certa</span>
          <br />
          <span>para você!</span>
        </h1>
        <div className="space-y-6 text-lg text-gray-700">
          <p className="lg:max-w-xl max-lg:text-md">
            O VagasNorteJs é a plataforma ideal para profissionais de diversas
            áreas que buscam novas oportunidades e empresas que precisam de
            talentos qualificados.
          </p>
          <p className="lg:max-w-xl">
            Com uma interface intuitiva e fácil de usar, nosso board de vagas
            conecta profissionais de diferentes setores com as melhores empresas
            do mercado.
          </p>
          <p className="lg:max-w-xl">
            Seja você um candidato em busca de seu próximo desafio ou uma
            empresa em busca de novos talentos, o VagasNorteJs facilita a
            conexão entre candidatos e empregadores, promovendo o crescimento e
            a inovação em diversos setores.
          </p>
        </div>
      </div>
      <Image
        src={aboutImage}
        alt="Ilustração de pessoas"
        className="lg:w-1/2 xl:w-full"
      />
    </section>
  );
}