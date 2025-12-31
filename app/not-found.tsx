"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="flex flex-col space-y-4 justify-center items-center h-screen">
      <h1 className='text-3xl'>Não foi possível encontrar a página</h1>
      <p className="text-xl">404</p>
      <div className="flex space-x-4">
        <Button
          onClick={() => router.push('/')}
          className="cursor-pointer"
        >
          Ir para a Home
        </Button>
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="cursor-pointer">Voltar</Button>
      </div>
      <Image src="/background/not-found.svg" alt="Not Found" width={500} height={300} />
    </div>
  )
}