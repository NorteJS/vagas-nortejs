import { Button } from "@/components/ui/button";
import homeImage from "@/public/background/about.png"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center mt-8">
      <h1 className="font-maven text-5xl font-black font-display w-xl mx-auto">
        Diga adeus às longas buscas por vagas
      </h1>
      <Link href="/vagas">
        <Button className="cursor-pointer mt-12" variant={"default"}>
          Buscar vagas
        </Button>
      </Link>
      <Image
        src={homeImage}
        alt="Ilustração de pessoas"
        className="mx-auto mt-12 w-130"
      />
    </section>
  );
}