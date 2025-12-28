import { PrismaClient, Prisma } from '@/prisma/generated/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
let prismaJob: Prisma.JobCreateInput;

const adapter = new PrismaMariaDb({
  connectionString: process.env.DATABASE_URL as string || '',
} as any)

const prismaClientSingleton = () => {
  return new PrismaClient({
    adapter,
    // log: ['query', 'info']
  });
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global;
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
export type { Prisma };
