import prisma from "@/lib/db";
import { JobParams } from "../schema-jobs";

export async function GET(
  { params }: { params: JobParams }
) {
  const jobId = Number(params.id);

  // SELECT * FROM jobs WHERE id = jobId AND published = true
  const job = await prisma.job.findUnique({
    where: { id: jobId },
  });

  if (!job) {
    return new Response(JSON.stringify({ message: 'Job not found' }), { status: 404 });
  }

  return new Response(JSON.stringify({ data: job }), { status: 200 });
}

export async function DELETE(
  { params }: { params: JobParams }
) {
  const jobId = Number(params.id);

  const existing = await prisma.job.findUnique({ where: { id: jobId } });
  if (!existing) {
    return new Response(JSON.stringify({ message: 'Job not found' }), { status: 404 });
  }

  await prisma.job.delete({ where: { id: jobId } });
  return new Response(null, { status: 204 });
}