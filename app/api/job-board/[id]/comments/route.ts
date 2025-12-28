import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/db';
// /api/job-board/[id]/comments/route.ts
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const jobId = Number(params.id);

  const comments = await prisma.comment.findMany({
    where: { jobId },
    orderBy: { created_at: 'desc' },
  });

  return NextResponse.json(comments);
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const jobId = Number(params.id);
  const { author, content } = await request.json();

  const newComment = await prisma.comment.create({
    data: {
      jobId,
      author,
      content,
    },
  });

  return NextResponse.json(newComment, { status: 201 });
}

