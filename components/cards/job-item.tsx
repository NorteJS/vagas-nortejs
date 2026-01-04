import { Button } from "../ui/button";

export default function JobItem() {
  
  return (
    <article className="cursor-pointer flex w-full items-center justify-between border border-t-4 border-black px-6 py-4 transition-colors hover:border-blue-400">
      <h3 className="font-display text-lg font-medium text-gray-700">
        Designer
      </h3>
      <h4 className="font-normal text-gray-500">Google</h4>
      <h4 className="font-normal text-gray-500">São Paulo</h4>
      <h4 className="font-normal text-gray-500">R$8.000,00</h4>
      <Button className="cursor-pointer" variant={"default"}>
        Ver vaga
      </Button>
    </article>
  );
}