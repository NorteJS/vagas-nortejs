import type { NextApiRequest, NextApiResponse } from 'next';
import prisma, { Prisma } from '@/lib/db';
import zod from 'zod';

const createJobSchema = zod.object({
  title: zod.string().min(3),
  description: zod.string().min(10),
  company: zod.string().min(2),
  city: zod.string().min(1),
  state: zod.string().min(1),
  company_website: zod.url(),
})


interface JobParams {
  // ?id=1&search=programador
  id: string;
  searchParams: { [key: string]: string | string[] | undefined };
  page: string;
}

// /api/job-board/[id]/route.ts
// /api/jobs/?id=1&search=programador
export async function GET(
  request: NextApiRequest,
  { params }: { params: JobParams }
) {
  const jobId = Number(params.id);

  // SELECT * FROM jobs WHERE id = jobId AND published = true
  const job = await prisma.job.findUnique({
    where: { id: jobId, published: true },
  });

  if (!job) {
    return new Response(JSON.stringify({ message: 'Job not found' }), { status: 404 });
  }

  return new Response(JSON.stringify(job), { status: 200 });
}
export async function POST(
  request: Request extends
    zod.infer<typeof createJobSchema> ?
    zod.infer<typeof createJobSchema> : Request,
) {
  const { title, company, description, city, state, company_website }: zod.infer<typeof createJobSchema> = await request.json();
  let jobs: Prisma.JobCreateInput;
  // if (!title) {
  jobs = {
    title,
    company,
    description,
    city,
    company_website,
    state,
    created_at: new Date(),
    updated_at: new Date(),
  }


  const created = await prisma.job.create({
    data: jobs,
  });

  return new Response(JSON.stringify(created), { status: 201 });
}