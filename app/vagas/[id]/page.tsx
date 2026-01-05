import JobPostingCard from "@/components/cards/job-posting-card"
import { baseUrl } from "@/lib/base-url"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
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
      {/* <pre>{JSON.stringify(job, null, 2)}</pre> */}
      <div className="mb-6">
        <Link
          href="/vagas"
          className="text-muted-foreground hover:text-foreground inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Link>
      </div>
      <JobPostingCard job={job} />
    </div>
  )
}