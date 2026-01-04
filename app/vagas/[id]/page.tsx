import { baseUrl } from "@/lib/base-url"
import { notFound } from "next/navigation"

async function fetchJob(jobId: string) {
  const url = new URL(`/api/job-board/jobs/${jobId}`, baseUrl()).toString()
  const res = await fetch(url)
  if (!res.ok) return undefined
  const data = await res.json()
  return data.data
}

export default async function JobItem({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const jobId = (await params).id
  const job = await fetchJob(jobId)

  if (!job) {
    notFound()
  }
  return (
    <div>
      <pre>{JSON.stringify(job, null, 2)}</pre>
    </div>
  )
}