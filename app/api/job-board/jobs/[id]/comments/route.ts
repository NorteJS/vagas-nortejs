import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/db';

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const jobId = Number(params.id);

  const comments = await prisma.comment.findMany({
    where: { jobId },
    orderBy: { created_at: 'desc' },
  });

  return NextResponse.json({
    data: comments.map((c) => ({
      id: c.id,
      job_id: c.jobId,
      author: c.author,
      content: c.content,
      created_at: c.created_at,
    })),
  });
}
