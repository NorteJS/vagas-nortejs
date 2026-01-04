import JobItem from "@/components/cards/job-item";
import { JobItemResponse } from "@/lib/@types/job-item-types";
import { baseUrl } from "@/lib/base-url";
async function fetchJobs() {
  const res = await fetch(`${baseUrl()}/api/job-board/jobs`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }
  const jobs: JobItemResponse = await res.json();
  return jobs.data
}

export default async function Vagas() {
  const jobs = await fetchJobs();

  return (
    <main className="py-10">
      <h2 className="font-display mb-12 text-2xl font-bold">Todas as Vagas</h2>
      <div className="space-y-8">
        {jobs.map((job) => {
          return <JobItem key={job.id} job={job} />
        })}
      </div>
    </main>
  );
}